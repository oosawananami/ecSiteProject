<template>
  <div class="mainContents">
    <header>
      <HeaderUI @show-main-ui="showMainUI" @show-user-login="showUserLogin" @show-favorite-product="showFavoriteProduct"
        @show-shopping-cart="showShoppingCart"></HeaderUI>
    </header>

    <div class="componentWrapper">
      <component :is="menuMap[menuIndex]"></component>
    </div>

    <footer>
      <FooterUI></FooterUI>
    </footer>
  </div>
</template>

<script setup lang="ts">
import HeaderUI from './Modules/HeaderUI.vue'
import FooterUI from './Modules/FooterUI.vue'

import MainUI from './MainUI.vue'
import ProductDetailUI from './ProductDetailUI.vue'
import FavoritProductUI from './FavoritProductUI.vue'
import ShoppingCartUI from './ShoppingCartUI.vue'
import UserLoginUI from './UserLoginUI.vue'

import { ref } from '@vue/runtime-dom';
import { store } from '../store/vuexStore'
import { MenuIndex } from '@/script/MenuIndex'

const menuMap = [MainUI, ProductDetailUI, FavoritProductUI, ShoppingCartUI, UserLoginUI]
const menuIndex = ref(store.getters.menuIndex)


const setMenuItem = (index: MenuIndex) => {
  menuIndex.value = index
  store.commit('menuIndex', index)
}

const showMainUI = () => {
  setMenuItem(MenuIndex.MainUI)
}
const showUserLogin = () => {
  setMenuItem(MenuIndex.UserLoginUI)
}

const showFavoriteProduct = () => {
  setMenuItem(MenuIndex.FavoritProductUI)
}

const showShoppingCart = () => {
  setMenuItem(MenuIndex.ShoppingCartUI)
}
</script>

<style scoped>
.mainContents {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  position: absolute;
}

header {
  z-index: 99;
  width: 100%;
  height: 32px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ffffff;

}

.componentWrapper {
  position: relative;
  top: 32px;
}

footer {
  z-index: 99;
  width: 100%;
  background-color: #ffffff;
}

@media (min-width: 1024px) {}
</style>
