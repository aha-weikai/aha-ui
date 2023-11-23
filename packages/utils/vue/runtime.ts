import type { PropType } from 'vue'

// 从返回的类型中确保一个props中的type的类型的准确性
export const definePropType = <T>(val: any): PropType<T> => val
