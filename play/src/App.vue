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
    <el-button type="primary" :icon="Edit" />
    <el-button type="primary">
      <template #icon> <edit /></template>
    </el-button>

    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>

    <el-input v-model="inputValue" />

    <el-form-item>
      <input type="text" />
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue'
import '@aha-ui/theme-chalk/src/index.scss'
import { ref } from 'vue'

const inputValue = ref('')
</script>

<style></style>
