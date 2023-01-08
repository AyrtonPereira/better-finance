<template>
  <button
    :class="`group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium focus:outline-none focus:ring-2  focus:ring-offset-2 ${buttonType} ${disabled ? 'opacity-50 cursor-default' : ''}`"
    :disabled="disabled">
    <slot>{{ label }}</slot>
  </button>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({
  label: { type: String, default: "" },
  type: { type: String, default: "primary" },
  disabled: { type: Boolean, default: false }
})

const buttonColors = {
  primary: "bg-indigo-600 focus:ring-indigo-500 hover:bg-indigo-700 text-white cursor-pointer",
  danger: "bg-red-600 focus:ring-red-500 hover:bg-red-700 text-white cursor-pointer",
}

const buttonType = computed(() => {
  return buttonColors[props.type]
})

</script>