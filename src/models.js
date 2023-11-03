import fs from 'fs'

const capitalizer = (word) => {
  return [
    word.charAt(0).toUpperCase() + word.slice(1),
    word.charAt(0).toLowerCase() + word.slice(1)
  ]
}

const genereteAlias = (modelName, ui_ModelName) => {
  const [Alias, alias] = capitalizer(modelName)
  const [ui_Alias, ui_alias] = capitalizer(ui_ModelName)

  return {
    Model: Alias,
    model: alias,
    Models: Alias + 's',
    models: alias + 's',

    file: alias + '.ts',
    folder: alias,
    path: alias + 's',
    api_path: alias + 's',
    label: Alias,
    table: ui_alias,

    ui_Model: ui_Alias,
    ui_model: ui_alias,
    ui_path: ui_alias,
    ui_Models: ui_Alias + 's',
    ui_models: ui_alias + 's',
    ui_paths: ui_alias + 's'
  }
}

export const getListModels = () => Object.keys(models)

export const getAlias = (modelName) => {
  return models[modelName].alias
}

export const getColums = (modelName) => {
  return [] // models[modelName].columns
}

export const models = {
  contact: {
    alias: {
      Model: 'Contact',
      model: 'contact',
      Models: 'Contacts',
      models: 'contacts',
      file: 'contact.ts',
      folder: 'contact',
      path: 'contacts',
      api_path: 'contacts',
      label: 'Contact',
      table: 'contacto',
      ui_Model: 'Contacto',
      ui_model: 'contacto',
      ui_path: 'contacto',
      ui_Models: 'Contactos',
      ui_models: 'contactos',
      ui_paths: 'contactos'
    }
  },
  flow: {
    alias: {
      Model: 'Flow',
      model: 'flow',
      Models: 'Flows',
      models: 'flows',
      file: 'flow.ts',
      folder: 'flow',
      path: 'flows',
      api_path: 'flows',
      label: 'Flow',
      table: 'flujo',
      ui_Model: 'Flujo',
      ui_model: 'flujo',
      ui_path: 'flujo',
      ui_Models: 'Flujos',
      ui_models: 'flujos',
      ui_paths: 'flujos'
    }
  },
  process: {
    alias: {
      Model: 'Process',
      model: 'process',
      Models: 'Processes',
      models: 'processes',
      file: 'process.ts',
      folder: 'process',
      path: 'processes',
      api_path: 'processes',
      label: 'Process',
      table: 'proceso',
      ui_Model: 'Proceso',
      ui_model: 'proceso',
      ui_path: 'proceso',
      ui_Models: 'Procesos',
      ui_models: 'procesos',
      ui_paths: 'procesos'
    }
  },
  service: {
    alias: {
      Model: 'Service',
      model: 'service',
      Models: 'Services',
      models: 'services',
      file: 'service.ts',
      folder: 'service',
      path: 'services',
      api_path: 'services',
      label: 'Service',
      table: 'servicio',
      ui_Model: 'Servicio',
      ui_model: 'servicio',
      ui_path: 'servicio',
      ui_Models: 'Servicios',
      ui_models: 'servicios',
      ui_paths: 'servicios'
    }
  },
  company: {
    alias: {
      Model: 'Company',
      model: 'company',
      Models: 'Companies',
      models: 'companies',
      file: 'company.ts',
      folder: 'company',
      path: 'companies',
      api_path: 'companies',
      label: 'Company',
      table: 'sociedad',
      ui_Model: 'Sociedad',
      ui_model: 'sociedad',
      ui_path: 'sociedad',
      ui_Models: 'Sociedades',
      ui_models: 'sociedades',
      ui_paths: 'sociedades'
    }
  },
  enterprise: {
    alias: {
      Model: 'Enterprise',
      model: 'enterprise',
      Models: 'Enterprises',
      models: 'enterprises',
      file: 'enterprise.ts',
      folder: 'enterprise',
      path: 'enterprises',
      api_path: 'enterprises',
      label: 'Enterprise',
      table: 'negocio',
      ui_Model: 'Negocio',
      ui_model: 'negocio',
      ui_path: 'negocio',
      ui_Models: 'Negocios',
      ui_models: 'negocios',
      ui_paths: 'negocios'
    }
  },
  user: {
    alias: {
      Model: 'User',
      model: 'user',
      Models: 'Users',
      models: 'users',
      file: 'user.ts',
      folder: 'user',
      path: 'users',
      api_path: 'users',
      label: 'User',
      table: 'usuario',
      ui_Model: 'Usuario',
      ui_model: 'usuario',
      ui_path: 'usuario',
      ui_Models: 'Usuarios',
      ui_models: 'usuarios',
      ui_paths: 'usuarios'
    }
  },
  backup: {
    alias: {
      Model: 'Backup',
      model: 'backup',
      Models: 'Backups',
      models: 'backups',
      file: 'backup.ts',
      folder: 'backup',
      path: 'backups',
      api_path: 'backups',
      label: 'Backup',
      table: 'backup',
      ui_Model: 'Backup',
      ui_model: 'backup',
      ui_path: 'backup',
      ui_Models: 'Backups',
      ui_models: 'backups',
      ui_paths: 'backups'
    }
  },
  vpn: {
    alias: {
      Model: 'Vpn',
      model: 'vpn',
      Models: 'Vpns',
      models: 'vpns',
      file: 'vpn.ts',
      folder: 'vpn',
      path: 'vpns',
      api_path: 'vpns',
      label: 'Vpn',
      table: 'vpn',
      ui_Model: 'Vpn',
      ui_model: 'vpn',
      ui_path: 'vpn',
      ui_Models: 'Vpns',
      ui_models: 'vpns',
      ui_paths: 'vpns'
    }
  },
  navigation: {
    alias: {
      Model: 'Navigation',
      model: 'navigation',
      Models: 'Navigations',
      models: 'navigations',
      file: 'navigation.ts',
      folder: 'navigation',
      path: 'navigations',
      api_path: 'navigations',
      label: 'Navigation',
      table: 'navegacion',
      ui_Model: 'Navegación',
      ui_model: 'navegación',
      ui_path: 'navegación',
      ui_Models: 'Navegacións',
      ui_models: 'navegacións',
      ui_paths: 'navegacións'
    }
  },
  storage: {
    alias: {
      Model: 'Storage',
      model: 'storage',
      Models: 'Storages',
      models: 'storage',
      file: 'storage.ts',
      folder: 'storage',
      path: 'storage',
      api_path: 'storage',
      label: 'Storage',
      table: 'almacenamiento',
      ui_Model: 'Almacenamiento',
      ui_model: 'almacenamiento',
      ui_path: 'almacenamiento',
      ui_Models: 'Almacenamientos',
      ui_models: 'almacenamientos',
      ui_paths: 'almacenamientos'
    }
  }
}

const listModels = [
  ['backup', 'backup'],
  ['vpn', 'vpn'],
  ['navigation', 'navegación'],
  ['storage', 'almacenamiento']
]

const fileModels = listModels.reduce((acum, [model, table]) => {
  return `${acum}
  ${model}: {
    alias: ${JSON.stringify(genereteAlias(model, table))}
  },`
}, '')

fs.writeFileSync('./newModels.js', `export const models = {${fileModels}}`, 'utf8')

export default models
