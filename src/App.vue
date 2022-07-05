<template>
  <section id="app">
    <HeaderPrincipal />
    <router-view />
    <FooterPrincipal />
  </section>
</template>

<script>
import HeaderPrincipal from './components/header/HeaderPrincipal.vue';
import FooterPrincipal from './components/footer/FooterPrincipal.vue';

export default {
  name: 'App',
  components: {
    HeaderPrincipal,
    FooterPrincipal,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 2vw;
}
</style>
