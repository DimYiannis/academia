<template>
  <div class="grid">
    <div>
        <h4>Published on: {{ post }}, doi: {{post.doi  }}, citations: {{ post.citations }}</h4>
        <title>{{ post.title }}</title>
        <h2>{{ post.auhors }}</h2>
    </div>
    <div class="grid">
        <h1>Abstract</h1>
        <p>{{post.abstract }}</p>
    </div>
    <div>
        <p>{{ post.paper }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      post: null,
    };
  },
  props: {
    posts: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.getarticle();
  },
  methods: {
    async getarticle() {
      const postId = this.$route.params.doi;
      try {
        const response = await axios.get
        (`http://localhost:5000/api/v1/posts/${postId}`,
        {
            withCredentials: true,
          })
        this.post = response.data.post;
      } catch (error) {
        console.error("Error fetching post information:", error);
      }
    }
  }
}
</script>
