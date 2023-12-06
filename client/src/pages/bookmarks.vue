<template>
  <div class="grid mt-12">
    <div class="border-b-2">
      <h1 class="text-base font-semibold mb-2">Bookmarks</h1>
    </div>
    <main class="h-screen mt-4 overflow-hidden overflow-y-auto overscroll-auto">
      <div class="post border p-4 mb-4 rounded-3xl" v-for="i of posts">
        <div class="grid post-header items-center mb-2">
          <h1 class="text-lg font-semibold">
            <router-link
              class="underline decoration-sky-500 capitalize"
              :to="'/article/' + i.doi"
              >{{ i.title }}</router-link
            >
          </h1>
          <h2>Author: {{ i.authors }}</h2>
          <h2>Institutions: {{ i.university }}</h2>
          <h3>Year: {{ i.date }}</h3>
          <div class="author-info">
            <span class="author-name font-bold">{{}}</span>
            <span class="post-time text-gray-700">{{}}</span>
          </div>
        </div>
        <div class="post-content mb-2">
          <p class="line-clamp-3">Abstract: {{ i.abstract }}</p>
          <h3>doi: {{ i.doi }}</h3>
          <!-- You can add other multimedia content (images, videos) here -->
        </div>
        <div class="post-actions flex">
          <button @click="likePost()">{{ i.likes }} Likes</button>
          <button>Downloads {{ i.downloads }}</button>
          <button class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="26"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25L4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5"
              />
            </svg>
          </button>
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
