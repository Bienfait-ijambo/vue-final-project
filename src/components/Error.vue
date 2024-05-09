

<script lang="ts" setup>
import { ErrorObject } from "@vuelidate/core"
defineProps<{
  label: string
  errors:ErrorObject[]
}>()
</script>
<template>
  <div class="form-group" :class="{ error: errors.length }">
   <b> <label>{{ label }}</label></b>
    <slot></slot>
    <div class="input-errors" v-for="error of errors" :key="error.$uid">
      <div class="error-msg">{{ error.$message }}</div>
    </div>
  </div>
</template>
<style scoped>
.input-errors{
  color:red;
}
</style>