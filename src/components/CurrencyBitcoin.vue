<template>
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size"><path d="M9.5 2v2m0 16v2m4-20v2m0 16v2m-6-18H14a4 4 0 0 1 0 8H7.5 15a4 4 0 0 1 0 8H7.5m0-16h-2m2 0v16m0 0h-2" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>
<script>
export default {
  name: 'CurrencyBitcoin',
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
