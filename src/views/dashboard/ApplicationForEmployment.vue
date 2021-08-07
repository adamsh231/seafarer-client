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
          <InputText v-model="afe['personal_information']['last_name']" type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">First Name</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model="afe['personal_information']['first_name']" type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Middle Name(s)</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model="afe['personal_information']['middle_name']" type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Date of Birth (mm/dd/yyyy)</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1950:2050" v-model="afe['personal_information']['date_of_birth']"
                    class="p-inputtext-sm"
                    dateFormat="mm/dd/yy"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Birth Place (city)</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model="afe['personal_information']['birth_place']" type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Country of Birth</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model="afe['personal_information']['country_of_birth']" type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Nationality</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model="afe['personal_information']['nationality']" type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Gender</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <div class="p-field-radiobutton p-my-auto">
            <RadioButton id="gender1" name="gender" value="Male" v-model="afe['personal_information']['gender']"/>
            <label>Male</label>
            <p class="p-mr-3"></p>
            <RadioButton id="gender2" name="gender" value="Female" v-model="afe['personal_information']['gender']"/>
            <label>Female</label>
          </div>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Hair Color</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model="afe['personal_information']['hair_color']" type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Weight (kg)</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model.number="afe['personal_information']['weight']" type="number" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Height (cm)</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model.number="afe['personal_information']['height']" type="number" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Do you have Tattoos?</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <div class="p-field-radiobutton p-my-auto">
            <RadioButton name="tattoo" :value="true" v-model="afe['personal_information']['has_tattoo']"/>
            <label>Yes</label>
            <p class="p-mr-3"></p>
            <RadioButton name="tattoo" :value="false" v-model="afe['personal_information']['has_tattoo']"/>
            <label>No</label>
          </div>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Are the tattoos visible when wearing short-sleeved shirts, shorts or skirts?</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <div class="p-field-radiobutton p-my-auto">
            <RadioButton name="tattoo" :value="true" v-model="afe['personal_information']['is_tattoo_visible']"/>
            <label>Yes</label>
            <p class="p-mr-3"></p>
            <RadioButton name="tattoo" :value="false" v-model="afe['personal_information']['is_tattoo_visible']"/>
            <label>No</label>
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
          <InputText v-model="afe['contact_information']['street_1']" type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-mx-auto p-my-0">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Street 2</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model="afe['contact_information']['street_2']" type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">City</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model="afe['contact_information']['city']" type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">State/Province</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model="afe['contact_information']['state']" type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Zip/Postal Code:</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model="afe['contact_information']['zip']" type="number" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Country</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model="afe['contact_information']['country']" type="text" class="p-inputtext-sm"/>
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
          <InputText v-model="afe['contact_information']['email']" type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Home Phone</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model="afe['contact_information']['home_phone']" type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Mobile Phone</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model="afe['contact_information']['mobile_phone']" type="text" class="p-inputtext-sm"/>
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
            <RadioButton name="status" value="Single" v-model="afe['dependant_information']['marital_status']"/>
            <label>Single</label>
            <p class="p-mr-3"></p>
            <RadioButton id="status2" name="status" value="Married" v-model="afe['dependant_information']['marital_status']"/>
            <label>Married</label>
            <p class="p-mr-3"></p>
            <RadioButton id="status3" name="status" value="Divorced" v-model="afe['dependant_information']['marital_status']"/>
            <label>Divorced</label>
          </div>
          <div class="p-field-radiobutton p-my-auto">
            <RadioButton name="status" value="Widowed" v-model="afe['dependant_information']['marital_status']"/>
            <label>Widowed</label>
            <p class="p-mr-3"></p>
            <RadioButton name="status" value="Other" v-model="afe['dependant_information']['marital_status']"/>
            <label>Other</label>
          </div>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Number of children under 18 years of age?</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model.number="afe['dependant_information']['number_of_children_under_18']" type="text" class="p-inputtext-sm"/>
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
          <InputText v-model="afe['dependant_information']['persons'][0]['last_name']" type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">First Name</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model="afe['dependant_information']['persons'][0]['first_name']" type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Middle Name(s)</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model="afe['dependant_information']['persons'][0]['middle_name']" type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-mx-auto p-my-0">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">E-mail Address</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model="afe['dependant_information']['persons'][0]['email']" type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Home Phone</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model="afe['dependant_information']['persons'][0]['home_phone']" type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Mobile Phone</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model="afe['dependant_information']['persons'][0]['mobile_phone']" type="text" class="p-inputtext-sm"/>
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
          <InputText v-model="afe['dependant_information']['persons'][1]['last_name']" type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">First Name</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model="afe['dependant_information']['persons'][1]['first_name']" type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Middle Name(s)</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model="afe['dependant_information']['persons'][1]['middle_name']" type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-mx-auto p-my-0">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">E-mail Address</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model="afe['dependant_information']['persons'][1]['email']" type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Home Phone</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model="afe['dependant_information']['persons'][1]['home_phone']" type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Mobile Phone</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model="afe['dependant_information']['persons'][1]['mobile_phone']" type="text" class="p-inputtext-sm"/>
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
          <InputText v-model="afe['position_desired']['position_desired']" type="text" class="p-inputtext-sm form-input normal-width"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Salary Desired (USD)</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model.number="afe['position_desired']['salary_desired']" type="number" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Have you worked on cruise ships before</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <div class="p-field-radiobutton p-my-auto">
            <RadioButton name="worker" :value="true" v-model="afe['position_desired']['has_cruise_ship']"/>
            <label>Yes</label>
            <p class="p-mr-3"></p>
            <RadioButton name="worker" :value="false" v-model="afe['position_desired']['has_cruise_ship']"/>
            <label>No</label>
          </div>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">If yes, list last company</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model="afe['position_desired']['list_last_company']" type="text" class="p-inputtext-sm form-input normal-width"/>
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
          <InputText v-model="afe['documentation_information']['passport_number']" type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Passport Nationality</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model="afe['documentation_information']['passport_nationality']" type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Date of Issue (mm/dd/yyyy)</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1990:2050" v-model="afe['documentation_information']['date_of_issue']"
                    class="p-inputtext-sm"
                    dateFormat="mm/dd/yy"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Place of Issue</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <InputText v-model="afe['documentation_information']['place_of_issue']" type="text" class="p-inputtext-sm"/>
        </div>
      </div>

      <div class="p-grid p-m-auto">
        <div class="p-col-12 p-md-3">
          <p class="form-text p-text-right">Date of Expiration (mm/dd/yyyy)</p>
        </div>
        <div class="p-col-12 p-md-9 p-my-auto">
          <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1990:2050"
                    v-model="afe['documentation_information']['date_of_expiration']" class="p-inputtext-sm"
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
      <div v-for="(crewVisa, index) in afe['documentation_information']['crew_visas']">
        <Fieldset :legend="crewVisa.name" :toggleable="true" :collapsed="true" class="container-table">

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">{{ crewVisa.name }}</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <div class="p-field-radiobutton p-my-auto">
                <RadioButton name="worker" :value="true" v-model="afe['documentation_information']['crew_visas'][index]['yes_or_no']"/>
                <label>Yes</label>
                <p class="p-mr-3"></p>
                <RadioButton name="worker" :value="false" v-model="afe['documentation_information']['crew_visas'][index]['yes_or_no']"/>
                <label>No</label>
              </div>
            </div>
          </div>

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">Date of Expiration (mm/dd/yyyy)</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1990:2050"
                        v-model="afe['documentation_information']['crew_visas'][index]['date_of_expiration']" class="p-inputtext-sm"
                        dateFormat="mm/dd/yy"/>
            </div>
          </div>

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">Visa No</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <InputText v-model="afe['documentation_information']['crew_visas'][index]['visa_no']" type="text" class="p-inputtext-sm"/>
            </div>
          </div>

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">Type</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <InputText v-model="afe['documentation_information']['crew_visas'][index]['type']" type="text" class="p-inputtext-sm"/>
            </div>
          </div>

        </Fieldset>
      </div>

      <div class="p-grid p-my-0">
        <div class="p-col p-text-center">
          <div class="p-col p-text-center">
            <h3 class="head-text p-text-light p-mt-4 p-mb-0">STCW Certification</h3>
          </div>
        </div>
      </div>
      <div v-for="(stcwCertification, index) in afe['documentation_information']['stcw_certification']">
        <Fieldset :legend="stcwCertification.type" :toggleable="true" :collapsed="true" class="container-table">

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">{{ stcwCertification.type }}</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <div class="p-field-radiobutton p-my-auto">
                <RadioButton name="worker" :value="true" v-model="afe['documentation_information']['stcw_certification'][index]['yes_or_no']"/>
                <label>Yes</label>
                <p class="p-mr-3"></p>
                <RadioButton name="worker" :value="false" v-model="afe['documentation_information']['stcw_certification'][index]['yes_or_no']"/>
                <label>No</label>
              </div>
            </div>
          </div>

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">Date of Expiration (mm/dd/yyyy)</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1990:2050"
                        v-model="afe['documentation_information']['stcw_certification'][index]['date_of_expiration']" class="p-inputtext-sm"
                        dateFormat="mm/dd/yy"/>
            </div>
          </div>

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">Certificate Number</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <InputText v-model="afe['documentation_information']['stcw_certification'][index]['certificate_number']" type="text"
                         class="p-inputtext-sm"/>
            </div>
          </div>

        </Fieldset>
      </div>

      <div class="p-grid p-my-0">
        <div class="p-col p-text-center">
          <div class="p-col p-text-center">
            <h3 class="head-text p-text-light p-mt-4 p-mb-0">Seaman’s Books</h3>
          </div>
        </div>
      </div>
      <div v-for="(seamansBook, index) in afe['documentation_information']['seamans_book']">
        <Fieldset :legend="seamansBook.type" :toggleable="true" :collapsed="true" class="container-table">

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">{{ seamansBook.type }}</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <div class="p-field-radiobutton p-my-auto">
                <RadioButton name="worker" :value="true" v-model="afe['documentation_information']['seamans_book'][index]['yes_or_no']"/>
                <label>Yes</label>
                <p class="p-mr-3"></p>
                <RadioButton name="worker" :value="false" v-model="afe['documentation_information']['seamans_book'][index]['yes_or_no']"/>
                <label>No</label>
              </div>
            </div>
          </div>

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">Date of Expiration (mm/dd/yyyy)</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1990:2050"
                        v-model="afe['documentation_information']['seamans_book'][index]['date_of_expiration']" class="p-inputtext-sm"
                        dateFormat="mm/dd/yy"/>
            </div>
          </div>

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">Number</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <InputText v-model="afe['documentation_information']['seamans_book'][index]['number']" type="text" class="p-inputtext-sm"/>
            </div>
          </div>

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">Nationality</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <InputText v-model="afe['documentation_information']['seamans_book'][index]['nationality']" type="text" class="p-inputtext-sm"/>
            </div>
          </div>

        </Fieldset>
      </div>

      <div class="p-grid p-my-0">
        <div class="p-col p-text-center">
          <div class="p-col p-text-center">
            <h3 class="head-text p-text-light p-mt-4 p-mb-0">Other Certificates</h3>
          </div>
        </div>
      </div>
      <div v-for="(otherCertificates, index) in afe['documentation_information']['other_certificates']">
        <Fieldset :legend="otherCertificates.type" :toggleable="true" :collapsed="true" class="container-table">

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">{{ otherCertificates.type }}</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <div class="p-field-radiobutton p-my-auto">
                <RadioButton name="worker" value="N/A" v-model="afe['documentation_information']['other_certificates'][index]['yes_or_no_or_na']"/>
                <label>N/A</label>
                <p class="p-mr-3"></p>
                <RadioButton name="worker" value="Yes" v-model="afe['documentation_information']['other_certificates'][index]['yes_or_no_or_na']"/>
                <label>Yes</label>
                <p class="p-mr-3"></p>
                <RadioButton name="worker" value="No" v-model="afe['documentation_information']['other_certificates'][index]['yes_or_no_or_na']"/>
                <label>No</label>
              </div>
            </div>
          </div>

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">Date of Issue (mm/dd/yyyy)</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1990:2050"
                        v-model="afe['documentation_information']['other_certificates'][index]['date_of_issue']" class="p-inputtext-sm"
                        dateFormat="mm/dd/yy"/>
            </div>
          </div>

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">Date of Expiration (mm/dd/yyyy)</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1990:2050"
                        v-model="afe['documentation_information']['other_certificates'][index]['date_of_expiration']" class="p-inputtext-sm"
                        dateFormat="mm/dd/yy"/>
            </div>
          </div>

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">Comments</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <InputText v-model="afe['documentation_information']['other_certificates'][index]['comments']" type="text"
                         class="p-inputtext-sm"/>
            </div>
          </div>

        </Fieldset>
      </div>

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

      <div v-for="(employmentHistory, index) in afe['employment_history']">
        <Fieldset :legend="'Employer ' + (index + 1)" :toggleable="true" :collapsed="true" class="container-table">

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">Employer/Company Name</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <InputText v-model="afe['employment_history'][index]['employer_name']" type="text"
                         class="p-inputtext-sm form-input normal-width"/>
            </div>
          </div>

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">Company Phone No</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <InputText v-model="afe['employment_history'][index]['company_phone_no']" type="text"
                         class="p-inputtext-sm"/>
            </div>
          </div>

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">Position Held</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <InputText v-model="afe['employment_history'][index]['position_held']" type="text"
                         class="p-inputtext-sm form-input normal-width"/>
            </div>
          </div>

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">Supervisor Name</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <InputText v-model="afe['employment_history'][index]['supervisor_name']" type="text"
                         class="p-inputtext-sm form-input normal-width"/>
            </div>
          </div>

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">From (mm/dd/yyyy)</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1950:2050"
                        v-model="afe['employment_history'][index]['from']" class="p-inputtext-sm"
                        dateFormat="mm/dd/yy"/>
            </div>
          </div>

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">To (mm/dd/yyyy)</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1950:2050"
                        v-model="afe['employment_history'][index]['to']" class="p-inputtext-sm"
                        dateFormat="mm/dd/yy"/>
            </div>
          </div>

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">Starting Salary in USD</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <InputText v-model.number="afe['employment_history'][index]['starting_salary']" type="number"
                         class="p-inputtext-sm"/>
            </div>
          </div>

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">Ending Salary in USD</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <InputText v-model.number="afe['employment_history'][index]['end_salary']" type="number"
                         class="p-inputtext-sm"/>
            </div>
          </div>

          <div class="p-grid p-mx-auto p-my-0">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">Reason for Leaving</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <InputText v-model="afe['employment_history'][index]['reason_for_leaving']" type="text"
                         class="p-inputtext-sm form-input normal-width"/>
            </div>
          </div>

        </Fieldset>
      </div>

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

      <div v-for="(education, index) in afe['education']">
        <Fieldset :legend="education.type" :toggleable="true" :collapsed="true" class="container-table">

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">School Name</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <InputText v-model="afe['education'][index]['school_name_and_city']" type="text" class="p-inputtext-sm form-input normal-width"/>
            </div>
          </div>

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">No. of Years</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <InputText v-model.number="afe['education'][index]['no_of_years']" type="text" class="p-inputtext-sm"/>
            </div>
          </div>

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">From (mm/dd/yyyy)</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1950:2050" v-model="afe['education'][index]['from']"
                        class="p-inputtext-sm"
                        dateFormat="mm/dd/yy"/>
            </div>
          </div>

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">To (mm/dd/yyyy)</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <Calendar :monthNavigator="true" :yearNavigator="true" yearRange="1950:2050" v-model="afe['education'][index]['to']"
                        class="p-inputtext-sm"
                        dateFormat="mm/dd/yy"/>
            </div>
          </div>

          <div class="p-grid p-mx-auto p-my-0">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">Major/Diploma</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <InputText v-model="afe['education'][index]['major']" type="text" class="p-inputtext-sm form-input normal-width"/>
            </div>
          </div>

        </Fieldset>
      </div>

      <div class="boxes"></div>

    </div>

    <!--  Languages  -->
    <div class="sub-section p-shadow-4 p-my-4">

      <div class="p-grid p-my-0">
        <div class="p-col p-text-center">
          <h3 class="head-text p-my-4">Languages</h3>
          <hr/>
        </div>
      </div>

      <div v-for="(language, index) in afe['languages']">
        <Fieldset :legend="language.language" :toggleable="true" :collapsed="true" class="container-table">

          <div v-if="language['is_other']" class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">Language</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto">
              <InputText v-model="afe['languages'][index]['language']" type="text" class="p-inputtext-sm form-input normal-width"/>
            </div>
          </div>

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">Proficiency Level Speak</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto small-text">
              <div class="p-field-radiobutton p-my-auto">
                <RadioButton v-if="language['n/a']" name="gpls" value="N/A" v-model="afe['languages'][index]['proviciency_level_speak']"/>
                <label v-if="language['n/a']">N/A</label>
                <p v-if="language['n/a']" class="p-mr-3"></p>
                <RadioButton name="gpls" value="Beginner" v-model="afe['languages'][index]['proviciency_level_speak']"/>
                <label>Beginner</label>
              </div>
              <div class="p-field-radiobutton p-my-auto">
                <RadioButton name="gpls" value="Intermediate" v-model="afe['languages'][index]['proviciency_level_speak']"/>
                <label>Intermediate</label>
                <p class="p-mr-3"></p>
                <RadioButton name="gpls" value="Fluent" v-model="afe['languages'][index]['proviciency_level_speak']"/>
                <label>Fluent</label>
              </div>
            </div>
          </div>

          <div class="p-grid p-m-auto">
            <div class="p-col-12 p-md-3">
              <p class="form-text p-text-right">Proficiency Level Write</p>
            </div>
            <div class="p-col-12 p-md-9 p-my-auto small-text">
              <div class="p-field-radiobutton p-my-auto">
                <RadioButton v-if="language['n/a']" name="gplw" value="N/A" v-model="afe['languages'][index]['proviciency_level_write']"/>
                <label v-if="language['n/a']">N/A</label>
                <p v-if="language['n/a']" class="p-mr-3"></p>
                <RadioButton name="gplw" value="Beginner" v-model="afe['languages'][index]['proviciency_level_write']"/>
                <label>Beginner</label>
              </div>
              <div class="p-field-radiobutton p-my-auto">
                <RadioButton name="gplw" value="Intermediate" v-model="afe['languages'][index]['proviciency_level_write']"/>
                <label>Intermediate</label>
                <p class="p-mr-3"></p>
                <RadioButton name="gplw" value="Fluent" v-model="afe['languages'][index]['proviciency_level_write']"/>
                <label>Fluent</label>
              </div>
            </div>
          </div>

        </Fieldset>
      </div>

      <div class="boxes"></div>

    </div>

    <!--  Save Button  -->
    <div class="p-text-center">
      <hr>
      <Button style="width: 95%" label="Save" class="p-button-lg p-my-4" @click="save"/>
    </div>

    <div class="boxes"></div>

  </div>

