

<script lang="ts" setup>
import { onMounted } from "vue";
import { useCountPost } from "./actions/CountPost";
const {count,countPost}=useCountPost()

onMounted(async ()=>{
  countPost()
})
</script>
<template>
  <div class="row">
    <div class="row">
      <h3>Dashbaord</h3>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">Post List</div>
          <div class="card-body">
            <h1 align="center">{{count}}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
