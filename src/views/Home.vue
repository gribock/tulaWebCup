<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <span>{{ userName }}</span>
    <div id="main">
      <div class="prevue" v-for="item in galleryItems" 
           :key="item.index" @click="setShowGallery(true);setShowedImage(galleryItems.indexOf(item))">
        <img :src="`${item.file}`"/>
      </div>
    </div>
    <ImageShowOverlay v-if="showOverlay" :src="galleryItems[showedImage].file" />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex';
import ImageShowOverlay from '../components/ImageShowOverlay.vue';

export default {
  name: 'home',
  components: {
    ImageShowOverlay
  },
  computed: {
    ...mapGetters([
      'token',
      'userName',
      'galleryItems',
      'showOverlay',
      'showedImage'
    ])
  },
  methods:{
    ...mapActions([
      'setShowGallery',
      'setShowedImage'
    ])
  },
  created() {
    this.$store.dispatch('updateToken');
    if (!this.$store.getters.token) {
      this.$router.push({ path: '/login' });
      return;
    } else {
      this.$router.push({ path: '/' });
    }
    this.$store.dispatch('getDiskInfo');
    this.$store.dispatch('getGalleryItems');
  }
}
</script>

<style scoped>
#main {    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: 300px;
    grid-auto-rows: 300px;
    margin: 0 auto;
    grid-gap: 20px;
}
#main img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.prevue:hover {
    opacity: .7;
}
</style>

