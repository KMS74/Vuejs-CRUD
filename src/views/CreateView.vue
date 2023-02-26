<template>
  <h3 class="text-center mb-4">Create New Arriver</h3>
  <form class="w-50 my-4 mx-auto">
    <label class="form-label mb-1" for="ar-name">Aarabic Name</label>
    <input
      v-model="arabicName"
      type="text"
      id="ar-name"
      class="form-control mb-2"
      placeholder="محمد احمد"
    />

    <label class="form-label mb-1" for="en-name">English Name</label>
    <input
      v-model="englishName"
      type="text"
      id="en-name"
      class="form-control mb-2"
      placeholder="Mohamed Ahmed"
    />
    <button
      type="submit"
      v-on:click.prevent="submitArrivel"
      class="btn btn-lg"
      :class="btnColor"
      :disabled="isDisabled"
    >
      Create
    </button>
  </form>
  <div v-if="isSuccessfuallyCreated" class="alert alert-success w-50  mx-auto" role="alert">
    Successfually Created
  </div>
</template>

<script>
import { createArriver } from '../data-services'

export default {
  data() {
    return {
      arabicName: '',
      englishName: '',
      isSuccessfuallyCreated: false
    }
  },
  computed: {
    isDisabled() {
      return this.arabicName.length === 0 || this.englishName.length === 0
    },
    btnColor() {
      return this.isDisabled ? 'btn-secondary' : 'btn-primary'
    }
  },
  methods: {
    resetData() {
      this.arabicName = ''
      this.englishName = ''
    },
    submitArrivel() {
      createArriver(this.arabicName, this.englishName)
        .then((response) => {
          console.log(response)
          if (response.status == 200) {
            this.resetData()
            this.isSuccessfuallyCreated = true
            setTimeout(() => {
              this.$router.push('/')
            }, 2000)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped></style>
