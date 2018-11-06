<template>
  <div id="app">
    <el-container>
      <el-aside width="100px">
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item index='1'>
            <router-link :to="{name:'landing'}">
              <div>Landing</div>
            </router-link>
          </el-menu-item>
          <el-menu-item index='2'>
            <router-link :to="{name:'screen'}">
              <div>Screen</div>
            </router-link>
          </el-menu-item>
          <el-menu-item index='3'>
            <router-link :to="{name:'translation'}">
              <div>Translation</div>
            </router-link>
          </el-menu-item>
          <el-menu-item index='4'>
            <router-link :to="{name:'message'}">
              <div>Message</div>
            </router-link>
          </el-menu-item>
          <el-menu-item index='9'>
            <router-link :to="{name:'test'}">
              <div>Test</div>
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <!-- <div class="tabs">
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
    </div> -->
  </div>
</template>

<script>
  export default {
    name: 'data-tool',
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style>
  /* CSS */
</style>
