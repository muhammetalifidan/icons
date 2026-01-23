<template>
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size"><path d="M16.243 7.757a6 6 0 0 1 0 8.486m-8.486 0a6 6 0 0 1 0-8.486M4.93 19.071c-3.905-3.905-3.905-10.237 0-14.142m14.142 0c3.905 3.905 3.905 10.237 0 14.142M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>
<script>
export default {
  name: 'Signal01',
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
