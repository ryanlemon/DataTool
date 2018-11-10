<script>
import fs from 'fs-extra'
const dataPath = 'D:\\Ryan\\Eletron-Vue-Project\\ScreenData\\'
// const dataPath = 'C:\\Apprise\\Latest\\ScreenData'
export default {
  getFileList: function (type) {
    console.log('get file list -- type: ' + type)
    let folderName = 'sd-'
    switch (type) {
      case 'screen':
      case 'list':
      case 'menu':
        folderName = folderName + type
        break
      case 'message':
      case 'translation':
        folderName = folderName + type + '\\'
        break
      default:
        console.log('Invalid Type')
    }
    return fs.readdirSync(dataPath + folderName + '\\')
  }
}
</script>
