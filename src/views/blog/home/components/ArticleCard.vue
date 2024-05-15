
<script lang="ts" setup>
import type { GetArticleResponseType } from '../actions/DisplayArticle';


defineProps<{
    posts:Array<GetArticleResponseType>| undefined
}>()
</script>
<template>
     <div class="col-md-4" v-for="post in posts" :key="post.id">
            <div class="card">
            <img :src="post.image" class="card-img-top" alt="image" />

            <div class="card-body">
                <div class="col  d-flex flex-column position-static">
                <h3 class="mb-0">{{post.title}}</h3>
                <div class="mb-1 text-body-secondary">{{post.created_at}}</div>
               
                <RouterLink :to="'single-post/'+post.slug" class="icon-link gap-1 icon-link-hover stretched-link">
                  Continue reading
                  <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
                </RouterLink>
               
              </div>
            </div>
          </div>
          </div>
        
</template>
