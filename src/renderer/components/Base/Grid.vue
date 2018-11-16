<template>
    <ag-grid-vue style="width: 100%; height: 100%;"
                 class="ag-theme-balham"
                 :columnDefs="columnDefs"
                 :rowData="rowData">
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
      rowData: []
    }
  },
  methods: {
    setData (data) {
      this.rowData = data
    }
  },
  components: {
    AgGridVue
  }

}
</script>

