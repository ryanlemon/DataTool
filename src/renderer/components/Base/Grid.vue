<template>
    <ag-grid-vue style="width: 100%; height: 100%;"
                 class="ag-theme-balham"
                 :columnDefs="columnDefs"
                 :rowData="rowData">
    </ag-grid-vue>
</template>
<script>
import {AgGridVue} from 'ag-grid-vue'
export default {
  name: 'grid',
  props: {
    gridLayout: [Array],
    gridData: [Array]
  },
  data () {
    return {
      columnDefs: this.gridLayout,
      rowData: this.gridData
    }
  },
  components: {
    AgGridVue
  },
  loadData: function (data) {
    this.rowData = data
  }

}
</script>

