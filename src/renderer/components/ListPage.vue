<template>
    <el-container>
        <el-header>
            <list-selector field-type='list' init-value='' @chgange-value="onValueChange"></list-selector>
        </el-header>
        <el-container>
            <el-aside>
                <el-form label-position="left"
                        label-width="50px"
                >
                </el-form>
            </el-aside>
            <el-main>
                <list-grid></list-grid>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import ListSelector from './Base/Selector'
import ListGrid from './Base/Grid'
export default {
  components: {ListSelector, ListGrid},
  methods: {
    getDetails: function () {

    }
  }

}
</script>

