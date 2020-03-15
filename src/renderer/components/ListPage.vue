<template>
    <el-container id='list'>
        <el-header>
            <list-select field-type='list' init-value='' @change-value="onValueChange"></list-select>
        </el-header>
        <el-container id='editor'>
            <el-aside>
                <list-input v-for="item in Items"
                            :key="item.index"
                            :input-Name="item.name"
                            :input-label="item.label"
                            :input-value="item.value"></list-input>
            </el-aside>
            <el-main>
                <list-grid ref="listgrid" :grid-settings="gridSetting"></list-grid>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import ListSelect from './Base/Select'
import ListGrid from './Base/Grid'
import ListInput from './Base/Input'
export default {
  inheritAttrs: false,
  data () {
    return {
      Items: [
        {index: 1, name: 'listValue', label: 'List Value', value: ''},
        {index: 2, name: 'labelCode', label: 'Label Code', value: ''},
        {index: 3, name: 'labelText', label: 'Label Text', value: ''},
        {index: 4, name: 'displayField1', label: 'Display Field 1', value: ''},
        {index: 5, name: 'displayField2', label: 'Display Field 2', value: ''},
        {index: 6, name: 'displayField3', label: 'Display Field 3', value: ''},
        {index: 7, name: 'displayField4', label: 'Display Field 4', value: ''},
        {index: 8, name: 'displayField5', label: 'Display Field 5', value: ''}
      ],
      gridSetting: {
        gridLayout: [
          {headerName: 'List Value', field: 'list-value'},
          {headerName: 'Label Text', field: 'list-value-label'},
          {headerName: 'Display Field 1', field: 'display-field-1'},
          {headerName: 'Display Field 2', field: 'display-field-2'},
          {headerName: 'Display Field 3', field: 'display-field-3'},
          {headerName: 'Display Field 4', field: 'display-field-4'},
          {headerName: 'Display Field 5', field: 'display-field-5'}
        ],
        gridData: []
      }
    }
  },
  components: {ListSelect, ListGrid, ListInput},
  methods: {
    onValueChange: function (value, event) {
      let db = this.$db.getDetail(this.$store.getters.listpath, value)
      var data = db.value()['ds-list']['tt-list-values']
      this.$refs.listgrid.setData(data)
    }
  }

}
</script>

