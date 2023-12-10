<template>
  <main class="flex mt-8 h-fit">
    <section class="w-3/5 border-r-2 h-full">
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
                class="flex mt-6 mr-3 text-lg font-semobold absolute right-0"
              >
                <button class="">Edit Profile</button>
              </nav>
            </div>
          </div>
        </div>

        <div class="mt-20 border-b-2 pb-3">
          <h1 class="text-3xl capitalize">{{ user.name }}</h1>
          <h2 class="text-lg mt-3">{{ user.info }}</h2>
        </div>
      </div>

      <div>
        <!--content-->
        <div class="grid mt-12">
          <div class="border-b-2">
            <h1 class="text-base font-semibold mb-2">Shared Posts</h1>
          </div>

          <main
            class="h-screen mt-5 overflow-hidden overflow-y-auto overscroll-auto"
          >
            <div class="border p-4 mb-4 rounded-3xl" v-for="i of sharedposts">
              <h1>Post made by: {{ i.user.name }}</h1>
              <p>{{ i.title }}</p>

              <!--the inner v-for loop is based on i.sharedpostdetails-->
              <div
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
          </main>
        </div>
      </div>
    </section>

    <!--right bar-->
    <section class="mt-5 ml-10 w-2/5">
      <!--Notif-->
      <div class="">
        <div
          class="border-b-2 flex w-fit"
          :class="{ 'justify-end w-full': shownotif }"
        >
          <h1 @click="notif" class="text-base font-semibold cursor-pointer">
            Notifications
          </h1>
        </div>

        <!--content-->
        <div>
          <div
            :class="{
              'transition-opacity ease-out duration-500 opacity-0': !shownotif,
              'transition-opacity ease-in duration-500 opacity-100': shownotif,
            }"
          >
            <div>djhcbejhwkcnqjnrjuvnq</div>
          </div>
        </div>
      </div>

      <!--Likes-->
      <div class="mt-72">
        <div
          class="border-b-2 flex w-fit"
          :class="{ 'justify-end w-full': showlikes }"
        >
          <h1 @click="likes" class="text-base font-semibold cursor-pointer">
            Favorites
          </h1>
        </div>

        <!--content-->
        <div>
          <div
            :class="{
              'transition-opacity ease-out duration-500 opacity-0': !showlikes,
              'transition-opacity ease-in duration-500 opacity-100': showlikes,
            }"
          >
            <div>djhcbejhwkcnqjnrjuvnq</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      sharedposts: [],
      showlikes: false,
    };
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
    shownotif: {
      type: Boolean,
      required: true,
    },
  },
  mounted() {
    // Invoke when the component is mounted
    this.getsharedposts();
  },
  methods: {
    async getsharedposts() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/sharedposts/mysharedposts",
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
    async deletepost(postId) {
      try {
        await axios.delete(
          `http://localhost:5000/api/v1/sharedposts/${postId}`,
          {
            withCredentials: true,
          }
        );

        this.getsharedposts();
      } catch (error) {
        console.error("Error deleting shared post:", error);
      }
    },
    likes() {
      this.showlikes = !this.showlikes;
    },
    notif() {
      this.$emit("show-notif");
    },
  },
};
</script>
