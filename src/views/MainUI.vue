<template>
    <section class="mainUIWrapper">
        <div class="mainVisual">
            <p class="concept">
                タニクは、あなたの生活をすこしだけ豊かにするお手伝いをします。<br>
                多肉植物と一緒にほっとやさしい時間を過ごしてみませんか。
            </p>
        </div>

        <section class="mainContentsArea">
            <div v-for="(product, index) in productList" :key="index" class="productInfoArea">
                <img class="productImg" :src="'/img/' + product.img">
                <p>{{ product.name }}</p>
                <p>{{ setPrice(product.price) }}</p>
            </div>
        </section>

    </section>
</template>

<script setup lang="ts">
import productList from '../assets/json/productList.json'

const setPrice = (price: string) => {
    const priceNumber = Number(price)
    const priceToLocalString = priceNumber.toLocaleString()
    const displayValue = '\\' + priceToLocalString
    return displayValue
}

</script>

<style scoped>
.mainVisual {
    width: 100%;
    height: 85vh;
    content: '';
    background-image: url('../assets/img/mainVisual.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0% 82%;
    text-align: center;

    position: relative;
    top: 0;

}

.mainVisual::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 85vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);

}

.concept {
    color: #ffffff;
    text-shadow: 0 2px 2px #666;
    font-weight: 700;
    z-index: 1;
    position: relative;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
}

.mainContentsArea {
    width: 100%;
    margin: 50px 0px;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    background-color: #C1DB81;
}

.productInfoArea {
    width: calc((100% - 100px) /3);
    margin: 5px;
    padding: 10px 0;

    background-color: #ffffff;
    border-radius: 10px;
    font-size: 14px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.productImg {
    width: 80%;
    padding: 10px;
}
</style>