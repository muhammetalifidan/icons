<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
  >
    <path
      d="M4 12v1a8 8 0 0 0 14.138 5.132M2 2l20 20m-6-11.6V7a4 4 0 0 0-6.53-3.1M12 17a4 4 0 0 1-4-4V8l7.281 7.288A3.995 3.995 0 0 1 12 17Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
  export default {
    name: 'MicrophoneOff02',
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
