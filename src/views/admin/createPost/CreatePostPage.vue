<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import Error from '@/components/Error.vue'
import BaseBtn from '@/components/BaseBtn.vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { usePostStore } from '@/stores/postStore'
import { useCreateOrUpdatePost } from './actions/CreatePost'

const rules = {
  title: { required },
  post_content: { required }
}

const postStore = usePostStore()

const v$ = useVuelidate(rules, postStore.postData)

const { loading, createOrUpdate } = useCreateOrUpdatePost()

async function submitPost() {
  const result = await v$.value.$validate()

  if (!result) {
    return
  }
  await createOrUpdate()
}
</script>
<template>
  <div class="row">
    <div class="col-md-10">
      <div class="card">
        <div class="card-header">Create Post</div>
        <!-- {{ postStore.postData }} -->
        <div class="card-body">
          <form action="" @submit.prevent="submitPost">
            <Error label="Post-Title" :errors="v$.title.$errors">
              <input v-model="postStore.postData.title" class="form-control form-control-lg" />
            </Error>
            <Error label="Post-Content" :errors="v$.post_content.$errors">
              <ckeditor
                :editor="ClassicEditor"
                v-model="postStore.postData.post_content"
                :config="{}"
              ></ckeditor>
            </Error>
            <br />
            <br />

            <BaseBtn
            :class="postStore.edit ? 'btn btn-warning' : 'btn btn-primary'"
             :label="postStore.edit ?'Update Post':'Create Post'" 
             :loading="loading">
             </BaseBtn>
          </form>
        </div>
      </div>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>
