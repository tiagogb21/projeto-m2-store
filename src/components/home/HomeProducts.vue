<template>
  <main class="container">
    <section class="button__container">
      <!-- Botão Continuar -->
      <button type="button" class="button-select" :disabled="isButtonDisabled" @click="message">
        <img src="../../assets/cart.png" alt="remove item" />
        CONTINUAR
      </button>
    </section>

    <!-- total -->
    <article class="total__box">
      <p>Total</p>
      <article class="box__price__option">
        <p>R$ {{ this.$store.state.totalPrice }} / mês</p>
        <!-- Botão para Apagar o Plano Selecionado -->
        <button class="button-remove" type="button" @click="removeAllItems" :disabled="isDisabled">
          <img src="../../assets/remove.png" alt="remove item" />
        </button>
      </article>
    </article>

    <!-- Taxa de instalação -->
    <article class="instalacao__box">
      <p>Taxa de instalação</p>
      <p>Grátis</p>
    </article>

    <!-- Produtos -->
    <section class="product__container" v-for="product in productList" v-bind:key="product.id">
      <h3 class="title">{{ product }}</h3>

      <!-- Fixo -->
      <article v-if="product === 'Fixo'" class="fixo__container">
        <h4>Agora escolha seu pacote de telefone fixo</h4>
        <button
          class="fixo__item"
          type="button"
          @click="addProductToCart('fixo', productFixo)"
          :disabled="isDisabled"
        >
          <p>{{ productFixo.title }}</p>
        </button>
      </article>

      <!-- TV -->
      <article v-else-if="product === 'TV'">
        <h4 class="tv">Agora escolha seu pacote de televisão</h4>
        <article class="tv__box">
          <button
            v-for="prod in productTV"
            v-bind:key="prod.id"
            class="tv__item"
            type="button"
            :disabled="isDisabled"
            @click="addProductToCart('tv', prod)"
          >
            <p>
              {{ prod.title }}
            </p>
            <p>R$ {{ prod.price }}.00</p>
          </button>
        </article>
      </article>

      <!-- Internet -->
      <article v-else class="internet__container">
        <h4>Selecione um plano de internet para continuar</h4>
        <article class="internet__box">
          <button
            v-for="prod in productInternet"
            v-bind:key="prod.id"
            class="internet__item"
            type="button"
            @click="addProductToCart('internet', prod)"
          >
            <p class="product__title">{{ prod.title }}</p>
            <p>R$ {{ prod.price }}.00</p>
          </button>
        </article>
      </article>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HomeProducts',
  data() {
    return {
      price: 0,
      disable: true,
    };
  },
  computed: {
    ...mapGetters([
      'productItems',
      'productList',
      'productFixo',
      'productTV',
      'productInternet',
      'addProductToCart',
      'removeAllItems',
    ]),
    isDisabled() {
      const isInternetProductEmpty = this.$store.state.cartItems.internet.product.length === 0;
      return isInternetProductEmpty;
    },
    isButtonDisabled() {
      const { cartItems } = this.$store.state;
      const isInternetProductEmpty = cartItems.internet.product.length === 0;
      const isTVProductEmpty = cartItems.tv.product.length === 0;
      const isFixoProductEmpty = cartItems.fixo.product.length === 0;
      return isInternetProductEmpty || isTVProductEmpty || isFixoProductEmpty;
    },
  },
  created() {
    this.$store.dispatch('getProductItems');
  },
  updated() {
    this.price = this.$store.state.totalPrice;
  },
  methods: {
    message() {
      const { cartItems } = this.$store.state;
      const a = `
        Plano de Internet: ${cartItems.internet.product}
        Plano de TV: ${cartItems.tv.product}
        Plano Fixo: ${cartItems.fixo.product}
      `;
      window.alert(a);
    },
  },
};
</script>

<style scoped>
.container {
  width: 70vw;
  display: flex;
  flex-direction: column-reverse;
}

.title {
  text-transform: uppercase;
  color: rgb(166 113 196);
}

.fixo__item {
  display: flex;
  width: 20%;
  /* border: 1px solid black; */
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.fixo__item:hover,
.tv__item:hover,
.internet__item:hover {
  cursor: pointer;
  color: white;
  border: none;
  background: rgb(166 113 196);
}

.tv__box {
  display: flex;
  justify-content: space-around;
}

.tv__item {
  width: 30%;
}

.internet__container {
  display: flex;
  flex-direction: column;
}

.internet__box {
  display: flex;
  justify-content: space-around;
}

.fixo__item,
.tv__item,
.internet__item {
  width: 30%;
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 10px;
  background: white;
  justify-content: center;
  align-items: center;
}

.product__title {
  color: rgb(31, 36, 114);
  font-weight: bolder;
}

.instalacao__box,
.total__box {
  width: 90%;
  display: flex;
  justify-content: space-between;
}

.total__box {
  color: rgb(166, 113, 196);
}

.button-select {
  height: 7vh;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 2vw;
  padding: 3vw;
  opacity: 0.7;
  border-radius: 1vw;
}

.button-select:hover {
  cursor: pointer;
  opacity: 1;
}

.button-select img {
  width: 20%;
  margin-right: 1vw;
}

.box__price__option {
  width: 18vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button-remove {
  width: 30%;
}

.button-remove img {
  width: 50%;
}
</style>
