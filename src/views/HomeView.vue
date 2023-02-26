<template>
  <main class="p-4">
    <button v-if="!isLoading" v-on:click="navigateToCreate" class="btn btn-primary btn-lg mb-3">
      Create
    </button>
    <table v-if="!isLoading" class="table table-hover table-bordered">
      <thead class="table-dark">
        <tr class="text-center">
          <th scope="col">#</th>
          <th scope="col">Aarabic Name</th>
          <th scope="col">English Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center" v-for="(arriver, index) in arriversData" :key="arriver.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ arriver.arrivingArabicName }}</td>
          <td>{{ arriver.arrivingEnglishName }}</td>
          <td>
            <button
              v-on:click="getArriverData(arriver)"
              class="btn"
              data-bs-target="#myModal"
              data-bs-toggle="modal"
            >
              <i class="bi bi-pencil"></i>
            </button>
            <button class="btn">
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Loading spinner -->
    <span class="loader" v-else></span>
    <!-- Model for editing arriver dataa -->
    <Teleport to="body">
      <div class="modal" id="myModal">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Updating Arriver</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <label class="form-label mb-1" for="new-ar-name">Aarabic Name</label>
                <input
                  type="text"
                  id="new-ar-name"
                  class="form-control mb-2"
                  v-model="newAarabicName"
                />

                <label class="form-label mb-1" for="new-en-name">English Name</label>
                <input
                  type="text"
                  id="new-en-name"
                  class="form-control mb-2"
                  v-model="newEnglish"
                />
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button v-on:click.prevent="updateArriverData" type="submit" class="btn btn-primary">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
    <!-- Pagination Component -->
    <vue-awesome-paginate
      v-if="!isLoading"
      :total-items="totalItems"
      v-model="currentPage"
      :on-click="onClickHandler"
      prev-button-content="<"
      next-button-content=">"
    />
  </main>
</template>

<script>
import { getArrivers } from '../data-services'
import { toRaw, isProxy } from 'vue'
export default {
  data() {
    return {
      arriversData: [],
      arriverData: {},
      newAarabicName: '',
      updatedEnglishName: '',
      isLoading: false,
      totalItems: 0,
      currentPage: 1
    }
  },
  created() {
    // getting arrivers data
    this.isLoading = true
    getArrivers(this.currentPage - 1)
      .then((response) => {
        console.log(response)
        if (response.status == 200) {
          this.isLoading = false
          this.arriversData = response.data.data
          this.totalItems = response.data.totalCount
          console.log(`Total item ${this.totalItems}`)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    updateArriverData() {
      // TODO code...
    },
    deleteArriverData() {
      // TODO code...
    },
    getArriverData(arriverObj) {
      console.log(arriverObj)
      if (isProxy(arriverObj)) {
        this.arriverData = toRaw(arriverObj)
        console.log(toRaw(arriverObj))
        console.log(toRaw(this.arriverData))
        this.arriverData = toRaw(this.arriverData)
      }
    },
    navigateToCreate() {
      this.$router.push({ name: 'create' })
    },
    onClickHandler(page) {
      // getting the data of the next page
      console.log(`Page number ${page}`)
      this.isLoading = true
      getArrivers(page - 1)
        .then((response) => {
          console.log(response)
          if (response.status == 200) {
            this.isLoading = false
            this.arriversData = response.data.data
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style>
/* pagination */
.pagination-container {
  display: flex !important;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.paginate-buttons {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: #212529;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #0d6efd;
  border: 1px solid #0d6efd;
  color: white;
}
.active-page:hover {
  background-color: #0d6efd;
}
/* loading spinner */
.loader {
  width: 65px;
  height: 65px;
  border: 5px solid #fff;
  border-bottom-color: #0d6efd;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
