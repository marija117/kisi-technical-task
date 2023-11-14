<template>
  <div class="main">
    <h1>Connect people & spaces</h1>
    <div class="gallery">
      <div v-for="(item, index) in imageList" :key="index" class="image-card">
        <img :src="getImageUrl(item.image)" :alt="item.article.title" class="image"/>
        <h3 class="article-main">{{ item.article.title }}</h3>
        <div class="overlay">
          <h3 class="article-title">{{ item.article.title }}</h3>
          <br/>
          <p class="article-description">{{ item.article.description }}</p>
        </div>
        <i class="arrow right"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .main {
    display: grid;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  h1 {
    text-align: left;
    padding-bottom: 10px;
    font-size: 25px;
    color: #ffffff;
    font-weight: lighter;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 10px;
  }

  .image-card:nth-child(1n){
    grid-row: span 2;
  }

  .image-card:nth-child(2n){
    grid-column: span 2;
    grid-row: span 2;
  }

  .image-card:nth-child(3n),
  .image-card:nth-child(4n){
      grid-row: span 1;
  }

  .image-card:nth-child(5n){
    grid-column: span 2;
    grid-row: span 2;
  }

  .image-card:nth-child(6n){
      grid-column: span 2;
      grid-row: span 2;
  }

  .image-card {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }

  .image-card:hover {
    transform: scale(1.01);
  }

  .image {
    width: 100%;
    height: auto;
    display: absolute;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #4a52ff;
    color: #fff;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .image-card:hover .overlay {
    opacity: 1;
  }

  .article-main {
    margin: 0;
    text-align: left;
    font-weight: lighter;
    font-size: 15px;
    padding: 10px;
    color: white;
    top: 0;
    left: 0;
    position: absolute;
  }

  .article-title {
    margin: 0;
    text-align: left;
    font-weight: lighter;
    font-size: 15px;
    padding: 10px;
  }

  .article-description {
    margin: 0;
    text-align: left;
    font-weight: lighter;
    font-size: 13px;
    padding: 10px;
  }

  .arrow {
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    top: 90%;
    left: 95%;
    position: absolute;
  }

  .right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
</style>


<script>

export default {
  data() {
    return {
      imageList: [],
    };
  },
   async created() {
    await this.fetchImages();
  },

  methods: {
    async fetchImages() {
      try {
        const response = await this.$http.$get('/api/images');

        this.imageList = response;
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    },
    getImageUrl(imageName) {
      return `/images/${imageName}`;
    }
  }
};
</script>
