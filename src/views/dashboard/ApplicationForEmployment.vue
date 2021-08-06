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
          </div>
          <div class="p-field-radiobutton p-my-auto">
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
          <h3 class="p-text-bold p-my-0">Person 1</h3>
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

    <!--  Documentation Information  -->
    <div class="sub-section p-shadow-4 p-my-4">

      <div class="p-grid p-my-0">
        <div class="p-col p-text-center">
          <h3 class="head-text p-my-4">Documentation Information</h3>
          <hr/>
          <div class="p-col p-text-center">
            <h3 class="head-text p-text-light p-mt-4 p-mb-0">Passport Information</h3>
          </div>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Passport Number</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Passport Nationality</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Date of Issue (mm/dd/yyyy)</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="2000:2050" v-model="passportIssue" class="p-inputtext-sm"
                    dateFormat="mm/dd/yy"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Place of Issue</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Date of Expiration (mm/dd/yyyy)</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="2000:2050" v-model="passportExp" class="p-inputtext-sm"
                    dateFormat="mm/dd/yy"/>
        </div>
      </div>

      <div class="p-grid p-my-0">
        <div class="p-col p-text-center">
          <div class="p-col p-text-center">
            <h3 class="head-text p-text-light p-mt-4 p-mb-0">Crew Visas</h3>
          </div>
        </div>
      </div>

      <Fieldset legend="C1/D" :toggleable="true" :collapsed="true" class="container-table">

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">C1/D</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <div class="p-field-radiobutton p-my-auto">
              <RadioButton id="c1d1" name="worker" value="Yes" v-model="c1d"/>
              <label for="c1d1">Yes</label>
              <p class="p-mr-3"></p>
              <RadioButton id="c1d2" name="worker" value="No" v-model="c1d"/>
              <label for="c1d2">No</label>
            </div>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Date of Expiration (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="2000:2050" v-model="c1dExpiration" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Visa No</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Type</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

      </Fieldset>

      <Fieldset legend="C1" :toggleable="true" :collapsed="true" class="container-table">

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">C1</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <div class="p-field-radiobutton p-my-auto">
              <RadioButton id="c11" name="worker" value="Yes" v-model="c1"/>
              <label for="c11">Yes</label>
              <p class="p-mr-3"></p>
              <RadioButton id="c12" name="worker" value="No" v-model="c1"/>
              <label for="c12">No</label>
            </div>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Date of Expiration (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="2000:2050" v-model="c1Expiration" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Visa No</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Type</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

      </Fieldset>

      <Fieldset legend="D" :toggleable="true" :collapsed="true" class="container-table">

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">D</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <div class="p-field-radiobutton p-my-auto">
              <RadioButton id="d1" name="worker" value="Yes" v-model="d"/>
              <label for="d1">Yes</label>
              <p class="p-mr-3"></p>
              <RadioButton id="d2" name="worker" value="No" v-model="d"/>
              <label for="d2">No</label>
            </div>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Date of Expiration (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="2000:2050" v-model="dExpiration" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Visa No</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Type</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

      </Fieldset>

      <Fieldset legend="Schengen" :toggleable="true" :collapsed="true" class="container-table">

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Schengen</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <div class="p-field-radiobutton p-my-auto">
              <RadioButton id="schengen1" name="worker" value="Yes" v-model="schengen"/>
              <label for="schengen1">Yes</label>
              <p class="p-mr-3"></p>
              <RadioButton id="schengen2" name="worker" value="No" v-model="schengen"/>
              <label for="schengen2">No</label>
            </div>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Date of Expiration (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="2000:2050" v-model="schengenExpiration" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Visa No</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Type</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

      </Fieldset>

      <Fieldset legend="Other 1" :toggleable="true" :collapsed="true" class="container-table">

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Other 1</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <div class="p-field-radiobutton p-my-auto">
              <RadioButton id="other11" name="worker" value="Yes" v-model="other1"/>
              <label for="other11">Yes</label>
              <p class="p-mr-3"></p>
              <RadioButton id="other11" name="worker" value="No" v-model="other1"/>
              <label for="other11">No</label>
            </div>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Date of Expiration (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="2000:2050" v-model="other1Expiration" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Visa No</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Type</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

      </Fieldset>

      <Fieldset legend="Other 2" :toggleable="true" :collapsed="true" class="container-table">

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Other 2</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <div class="p-field-radiobutton p-my-auto">
              <RadioButton id="other21" name="worker" value="Yes" v-model="other2"/>
              <label for="other21">Yes</label>
              <p class="p-mr-3"></p>
              <RadioButton id="other22" name="worker" value="No" v-model="other2"/>
              <label for="other22">No</label>
            </div>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Date of Expiration (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="2000:2050" v-model="other2Expiration" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Visa No</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Type</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

      </Fieldset>

      <div class="p-grid p-my-0">
        <div class="p-col p-text-center">
          <div class="p-col p-text-center">
            <h3 class="head-text p-text-light p-mt-4 p-mb-0">STCW Certification</h3>
          </div>
        </div>
      </div>

      <Fieldset legend="Elementary First Aid (BST)" :toggleable="true" :collapsed="true" class="container-table">

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Elementary First Aid (BST)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <div class="p-field-radiobutton p-my-auto">
              <RadioButton id="efa1" name="worker" value="Yes" v-model="efa"/>
              <label for="efa1">Yes</label>
              <p class="p-mr-3"></p>
              <RadioButton id="efa2" name="worker" value="No" v-model="efa"/>
              <label for="efa2">No</label>
            </div>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Date of Expiration (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="2000:2050" v-model="efaExpiration" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Visa No</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

      </Fieldset>

      <Fieldset legend="Fire Prevention & Fire Fighting (BST)" :toggleable="true" :collapsed="true" class="container-table">

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Fire Prevention & Fire Fighting (BST)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <div class="p-field-radiobutton p-my-auto">
              <RadioButton id="fpff1" name="worker" value="Yes" v-model="fpff"/>
              <label for="fpff1">Yes</label>
              <p class="p-mr-3"></p>
              <RadioButton id="fpff2" name="worker" value="No" v-model="fpff"/>
              <label for="fpff2">No</label>
            </div>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Date of Expiration (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="2000:2050" v-model="fpffExpiration" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Visa No</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

      </Fieldset>

      <Fieldset legend="Personal Safety & Social Responsibility (BST)" :toggleable="true" :collapsed="true" class="container-table">

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Personal Safety & Social Responsibility (BST)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <div class="p-field-radiobutton p-my-auto">
              <RadioButton id="pssr1" name="worker" value="Yes" v-model="pssr"/>
              <label for="pssr1">Yes</label>
              <p class="p-mr-3"></p>
              <RadioButton id="pssr2" name="worker" value="No" v-model="pssr"/>
              <label for="pssr2">No</label>
            </div>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Date of Expiration (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="2000:2050" v-model="pssrExpiration" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Visa No</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

      </Fieldset>

      <Fieldset legend="Personal Survival Techniques (BST)" :toggleable="true" :collapsed="true" class="container-table">

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Personal Survival Techniques (BST)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <div class="p-field-radiobutton p-my-auto">
              <RadioButton id="pst1" name="worker" value="Yes" v-model="pst"/>
              <label for="pst1">Yes</label>
              <p class="p-mr-3"></p>
              <RadioButton id="pst2" name="worker" value="No" v-model="pst"/>
              <label for="pst2">No</label>
            </div>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Date of Expiration (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="2000:2050" v-model="pstExpiration" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Visa No</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

      </Fieldset>

      <Fieldset legend="Crowd Management & Passenger Safety" :toggleable="true" :collapsed="true" class="container-table">

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Crowd Management & Passenger Safety</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <div class="p-field-radiobutton p-my-auto">
              <RadioButton id="cmps1" name="worker" value="Yes" v-model="cmps"/>
              <label for="cmps1">Yes</label>
              <p class="p-mr-3"></p>
              <RadioButton id="cmps2" name="worker" value="No" v-model="cmps"/>
              <label for="cmps2">No</label>
            </div>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Date of Expiration (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="2000:2050" v-model="cmpsExpiration" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Visa No</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

      </Fieldset>

      <Fieldset legend="Crisis Management & Human Behavior" :toggleable="true" :collapsed="true" class="container-table">

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Crisis Management & Human Behavior</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <div class="p-field-radiobutton p-my-auto">
              <RadioButton id="cmhb1" name="worker" value="Yes" v-model="cmhb"/>
              <label for="cmhb1">Yes</label>
              <p class="p-mr-3"></p>
              <RadioButton id="cmhb2" name="worker" value="No" v-model="cmhb"/>
              <label for="cmhb2">No</label>
            </div>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Date of Expiration (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="2000:2050" v-model="cmhbExpiration" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Visa No</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

      </Fieldset>

      <Fieldset legend="Security Awareness" :toggleable="true" :collapsed="true" class="container-table">

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Security Awareness</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <div class="p-field-radiobutton p-my-auto">
              <RadioButton id="sa1" name="worker" value="Yes" v-model="sa"/>
              <label for="sa1">Yes</label>
              <p class="p-mr-3"></p>
              <RadioButton id="sa2" name="worker" value="No" v-model="sa"/>
              <label for="sa2">No</label>
            </div>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Date of Expiration (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="2000:2050" v-model="saExpiration" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Visa No</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

      </Fieldset>

      <div class="p-grid p-my-0">
        <div class="p-col p-text-center">
          <div class="p-col p-text-center">
            <h3 class="head-text p-text-light p-mt-4 p-mb-0">Seaman’s Books</h3>
          </div>
        </div>
      </div>

      <Fieldset legend="National" :toggleable="true" :collapsed="true" class="container-table">

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">National</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <div class="p-field-radiobutton p-my-auto">
              <RadioButton id="national1" name="worker" value="Yes" v-model="national"/>
              <label for="national1">Yes</label>
              <p class="p-mr-3"></p>
              <RadioButton id="national2" name="worker" value="No" v-model="national"/>
              <label for="national2">No</label>
            </div>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Date of Expiration (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="2000:2050" v-model="nationalExpiration" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Number</p>
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

      </Fieldset>

      <Fieldset legend="Flag State 1" :toggleable="true" :collapsed="true" class="container-table">

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Flag State 1</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <div class="p-field-radiobutton p-my-auto">
              <RadioButton id="fs11" name="worker" value="Yes" v-model="fs1"/>
              <label for="fs11">Yes</label>
              <p class="p-mr-3"></p>
              <RadioButton id="fs12" name="worker" value="No" v-model="fs1"/>
              <label for="fs12">No</label>
            </div>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Date of Expiration (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="2000:2050" v-model="fs1Expiration" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Number</p>
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

      </Fieldset>

      <Fieldset legend="Flag State 2" :toggleable="true" :collapsed="true" class="container-table">

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Flag State 2</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <div class="p-field-radiobutton p-my-auto">
              <RadioButton id="fs21" name="worker" value="Yes" v-model="fs2"/>
              <label for="fs21">Yes</label>
              <p class="p-mr-3"></p>
              <RadioButton id="fs22" name="worker" value="No" v-model="fs2"/>
              <label for="fs22">No</label>
            </div>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Date of Expiration (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="2000:2050" v-model="fs2Expiration" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Number</p>
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

      </Fieldset>

      <div class="p-grid p-my-0">
        <div class="p-col p-text-center">
          <div class="p-col p-text-center">
            <h3 class="head-text p-text-light p-mt-4 p-mb-0">Other Certificates</h3>
          </div>
        </div>
      </div>

      <Fieldset legend="Ship’s Cook" :toggleable="true" :collapsed="true" class="container-table">

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Ship’s Cook</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <div class="p-field-radiobutton p-my-auto">
              <RadioButton id="sc1" name="worker" value="Yes" v-model="sc"/>
              <label for="sc1">Yes</label>
              <p class="p-mr-3"></p>
              <RadioButton id="sc2" name="worker" value="No" v-model="sc"/>
              <label for="sc2">No</label>
            </div>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Date of Issue (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="2000:2050" v-model="scIssue" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Date of Expiration (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="2000:2050" v-model="scExpiration" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Comments</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

      </Fieldset>

      <Fieldset legend="Other 1" :toggleable="true" :collapsed="true" class="container-table">

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Other 1:</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <div class="p-field-radiobutton p-my-auto">
              <RadioButton id="sc1" name="worker" value="Yes" v-model="oco1"/>
              <label for="oco11">Yes</label>
              <p class="p-mr-3"></p>
              <RadioButton id="sc2" name="worker" value="No" v-model="oco1"/>
              <label for="oco11">No</label>
            </div>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Date of Issue (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="2000:2050" v-model="oco1Issue" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Date of Expiration (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="2000:2050" v-model="oco1Expiration" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Comments</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

      </Fieldset>

      <div class="boxes"></div>

    </div>

    <!--  Employment History  -->
    <div class="sub-section p-shadow-4 p-my-4">

      <div class="p-grid p-my-0">
        <div class="p-col p-text-center">
          <h3 class="head-text p-my-4">Employment History</h3>
          <hr/>
          <div class="p-col p-text-center">
            <h3 class="head-text p-text-light p-mt-4 p-mb-0">List most recent employer first</h3>
          </div>
        </div>
      </div>

      <Fieldset legend="Employer 1" :toggleable="true" :collapsed="true" class="container-table">

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Employer/Company Name</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Company Phone No</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Position Held</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Supervisor Name</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">From (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1950:2005" v-model="employer1From" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">To (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1950:2005" v-model="employer1To" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Starting Salary in USD</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="number" class="p-inputtext-sm"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Ending Salary in USD</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="number" class="p-inputtext-sm"/>
          </div>
        </div>

        <div class="p-grid p-mx-auto p-my-0">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Reason for Leaving</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
          </div>
        </div>

      </Fieldset>

      <Fieldset legend="Employer 2" :toggleable="true" :collapsed="true" class="container-table">

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Employer/Company Name</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Company Phone No</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Position Held</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Supervisor Name</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">From (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1950:2005" v-model="employer2From" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">To (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1950:2005" v-model="employer2To" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Starting Salary in USD</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="number" class="p-inputtext-sm"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Ending Salary in USD</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="number" class="p-inputtext-sm"/>
          </div>
        </div>

        <div class="p-grid p-mx-auto p-my-0">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Reason for Leaving</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
          </div>
        </div>

      </Fieldset>

      <Fieldset legend="Employer 3" :toggleable="true" :collapsed="true" class="container-table">

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Employer/Company Name</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Company Phone No</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Position Held</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Supervisor Name</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">From (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1950:2005" v-model="employer3From" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">To (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1950:2005" v-model="employer3To" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Starting Salary in USD</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="number" class="p-inputtext-sm"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Ending Salary in USD</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="number" class="p-inputtext-sm"/>
          </div>
        </div>

        <div class="p-grid p-mx-auto p-my-0">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Reason for Leaving</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
          </div>
        </div>

      </Fieldset>

      <div class="boxes"></div>

    </div>

    <!--  Education  -->
    <div class="sub-section p-shadow-4 p-my-4">

      <div class="p-grid p-my-0">
        <div class="p-col p-text-center">
          <h3 class="head-text p-my-4">Education</h3>
          <hr/>
        </div>
      </div>

      <Fieldset legend="High School" :toggleable="true" :collapsed="true" class="container-table">

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">School Name and City</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">No. of Years</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">From (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1950:2005" v-model="eduhsFrom" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">To (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1950:2005" v-model="eduhsTo" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-mx-auto p-my-0">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Major/Diploma</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
          </div>
        </div>

      </Fieldset>

      <Fieldset legend="College" :toggleable="true" :collapsed="true" class="container-table">

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">School Name and City</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">No. of Years</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">From (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1950:2005" v-model="educolFrom" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">To (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1950:2005" v-model="educolTo" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-mx-auto p-my-0">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Major/Diploma</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
          </div>
        </div>

      </Fieldset>

      <Fieldset legend="University" :toggleable="true" :collapsed="true" class="container-table">

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">School Name and City</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">No. of Years</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">From (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1950:2005" v-model="eduuniFrom" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">To (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1950:2005" v-model="eduuniTo" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-mx-auto p-my-0">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Major/Diploma</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
          </div>
        </div>

      </Fieldset>

      <Fieldset legend="Apprenticeship" :toggleable="true" :collapsed="true" class="container-table">

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">School Name and City</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">No. of Years</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">From (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1950:2005" v-model="eduappFrom" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">To (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1950:2005" v-model="eduappTo" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-mx-auto p-my-0">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Major/Diploma</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
          </div>
        </div>

      </Fieldset>

      <Fieldset legend="Other" :toggleable="true" :collapsed="true" class="container-table">

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">School Name and City</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">No. of Years</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">From (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1950:2005" v-model="eduotherFrom" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-m-auto">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">To (mm/dd/yyyy)</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1950:2005" v-model="eduotherTo" class="p-inputtext-sm"
                      dateFormat="mm/dd/yy"/>
          </div>
        </div>

        <div class="p-grid p-mx-auto p-my-0">
          <div class="p-col-12 p-md-3">
            <p class="form-text p-text-right">Major/Diploma</p>
          </div>
          <div class="p-col-12 p-md-9 p-my-auto">
            <InputText type="text" class="p-inputtext-sm form-input normal-width"/>
          </div>
        </div>

      </Fieldset>

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
      worker: "",
      passportIssue: "",
      passportExp: "",
      c1d: "",
      c1dExpiration: "",
      c1: "",
      c1Expiration: "",
      d: "",
      dExpiration: "",
      schengen: "",
      schengenExpiration: "",
      other1: "",
      other1Expiration: "",
      other2: "",
      other2Expiration: "",
      efa: "",
      efaExpiration: "",
      fpff: "",
      fpffExpiration: "",
      pssr: "",
      pssrExpiration: "",
      pst: "",
      pstExpiration: "",
      cmps: "",
      cmpsExpiration: "",
      cmhb: "",
      cmhbExpiration: "",
      sa: "",
      saExpiration: "",
      national: "",
      nationalExpiration: "",
      fs1: "",
      fs1Expiration: "",
      fs2: "",
      fs2Expiration: "",
      sc: "",
      scIssue: "",
      scExpiration: "",
      oco1: "",
      oco1Issue: "",
      oco1Expiration: "",
      employer1From: "",
      employer1To: "",
      employer2From: "",
      employer2To: "",
      employer3From: "",
      employer3To: "",
      eduhsFrom: "",
      eduhsTo: "",
      educolFrom: "",
      educolTo: "",
      eduuniFrom: "",
      eduuniTo: "",
      eduappFrom: "",
      eduappTo: "",
      eduotherFrom: "",
      eduotherTo: ""
    }
  },
  created() {
    this.tokenOnlyArea(true)
  },
  methods: {}
}
</script>

<style scoped lang="scss">

.container-table {
  background-color: #efedef;
  border: 1px solid darkgrey;
  border-radius: 10px;
  width: 95%;
  margin: auto;
}

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

