<template>
  <div class="flex gap-10 m-2">
    <!--SideBar-->
    <aside class="grid gap-2">
      <div class="grid gap-2">
        <h1 class="text-3xl">Hello there: {{ name }}</h1>
        <h3>
          Your ID:
          <p class="w-fit px-2 text-white bg-[#388aef] rounded-md">
            {{ userId }}
          </p>
        </h3>
        <div>
          Your role:
          <p class="w-fit px-2 text-white bg-[#388aef] rounded-md">
            {{ role }}
          </p>
        </div>
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M21 8.25c0-2.485-2.099-4.5-4.687-4.5c-1.936 
              0-3.598 1.126-4.313 2.733c-.715-1.607-2.377-2.733-4.312-2.733C5.098 
              3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          <h1>Favorites</h1>
        </div>
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227c1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443a48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
          <h1>comments</h1>
        </div>
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25L4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
          <h1>Bookmarks</h1>
        </div>
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
            />
          </svg>
          <h1>Submitted</h1>
        </div>
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M21 8.25c0-2.485-2.099-4.5-4.687-4.5c-1.936 
              0-3.598 1.126-4.313 2.733c-.715-1.607-2.377-2.733-4.312-2.733C5.098 
              3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          <h1>Favorites</h1>
        </div>
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M21 8.25c0-2.485-2.099-4.5-4.687-4.5c-1.936 
              0-3.598 1.126-4.313 2.733c-.715-1.607-2.377-2.733-4.312-2.733C5.098 
              3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          <h1>Favorites</h1>
        </div>
      </div>

      <button class="m-0" @click="logout()">logout</button>
    </aside>
    <!--Main content-->
    <main>

      <nav class="mb-12">
        <input type="text" v-model="input" placeholder="Search..." />
        <div class="filter"></div>
      </nav>

      <div class="h-screen overflow-hidden overflow-y-auto overscroll-auto">
        <div class=" " v-for="i of data" :key="i">
          <post />
        </div>
      </div>

    </main>
  </div>
</template>

<script>
import axios from "axios";
import post from "../components/post.vue";
export default {
  data() {
    return {
      name: "",
      role: "",
      userId: "",
      data: [],
    };
  },
  components: {
    post,
  },
  mounted() {
    // Invoke getuser method when the component is mounted
    this.getuser();
    this.getdata();
  },
  methods: {
    async getuser() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/users/showUser",
          {
            withCredentials: true,
          }
        );

        const user = response.data.user;

        this.name = user.name;
        this.userId = user.userId;
        this.role = user.role;
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    },
    logout() {
      try {
        axios
          .get("http://localhost:5000/api/v1/auth/logout")
          .then((response) => {
            console.log(response);
          });
        this.$router.push({ name: "home" });
      } catch (error) {
        console.error("Error:", error);
      }
    },
    getdata() {
      try {
        axios
          .get(
            "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=p53"
          )
          .then((response) => {
            console.log(response.data.resultList.result);
            this.data = response.data.resultList.result;
            console.log(this.data);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
