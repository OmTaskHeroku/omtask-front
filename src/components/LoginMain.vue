<template>
<form>
    <h3>Login</h3>

    <div class="form-group">
      <label>Username</label>
      <input type="text" class="form-control" placeholder="Username"/>
    </div>
  <div class="form-group">
    <label>Password</label>
    <input type="password" class="form-control" placeholder="Password"/>
  </div>

  <button class="btn btn-primary btn-block">Login</button>

  <p class="forgot-passwprd text-right">
    <router-link to="forgot">Forgot password?</router-link>
  </p>

</form>
</template>

<script>
export default {
  name: "LoginMain"
}
</script>

<style scoped>

</style>