<template>
    <el-container id='label-container'>
        <el-header>
            <msg-select field-type='message' init-value='' ></msg-select>
            <msg-refresh btn-label='Refresh' @click.native="refreshMessages"></msg-refresh>
        </el-header>
        <!-- <el-container id='label-editor'> -->
            <!-- <el-aside>
                <list-input v-for="item in Items"
                            :key="item.index"
                            :input-Name="item.name"
                            :input-label="item.label"
                            :input-value="item.value"></list-input>
            </el-aside> -->
            <el-main style="height:100%">
                <msg-grid ref="labelgrid" :grid-settings="msgGridSetting"></msg-grid>
            </el-main>
        <!-- </el-container> -->
    </el-container>
</template>

<script>
import MsgSelect from './Base/Select'
import MsgGrid from './Base/Grid'
import MsgRefresh from './Base/Button'
export default {
  inheritAttrs: false,
  components: {MsgSelect, MsgGrid, MsgRefresh},
  data () {
    return {
      msgGridSetting: {
        gridLayout: [
          {headerName: 'Message Code', field: 'message-number'},
          {headerName: 'Message Text', field: 'message-description', width: 800}
        ]
      }
    }
  },
  methods: {
    refreshMessages: function (value, event) {
      console.log('label changed', value)
      let db = this.$db.getDetail(this.$store.getters.messagepath)
      var data = db.value()['ds-messages']['tt-messages']
      this.$refs.labelgrid.setData(data)
    }
  }
}
</script>