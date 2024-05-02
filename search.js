const fs = require('fs')

const searcheWord = (directorio, word) => {
  const folders = fs.readdirSync(directorio)

  folders.forEach((file) => {
    const path = directorio + '/' + file
    const stats = fs.statSync(path)

    if (stats.isDirectory()) {
      searcheWord(path, word)
    } else if (stats.isFile()) {
      const content = fs.readFileSync(path, 'utf8')
      if (content.includes(word)) {
        console.log(path)
      }
    }
  })
}

const ROOT_PATH = '../entrega-galletas-noel/src/'
searcheWord(ROOT_PATH, 'className')

// codegen