import { ref } from 'vue'
import { defineStore } from 'pinia'

import { getCategoryAPI } from '@/apis/layout'



export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([])

  const getCategory = async () => {
    const categories = await getCategoryAPI()
    console.log(categories)
    categoryList.value = categories.result
  }

  return {
    categoryList,
    getCategory
  }
})
