<template>

  <Default>
    <template v-slot:title>
      <div class="p-text-light text-white p-mt-4 p-ml-4 p-text-light" style="font-size: 20px">
        Hi, <span class="text-white p-text-normal">{{ username }}</span>
      </div>
      <div class="p-text-light p-text-bold text-white p-mt-3 p-ml-4" style="font-size: 18px">Please, complete your :</div>
    </template>
    <template v-slot:content>
      <div class="p-grid p-jc-center">
        <div class="p-col-12">
          <div class="p-d-flex p-jc-center">
            <DefaultButton class="p-mt-3 p-button-info" label="Application For Employment (PDF)" @click="afe"/>
          </div>
        </div>
        <div class="p-col-12">
          <div class="p-d-flex p-jc-center">
            <DefaultButton class="p-button-info" label="Application For Employment (FORM)" @click="$router.push('/application-for-employment')"/>
          </div>
        </div>
        <div class="p-col-12">
          <div class="p-d-flex p-jc-center">
            <DefaultButton class="p-mt-2 p-button-info" label="Documents" @click="$router.push('/documents')"/>
          </div>
        </div>
        <div class="p-col-12">
          <div class="p-d-flex p-jc-center">
            <DefaultButton class="p-mt-2 p-button-success" label="Status"/>
          </div>
        </div>
        <div class="p-col-12">
          <hr class="text-white  p-mx-4"/>
        </div>
        <div class="p-col-12">
          <div class="p-d-flex p-jc-center">
            <DefaultButton class="p-mt-2 p-button-danger" label="Sign Out" @click="signOut"/>
          </div>
        </div>
      </div>
    </template>
  </Default>

</template>

<script>
import Default from "../../components/Default";
import DefaultButton from "../../components/DefaultButton";
import axios from "axios";

export default {
  name: "MainMenu",
  components: {
    Default,
    DefaultButton
  },
  data(){
    return{
      username: ""
    }
  },
  created() {
    this.tokenOnlyArea(true)
    this.getCurrentUser()
  },
  methods: {
    signOut() {
      const context = this
      context.deleteCookie(context.tokenCookie)
      context.deleteCookie(context.refreshTokenCookie)
      context.$router.replace('/')
    },
    afe(){
      const context = this
      window.open(context.apiDocUrl, "_blank");
    },
    getCurrentUser() {
      // current user api
      const context = this
      let url = `${context.apiAuthUrl}/auth/verified/current`
      let header = {
        headers: {
          Authorization: `Bearer ${context.getCookie(context.tokenCookie)}`,
        }
      }

      axios.get(url, header).then(function (response) {
          context.username = response.data.data.name
      }).catch(function (error) {
          context.showToast(context.toastSeverityError, error.message, context.toastDefaultLife)
      })

    }
  }
}
</script>
