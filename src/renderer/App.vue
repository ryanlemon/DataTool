<template>
  <div id="app">
    <el-container>
      <el-aside width="100px">
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <router-link v-for="item in items"
                      :to="item.name"
                      :key = item.index>          
            <el-menu-item :index = item.index.toString()>
              {{item.label}}
            </el-menu-item>
          </router-link>

        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'data-tool',
    data () {
      return {
        items: [
          {index: 1, name: 'landing', label: 'Landing'},
          {index: 2, name: 'screen', label: 'Screen'},
          {index: 3, name: 'translation', label: 'Translation'},
          {index: 4, name: 'message', label: 'Message'},
          {index: 5, name: 'list', label: 'List'},
          {index: 6, name: 'menu', label: 'Menu'},
          {index: 9, name: 'test', label: 'Test'}
        ]
      }
    },
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
