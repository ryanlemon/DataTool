<script>
    import Datastore from 'lowdb'
    import FileSync from 'lowdb/adapters/FileSync'
    // import {remote, app} from 'electron'
// const APP = process.type === 'renderer' ? remote.app : app
// const STORE_PATH = APP.getPath('userData')
export default {
  methods: {

  },
  getDetail: function (filePath) {
        console.log(filePath)
        var adapter = new FileSync(filePath)
        return Datastore(adapter)
  }
}
</script>
