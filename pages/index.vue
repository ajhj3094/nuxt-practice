<template>
  <div>
    <!-- <h2>Home</h2>
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
    </p> -->
    <h1>element-plus el-table 組件：</h1>
    <br />
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
</script>

<style scoped>
h2 {
  margin-top: 2rem;
}
</style>
