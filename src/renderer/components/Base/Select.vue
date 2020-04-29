<template>
    <el-select v-model="selectValue" filterable :placeholder="inputType" @change="onChange($event)">
        <el-option
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item.toString()">
        </el-option>
    </el-select>
</template>
<script>
export default {
  props: ['fieldType', 'initValue'],
  data () {
    return {
      selectValue: ''
    }
  },
  computed: {
    inputType: function () {
      switch (this.fieldType) {
        case 'screen':
          return 'Screen Name'
        case 'list':
          return 'List Name'
        case 'label':
          return 'Label Num'
        case 'menu':
          return 'Menu Name'
        case 'message':
          return 'Message Num'
      }
    },

    options: function () {
      let items = null
      switch (this.fieldType) {
        case 'list':
          items = this.$db.getFileList(this.$store.getters.listpath)
          break
        case 'screen':
          items = this.$db.getFileList(this.$store.getters.screenpath)
          break
        case 'label':
        case 'message':
          items = this.getLableItems()
          break
        default:
          items = ['I', 'have', 'no', 'options']
      }
      return items
    }
  },
  methods: {
    onChange: function (event) {
      this.$emit('change-value', this.selectValue, event)
    },
    getLableItems: function () {
      return []
    }
  }
}
</script>

