import fs from 'fs-extra'
import path from 'path'
import Datastore from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

const dataPath = 'C:\\Apprise\\Latest\\ScreenData'
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
    folderName = path.join(dataPath, folderName)
    return fs.readdir(folderName)
  },
  getDetail: function (filePath) {
    console.log(filePath)
    var adapter = new FileSync(filePath)
    return Datastore(adapter)
  }
}
