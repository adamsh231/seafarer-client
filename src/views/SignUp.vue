<template>

  <Default>
    <template v-slot:title>
      <BackButton to="/"/>
      <div class="p-text-center p-text-light text-white" style="font-size: 30px">Sign Up</div>
    </template>
    <template v-slot:content>
      <div class="p-grid p-jc-center">
        <div class="p-col-12 p-mt-3">
          <div class="p-d-flex p-jc-center">
            <span class="p-float-label input-span">
              <InputText id="full_name" class="input-text" type="text"/>
              <label for="full_name">Full Name</label>
            </span>
          </div>
        </div>
        <div class="p-col-12 p-mt-3">
          <div class="p-d-flex p-jc-center">
            <span class="p-float-label input-span">
              <InputText id="email" class="input-text" type="text"/>
              <label for="email">Email</label>
            </span>
          </div>
        </div>
        <div class="p-col-12 p-mt-3">
          <div class="p-d-flex p-jc-center">
            <span class="p-float-label input-span">
              <InputText id="password" class="input-text" type="text"/>
              <label for="password">Password</label>
            </span>
          </div>
        </div>
        <div class="p-col-12 p-mt-3">
          <div class="p-d-flex p-jc-center">
            <DefaultButton label="Sign Up" color="#a5e0f3" to="/verify"/>
          </div>
        </div>
        <div class="p-col-12 p-mt-3">
          <div class="p-text-center text-gray p-text-light">By signing up you accept our</div>
          <div class="p-text-center text-white p-text-bold p-mt-3" style="cursor:pointer;">Term of Services</div>
        </div>
      </div>
    </template>
  </Default>

</template>

<script>
import Default from "../components/Default";
import BackButton from "../components/BackButton";
import DefaultButton from "../components/DefaultButton";

export default {
  name: "SignUp",
  components: {
    Default,
    BackButton,
    DefaultButton
  }
}
</script>

