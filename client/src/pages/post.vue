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
          <button @click="addBookmark(i._id)">
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
          <button @click="modal(i._id)">
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
                d="M7.217 10.907a2.25 2.25 0 1 0 0 
                2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 
                1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 
                0a2.25 2.25 0 1 0 3.935 2.186a2.25 2.25 0 0 
                0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 
                3.933-2.185a2.25 2.25 0 0 0-3.933 2.185Z"
              />
            </svg>
          </button>
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
      } catch (error) {
        console.error("Error creating bookmark:", error);
      }
    },
    async sharePost(sharedPost) {
      try {
        console.log("Shared Post:", sharedPost);
        const { postId, content } = sharedPost;
        console.log(postId);
        console.log(content);
        await axios.post(
          `http://localhost:5000/api/v1/sharedposts`,
          { post: postId, title: content },
          { withCredentials: true }
        );
      } catch (error) {
        console.error("Error sharing post:", error);
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
