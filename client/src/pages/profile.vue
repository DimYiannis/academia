<template>
  <div class="grid gap-2 mt-8 w-full">
    <div>
      <h1 class="text-xl mt-4 capitalize border-b-2 ">Hello there: {{ user.name }}</h1>
    </div>

    <div class="mt-2">
      <img class="w-[700px] rounded-md" :src="user.image" />
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
          <nav class="mt-6 flex text-lg font-semobold absolute right-0">
            <button class="">Posts</button>
            <button class="">Likes</button>
            <button class="">Edit Profile</button>
          </nav>  
        </div>
      </div>
    </div>

    <div class="mt-20 border-b-2 pb-3">
      <h1 class="text-3xl capitalize">{{ user.name }}</h1>
      <h2 class="text-lg mt-3">{{ user.info }}</h2>
    </div>
  </div>

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
