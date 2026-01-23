<template>
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size"><path d="m2 7 12 10-6 5V2l6 5L2 17M20.145 6.5a9.386 9.386 0 0 1 1.769 5.5 9.386 9.386 0 0 1-1.77 5.5M17 8.857A5.48 5.48 0 0 1 17.986 12 5.475 5.475 0 0 1 17 15.143" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>
<script>
export default {
  name: 'BluetoothSignal',
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
