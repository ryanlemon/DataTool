<script>
import fs from 'fs-extra'
const dataPath = 'D:\\Develop\\VueProj\\ScreenData'
const list = fs.readdir(dataPath + '\\sd-screen\\')
export default {
  getFileList: function (type) {
    if (type === 'screen') {
      fs.readdir(dataPath + '\\sd-screen\\', (err, files) => {
        if (err) { return err } else { return files }
      })
    }
  },
  list
}
</script>
