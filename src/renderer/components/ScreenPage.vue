<template>
    <el-container id='label-container'>
      <el-header>
        <screen-select field-type='screen' init-value='' @change-value="onScreenChanged"></screen-select>
      </el-header>
      <el-main style="height:100%; min-height:800px">
        <el-tabs v-model="activeTab" @tab-click="handleClick" style="height:100%">
            <el-tab-pane label="Main" name="main" class="tab-pane">
              <screen-grid ref="main-grid" :grid-settings="mainGridSetting"></screen-grid>
            </el-tab-pane>
            <el-tab-pane label="Objects" name="objects" class="tab-pane">
              <screen-grid ref="obj-grid" :grid-settings="objGridSetting"></screen-grid>
            </el-tab-pane>
            <el-tab-pane label="Child Objects" name="child-objects" class="tab-pane">
              <screen-grid ref="child-obj-grid" :grid-settings="childObjGridSetting"></screen-grid>
            </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>  
</template>

<script>
import ScreenSelect from './Base/Select'
import ScreenGrid from './Base/Grid'
export default {
  components: {ScreenSelect, ScreenGrid},
  data () {
    return {
      activeTab: 'main',
      mainGridSetting: {
        gridLayout: [
          {headerName: 'Screen Name', field: 'screen-name'},
          {headerName: 'Screen Program', field: 'screen-program'},
          {headerName: 'Screen Type', field: 'screen-type'},
          {headerName: 'Help Key', field: 'help-key'},
          {headerName: 'Virtual Date', field: 'virtual-data'}
        ]
      },
      objGridSetting: {
        gridLayout: [
          {headerName: 'Order', field: 'screen-order'},
          {headerName: 'Parent Name', field: 'obj-parent'},
          {headerName: 'Object Name', field: 'screen-obj-name'},
          {headerName: 'Row', field: 'obj-row'},
          {headerName: 'Column', field: 'obj-col'},
          {headerName: 'Active', field: 'obj-active'},
          {headerName: 'Required', field: 'obj-required'},
          {headerName: 'Visible', field: 'obj-visible'},
          {headerName: 'Enabled', field: 'obj-enabled'}
        ]
      },
      childObjGridSetting: {
        gridLayout: [
          {headerName: 'Order', field: 'screen-order'},
          {headerName: 'Parent Name', field: 'obj-parent'},
          {headerName: 'Object Name', field: 'screen-obj-name'},
          {headerName: 'Row', field: 'obj-row'},
          {headerName: 'Column', field: 'obj-col'},
          {headerName: 'Active', field: 'obj-active'},
          {headerName: 'Required', field: 'obj-required'},
          {headerName: 'Visible', field: 'obj-visible'},
          {headerName: 'Enabled', field: 'obj-enabled'}
        ]
      }

    }
  },
  methods: {
    onScreenChanged: function (value, event) {
      console.log('screen selected', value)
    },
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style>
  .el-tabs__content{
    height: 100%;
  }
  .tab-pane{
  min-height: 200px;
  height: 100%;
  }
</style>

