<template>
  <body>
    <ImageList />
  </body>
</template>

<script>
import ImageList from '~/components/ImageList.vue';

export default {
  components: {
    ImageList,
  },
};
</script>
<style scoped>
  body 
  {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #191919;
  }
</style>
