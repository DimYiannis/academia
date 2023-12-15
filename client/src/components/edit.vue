<template>
  <div
    class="w-full h-full bg-black/30 left-0 top-0 fixed grid justify-items-center z-10"
    @click.self="closemodal"
  >
    <div class="w-[500px] h-[550px] relative mt-10 rounded-lg bg-white z-20">
      <div class="h-full m-5">
        <div class="flex h-fit">
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

        <div class="grid ">
          <!-- photos -->
          <div class=" ">
            
            <!-- background -->
            <div class="w-full h-[250px] grid place-items-center border-2"
            :style="{ backgroundImage: userr.background ? 'url(' + userr.background + ')' : 'none', backgroundColor: userr.background ? '' : '#B0A8B9', backgroundPosition: 'center', backgroundSize: 'cover' }">
              <div class="bg-cover" >
                <div class=" bg-black/40 hover:bg-black/70 rounded-full p-1" >
                  <label for="background" class="cursor-pointer">
                    <input
                      ref="backInput"
                      type="file"
                      id="background"
                      accept="image/png, image/jpeg"
                      style="display: none"
                      @change="handleFileChange2"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="white"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path
                        d="M18 20H4V6h9V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9zm-7.79-3.17l-1.96-2.36L5.5 18h11l-3.54-4.71zM20 4V1h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V6h3V4h-3z"
                      />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            <!-- profile -->
            <div class="relative h-0">
              <div
              class="absolute -top-24 left-2 rounded-full w-16 h-28 ml-3 border-2"
              :style="{ backgroundImage: userr.profile ? 'url(' + userr.profile + ')' : 'none', backgroundColor: userr.profile ? '' : '#B0A8B9', backgroundPosition: 'center', backgroundSize: 'cover' }"
              >
              <!-- had to place a label to enclose input and svg in 
              order for the method to work -->
              <div class=" absolute top-[40%] left-[25%] bg-black/40 hover:bg-black/70 rounded-full p-1" >
                <label for="profile" class="cursor-pointer">
                  <input
                    ref="profInput"
                    type="file"
                    id="profile"
                    accept="image/png, image/jpeg"
                    style="display: none"
                    @change="handleFileChange"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="white"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      d="M18 20H4V6h9V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9zm-7.79-3.17l-1.96-2.36L5.5 18h11l-3.54-4.71zM20 4V1h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V6h3V4h-3z"
                    />
                  </svg>
                </label>
              </div>
            </div>
            </div>
            
          </div>

          <div class="h-fit">
            <!-- name -->
            <div class="mt-5 border-2 h-[70px]" @click="focusInput">
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
            <div class="mt-5 border-2 mb-2" @click="focusInput2">
              <label for="large-input" class="m-3">Info</label>
              <input
                v-model="userInfo"
                ref="infoInput"
                type="text"
                class="block w-max m-2 outline-none caret-[#388aef]"
                placeholder=""
              />
            </div>
            <div class="border-t-2 flex justify-end">
              <button @click="update" class="font-semibold mt-4">Save</button>
            </div>
          </div>
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
    userr: {
      type: Object,
      required: true,
    },
    postId: {
      type: String,
      required: true,
    },
  },
  computed: {
    backgroundStyle() {
      return this.userr.background || '#B0A8B9';
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
      console.log(this.userr);
    },
    handleFileChange(event) {
      // Placeholder method for handling file changes

      // Add your logic here to handle the selected file
      this.$refs.profInput.focus();
    },
    handleFileChange2(event) {
      // Placeholder method for handling file changes

      // Add your logic here to handle the selected file
      this.$refs.backInput.focus();
    },
  },
};
</script>
