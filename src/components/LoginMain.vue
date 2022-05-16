<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>

    <div class="form-group">
      <label>Username</label>
      <input
        type="text"
        class="form-control"
        placeholder="Username"
        v-model="username"
      />
    </div>
    <div class="form-group">
      <label>Password</label>
      <input
        type="password"
        class="form-control"
        placeholder="Password"
        v-model="password"
      />
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
import axios from "axios";
export default {
  name: "LoginMain",

  data() {
    return {
      username: "",
    };
  },
  methods: {
    async handleSubmit() {
      const data = new FormData({
        username: this.username,
        password: this.password,
      });
      console.log(data);
      const res = await axios
        .post("https://omtask-back.herokuapp.com/login", data)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
      res.data.data;
      res.data.headers["Content-Type"];
    },
  },
};
</script>

<style scoped>
</style>

