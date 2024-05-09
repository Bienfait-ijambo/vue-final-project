<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { ref } from 'vue'
import { createUser, type IRegisterInput } from './actions/CreateUser'
import Error from '@/components/Error.vue'
import { showError, successMsg } from '@/helper/ToastNofication'
import BaseBtn from '@/components/BaseBtn.vue'
const registerInput = ref<IRegisterInput>({
  name: '',
  email: '',
  password: ''
})

const rules = {
  name: { required }, // Matches state.firstName
  email: { required, email }, // Matches state.lastName
  password: { required }
}

const v$ = useVuelidate(rules, registerInput.value)
const loading = ref(false)
async function registerUser() {
  const result = await v$.value.$validate()

  if (!result) {
    return
  }
  try {
    loading.value = true
    const data = await createUser(registerInput.value)
    successMsg(data.message)
    v$.value.$reset()
    loading.value = false
    registerInput.value={} as IRegisterInput
  } catch (error) {
    loading.value = false

    showError((error as Error).message)
  }

  // request createUser
}
</script>

<template>
  <div class="row">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="card">
          <!-- {{ registerInput }} -->
          <div class="card-body">
            <h2 align="center">Register</h2>
            <form action="" @submit.prevent="registerUser">
              <Error label="Name" :errors="v$.name.$errors">
                <input v-model="registerInput.name" class="form-control form-control-lg" />
              </Error>

              <Error label="Email" :errors="v$.email.$errors">
                <input v-model="registerInput.email" class="form-control form-control-lg" />
              </Error>

              <Error label="Password" :errors="v$.password.$errors">
                <input
                  type="password"
                  v-model="registerInput.password"
                  class="form-control form-control-lg"
                />
              </Error>

              <br />

              <RouterLink to="/login">Login into your account</RouterLink>
              <br />
              <br />
              <div class="form-group">
               
                <BaseBtn :loading="loading" label="Register" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>
