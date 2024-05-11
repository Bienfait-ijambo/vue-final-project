

<script setup lang="ts">
import { APP } from '@/helper/APP';
import { showError, successMsg } from '@/helper/ToastNofication';
import { getSelectedImage, uploadImageHeader } from '@/helper/uplaod';
import { ref } from 'vue';
import BaseBtn from '@/components/BaseBtn.vue'


const props = defineProps<{
  postId: number| undefined
}>()

const emit = defineEmits<{
  (e: 'closeModal'): void
  (e: 'refreshTable'): void
}>()

const image = ref<any>()
function selectImage(e: any) {
  const selectedImage = getSelectedImage(e, 'outputImage')
  image.value = selectedImage
}
const loading=ref(false)

async function uploadImage() {
  try {
    if (image.value !== '' && typeof props.postId!=='undefined') {

      const reqOptions = uploadImageHeader(image.value, props.postId)
      loading.value=true
      const res = await fetch(`${APP.laravelApiBaseURL}/posts/upload-image`, reqOptions)
      const data:{message:string} = await res.json()

      successMsg(data?.message)
      image.value=''
      const imgTag=document.getElementById('outputImage') as HTMLImageElement
      imgTag.src=''
      loading.value=false
      emit('refreshTable')
    } else {
      showError('Please select an image !')
    }
  } catch (error) {
    loading.value=false

    showError((error as Error).message)
  }
}
</script>
<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="postModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <form enctype="multipart/form-data" @submit.prevent="uploadImage">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">UploadImage-{{ props.postId }}</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              @click="emit('closeModal')"
              aria-label="Close"
            ></button>
           
          </div>
          <div class="modal-body">
            <div class="form-group">
              <img style="height: 150px" src="" id="outputImage" /><br />
              <label for="">Image</label><br />
              <!-- -->
              <input type="file" @change="selectImage"  required  />
            </div>
          </div>
          <div class="modal-footer">
            <div class="row">
                <div class="col-md-12">
                

            <BaseBtn :loading="loading" label="Upload" />
                </div>
            </div>
           
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

