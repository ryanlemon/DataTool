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
        case 'menu':
          return 'Menu Name'
      }
    },
    options: this.$db.getFileList(this.fieldType)

  },
  methods: {
    onChange: function (event) {
      this.$emit('change-value', this.selectValue, event)
    }
  }
}
</script>

