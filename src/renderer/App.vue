<template>
  <div id="app">
    <md-app>
      <md-app-toolbar class='md-primar' md-elevation='0'>
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-tilte">My Title</span>
      </md-app-toolbar>
      <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar> 
        <md-list>
          <md-list-item v-for="item in items"
                        :key = item.index>
            <router-link :to="item.name">
              <md-icon>{{item.icon}}</md-icon>
              <span class='md-list-item-text'>{{item.label}}</span>
            </router-link>
          </md-list-item>
        </md-list>
      </md-app-drawer>
      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
    <el-container>
      <el-aside width="100px">
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item v-for="item in items"
                        :key = item.index
                        :index = item.index.toString()>
            <router-link :to="item.name">{{item.label}}</router-link>
          </el-menu-item>
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
          {index: 1, name: 'landing', label: 'Landing', icon: 'move_to_inbox'},
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
