<script lang="ts" setup>
import  { onMounted, ref } from 'vue';
import PostTable from './components/PostTable.vue'
import { useGetPost, type GetPostResponseType } from './actions/GetPost';
import { closeModal, myDebounce, openModal } from '@/helper/util';
import { confirmDelation } from '@/helper/sweetAlert';
import { useDeletePost } from './actions/DeletePost';
import { usePostStore } from '@/stores/postStore';
import { useRouter } from 'vue-router';
import showUploadImageModal from './components/UploadImageModal.vue'
const {loading,posts,getPost,query}=useGetPost()


const searchPost=myDebounce(async function(){
    await getPost()
},1000)

const {deletePost}=useDeletePost()

function deleteArticle(postId:number){
    confirmDelation().then(async(result)=>{
        await deletePost(postId)
        getPost()
    }).catch((error)=>console.log(error))
}

const postStore=usePostStore()
const router=useRouter()

function updateArticle(post:GetPostResponseType){
    const{slug,image,...restProps}=post
    postStore.postData=restProps
    postStore.edit=true
    router.push('/create-post')
}

function closePostModal(){
    closeModal('postModal')
}

const currentPostId=ref<number| undefined>()
function displayUploadImageModal(post:GetPostResponseType){
    openModal('postModal',post.id).then(()=>{
        currentPostId.value=post.id
    }).catch((error)=>console.log(error))
}



onMounted(async()=>{
    getPost()
})
</script>
<template>
    <div class="row">
        <showUploadImageModal
        @refreshTable="getPost"
         :postId="currentPostId" 
        @closeModal="closePostModal"/>
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
                <PostTable @showModal="displayUploadImageModal" @updatePost="updateArticle" @deletePost="deleteArticle"  :posts="posts"/>
            </div>
           </div>
        </div>
    </div>
</template>