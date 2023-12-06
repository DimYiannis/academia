<template>
  <div class="grid gap-2 mt-8">
    <div>
      <h1 class="text-xl mt-4 capitalize">Hello there: {{ user.name }}</h1>
    </div>

    <div>
      <img class="w-full" :src="user.image" />
    </div>
    <div class="relative">
      <div class="flex justify-between items-start">
        <div class="rounded-full ml-4 w-20 h-20 absolute -top-16 left-2">
          <!--prof image-->
          <img
            class="object-cover rounded-full"
            src="https://picsum.photos/id/237/200/300"
          />
        </div>
        <div>
          <!--edit prof-->
          <button class="absolute right-0">Edit Profile</button>
        </div>
      </div>
    </div>

    <div class="mt-20">
      <h1 class="text-3xl capitalize">{{ user.name }}</h1>
      <h2 class="text-lg">{{ user.info }}</h2>
    </div>
  </div>
  <nav>
    <button>Posts</button>
    <button>Likes</button>
  </nav>
  <section>
    <!--content-->
  </section>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {},
};
</script>
