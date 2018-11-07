<template>
    <div>
        <el-select v-model="value8" filterable placeholder="Screen Name" blur="getFiles">
            <el-option
                v-for="item in screenList"
                :key="item"
                :label="item"
                :value="item.toString()">
            </el-option>
        </el-select>
    </div>
</template>

<script>
import jsonFile from './JsonData/JsonFile'
export default {
  name: 'abc',
  data () {
    return {
      value8: '',
      screenList: ['a', 'b']
    }
  },
  created () {
    this.getFiles()
  },
  methods: {
    getFiles: function () {
      this.screenList = this.screenList.concat(jsonFile.list)
      debugger
    }
  }
}
</script>

