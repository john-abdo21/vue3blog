<template>
  <!-- contact -->
  <div id="contact" class="dark:bg-slate-900">
    <div class="container mx-auto">
      <!-- top -->
      <div class="flex flex-col gap-3 items-center">
        <h1 class="text-indigo-600 font-bold">CONTACT</h1>
        <h1 class="text-3xl dark:text-white">Have a Question?</h1>
        <p class="w-1/2 text-center text-gray-400">
          Do you have an idea? Let's discuss it and see what we can do
          together.
        </p>
      </div>

      <!-- bottom -->
      <form ref="form" @submit.prevent="sendEmail" class="mt-5 p-8 flex flex-col gap-5 items-center">
        <input class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
          type="text" placeholder="Name Surname" name="from_name" v-model="userName" required/>
        <input class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
          type="email" placeholder="Email" name="user_email" v-model="userEmail" required />
        <textarea
          class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
          cols="30" rows="10" placeholder="Message..." name="message" v-model="userMessgae" required></textarea>
        <button type="submit" value="Send" :disabled="loading"
          class="w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 text-center rounded-md cursor-pointer">
          <template v-if="loading">

            <svg aria-hidden="true" class="w-8 h-8 m-auto text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor" />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill" />
            </svg>
            Processing...
          </template>
          <template v-else>
            Submit
          </template>
        </button>
      </form>

      <AbToast v-if="loadingToast" @closeToast="closeToast()" message="Message sent successfully"/>


    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser';
const form = ref(null)
const userEmail = ref(''),
  userName = ref(''),
  userMessgae = ref('')
const loading = ref(false)
const loadingToast = ref(false)
const emailServices = import.meta.env.VITE_EMAILJS_SERVICES
const emailTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE
const emailId = import.meta.env.VITE_EMAILJS_ID
const sendEmail = () => {
  loading.value = true
  emailjs.sendForm(emailServices, emailTemplate, form.value, emailId)
    .then((result) => {
      loading.value = false
      userEmail.value = ''
      userName.value = ''
      userMessgae.value = ''
      loadingToast.value = true
    }, (error) => {
      loading.value = false

      console.log('FAILED...', error.text);
    });
}

const closeToast = () => {
  loadingToast.value = false
}

</script>
  
<style lang="scss" scoped></style>