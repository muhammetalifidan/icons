<template>
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size"><path d="M12 2.25v2.5M12 18v4M5.75 12h-3.5m19 0h-1.5m-1.293 6.457-.707-.707m.914-12.334L17.25 6.83M4.922 19.078 7.75 16.25M5.129 5.209 7.25 7.33" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>
<script>
export default {
  name: 'Loading01',
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
