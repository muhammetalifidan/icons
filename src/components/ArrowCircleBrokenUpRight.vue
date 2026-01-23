<template>
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size"><path d="M2.34 14.59a9.996 9.996 0 0 1 2.589-9.661c3.905-3.905 10.237-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142a9.996 9.996 0 0 1-9.66 2.59M15 15V9m0 0H9m6 0L5 19" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>
<script>
export default {
  name: 'ArrowCircleBrokenUpRight',
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
