<template>
    <md-container>
        <md-header>
            <list-select field-type='list' init-value='' @change-value="onValueChange"></list-select>
        </md-header>
        <md-container>
            <md-aside>
                <md-form labmd-position="left"
                        labmd-width="50px"
                >
                </md-form>
            </md-aside>
            <md-main>
                <list-grid></list-grid>
            </md-main>
        </md-container>
    </md-container>
</template>
<script>
import ListSelect from './Base/Select'
import JDB from './JsonData/JsonDB'
import ListGrid from './Base/Grid'
export default {
  components: {ListSelect, ListGrid},
  methods: {
    onValueChange: function (value, event) {
      let data = JDB.getDetail('D:\\Ryan\\Eletron-Vue-Project\\ScreenData\\sd-list\\' + value)
      console.log(data.value())
    }
  }

}
</script>

