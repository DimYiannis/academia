<template>
  <main class="flex mt-8 h-screen">
    <section class="w-3/5 border-r-2 ">
      <div class="grid gap-2 w-full">
        <div>
          <h1 class="text-xl font-semibold mt-4 capitalize border-b-2">
            Hello there: {{ user.name }}
          </h1>
        </div>

        <div class="mt-2 mr-3">
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
              <nav class="flex mt-6 mr-3 text-lg font-semobold absolute right-0">
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

      <div>
        <!--content-->
      </div>
    </section>

    <section class="mt-5 ml-10 w-2/5" :class="{ 'w-2/5': shownotif }">
      <div class="border-b-2 flex w-fit" :class="{ 'justify-end w-full': shownotif }">
        <h1 class="text-base font-semibold">Notifications</h1>
      </div>

      <!--content-->
      <div :class="{ 'transition-opacity ease-out duration-500 opacity-0': !shownotif, 'transition-opacity ease-in duration-500 opacity-100': shownotif }">
        <div>djhcbejhwkcnqjnrjuvnq</div>
      </div>

    </section>
  </main>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    shownotif: {
      type: Boolean,
      required: true,
    },
  },
  methods: {},
};
</script>
