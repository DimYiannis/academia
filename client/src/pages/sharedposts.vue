<template>
  <div class="grid mt-12">
    <div class="border-b-2">
      <h1 class="text-base font-semibold mb-2">Shared Posts</h1>
    </div>

    <main class="h-screen mt-4 overflow-hidden overflow-y-auto overscroll-auto">
      <div class="border p-4 mb-4 rounded-3xl" v-for="i of sharedposts">
        <h1>Post made by: {{ i.user.name }}</h1>
        <p>{{ i.title }}</p>


        <!--the inner v-for loop is based on i.sharedpostdetails-->
        <div v-for="j in i.sharedpostdetails" class="p-2 mx-6 my-4 border border-[#388aef] rounded-3xl">
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
            <!-- You can add other multimedia content (images, videos) here -->
          </div>
        </div>
        <div class="post-actions flex mt-2">
          <button @click="likePost()">
            {{ i.likes }} Likes
          </button>
          <button>Downloads {{ i.downloads }}</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      sharedposts: [],
    };
  },
  mounted() {
    // Invoke when the component is mounted
    this.getsharedposts();
  },
  methods: {
    async getsharedposts() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/sharedposts",
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
    likePost() {
      console.log(this.data);
      // Add logic to handle liking a post
      // You might want to update the 'liked' state and the number of likes in the database
    },
    commentPost() {
      // Add logic to handle commenting on a post
      // You might navigate to a separate page or show a modal for commenting
    },
    formatDate(dateString) {
      // Add logic to format the date (you can use a library like day.js or date-fns)
      // For simplicity, let's assume dateString is in a valid date format
      const date = new Date(dateString);
      return date.toDateString();
    },
  },
};
</script>
