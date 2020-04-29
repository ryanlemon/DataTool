<template>
    <el-container id='label-container'>
        <el-header>
            <label-select field-type='label' init-value='' ></label-select>
            <label-refresh btn-label='Refresh' @click.native="refreshLabels"></label-refresh>
        </el-header>
        <!-- <el-container id='label-editor'> -->
            <!-- <el-aside>
                <list-input v-for="item in Items"
                            :key="item.index"
                            :input-Name="item.name"
                            :input-label="item.label"
                            :input-value="item.value"></list-input>
            </el-aside> -->
            <el-main style="height:100%">
                <label-grid ref="labelgrid" :grid-settings="labelGridSetting"></label-grid>
            </el-main>
        <!-- </el-container> -->
    </el-container>
</template>

<script>
import LabelSelect from './Base/Select'
import LabelGrid from './Base/Grid'
import LabelRefresh from './Base/Button'
export default {
  inheritAttrs: false,
  components: {LabelSelect, LabelGrid, LabelRefresh},
  data () {
    return {
      labelGridSetting: {
        gridLayout: [
          {headerName: 'Label Code', field: 'sd-code'},
          {headerName: 'Label Text', field: 'sd-text', width: 300}
        ]
      }
    }
  },
  methods: {
    refreshLabels: function (value, event) {
      console.log('label changed', value)
      let db = this.$db.getDetail(this.$store.getters.labelpath)
      var data = db.value()['ds-translation']['tt-translation']
      this.$refs.labelgrid.setData(data)
    }
  }
}
</script>