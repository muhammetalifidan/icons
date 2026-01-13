# Untitled UI Icons - Vue 3

Unofficial Vue 3 port of the [Untitled UI Icons](https://www.untitledui.com/icons) library.
This package is automatically generated from the official SVG sources using a custom build script.

## Installation

```bash
npm install @untitledui/vue
# or
pnpm add @untitledui/vue
```

## Usage

You can import icons directly as Vue components.

```vue
<script setup>
  import { Home01, AlertCircle, ShoppingCart01 } from '@untitledui/vue'
</script>

<template>
  <div class="icons">
    <Home01 />

    <AlertCircle size="32" color="#F04438" />

    <ShoppingCart01 stroke-width="1.5" />

    <Home01 class="w-6 h-6 text-gray-500 hover:text-gray-900" />
  </div>
</template>
```

## Props

All icons accept the following props:

| Prop          | Type                | Default        | Description                   |
| ------------- | ------------------- | -------------- | ----------------------------- |
| `size`        | `String` / `Number` | `24`           | Width and height of the icon. |
| `color`       | `String`            | `currentColor` | Stroke color of the icon.     |
| `strokeWidth` | `String` / `Number` | `2`            | Thickness of the icon stroke. |

## License

This project is licensed under the MIT License.
Icons are designed by Untitled UI.
