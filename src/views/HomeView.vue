<template>
  <div class="home">
    <HomeProducts />
  </div>
</template>

<script>
import HomeProducts from '../components/home/HomeProducts.vue';

export default {
  name: 'HomeView',
  components: {
    HomeProducts,
  },
};
</script>
