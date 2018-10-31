<template>
  <div id="app">
    <div class="tabs">
      <ul>
        <li>
          <router-link :to ="{name:'landing'}">
            <div>购物车</div>
          </router-link>
        </li>
        <li>
          <router-link :to ="{name:'test'}">
            <div>个人中心</div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'data-tool'
  }
</script>

<style>
  /* CSS */
</style>
