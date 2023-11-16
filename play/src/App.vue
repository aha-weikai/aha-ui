<template>
  <div>
    <el-icon :size="'18px'" :color="'green'"> ① </el-icon>

    <el-button>按钮</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" circle>Warning</el-button>
    <el-button type="danger" disabled>Danger</el-button>
    <el-button size="large">按钮</el-button>
    <el-button size="small">按钮</el-button>
  </div>
</template>

<script setup lang="ts">
import ElIcon from '@aha-ui/components/icon'
import '@aha-ui/theme-chalk/src/index.scss'
</script>

<style></style>
