<template>
  <div class="grid h-fit mt-10 justify-center">
    <form class="grid gap-5 mx-10 w-fit" @submit.prevent="handleSubmit">
      <h1 class="text-center font-semibold text-lg">
        Why wait? Sign up now and start shopping
      </h1>

      <label class="">Full Name:</label>
      <input type="name" required v-model="name" placeholder="Full Name" />

      <label class="">Email:</label>
      <input type="email" required v-model="email" placeholder="Email" />

      <label>Password:</label>
      <input
        type="password"
        required
        v-model="password"
        placeholder="Password"
      />
      <div v-if="passwordError" class="error">{{ passwordError }}</div>

      <div class="">
        <button @click="register" class=" ">Join Now</button>
        <div class="place-self-start text-[10px] flex gap-1">
          <p>Already have an account?</p>
          <a class="cursor-pointer underline underline-offset-1" href="/login"
            >log in</a
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      terms: false,
      passwordError: "",
    };
  },
  methods: {
    handleSubmit() {
      //validate password
      this.passwordError =
        this.password.length >= 4
          ? ""
          : "Password must be at least 12 characters long";
      if (!this.passwordError) {
        console.log("email: ", this.email);
        console.log("password: ", this.password);
        console.log("terms accepted: ", this.terms);
      }
    },
    ToggleLogin() {
      this.$emit("toggle-login");
    },
    register() {
      axios
        .post("http://localhost:5000/api/v1/auth/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          // Optionally, you can redirect to another page or show a success message.
        })
        .catch((error) => {
          console.error("Registration error:", error.response.data);
          // Handle the error and provide feedback to the user.
        });
    },
  },
};
</script>
