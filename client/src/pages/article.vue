<template>
  <div class="grid">
    <div>
        <h4>Published on: {{ posts.date }}, doi: {{ posts.doi }}, citations: {{ posts.citations }}</h4>
        <title>{{ posts.title }}</title>
        <h2>{{ posts.authors }}</h2>
    </div>
    <div class="grid">
        <h1>Abstract</h1>
        <p>{{ posts.abstract }}</p>
    </div>
    <div>
        <p>{{ posts.paper }}</p>
    </div>
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
};
</script>
