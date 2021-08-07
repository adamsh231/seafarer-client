<template>

  <div class="p-shadow-24 container p-mx-auto p-mt-5">

    <div class="p-grid p-mb-0 pc">
      <div class="p-col">
        <img src="../../assets/logo2.png" class="logo-image p-ml-5 p-mt-4" @click="$router.push('/dashboard')">
      </div>
      <div class="p-col p-text-center doc-text">
        <h1 class="c-primary">Documents</h1>
      </div>
      <div class="p-col"></div>
    </div>

    <div class="p-text-center mobile p-d-none">
      <img src="../../assets/logo2.png" class="logo-image p-mt-4" @click="$router.push('/dashboard')">
      <h1 class="c-primary p-my-1">Documents</h1>
    </div>

    <hr style="border: 1px solid #152b53"/>

    <div class="p-mt-4 p-mx-3 p-mb-2">
      <Toolbar>
        <template #left>
          <h3 class="c-primary pc">Upload New Document</h3>
        </template>
        <template #right>
          <Button :icon="`pi ${isUploading ? 'pi-spin' : ''} pi-refresh`" class="p-mr-3 p-button-rounded p-button-outlined" @click="getAllFiles"
                  :disabled="isUploading"/>
          <FileUpload ref="fileUpload" mode="basic" :auto="true" :custom-upload="true" @uploader="onUpload" chooseLabel="Upload"
                      :disabled="isUploading"/>
        </template>
      </Toolbar>
    </div>

    <div class="p-mt-4 p-mx-3 p-mb-2">
      <DataTable :value="files" responsiveLayout="stack" breakpoint="600px">
        <template #header>
          <div class="table-header p-d-flex p-flex-column p-flex-md-row p-jc-md-between">
            <h5 class="p-mb-2 p-m-md-0 p-as-md-center">Manage Documents</h5>
            <span class="p-input-icon-left">
            <i class="pi pi-search"/>
            <InputText style="width: 210px" v-model="search" @input="getAllFiles" placeholder="Search file by name"/>
          </span>
          </div>
        </template>

        <Column style="width: 8rem" class="p-text-center">
          <template #body="slotProps">
            <i class="pi pi-file-pdf" @click="download(slotProps.data['url_key'])" style="fontSize: 2rem"></i>
          </template>
        </Column>
        <Column header="Name">
          <template #body="slotProps">
            <p class="file-name">{{ slotProps.data.name }}</p>
          </template>
        </Column>
        <Column style="width: 6rem">
          <template #body="slotProps">
            <Button icon="pi pi-trash" class="p-button-rounded p-button-danger" @click="removeImage(slotProps.data.id)"/>
          </template>
        </Column>
      </DataTable>

      <div class="p-paginator p-component p-paginator-bottom">
        <div :class="`p-paginator-prev p-paginator-element p-link ${isPrevDisabled ? 'p-disabled' : ''}`" @click="prevButton">
          <span class="p-paginator-icon pi pi-angle-left"></span>
        </div>
        <span class="p-paginator-pages">
          <button class="p-paginator-page p-paginator-element p-link p-highlight p-disabled" type="button">{{ page }}</button>
          <p class="p-paginator-page p-paginator-element p-link p-disabled">of</p>
          <button class="p-paginator-page p-paginator-element p-link p-disabled" type="button">{{ lastPage }}</button>
        </span>
        <div :class="`p-paginator-next p-paginator-element p-link ${isNextDisabled ? 'p-disabled' : ''}`" @click="nextButton">
          <span class="p-paginator-icon pi pi-angle-right"></span>
        </div>
      </div>


      <div style="height: 20px"></div>

    </div>

  </div>

</template>

<script>

import axios from "axios";

export default {
  name: "Documents",
  components: {},
  data() {
    return {
      id: 0,
      files: [],
      isUploading: false,
      search: "",
      limit: 5,
      total: 0,
      lastPage: 1,
      page: 1,
      isPrevDisabled: false,
      isNextDisabled: false
    }
  },
  created() {
    this.tokenOnlyArea(true)
    this.getAllFiles()
  },
  methods: {
    disabledPageButton() {
      this.isPrevDisabled = this.page <= 1
      this.isNextDisabled = this.page >= this.lastPage

      console.log(this.page)
      console.log(this.lastPage)
      console.log(this.isPrevDisabled)
      console.log(this.isNextDisabled)
    },
    prevButton() {
      if (this.page > 1) {
        this.page--
        this.getAllFiles()
      }
    },
    nextButton() {
      if (this.page < this.lastPage) {
        this.page++
        this.getAllFiles()
      }
    },
    download(url) {
      window.open(url);
    },
    onUpload(event) {

      // get file data
      let formData = new FormData()
      formData.append("file", event.files[0]);

      // init header
      const context = this
      let url = `${context.apiStorageUrl}/file`
      let header = {
        headers: {
          'Authorization': `Bearer ${context.getCookie(context.tokenCookie)}`,
          'Content-Type': 'multipart/form-data',
        }
      }

      // loading
      this.isUploading = true

      // upload file
      axios.post(url, formData, header).then(function (response) {

        // reload
        context.showToast(context.toastSeveritySuccess, context.toastSeveritySuccess, context.toastDefaultLife)
        context.getAllFiles()

      }).catch(function (error) {

        // show error
        context.showToast(context.toastSeverityError, error.message, context.toastDefaultLife)

      }).finally(function () {

        // loading
        context.isUploading = false

      })

      // remove image
      this.$refs.fileUpload.remove()

    },
    getAllFiles() {

      // init header
      const context = this
      let url = `${context.apiStorageUrl}/file?search=${this.search}&per_page=${this.limit}&page=${this.page}`
      let header = {
        headers: {
          Authorization: `Bearer ${context.getCookie(context.tokenCookie)}`,
        }
      }

      // loading
      this.isUploading = true

      // get all files
      axios.get(url, header).then(function (response) {

        console.log(response.data)

        // set data
        context.files = response.data.data
        context.lastPage = response.data.meta["last_page"] !== 0 ? response.data.meta["last_page"] : 1

      }).catch(function (error) {

        // show error
        context.showToast(context.toastSeverityError, error.message, context.toastDefaultLife)

      }).finally(function () {

        // disabled page button
        context.disabledPageButton()

      })

      // loading
      this.isUploading = false

    },
    removeImage(id) {
      this.files = this.files.filter(function (value, index, arr) {
        return value.id !== id;
      })
    }
  }
}
</script>

<style scoped lang="scss">

@media only screen and (max-width: 600px) {
  .file-name {
    text-align: right !important;
  }
}

@media only screen and (max-width: 800px) {
  .mobile {
    display: block !important;
    font-size: 15px;
  }

  .logo-image {
    width: 70px !important;
    height: 70px !important;
  }

  .pc {
    display: none;
  }
}

.container {
  border-radius: 25px;
  width: 90%;
  background-color: #efedef;

  .file {
    background-color: white;
    border-radius: 10px;

    .file-name {
      font-size: 18px;
    }
  }
}

.doc-text {
  line-height: 100px;
  vertical-align: middle;
  font-size: 20px;
}

.c-primary {
  color: #152b53;
}

.logo-image {
  width: 120px;
  height: 120px;
}
</style>
