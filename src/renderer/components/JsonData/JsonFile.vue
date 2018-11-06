<script>
import fs from 'fs-extra'
const dataPath = 'D:\\Develop\\VueProj\\ScreenData'

export default {
  getFileList: function (type) {
    if (type === 'screen') {
      fs.readdir(dataPath + '\\sd-screen', (err, files) => {
        if (!err) { return files } else { err.toString() }
      })
    }
  }
}
</script>
