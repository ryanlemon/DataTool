import fs from 'fs-extra'
import path from 'path'
import Datastore from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

export default {
  getFileList: function (dirpath) {
    console.log(dirpath)
    return fs.readdirSync(dirpath)
  },
  getDetail: function (dirPath, fileName) {
    let fullpath = dirPath
    if (fileName) {
      fullpath = path.join(dirPath, fileName)
    }
    var adapter = new FileSync(fullpath)
    return Datastore(adapter)
  }
}
