<template>
    <!-- ... existing template code ... -->
    <div
      id="loader"
      class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow"
    >
      Uploading...
    </div>
    <div
      id="message"
      class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow"
    >
      {{ uploadMessage }}
    </div>
  </template>

<script>
export default {
  
}
</script>