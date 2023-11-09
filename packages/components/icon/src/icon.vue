<template>
  <i :class="bem.b()">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import { useNamespace } from '@aha-ui/hooks'
const bem = useNamespace('icon')
</script>

<style></style>
