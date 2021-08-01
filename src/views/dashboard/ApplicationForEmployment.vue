<template>

  <div class="p-shadow-24 container p-mx-auto p-mt-5">
    <div class="p-text-center">
      <img src="../../assets/logo2.png" class="logo-image p-mt-4" @click="$router.push('/dashboard')">
      <h1 class="c-primary p-my-1 title">Application For Employment</h1>
    </div>

    <hr style="border: 1px solid #152b53"/>

    <!--  Personal Information  -->
    <div class="sub-section p-shadow-4 p-my-4">

      <div class="p-grid p-my-0">
        <div class="p-col p-text-center">
          <h3 class="head-text p-my-4">Personal Information</h3>
          <hr/>
        </div>
      </div>

      <div class="p-grid p-mx-auto p-my-0">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Last Name</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">First Name</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Middle Name(s)</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Date of Birth (mm/dd/yyyy)</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1950:2005" v-model="birthDate" class="p-inputtext-sm"
                    dateFormat="mm/dd/yy"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Birth Place (city)</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Country of Birth</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Nationality</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Gender</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <div class="p-field-radiobutton p-my-auto">
            <RadioButton id="gender1" name="gender" value="Male" v-model="gender"/>
            <label for="gender1">Male</label>
            <p class="p-mr-3"></p>
            <RadioButton id="gender2" name="gender" value="Female" v-model="gender"/>
            <label for="gender2">Female</label>
          </div>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Hair Color</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Weight (kg)</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="number" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Height (cm)</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="number" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Do you have Tattoos?</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <div class="p-field-radiobutton p-my-auto">
            <RadioButton id="tattoo1" name="tattoo" value="Yes" v-model="tattoo"/>
            <label for="tattoo1">Yes</label>
            <p class="p-mr-3"></p>
            <RadioButton id="tattoo2" name="tattoo" value="No" v-model="tattoo"/>
            <label for="tattoo2">No</label>
          </div>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Are the tattoos visible when wearing short-sleeved shirts, shorts or skirts?</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <div class="p-field-radiobutton p-my-auto">
            <RadioButton id="tattooShowed1" name="tattoo" value="Yes" v-model="tattooShowed"/>
            <label for="tattooShowed1">Yes</label>
            <p class="p-mr-3"></p>
            <RadioButton id="tattooShowed2" name="tattoo" value="No" v-model="tattooShowed"/>
            <label for="tattooShowed2">No</label>
          </div>
        </div>
      </div>

      <div class="boxes"></div>

    </div>

    <!--  Contact Information  -->
    <div class="sub-section p-shadow-4 p-my-4">

      <div class="p-grid p-my-0">
        <div class="p-col p-text-center">
          <h3 class="head-text p-my-4">Contact Information</h3>
          <hr/>
        </div>
      </div>

      <div class="p-grid p-my-0">
        <div class="p-col p-text-center">
          <h3 class="head-text p-text-light p-mt-4 p-mb-0">Permanent Address</h3>
        </div>
      </div>

      <div class="p-grid p-mx-auto p-my-0">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Street 1</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-mx-auto p-my-0">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Street 2</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">City</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">State/Province</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Zip/Postal Code:</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="number" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Country</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-my-0">
        <div class="p-col p-text-center">
          <h3 class="head-text p-text-light p-mt-4 p-mb-0">Phone Numbers (include country codes and area codes) and E-mail</h3>
        </div>
      </div>

      <div class="p-grid p-mx-auto p-my-0">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">E-mail Address</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Home Phone</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Mobile Phone</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="boxes"></div>

    </div>

    <!--  Dependant Information  -->
    <div class="sub-section p-shadow-4 p-my-4">

      <div class="p-grid p-my-0">
        <div class="p-col p-text-center">
          <h3 class="head-text p-my-4">Dependant Information</h3>
          <hr/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Marital Status</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <div class="p-field-radiobutton p-my-auto">
            <RadioButton id="status1" name="status" value="Single" v-model="status"/>
            <label for="status1">Single</label>
            <p class="p-mr-3"></p>
            <RadioButton id="status2" name="status" value="Married" v-model="status"/>
            <label for="status2">Married</label>
            <p class="p-mr-3"></p>
            <RadioButton id="status3" name="status" value="Divorced" v-model="status"/>
            <label for="status3">Divorced</label>
            <p class="p-mr-3"></p>
            <RadioButton id="status4" name="status" value="Widowed" v-model="status"/>
            <label for="status4">Widowed</label>
            <p class="p-mr-3"></p>
            <RadioButton id="status5" name="status" value="Other" v-model="status"/>
            <label for="status5">Other</label>
          </div>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Number of children under 18 years of age?</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-my-0">
        <div class="p-col p-text-center">
          <h3 class="head-text p-text-light p-mt-4 p-mb-0">Emergency Contact Information</h3>
          <p>In the event of an emergency, I would like the company to contact the following person or persons</p>
        </div>
      </div>

      <div class="p-grid p-my-0">
        <div class="p-col p-text-center">
          <h3 class="p-text-bold p-mb-0">Person 1</h3>
        </div>
      </div>

      <div class="p-grid p-mx-auto p-my-0">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Last Name</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">First Name</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Middle Name(s)</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-mx-auto p-my-0">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">E-mail Address</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Home Phone</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Mobile Phone</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-my-0">
        <div class="p-col p-text-center">
          <h3 class="p-text-bold p-mb-0">Person 2</h3>
        </div>
      </div>

      <div class="p-grid p-mx-auto p-my-0">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Last Name</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">First Name</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Middle Name(s)</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-mx-auto p-my-0">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">E-mail Address</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Home Phone</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Mobile Phone</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="boxes"></div>

    </div>

    <!--  Position Desired  -->
    <div class="sub-section p-shadow-4 p-my-4">

      <div class="p-grid p-my-0">
        <div class="p-col p-text-center">
          <h3 class="head-text p-my-4">Position Desired</h3>
          <hr/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Position Desired</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Salary Desired (USD)</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="number" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Have you worked on cruise ships before</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <div class="p-field-radiobutton p-my-auto">
            <RadioButton id="worker1" name="worker" value="Yes" v-model="worker"/>
            <label for="worker1">Yes</label>
            <p class="p-mr-3"></p>
            <RadioButton id="worker2" name="worker" value="No" v-model="worker"/>
            <label for="worker2">No</label>
          </div>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">If yes, list last company</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="boxes"></div>

    </div>

    <div class="boxes"></div>

  </div>

