const fs = require('fs')
const path = require('path')

const replaceWords = (directoire, regExp, value) => {
  const folders = fs.readdirSync(path.join(directoire))

  folders.forEach((file) => {
    const pathName = path.join(directoire, '/', file)
    const stats = fs.statSync(pathName)

    if (stats.isDirectory()) {
      replaceWords(pathName, regExp, value)
    } else if (stats.isFile()) {
      const content = fs.readFileSync(pathName, 'utf8')
      const newContent = content.replaceAll(regExp, value)
      fs.writeFileSync(pathName, newContent, 'utf8')
    }
  })
}

// const ROOT_PATH = '../make-crud-app/src/templetesTs'
// const ROOT_PATH = './src/components/InputApp'

// const ROOT_PATH = './src/database/models'
const ROOT_PATH = './src'

const words = [
  ['regirter', 'register']
   // ['return sequelize.define(','sequelize.define(']
  // ['../../types/inputApp','@app/types/inputApp'],
  //['./types','@app/types'],
  //[],
  // ['id: {', 'uuid: {'],
  // ['/:id', '/:uuid'],
  // ['{id}', '{uuid}'],
  // ['(id)', '(uuid)']
]

words.forEach(([regExp, value]) => {
  replaceWords(ROOT_PATH, regExp, value)
})
