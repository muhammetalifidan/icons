<template>
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size"><path d="M9 9V6a3 3 0 1 0-3 3h3Zm0 0v6m0-6h6m-6 6v3a3 3 0 1 1-3-3h3Zm0 0h6m0 0h3a3 3 0 1 1-3 3v-3Zm0 0V9m0 0V6a3 3 0 1 1 3 3h-3Z" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>
<script>
export default {
  name: 'Command',
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
