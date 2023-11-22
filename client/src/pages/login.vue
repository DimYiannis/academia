<template>
  <div>
    <!--svg -->
    <div class="grid justify-center mt-10 ">
      <form class="mb-6 grid gap-5">
        <h1 class="heading-4 mb-3 text-2xl font-bold">Log in</h1>
        <h2 class="mb-1 font-semibold">
          Log in to access your dashboard.
          <br />
          Don't have an account yet?
          <a class="underline cursor-pointer" href="/register">Sign up</a>
        </h2>

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

        <button class="w-full">
          Log in
        </button>

        <div class="text-center">
          <a class="underline font-semibold"> Forgot Password? </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      password: "",
      email: "",
      passwordError: "",
    };
  },
  methods: {
    
  }
};
</script>
