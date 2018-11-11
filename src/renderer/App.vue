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
  </div>
</template>

<script>
  export default {
    name: 'data-tool',
    data () {
      return {
        menuVisible: false,
        items: [
          {index: 1, name: 'landing', label: 'Landing', icon: 'move_to_inbox'},
          {index: 2, name: 'screen', label: 'Screen', icon: 'desktop_windows'},
          {index: 3, name: 'translation', label: 'Translation', icon: 'translate'},
          {index: 4, name: 'message', label: 'Message', icon: 'message'},
          {index: 5, name: 'list', label: 'List', icon: 'list'},
          {index: 6, name: 'menu', label: 'Menu', icon: 'menu'},
          {index: 9, name: 'test', label: 'Test', icon: 'settings'}
        ]
      }
    },
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      }
    }
  }
</script>

<style >
  .md-app {
    min-height: 350px;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>
