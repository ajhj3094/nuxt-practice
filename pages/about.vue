<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
      repellendus ullam pariatur voluptatibus voluptates atque rerum accusantium
      eum. Assumenda quisquam aliquid modi hic sequi quos neque, similique
      beatae quidem laborum!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
      repellendus ullam pariatur voluptatibus voluptates atque rerum accusantium
      eum. Assumenda quisquam aliquid modi hic sequi quos neque, similique
      beatae quidem laborum!
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/ninja?name=mario", {
  method: "post",
  body: { age: 30 },
});
// const { data } = useFetch("/api/ninja");
</script>

<style scoped>
h2 {
  margin-top: 2rem;
}
</style>