</template>

<script>

export default {
  name: "ApplicationForEmployment",
  components: {},
  data() {
    return {
      birthDate: "",
      gender: "",
      tattoo: "",
      tattooShowed: "",
      status: "",
      worker: ""
    }
  },
  created() {
    this.tokenOnlyArea(true)
  },
  methods: {}
}
</script>

<style scoped lang="scss">

.boxes {
  height: 10px;
}

.sub-section {
  background-color: #efedef;
  width: 97%;
  margin: auto;
  border-radius: 25px;
}

.full-width {
  width: 98%;
}

.normal-width {
  width: 75%;
}

.medium-width {
  width: 50%;
}

.small-width {
  width: 35%;
}

@media only screen and (max-width: 768px) {
  .form-input {
    width: 98% !important;
  }

  .title {
    font-size: 22px;
  }

  .head-text {
    font-size: 20px !important;
  }

  .form-text {
    text-align: left !important;
    margin-bottom: 0px;
    margin-top: 0px;
    margin-left: 5px;
  }

  .mobile {
    display: block !important;
    font-size: 15px;
  }

  .logo-image {
    width: 100px !important;
    height: 100px !important;
  }

  .pc {
    display: none;
  }
}

.container {
  border-radius: 25px;
  width: 95%;
  background-color: #efedef;
}

.c-primary {
  color: #152b53;
}

.head-text {
  font-size: 25px;
}

.logo-image {
  width: 120px;
  height: 120px;
}
</style>

