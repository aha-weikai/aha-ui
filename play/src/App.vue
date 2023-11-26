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
    <el-form>
      <el-form-item
        label="用户名："
        :rules="[
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 6,
            max: 10,
            message: '用户名长度最少6位，且不超过10位',
            trigger: 'change',
          },
        ]"
      >
        <el-input type="text" v-model="userData.name" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue'
import '@aha-ui/theme-chalk/src/index.scss'
import { reactive, ref } from 'vue'

const inputValue = ref('')

const userData = reactive({ name: '' })
</script>

<style></style>
