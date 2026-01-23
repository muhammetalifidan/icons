<template>
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size"><path d="M21 18v-6a9 9 0 1 0-18 0v6m2.5 3A2.5 2.5 0 0 1 3 18.5v-2a2.5 2.5 0 0 1 5 0v2A2.5 2.5 0 0 1 5.5 21Zm13 0a2.5 2.5 0 0 1-2.5-2.5v-2a2.5 2.5 0 0 1 5 0v2a2.5 2.5 0 0 1-2.5 2.5Z" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>
<script>
export default {
  name: 'Headphones01',
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
