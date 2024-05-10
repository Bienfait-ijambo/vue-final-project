<script lang="ts" setup>
import  { onMounted } from 'vue';
import PostTable from './components/PostTable.vue'
import { useGetPost } from './actions/GetPost';
import { myDebounce } from '@/helper/util';

const {loading,posts,getPost,query}=useGetPost()


const searchPost=myDebounce(async function(){
    await getPost()
},1000)

onMounted(async()=>{
    getPost()
})
</script>
<template>
    <div class="row">
        <div class="col-md-10">
           <div class="card">
            <div class="card-header">Post List</div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                    <input type="text" @keyup="searchPost" v-model="query" class="form-control" placeholder="Search post...">
                </div>
                <span style="color:blue" v-if="loading"><b>Searching......</b></span>
                </div>
              </div>
              <br/>
                <PostTable :posts="posts"/>
            </div>
           </div>
        </div>
    </div>
</template>