import fs from 'fs'
import path from 'path'

import {getAlias, getListModels, getColums} from './models.js'

//const ROOT = path.join('../lambda-typescript-express-sequelize-jest/src')
//const ROOT = path.join('../crud-app/src')
const ROOT = path.join('../api-servicios-ti/src/')
const TEMPLETES = path.join('./src/templetesTs/')
const CONTROLLERS = [] // ['All', 'Create', 'Edit', 'Delete']

const capitalizer = (str) => {
  return [
    str.charAt(0).toUpperCase() + str.slice(1),
    str.charAt(0).toLowerCase() + str.slice(1)
  ]
}
const getFils = async (dir) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) return reject(err)
      return resolve(files)
    })
  })
}

const makeDirectory = async (dir) => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dir)) return resolve(dir)
    fs.mkdir(dir, {recursive: true}, (error) => {
      if (error) return reject(error)
      resolve(dir)
    })
  })
}

const getFile = (pathTemplete) => {
  return new Promise((resolve, reject) => {
    fs.readFile(pathTemplete, 'utf8', (error, data) => {
      if (error) reject(error)
      else resolve(data)
    })
  })
}

const saveFile = (pathNewFile, newFile) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(pathNewFile, newFile, 'utf8', (error) => {
      if (error) reject(error)
      else resolve(pathNewFile)
    })
  })
}

const getPahts = (templeteFile, modelName) => {
  const alias = getAlias(modelName)

  const [folder, file] = templeteFile
    .replaceAll('_', '/')
    .replace('[mn]', alias.folder)
    .replace('[ct]', 'controllers')
    .replace('[dm]', 'defineModels')
    .replace('[db]', 'database')
    .replace('[rt]', 'routes')
    .replace('[md]', 'models')
    .split('.')

  return {
    templete: path.join(TEMPLETES, templeteFile),
    folder: path.join(ROOT, folder),
    newFile: path.join(ROOT, folder, `${file}.ts`)
  }
}

/**
 * Optener los reemplasos {clave: valor}
 * para personalizar el archivo segun los alias del modelo.
 * @param {string} modelName Nombre del modelo.
 * @returns Arreglo de reemplasos.
 */
const getReplacements = (modelName) => {
  const alias = getAlias(modelName)
  return Object.keys(alias).reduce((rpls, a) => {
    rpls.push({find: `<~${a}~>`, value: alias[a]})
    return rpls
  }, [])
}

/**
 * Genera un archivo nuevo a partir de una plantilla.
 * @param {string} templeteFile Nombre del archivo plantilla.
 * @param {string} modelName Nombre del modelo.
 * @returns la rura apsoluta del nuevo archivo generado o null si el archivo ya existe.
 */
const mekeFile = async (templeteFile, modelName) => {
  const replacements = getReplacements(modelName)
  const paths = getPahts(templeteFile, modelName)
  if (!fs.existsSync(paths.newFile)) {
    await makeDirectory(paths.folder)
    const templete = await getFile(paths.templete)
    const newFile = replacements.reduce(
      (file, {find, value}) => file.replaceAll(find, value),
      templete
    )
    await saveFile(paths.newFile, newFile)
    return paths.newFile
  }
  return null
}

const mekeItemDb = (name, values) => {
  const itemKeys = Object.keys(values)
  const item = itemKeys.reduce((item, key) => {
    return item + `\n\t\t\t${key}: ${values[key]},`
  }, `\n\t\t${name}: {`)
  return item + `\n\t\t},`
}

const getPayloadAddLine = (lineId, modelName) => {
  const alias = getAlias(modelName)

  switch (lineId) {
    case 'api.index.txt':
      return {
        filePath: path.join(ROOT, 'api/index.ts'),
        lines: [
          {
            find: '<~Import~>',
            line: `import ${alias.model}Routes from './routes/${alias.model}'`
          },
          {
            find: '<~Declaration~>',
            line: `router.use('/${alias.Model}', ${alias.model}Routes)`
          }
        ]
      }
    case '[db].[dm].txt':
      return {
        filePath: path.join(ROOT, `database/defineModels.ts`),
        lines: [
          {
            find: '<~Import~>',
            line: `import ${alias.model} from './models/${alias.model}'`
          },
          {
            find: '<~Declaration~>',
            line: `  sequelize.define('${alias.Model}', ${alias.model}, {tableName: '${alias.table}'})`
          }
        ]
      }
    default:
      throw Error(`No payload exists for ${lineId}`)
  }
}

const addLines = async (lineId, modelName) => {
  const {lines, filePath} = getPayloadAddLine(lineId, modelName)
  if (!fs.existsSync(filePath)) throw Error(`${filePath} file does not exist`)
  const originalFile = await getFile(filePath)
  const newFile = lines.reduce((file, {find, line}) => {
    if (file.includes(line)) return file
    return file.replaceAll(find, `${line}\n${find}`)
  }, originalFile)
  await saveFile(filePath, newFile)
}

const generateFiles = async () => {
  const modelNames = getListModels()
  const templeteFils = await getFils(TEMPLETES)
  const filNames = ['api.index.txt', '[db].[dm].txt']

  for (let i = 0; i < modelNames.length; i++) {
    const modelName = modelNames[i]

    await Promise.all(
      templeteFils.map(async (templeteFileName) => {
        const file = await mekeFile(templeteFileName, modelName)
        if (file) console.log(file)
      })
    )

    await Promise.all(
      filNames.map(async (file) => {
        await addLines(file, modelName)
      })
    )
  }
}

const replaceLines = (directorio, word) => {
  const folders = fs.readdirSync(directorio)

  folders.forEach((file) => {
    const path = directorio + '/' + file
    const stats = fs.statSync(path)

    if (stats.isDirectory()) {
      replaceLines(path, word)
    } else if (stats.isFile()) {
      const content = fs.readFileSync(path, 'utf8')
      const newContent = content.replaceAll(word, '')
      fs.writeFileSync(path, newContent, 'utf8')
    }
  })
}

generateFiles().then(() => {
  replaceLines(ROOT, /\n<~.+~>/g)
})
