<template>
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size"><path d="M21.92 13.265c.053-.414.08-.837.08-1.265 0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10c.435 0 .864-.028 1.285-.082M12 6v6l3.738 1.87M19 22v-6m-3 3h6" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>
<script>
export default {
  name: 'ClockPlus',
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
