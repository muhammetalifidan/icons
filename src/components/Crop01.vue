<template>
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size"><path d="M2 6h12.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C18 7.52 18 8.08 18 9.2V22m4-4H9.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C6 16.48 6 15.92 6 14.8V2" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>
<script>
export default {
  name: 'Crop01',
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
