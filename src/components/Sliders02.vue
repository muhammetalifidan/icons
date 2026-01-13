<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
  >
    <path
      d="M5 21v-6m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-8V3m7 18v-6m0-8V3m0 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm7 14v-4m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-8V3"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
  export default {
    name: 'Sliders02',
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
