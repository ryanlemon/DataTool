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
    var adapter = new FileSync(path.join(dirPath, fileName))
    return Datastore(adapter)
  }
}
