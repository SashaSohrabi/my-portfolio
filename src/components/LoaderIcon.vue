<template>
  <svg
    version="1.1"
    id="loader-1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    :width="`${size}rem`"
    :height="`${size}rem`"
    viewBox="0 0 50 50"
    style="enable-background: new 0 0 50 50"
    xml:space="preserve"
  >
    <path
      :fill="color"
      d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683c0,10.318,8.364,18.683,18.683,18.683
      c4.068,0,7.852-1.252,11.018-3.394l-1.628-2.533c-2.562,1.883-5.704,3.027-9.39,3.027c-8.366,0-15.183-6.817-15.183-15.183
      c0-8.366,6.817-15.183,15.183-15.183c8.366,0,15.183,6.817,15.183,15.183H43.935z"
    >
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="0.6s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  color: {
    type: String,
    default: '#339beb',
  },
  size: {
    type: Number,
    default: 2,
  },
});
</script>
