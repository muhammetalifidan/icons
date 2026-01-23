<template>
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size"><path d="m9 10.5 2 2L15.5 8M20 21V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 3 16.88 3 15.2 3H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 5.28 4 6.12 4 7.8V21l2.75-2 2.5 2L12 19l2.75 2 2.5-2L20 21Z" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>
<script>
export default {
  name: 'ReceiptCheck',
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
