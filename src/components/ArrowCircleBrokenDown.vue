<template>
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size"><path d="M17 3.338A9.996 9.996 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12a9.996 9.996 0 0 1 5-8.662M8 12l4 4m0 0 4-4m-4 4V2" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>
<script>
export default {
  name: 'ArrowCircleBrokenDown',
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
