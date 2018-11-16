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
<<<<<<< HEAD
      columnDefs: this.gridSettings.gridLayout,
      rowData: []
=======
      columnDefs: this.gridSetting.gridLayout
>>>>>>> 20e5d6daa6fc198d54d42a02a67cfdd159965f69
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

