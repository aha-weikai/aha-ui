<template>
  <form :class="ns.b()">
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import { useNamespace } from '@aha-ui/hooks'
import { FormContext, FormItemContext, formContextKey } from '@aha-ui/tokens'
import { provide, reactive, toRefs } from 'vue'
import { formEmits, formProps } from './form'

const ns = useNamespace('form')
// const formClasses = computed(() => [ns.b()])

defineOptions({ name: 'ElForm' })

const props = defineProps(formProps)
const emit = defineEmits(formEmits)
const fields: FormItemContext[] = []

const validate = async (callback?: any) => {
  let validationErrors: any = {}
  for (const field of fields) {
    try {
      await field.validate('')
    } catch (errors: any) {
      validationErrors = {
        ...errors.fields,
        ...fields,
      }
    }
  }

  if (Object.keys(validationErrors).length === 0) return callback?.(true)
  callback?.(false, validationErrors)
}

const addField: FormContext['addField'] = (context) => {
  fields.push(context)
}

provide(
  formContextKey,
  reactive({
    ...toRefs(props),
    emit,
    addField,
  })
)

defineExpose({
  validate,
})
</script>

<style></style>
