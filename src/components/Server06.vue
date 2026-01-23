<template>
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size"><path d="M20 12a8 8 0 0 1-8 8m8-8a8 8 0 0 0-8-8m8 8H4m8 8a8 8 0 0 1-8-8m8 8a12.24 12.24 0 0 0 3.2-8A12.24 12.24 0 0 0 12 4m0 16a12.24 12.24 0 0 1-3.2-8A12.24 12.24 0 0 1 12 4m-8 8a8 8 0 0 1 8-8M6 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm16 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm16 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>
<script>
export default {
  name: 'Server06',
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
