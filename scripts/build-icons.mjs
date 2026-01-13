import fs from 'fs-extra'
import { glob } from 'glob'
import path from 'path'
import camelcase from 'camelcase'
import { optimize } from 'svgo'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ICONS_DIR = path.resolve(__dirname, '../icons')
const OUTPUT_DIR = path.resolve(__dirname, '../src/components')
const SRC_DIR = path.resolve(__dirname, '../src')

const componentTemplate = (name, svgContent) => `<template>
  ${svgContent}
</template>
<script>
export default {
  name: '${name}',
  props: {
    size: {
      type: [String, Number],
      default: 24
    },
    color: {
      type: String,
      default: 'currentColor'
    },
    strokeWidth: {
      type: [String, Number],
      default: 2
    }
  }
}
</script>
`

const typeDefinitionsTemplate = (exports) => `
import { DefineComponent, SVGAttributes } from 'vue';

export type IconProps = SVGAttributes & {
  size?: string | number;
  color?: string;
  strokeWidth?: string | number;
};

${exports.map((name) => `export declare const ${name}: DefineComponent<IconProps>;`).join('\n')}
`

async function build() {
  console.log('🏗️  Building Vue icons...')

  // Ensure directories exist
  await fs.ensureDir(OUTPUT_DIR)
  await fs.emptyDir(OUTPUT_DIR)
  await fs.ensureDir(SRC_DIR)

  const files = await glob(`${ICONS_DIR}/**/*.svg`)
  const indexExports = []
  const componentNames = []

  for (const file of files) {
    const content = await fs.readFile(file, 'utf-8')
    const rawName = path.basename(file, '.svg')
    const componentName = camelcase(rawName, { pascalCase: true })

    // Optimize SVG
    const result = optimize(content, {
      path: file,
      plugins: [
        'removeDimensions',
        {
          name: 'addAttributesToSVGElement',
          params: {
            attributes: [{ width: '24' }, { height: '24' }, { fill: 'none' }]
          }
        }
      ]
    })

    let svgContent = result.data

    // Inject dynamic props
    svgContent = svgContent
      .replace(/width="\d+"/, ':width="size"')
      .replace(/height="\d+"/, ':height="size"')
      .replace(/stroke="[^"]*"/, ':stroke="color"')
      .replace(/stroke-width="[^"]*"/, ':stroke-width="strokeWidth"')

    // Write Vue component
    const vueCode = componentTemplate(componentName, svgContent)
    await fs.writeFile(path.join(OUTPUT_DIR, `${componentName}.vue`), vueCode)

    // Add to index exports
    indexExports.push(
      `export { default as ${componentName} } from './components/${componentName}.vue';`
    )
    componentNames.push(componentName)
  }

  // Create entry file
  const indexContent = indexExports.join('\n')
  await fs.writeFile(path.join(SRC_DIR, 'index.js'), indexContent)

  // Create Type Definitions
  const typesContent = typeDefinitionsTemplate(componentNames)
  await fs.writeFile(path.join(SRC_DIR, 'index.d.ts'), typesContent)

  console.log(`✅ Icons generated successfully!`)
}

build()
