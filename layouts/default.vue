<template>
  <div class="w-full h-full">
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Product</NuxtLink></li>
          <li><NuxtLink to="/products/abc">abc product</NuxtLink></li>
          <li><NuxtLink to="/map">2D map</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <!-- output the page content -->
    <div class="container mx-auto p-4 h-full">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: green;
}
</style>
