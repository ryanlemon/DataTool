<template>
    <ag-grid-vue style="width: 100%; height: 100%;"
                 class="ag-theme-balham"
                 :columnDefs="columnDefs"
                 :rowData="gridData">
    </ag-grid-vue>
</template>
<script>
import {AgGridVue} from 'ag-grid-vue'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
export default {
  name: 'grid',
  props: {
    gridSetting: Object
  },
  data () {
    return {
      columnDefs: this.gridSetting.gridLayout,
      rowData: this.gridSetting.gridData
    }
  },
  computed: {
    gridData: function () {
      var data = []
      this.gridSetting.gridData.map(
        row => data.push(row)
      )
      return data
    }
  },
  components: {
    AgGridVue
  }

}
</script>

