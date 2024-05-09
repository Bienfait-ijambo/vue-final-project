<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { ref } from 'vue'
import Error from '@/components/Error.vue'
import BaseBtn from '@/components/BaseBtn.vue'
import type { ICreatePostInput } from './actions/CreatePost'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const postInput = ref<ICreatePostInput>({
  title: '',
  post_content: ''
})

const rules = {
  title: { required },
  post_content: { required }
}

const v$ = useVuelidate(rules, postInput.value)
const loading = ref(false)


async function submitPost() {
  const result = await v$.value.$validate()

  if (!result) {
    return
  }
}
</script>
<template>
  <div class="row">
    <div class="col-md-10">
      <div class="card">
        <div class="card-header">Create Post</div>

        <div class="card-body">
          <form action="" @submit.prevent="submitPost">
            <Error label="Post-Title" :errors="v$.title.$errors">
              <input v-model="postInput.title" class="form-control form-control-lg" />
            </Error>
            <Error  label="Post-Content" :errors="v$.post_content.$errors">
                <ckeditor :editor="ClassicEditor" v-model="postInput.post_content" :config="{}"></ckeditor>
            </Error>
            <br/>
            <br/>

            <BaseBtn label="Create Post" :loading="loading"></BaseBtn>
          </form>
        </div>
      </div>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>
