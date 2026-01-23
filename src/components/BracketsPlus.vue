<template>
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size"><path d="M18.57 20a2.286 2.286 0 0 0 2.287-2.286v-4.571L22 12l-1.143-1.143V6.286A2.285 2.285 0 0 0 18.57 4M5.429 4a2.285 2.285 0 0 0-2.286 2.286v4.571L2 12l1.143 1.143v4.571A2.285 2.285 0 0 0 5.429 20M12 8v8m-4-4h8" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>
<script>
export default {
  name: 'BracketsPlus',
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
