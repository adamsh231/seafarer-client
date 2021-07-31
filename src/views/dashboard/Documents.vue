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
          <h3 class="c-primary pc">Upload New File</h3>
        </template>
        <template #right>
          <FileUpload ref="fileUpload" mode="basic" :auto="true" :custom-upload="true" @uploader="onUpload" chooseLabel="Upload"/>
        </template>
      </Toolbar>
    </div>

    <div class="scroll p-mb-5">
      <div class="p-grid p-my-0">
        <div v-for="file in files" class="p-col-12 p-sm-12 p-md-12 p-lg-6">
          <div class="p-mt-1 p-mx-3 p-shadow-3 file">
            <div class="p-grid">
              <div class="p-col-3 p-text-center p-my-auto">
                <i class="pi pi-file-pdf" style="fontSize: 2rem"></i>
              </div>
              <div class="p-col-6">
                <p class="file-name c-primary p-text-bold">{{ file.name }}</p>
              </div>
              <div class="p-col-3 p-text-center p-my-auto">
                <Button icon="pi pi-trash" class="p-button-rounded p-button-danger"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import BackButton from "../../components/BackButton";

export default {
  name: "Documents",
  components: {
    BackButton
  },
  data() {
    return {
      files: []
    }
  },
  created() {
    this.tokenOnlyArea(true)
  },
  methods: {
    onUpload(event){
      this.files.push({name:event.files[0].name})
      this.$refs.fileUpload.remove()
    }
  }
}
</script>

<style scoped lang="scss">

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

.scroll {
  border-radius: 35px;
  overflow: auto;
  height: 60vh;
  overflow-x: hidden;
}
</style>
