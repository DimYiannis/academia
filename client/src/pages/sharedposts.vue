<template>
  <div class="grid mt-12">
    <div class="border-b-2">
      <h1 class="text-base font-semibold mb-2">Shared Posts</h1>
    </div>

    <main class="h-screen mt-4 overflow-hidden overflow-y-auto overscroll-auto">
      <div class="border p-4 mb-4 rounded-3xl" v-for="i of posts">
        <h1>My first post about this topic</h1>
        <p>fascinating findings</p>

        <div class="p-2 mx-6 my-4 border border-[#388aef] rounded-3xl">
          <div class="grid items-center">
            <h1 class="text-lg font-semibold">
              <router-link
                class="underline decoration-[#388aef] capitalize"
                :to="'/article/' + i.doi"
                >{{ i.title }}</router-link
              >
            </h1>
            <h2>Author: {{ i.authors }}</h2>
            <h2>Institutions: {{ i.university }}</h2>
            <h3>Year: {{ i.date }}</h3>
            <div class="">
              <span class="author-name font-bold">{{}}</span>
              <span class="post-time text-gray-700">{{}}</span>
            </div>
          </div>
          <div class="post-content mb-2">
            <p class="line-clamp-3">Abstract: {{ i.abstract }}</p>
            <h3>doi: {{ i.doi }}</h3>
            <!-- You can add other multimedia content (images, videos) here -->
          </div>
        </div>
        <div class="post-actions flex mt-2">
          <button @click="likePost()">{{ i.likes }} Likes</button>
          <button>Downloads {{ i.downloads }}</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Object,
      required: true,
    },
  },
  methods: {
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
