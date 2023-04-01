<template>
  <div class="headerWrapper">
    <div class="mainLogo" @click="onClickSiteLogo">
      <img src="../../assets/mainLogo.svg">
      <p class="menuTitle">サイトロゴ</p>
    </div>
    <ul>
      <li @click="onClickUserLogin">
        <img src="../../assets/icon/login.svg">
        <p class="menuTitle">ログイン</p>
      </li>
      <li @click="onClickFavoriteProduct">
        <img src="../../assets/icon/Heart_Black.svg">
        <p class="menuTitle">お気に入り</p>
      </li>
      <li @click="onClickShoppingCart">
        <img src="../../assets/icon/shoppingcart.svg">
        <p class="menuTitle">カート</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits<{
  (e: 'showMainUi'): void
  (e: 'showUserLogin'): void
  (e: 'showFavoriteProduct'): void
  (e: 'showShoppingCart'): void
}>()

const onClickSiteLogo = () => {
  emits('showMainUi')
}
const onClickUserLogin = () => {
  emits('showUserLogin')
}

const onClickFavoriteProduct = () => {
  emits('showFavoriteProduct')
}

const onClickShoppingCart = () => {
  emits('showShoppingCart')
}
</script>

<style scoped>
li img {
  width: 14px;
  height: 14px;
  margin: auto 5px;
}


.headerWrapper {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between
}

.mainLogo {
  min-width: 100px;
  height: 24px;
  vertical-align: bottom;
  margin: auto 0;
  display: flex;
}

ul {
  display: flex;
  margin: 3px 0 3px 32px;
}

ul li {
  min-width: 145px;
  height: 24px;
  margin: auto 0 auto 0;
  display: flex;
}

ul li::after {
  content: "/";
  padding: 0 20px;
}

ul li:last-child::after {
  content: "";
  /* 最後のli要素の「/」をなくす */
}

.menuTitle {
  position: relative;
  font-size: 14px;
}
</style>

