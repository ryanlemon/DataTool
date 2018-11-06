<script>
    // import Datastore from 'lowdb'
    // import FileSync from 'lowdb/adapters/FileSync'
    // import path from 'path'
    // import {remote, app} from 'electron'
// const APP = process.type === 'renderer' ? remote.app : app
// const STORE_PATH = APP.getPath('userData')
export default {
  methods: {
        getFileList: function (type) {
          // var adapters = new FileSync(D:\Develop\VueProj\ScreenData\sd-screen)
          switch (type) {
            case 'screen':
              break
            case 'message':
              break
            case 'translation':
              break
          }
        }
  }
}
</script>
