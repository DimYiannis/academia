<template>
  <div class="grid">
    <nav class="mb-10 mt-6">
      <div
        class="flex relative w-1/2 mx-2 rounded-3xl border-2 border-[#388aef] group p-1"
      >
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
          placeholder="Enter doi..."
        />
        <svg
          class="cursor-pointer"
          @click="getsinglepost(input)"
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

    <main class="h-screen overflow-hidden overflow-y-auto overscroll-auto">
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
        </div>
        <div class="post-content mb-2">
          <p class="line-clamp-3">Abstract: {{ i.abstract }}</p>
          <h3>doi: {{ i.doi }}</h3>
          <!-- You can add other multimedia content (images, videos) here -->
        </div>
        <div class="flex justify-between mt-3">
          <div class="flex items-center">
            <button
              class="flex items-end cursor-pointer"
              @click="addLike(i._id)"
            >
              <svg
                :class="{ 'text-red-500': i.liked }"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
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
            </button>

            <button class="flex items-end cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 20 20"
              >
                <g fill="currentColor">
                  <path
                    d="M10.75 2.75a.75.75 0 0 0-1.5 
                    0v8.614L6.295 8.235a.75.75 0 1 0-1.09 
                    1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 
                    0 0 0-1.09-1.03l-2.955 3.129V2.75Z"
                  />
                  <path
                    d="M3.5 12.75a.75.75 0 0 0-1.5 
                    0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 
                    2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 
                    0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 
                    0-1.25-.56-1.25-1.25v-2.5Z"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div>
            <button @click="addBookmark(i._id)">
              <svg
                :class="{ 'text-gray-500': i.bookmarked }"
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
            <button @click="modal(i._id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 20 20"
              >
                <g fill="currentColor">
                  <path
                    d="M9.25 13.25a.75.75 0 0 0 1.5 0V4.636l2.955 
                    3.129a.75.75 0 0 0 1.09-1.03l-4.25-4.5a.75.75 0 0 
                    0-1.09 0l-4.25 4.5a.75.75 0 1 0 1.09 1.03L9.25 
                    4.636v8.614Z"
                  />
                  <path
                    d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 
                    0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 
                    0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 
                    0-1.25-.56-1.25-1.25v-2.5Z"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>

  <Teleport to="#modal">
    <sharepostmodal
      v-show="showmodal"
      @close-modal="modal"
      :user="user"
      :postId="postId"
      @share-post="sharePost"
    />
  </Teleport>
</template>

<script>
import axios from "axios";
import sharepostmodal from "../components/sharepostmodal.vue";
export default {
  data() {
    return {
      showmodal: false,
      postId: "",
      input: "",
    };
  },
  props: {
    posts: {
      type: Object,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  components: {
    sharepostmodal,
  },
  methods: {
    async addBookmark(postId) {
      try {
        await axios.post(
          `http://localhost:5000/api/v1/bookmarks`,
          { post: postId },
          { withCredentials: true }
        );

        const postIndex = this.posts.findIndex((post) => post._id === postId);
        this.posts[postIndex].bookmarked = !this.posts[postIndex].bookmarked;

      } catch (error) {
        console.error("Error creating bookmark:", error);
      }
    },
    async addLike(postId) {
      try {
        await axios.post(
          `http://localhost:5000/api/v1/likes`,
          { post: postId },
          { withCredentials: true }
        );

        // Update the liked state
        const postIndex = this.posts.findIndex((post) => post._id === postId);
        this.posts[postIndex].liked = !this.posts[postIndex].liked
      } catch (error) {
        console.error("Error creating like:", error);
      }
    },
    async sharePost(sharedPost) {
      try {
        //console.log("Shared Post:", sharedPost);
        const { postId, content } = sharedPost;
        // console.log(postId);
        //console.log(content);
        await axios.post(
          `http://localhost:5000/api/v1/sharedposts`,
          { post: postId, title: content },
          { withCredentials: true }
        );
      } catch (error) {
        console.error("Error sharing post:", error);
      }
    },
    async getsinglepost(input) {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/posts/${input}`,
          { withCredentials: true }
        );
        console.log(response.data.post);
        const searchedpost = response.data.post;
        // notify the parent component to update the posts data
        this.$emit("update-posts", [searchedpost]);
        //enclosed the searched post inside an array.
        //This is because the parent component expects an array of posts (v-for="i of posts").
        //With this change, when i search for a specific post,
        //it will replace the list of posts with an array containing only the searched post, preventing the iteration over its properties.
      } catch (error) {
        console.error("Error fetching single post:", error);
      }
    },
    modal(post_Id) {
      this.postId = post_Id;
      this.showmodal = !this.showmodal;
      console.log(this.showmodal);
    },
  },
};
</script>
