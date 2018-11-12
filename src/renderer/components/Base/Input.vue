<template>
    <div>
        <label>{{inputLabel}}</label>
        <el-input :name="inputName" :value="inputValue">
        </el-input>
    </div>
</template>

<script>
export default {
  props: {
    inputName: [String],
    inputLabel: [String],
    inputValue: [String]
  }
}
</script>

