<script setup lang="ts">

import { RouterLink } from 'vue-router'
import { GetArticleResponseType } from '../../home/actions/DisplayArticle'
defineProps<{
  post: GetArticleResponseType | undefined
}>()
</script>
<template>
  <div class="col-md-10" >
    <div class="row g-5">
      <div class="col-md-10">

        <img :src="post?.image" width="1000" alt="" />
        <h3 class="pb-4 mb-4 fst-italic border-bottom"></h3>

        <article class="blog-post">
        <RouterLink class="btn btn-outline-primary" to="/">Back Home</RouterLink>

          <h2 class="display-5 link-body-emphasis mb-1">{{ post?.title }}</h2>
          <p class="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>

          <div v-html="post?.post_content"></div>
          <!-- <div>{{ post?.post_content }}</div> -->
        </article>
      </div>
    </div>
  </div>
</template>