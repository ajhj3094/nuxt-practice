<template>
  <div class="w-full h-full">
    <div
      id="viewDiv"
      ref="viewDiv"
    />
  </div>
</template>

<script setup lang="ts">
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import { onMounted } from 'vue'

const viewDiv = ref()

onMounted(() => {
  const map = new Map({
    basemap: 'topo-vector',
  })

  const view = new MapView({
    container: viewDiv.value, // reference the div id
    map: map,
    zoom: 4,
    center: [15, 65],
    constraints: {
      minZoom: 3, // 最小縮放級別
      maxZoom: 10, // 最大縮放級別
      rotationEnabled: false, // 禁用旋轉
    },
  })

  view.when(() => {
    console.log('init')
  })
})
</script>

<style lang="scss" scoped>
#viewDiv {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
