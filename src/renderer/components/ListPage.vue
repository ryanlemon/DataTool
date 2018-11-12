<template>
    <el-container>
        <el-header>
            <list-select field-type='list' init-value='' @change-value="onValueChange"></list-select>
        </el-header>
        <el-container>
            <el-aside>
                <list-input v-for="item in Items"
                            :key="item.index"
                            :input-Name="item.name"
                            :input-label="item.label"
                            :input-value="item.value"></list-input>
            </el-aside>
            <el-main>
                <list-grid :grid-layout="gridLayout" :grid-data="gridData"></list-grid>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import ListSelect from './Base/Select'
import JDB from './JsonData/JsonDB'
import ListGrid from './Base/Grid'
import ListInput from './Base/Input'
export default {
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
      gridLayout: [
        {headerName: 'List Value', field: 'list-value'},
        {headerName: 'Label Text', field: 'list-value-label'},
        {headerName: 'Display Field 1', field: 'dispaly-field-1'},
        {headerName: 'Display Field 1', field: 'dispaly-field-2'},
        {headerName: 'Display Field 1', field: 'dispaly-field-3'},
        {headerName: 'Display Field 1', field: 'dispaly-field-4'},
        {headerName: 'Display Field 1', field: 'dispaly-field-5'}
      ]
    }
  },
  components: {ListSelect, ListGrid, ListInput},
  methods: {
    onValueChange: function (value, event) {
      let data = JDB.getDetail('D:\\Develop\\VueProj\\ScreenData\\sd-list\\' + value)
      this.gridData = data.value()['ds-list']['tt-list-values']
      console.log(this.gridData)
    }
  }

}
</script>

