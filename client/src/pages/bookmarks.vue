<template>
  <div class="grid mt-12">
    <div class="border-b-2">
      <h1 class="text-base font-semibold mb-2">Bookmarks</h1>
    </div>
    <main class="h-screen mt-4 overflow-hidden overflow-y-auto overscroll-auto">
      <div class="post border p-4 mb-4 rounded-3xl" v-for="j of bookmarks">
        <div class="grid post-header items-center mb-2">
          <h1 class="text-lg font-semibold">
            <router-link
              class="underline decoration-sky-500 capitalize"
              :to="'/article/' + j.doi"
              >{{ j.postDetails?.title }}</router-link
            >
          </h1>
          <h2>Author: {{ j.postDetails?.authors }}</h2>
          <h2>Institutions: {{ j.postDetails?.university }}</h2>
          <h3>Year: {{ j.postDetails?.date }}</h3>
          <p class="line-clamp-3">Abstract: {{ j.postDetails?.abstract }}</p>
          <h3>doi: {{ j.postDetails?.doi }}</h3>

          <div class="flex justify-between mt-4">
            
            <div>
              <button @click="deletebookmark(j._id)">
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
      bookmarks: [],
    };
  },
  mounted() {
    this.getBookmarks();
  },
  methods: {
    async getBookmarks() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/bookmarks",
          {
            withCredentials: true,
          }
        );

        this.bookmarks = response.data.bookmarks;
        console.log(this.bookmarks);
      } catch (error) {
        console.error("Error fetching bookmarks:", error);
      }
    },
    async deletebookmark(bookmarkId) {
      try {
        console.log(this.bookmarks);
        await axios.delete(
          `http://localhost:5000/api/v1/bookmarks/${bookmarkId}`,
          {
            withCredentials: true,
          }
        );
        // Refresh bookmarks after deletion
        this.getBookmarks();
      } catch (error) {
        console.error("Error deleting bookmark:", error);
      }
    },
  },
};
</script>
