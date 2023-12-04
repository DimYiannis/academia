<template>
  <div class="grid gap-2 mt-10">
    <div>
        <img src="user.image">
    </div>
    <div>
        <h1>{{ user.name }}</h1>
        <h2>{{user.info }}</h2>
    </div>
    <div>
        <button>Posts</button>
        <button>Likes</button>
        <button>Comments</button>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    }
  },
  methods: {

  },
};
</script>
