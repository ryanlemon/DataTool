<template>
    <ag-grid-vue style="width: 100%; height: 100%;"
                 class="ag-theme-balham"
                 :columnDefs="columnDefs"
                 :rowData="rowData"
                 :gridReady="onGridReady">
    </ag-grid-vue>
</template>
<script>
import {AgGridVue} from 'ag-grid-vue'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
export default {
  name: 'grid',
  props: ['gridSettings'],
  data () {
    return {
      columnDefs: this.gridSettings.gridLayout,
      rowData: null
    }
  },
  beforeMount () {
    this.createRowData()
  },
  methods: {
    onGridReady (params) {
      this.gridApi = params.api
      this.columnApi = params.columnApi
    },
    setData (data) {
      this.gridApi.setRowData(data)
    },
    createRowData () {
      this.rowData = this.gridData
    }
  },
  components: {
    AgGridVue
  }

}
</script>
