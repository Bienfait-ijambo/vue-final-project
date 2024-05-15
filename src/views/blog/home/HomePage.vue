<script lang="ts" setup>
import { onMounted } from "vue";
import { useDisplayArticle } from "./actions/DisplayArticle";
import ArticleCard from "./components/ArticleCard.vue";
import ArticleCardSkeletonLoader from './components/ArticleCardSkeletonLoader.vue'

const {loading,posts,getPost}= useDisplayArticle()

onMounted(async()=>{
await getPost()
})
</script>
<template>
    <main class="container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <div
            class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary"
            style="background-image: url('/src/assets/wiz-bg.jpg')"
          >
            <div class="col-lg-6 px-0">
              <h1 class="display-5" style="color: white">
                The best way to learn to CODE is to build a truly functional product
              </h1>
  
              <br />
  
              <p class="lead mb-0">
                <RouterLink to="/register" class="btn btn-primary bg-lg"
                  >Create an Account <i class="bi bi-arrow-right"></i
                ></RouterLink>
              </p>
            </div>
          </div>
          <br />
          <br />
  
          <div class="row mb-4">
            <div class="col-md-1">
              <h2>Articles</h2>
            </div>
          </div>
          <div class="row">
           <ArticleCard :posts="posts" v-if="!loading"/>
           <ArticleCardSkeletonLoader v-else/>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </main>
  </template>