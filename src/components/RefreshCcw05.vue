<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
  >
    <path
      d="M8.547 19.767A8.5 8.5 0 0 0 19.362 7.75l-.25-.433M4.638 16.25A8.5 8.5 0 0 1 15.453 4.233m-12.96 12.1 2.732.733.733-2.732m12.085-4.668.732-2.732 2.732.732"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
  export default {
    name: 'RefreshCcw05',
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
