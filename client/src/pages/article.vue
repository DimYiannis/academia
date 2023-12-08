<template>
  <div class="grid mx-5 mt-12  ">
    <div class="grid">
      <div class="flex justify-between">
        <h4>Published on: {{ this.post.date }} <br /></h4>
        <h4>
          doi: {{ post.doi }} <br />
          citations: {{ post.citations }}
        </h4>
      </div>
      <div class="mt-4">
        <h1 class="text-3xl font-bold">{{ post.title }}</h1>
        <h2 class="mt-2">{{ post.university }}</h2>
        <h2>authors: {{ post.authors }}</h2>
      </div>
    </div>
    <div class="grid mt-5 mx-10">
      <h1>Abstract</h1>
      <p>{{ post.abstract }}</p>
    </div>
    <div class="mt-5 mx-10">
      <h1>Full Access:</h1>
      <p>{{ post.paper }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      post: [],
    };
  },
  props: {
    posts: {
      type: Object,
      required: true,
    },
  },
  created() {
    this.getarticle();
  },
  methods: {
    async getarticle() {
      const postId = this.$route.params.doi;
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/posts/${postId}`,
          {
            withCredentials: true,
          }
        );
        this.post = response.data.post;
      } catch (error) {
        console.error("Error fetching post information:", error);
      }
    },
  },
};
</script>
