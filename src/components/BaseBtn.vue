<script setup lang="ts">
const props = defineProps<{
  label: string
  loading: boolean
  icon:string
}>()
</script>
 <template>
     <button :disabled="props.loading" class="btn btn-primary w-100">
    <i :class="'bi bi-'+icon"></i>
    <span v-if="!props.loading">{{ props.label }}</span>
    <div v-if="props.loading" class="d-flex justify-content-center">
      <div :class="`spinner-border`" role="status">
        <span class="visually-hidden">Loading... </span>
      </div>
    </div>
  </button>
 </template>