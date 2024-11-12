<template>
  <div>
    <ProductDetails :product="product"></ProductDetails>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

const { data: product } = await useFetch(uri);

definePageMeta({
  layout: "products",
});
</script>

<style lang="scss" scoped></style>
