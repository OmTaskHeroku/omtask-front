<template>
  <form>
    <h3>Login</h3>

    <div class="form-group">
      <label>Username</label>
      <input type="text" class="form-control" placeholder="Username" />
    </div>
    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" placeholder="Password" />
    </div>

    <button type="submit" class="btn btn-primary btn-block">Login</button>

    <p class="forgot-password text-center">
      <router-link to="forgot">Forgot password?</router-link>
    </p>

    <p class="registration text-center">
      <router-link to="registration"
        >You Don't have an account? Register</router-link
      >
    </p>
  </form>
</template>

<script>
export default {
  name: "LoginMain",
};
</script>

<style scoped>
</style>

