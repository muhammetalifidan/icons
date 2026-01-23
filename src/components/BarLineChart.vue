<template>
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size"><path d="M20 20v-7m-8 7V10M4 20v-4m9.407-10.973 5.168 1.939M10.8 5.4 5.2 9.6m15.86-3.16a1.5 1.5 0 1 1-2.121 2.12 1.5 1.5 0 0 1 2.122-2.12Zm-16 3a1.5 1.5 0 1 1-2.12 2.12 1.5 1.5 0 0 1 2.12-2.12Zm8-6a1.5 1.5 0 1 1-2.121 2.12 1.5 1.5 0 0 1 2.122-2.12Z" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>
<script>
export default {
  name: 'BarLineChart',
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
