<template>
  <div
    class="w-full h-full bg-black/30 left-0 top-0 fixed grid justify-items-center z-10"
    @click.self="closemodal"
  >
    <div class="w-[500px] h-fit relative mt-10 rounded-lg bg-white z-20">
      <div class="grid gap-4 m-5">
        <div class="flex">
          <svg
            @click="closemodal"
            class="hover:cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 
            0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 
            1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 
            12L5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <!-- photos -->
        <div></div>
        <!-- name -->
        <div class="mt-5 border-2"  @click="focusInput">
          <label for="large-input" class="m-3">Name</label>
          <input
            v-model="userName"
            ref="nameInput"
            type="text"
            class="block w-max m-2 outline-none caret-[#388aef]"
            placeholder=""
          />
        </div>
        <!-- info -->
        <div class="mt-5 border-2 group" @click="focusInput2">
          <label for="large-input" class="m-3">Info</label>
          <input
            v-model="userInfo"
            ref="infoInput"
            type="text"
            class="block w-full m-2 outline-none group:click:focus caret-[#388aef]"
            placeholder=""
          />
        </div>
        <div class="border-t-2 flex justify-end">
          <button @click="update" class="font-semibold mt-4">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: "",
    };
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
    postId: {
      type: String,
      required: true,
    },
  },
  methods: {
    closemodal() {
      this.$emit("close-modal");
    },
    update() {
      const updateProf = {
        postId: this.postId,
        content: this.postContent,
      };

      this.$emit("edit-prof", updateProf);
    },
    focusInput() {
      // Focus on the name input when the div with ref nameInput is clicked
      this.$refs.nameInput.focus();
    },
    focusInput2() {
      // Focus on the name input when the div with ref nameInput is clicked
      this.$refs.infoInput.focus();
    },
  },
};
</script>
