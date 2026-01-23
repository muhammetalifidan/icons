<template>
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size"><path d="M12 8v8m0-8V2m0 6L7 3m5 5 5-5m-5 13v6m0-6-5 5m5-5 5 5m-1-9H8m8 0h6m-6 0 5-5m-5 5 5 5M8 12H2m6 0L3 7m5 5-5 5" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>
<script>
export default {
  name: 'Snowflake02',
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
