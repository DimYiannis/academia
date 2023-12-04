<template>
  <div class="grid">
    <nav class="mb-10 mt-6">
      <input type="text" v-model="input" placeholder="Search..." />
      <div class="filter"></div>
    </nav>

    <main class="h-screen overflow-hidden overflow-y-auto overscroll-auto">
      <div class="post border p-4 mb-4 " v-for="i of posts">
      <div class="grid post-header items-center mb-2">
        <h1>
          Title: {{ i.title }}
        </h1>
        <h2>Author: {{ i.authors }}</h2>
        <h2>University: {{ i.university }}</h2>
        <h3>Year: {{ i.date }}</h3>
        <div class="author-info">
          <span class="author-name font-bold">{{}}</span>
          <span class="post-time text-gray-700">{{}}</span>
        </div>
      </div>
      <div class="post-content mb-2">
        <p>Abstract: {{i.abstract}}</p>
        <h3>doi: {{ i.doi }}</h3>
        <!-- You can add other multimedia content (images, videos) here -->
      </div>
      <div class="post-actions">
        <button @click="likePost()">{{}} Likes</button>
        <button>Comment</button>
        <button>Download</button>
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


