<template>
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

  </head>
  <!-- Default form register -->
  <form>
    <p class="h4 text-center mb-4">Sign up</p>
    <label for="defaultFormRegisterNameEx" class="grey-text">Your name</label>
    <input type="text" id="defaultFormRegisterNameEx" class="form-control" />
    <br />
    <label for="defaultFormRegisterEmailEx" class="grey-text">Your email</label>
    <input type="email" id="defaultFormRegisterEmailEx" class="form-control" />
    <br />
    <label for="defaultFormRegisterConfirmEx" class="grey-text">Confirm your email</label>
    <input type="email" id="defaultFormRegisterConfirmEx" class="form-control" />
    <br />
    <label for="defaultFormRegisterPasswordEx" class="grey-text">Your password</label>
    <input type="password" id="defaultFormRegisterPasswordEx" class="form-control" />
    <div class="text-center mt-4">
      <button class="btn btn-unique" type="submit" formtarget="LoginMain.vue">Register</button>
    </div>
  </form>
  <!-- Default form register -->
</template>

<script>

export default {
  name: 'RegistrationMain'
}
</script>

<style scoped>

</style>