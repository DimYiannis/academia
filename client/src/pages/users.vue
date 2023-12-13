<template>
  <main class="flex mt-8 h-fit ml-20 w-5/6">
    <section class="border-r-2 h-full">
      <div class="grid gap-2 w-full">
        <div>
          <h1 class="text-xl font-semibold mt-4 capitalize border-b-2">
            Hello there: {{ user.name }}
          </h1>
        </div>

        <div class="mt-2 mr-3">
          <img class="w-[700px] rounded-md" :src="user.background" />
        </div>
        <div class="relative">
          <div class="flex justify-between items-start">
            <div class="rounded-full ml-4 w-20 h-20 absolute -top-16 left-2">
              <!--prof image-->
              <img class="object-cover rounded-full" :src="user.profile" />
            </div>
            <div>
              <!--edit prof-->
              <nav
                class="flex mt-6 mr-14 text-lg font-semobold absolute right-0"
              >
                <button class="">Edit Profile</button>
              </nav>
            </div>
          </div>
        </div>

        <div class="mt-20 pb-3">
          <h1 class="text-3xl capitalize">{{ user.name }}</h1>
          <h2 class="text-lg mt-3">{{ user.info }}</h2>
        </div>
      </div>

      <div>
        <!--content-->
        <div class="grid mt-12">
          <div class="border-b-2 flex gap-5">
            <h1
              @click="sharedPosts"
              class="text-base font-semibold cursor-pointer mb-2"
              :class="{'underline decoration-4 decoration-sky-500 underline-offset-4': showSharedPosts}"
            >
              Shared Posts
            </h1>
            <h1 
            @click="likes" 
            class="text-base font-semibold cursor-pointer"
            :class="{'underline decoration-4 decoration-sky-500 underline-offset-4': showlikes}"
            >
              Favorites
            </h1>
          </div>

          <main
            class="h-screen mt-5 mr-2 overflow-hidden overflow-y-auto overscroll-auto"
          >
            <div
              :class="{
                'transition-opacity ease-out duration-500 opacity-0 hidden':
                  !showSharedPosts,
                'transition-opacity ease-in duration-500 opacity-100':
                  showSharedPosts,
              }"
              class="border p-4 mb-4 rounded-3xl"
              v-for="i of sharedposts"
            >
              <h1>Post made by: {{ i.user.name }}</h1>
              <p>{{ i.title }}</p>

              <!--the inner v-for loop is based on i.sharedpostdetails-->
              <div
                v-show="showSharedPosts"
                v-for="j in i.sharedpostdetails"
                class="p-2 mx-6 my-4 border border-[#388aef] rounded-3xl"
              >
                <div class="grid items-center">
                  <h1 class="text-lg font-semibold">
                    <router-link
                      class="underline decoration-[#388aef] capitalize"
                      :to="'/article/' + j.doi"
                      >{{ j.title }}</router-link
                    >
                  </h1>
                  <h2>Author: {{ j.authors }}</h2>
                  <h2>Institutions: {{ j.university }}</h2>
                  <h3>Year: {{ j.date }}</h3>
                </div>
                <div class="post-content mb-2">
                  <p class="line-clamp-3">Abstract: {{ j.abstract }}</p>
                  <h3>doi: {{ j.doi }}</h3>
                  <!-- You can add other multimedia content (images, videos) here -->
                </div>
              </div>
              <button @click="deletepost(i._id)">Delete Post</button>
            </div>

            <section class="mt-5">
              <!--Likes-->
              <div class="mt-34">
                <!--content-->
                <div>
                  <div
                    :class="{
                      'transition-opacity ease-out duration-500 opacity-0 hidden':
                        !showlikes,
                      'transition-opacity ease-in duration-500 opacity-100':
                        showlikes,
                    }"
                  >
                    <main
                      class="h-screen mt-5 mr-2 overflow-hidden overflow-y-auto overscroll-auto"
                    >
                      <div
                        v-show="showlikes"
                        class="border p-4 mb-4 rounded-3xl grid"
                        v-for="i of likedposts"
                      >
                        <svg
                          @click="unlike(i._id)"
                          class="cursor-pointer justify-self-end"
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 
                      0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 
                      13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12L5.47 
                      6.53a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd"
                          />
                        </svg>

                        <div
                          v-for="j in [i.postDetails]"
                          class="p-2 mx-6 my-4 border border-[#388aef] rounded-3xl"
                        >
                          <div class="grid items-center">
                            <h1 class="text-lg font-semibold">
                              <router-link
                                class="underline decoration-[#388aef] capitalize"
                                :to="'/article/' + j.doi"
                                >{{ j.title }}</router-link
                              >
                            </h1>
                            <h2>Author: {{ j.authors }}</h2>
                            <h2>Institutions: {{ j.university }}</h2>
                            <h3>Year: {{ j.date }}</h3>
                          </div>
                          <div class="post-content mb-2">
                            <p class="line-clamp-3">
                              Abstract: {{ j.abstract }}
                            </p>
                            <h3>doi: {{ j.doi }}</h3>
                          </div>
                        </div>
                      </div>
                    </main>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </section>

    <!--right bar-->
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: [],
      sharedposts: [],
      showlikes: false,
      showSharedPosts: true,
      likedposts: [],
    };
  },
  props: {
    shownotif: {
      type: Boolean,
      required: true,
    },
  },
  mounted() {
    // Invoke when the component is mounted
    this.getuser();
    this.getsharedposts();
    this.getlikedposts();
  },
  methods: {
    async getuser() {
      const userId = this.$route.params._id;
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/users/${userId}`,
          {
            withCredentials: true,
          }
        );
        this.user = response.data.user;
        console.log(this.user);
      } catch (error) {
        console.error("Error fetching user's information:", error);
      }
    },
    async getsharedposts() {
      const userId = this.$route.params._id;
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/users/${userId}/posts`,
          {
            withCredentials: true,
          }
        );

        this.sharedposts = response.data.sharedposts;
        console.log(this.sharedposts);
      } catch (error) {
        console.error("Error fetching user information:", error);
        console.error("Error response data:", error.response.data);
        console.log("Response headers:", error.response.headers);
      }
    },
    async getlikedposts() {
      const userId = this.$route.params._id;
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/likes/${userId}/likes`,
          {
            withCredentials: true,
          }
        );

        this.likedposts = response.data.likes;
        console.log(this.likedposts);
      } catch (error) {
        console.error("Error fetching user information:", error);
        console.error("Error response data:", error.response.data);
        console.log("Response headers:", error.response.headers);
      }
    },
    likes() {
      this.showlikes = true;
      this.showSharedPosts = false;
    },
    sharedPosts() {
      this.showlikes = false;
      this.showSharedPosts = true;
    },
  },
};
</script>