</template>

<script>

import axios from "axios";

export default {
  name: "ApplicationForEmployment",
  components: {},
  data() {
    return {
      afe: {
        "personal_information": {},
        "contact_information": {},
        "dependant_information": {"persons": [{"last_name": ""}, {"last_name": ""}]},
        "position_desired": {},
        "documentation_information": {
          "crew_visas": [
            {"name": "C1/D"},
            {"name": "C1"},
            {"name": "D"},
            {"name": "Schengen"},
            {"name": "Other 1"},
            {"name": "Other 2"}
          ],
          "stcw_certification": [
            {"type": "Elementary First Aid (BST)"},
            {"type": "Fire Prevention & Fire Fighting (BST)"},
            {"type": "Personal Safety & Social Responsibility (BST)"},
            {"type": "Personal Survival Techniques (BST)"},
            {"type": "Crowd Management & Passenger Safety"},
            {"type": "Crisis Management & Human Behavior"},
            {"type": "Security Awareness"}],
          "seamans_book": [
            {"type": "National"},
            {"type": "Flag State 1"},
            {"type": "Flag State 2"}
          ],
          "other_certificates": [
            {"type": "Ship’s Cook"},
            {"type": "Other 1"}
          ]
        },
        "employment_history": [{"employer_name": ""}, {"employer_name": ""}, {"employer_name": ""}],
        "education": [
          {"type": "High School"},
          {"type": "College"},
          {"type": "University"},
          {"type": "Apprenticeship"},
          {"type": "Other"},
        ],
        "languages": [
          {"language": "English (mandatory)", "n/a": false, "is_other" : false},
          {"language": "Spanish", "n/a": true, "is_other" : false},
          {"language": "French", "n/a": true, "is_other" : false},
          {"language": "German", "n/a": true, "is_other" : false},
          {"language": "Other 1", "n/a": false, "is_other" : true},
          {"language": "Other 2", "n/a": false, "is_other" : true},
        ]
      },
    }
  },
  created() {
    this.tokenOnlyArea(true)
    this.getData()
  },
  methods: {
    save(){

      // init header
      const context = this
      let url = `${context.apiDocumentUrl}/afe`
      let formData = this.afe
      let header = {
        headers: {
          'Authorization': `Bearer ${context.getCookie(context.tokenCookie)}`,
        }
      }

      // upload file
      axios.post(url, formData, header).then(function (response) {

        // reload
        context.showToast(context.toastSeveritySuccess, context.toastSeveritySuccess, context.toastDefaultLife)

      }).catch(function (error) {

        // show error
        context.showToast(context.toastSeverityError, error.message, context.toastDefaultLife)

      })

      // reload
      this.getData()

    },
    getData(){

      // init header
      const context = this
      let url = `${context.apiDocumentUrl}/afe`
      let header = {
        headers: {
          'Authorization': `Bearer ${context.getCookie(context.tokenCookie)}`,
        }
      }

      // upload file
      axios.get(url, header).then(function (response) {

        // bind
        context.afe = response.data.data

      }).catch(function (error) {

        // show error
        context.showToast(context.toastSeverityError, error.message, context.toastDefaultLife)

      })
    }
  }
}
</script>

<style scoped lang="scss">

.small-text {
  font-size: 14px;
}

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

