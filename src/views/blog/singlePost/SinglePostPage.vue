<script lang="ts" setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useGetSingleArtilce } from "./actions/GetSinglePost";
import SingleArticle from './components/SingleArticle.vue'
import SinglePostSkeletonLoader from './components/SinglePostSkeletonLoader.vue'
const route=useRoute()
const slug=route.params?.slug as string

const {loading,post,getPost}= useGetSingleArtilce()

onMounted(async()=>{

    await getPost(slug)

})
</script>
<template>
    <main class="container">
    <br/>
    <br/>
    <br/>
      <div class="row">
        <div class="col-md-1"></div>
         <SingleArticle :post="post" v-if="!loading"/>
         <SinglePostSkeletonLoader v-else/>
        <div class="col-md-1"></div>
      </div>
    </main>
  </template>
  