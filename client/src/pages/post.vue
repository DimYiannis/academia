<template>
  <div class="grid ">
    <nav class="mb-10 mt-6">
      <div class="flex relative w-1/2 mx-2 rounded-3xl border-2 
      border-[#388aef] group p-1 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 21 21"
        >
          <g
            fill="none"
            fill-rule="evenodd"
            stroke="#388aef"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="10.5" cy="10.5" r="8" />
            <path d="M6.5 8.5h8m-6 2h4m-3 2h2" />
          </g>
        </svg>
        <input
          class="w-full focus:outline-none"
          type="text"
          v-model="input"
          placeholder="Search..."
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="#388aef"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="m21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>

      <div class="filter"></div>
    </nav>

    <main class="h-screen overflow-hidden overflow-y-auto 
    overscroll-auto">
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
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25L4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
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
