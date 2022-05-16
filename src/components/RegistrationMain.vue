<template>
  <!--  <head>-->
  <!--    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">-->
  <!--    <title>-->

  <!--    </title>-->

  <!--  </head>-->
  <!-- Default form register -->
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>
    <div class="form-group">
      <label>Username</label>
      <input
        type="text"
        class="form-control"
        v-model="username"
        placeholder="Username"
      />
    </div>

    <div class="form-group">
      <label>First Name</label>
      <input
        type="text"
        class="form-control"
        v-model="first_name"
        placeholder="First Name"
      />
    </div>

    <div class="form-group">
      <label>Last Name</label>
      <input
        type="text"
        class="form-control"
        v-model="last_name"
        placeholder="Last Name"
      />
    </div>

    <div class="form-group">
      <label>Email</label>
      <input
        type="email"
        class="form-control"
        v-model="email"
        placeholder="Email"
      />
    </div>

    <div class="form-group">
      <label>Password</label>
      <input
        type="password"
        class="form-control"
        v-model="password"
        placeholder="Password"
      />
    </div>

    <div class="form-group">
      <label>Confirm Password</label>
      <input
        type="password"
        class="form-control"
        v-model="password_confirm"
        placeholder="Confirm Password"
      />
    </div>

    <input type="submit" class="btn btn-primary btn-block" value="Sign up" />

    <p class="login text-right">
      <router-link to="login">Already Registered?</router-link>
    </p>
  </form>
  <!-- Default form register -->
</template>

<script>
import axios from "axios";

export default {
  name: "RegistrationMain",
  data() {
    return {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirm: "",
    };
  },
  methods: {
    async handleSubmit() {
      console.log("he");
      const data = JSON.stringify({
        name: this.first_name,
        surname: this.last_name,
        username: this.username,
        mail: this.email,
        password: this.password,
      });
      console.log(data);
      const res = await axios
        .post("https://omtask-back.herokuapp.com/user", data, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => {
          console.log(res.data);
          this.$router.push("/Login");
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
form {
  width: 50%;
  margin: auto;
}
</style>