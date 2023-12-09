<template>
  <div class="flex gap-10">
    <!--SideBar-->
    <aside class="grid gap-2 mt-12 border-r-2">
      <div class="grid gap-1 mr-12">
        <div class="flex gap-2">
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
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0a3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <router-link to="/profile">Profile</router-link>
        </div>
        <div class="flex gap-2">
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
              d="m21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <router-link to="/posts">Explore</router-link>
        </div>
        <div class="flex gap-2">
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
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
          <router-link to="/profile"> Notifications</router-link>
        </div>
        <div class="flex gap-2">
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
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <router-link to="/messages">Messages</router-link>
        </div>
        <div class="flex gap-2">
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
          <router-link to="/bookmarks">Bookmarks</router-link>
        </div>
        <div class="flex gap-2">
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
          <router-link to="/sharedposts">Shared Posts</router-link>
        </div>
      </div>

      <button class="m-0" @click="logout()">logout</button>
    </aside>
    <!--Main content-->
    <main class="w-full">
      <div class="h-screen  overflow-auto">
        <router-view :posts="posts" :user="user"></router-view>
      </div>
    </main>
  </div>
  
</template>

<script>
import axios from "axios";
import notif from "../components/notif.vue";
export default {
  data() {
    return {
      name: "",
      role: "",
      userId: "",
      user: "",
      posts: [],
      shownotif: false,
    };
  },
  components: {
    notif,
  },
  mounted() {
    // Invoke getuser method when the component is mounted
    this.getuser();
    this.getposts();
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

        this.user = response.data.user;
        //console.log(this.user);
      } catch (error) {
        console.error("Error fetching user information:", error);
        console.error("Error response data:", error.response.data);
        console.log("Response headers:", error.response.headers);
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
    async getposts() {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/posts", {
          withCredentials: true,
        });

        this.posts = response.data.posts;
      } catch (error) {
        console.error(error.response.data);
      }
    },
  },
};
</script>
