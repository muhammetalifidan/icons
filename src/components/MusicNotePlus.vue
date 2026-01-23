<template>
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size"><path d="M14.5 18V5.589c0-.857 0-1.286.18-1.544a1 1 0 0 1 .674-.416c.312-.046.695.145 1.462.529L20.5 6m-6 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-8-8V4m-3 3h6" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>
<script>
export default {
  name: 'MusicNotePlus',
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
