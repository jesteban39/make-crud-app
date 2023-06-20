

const capitalizer = (word) => {
    return [
        word.charAt(0).toUpperCase() + word.slice(1),
        word.charAt(0).toLowerCase() + word.slice(1)
    ]
}

const genereteNames = (modelName) => {
    const [Name, name] = capitalizer(modelName);

    return {
        Model: Name,
        model: name,
        Models: Name + 's',
        models: name + 's',

        file: name + '.js',
        folder: name,
        path: name + 's',
        api_path: name + 's',
        label: Name,
        table: name + 's',

        ui_Model: Name,
        ui_model: name,
        ui_Models: Name + 's',
        ui_models: name + 's',
        ui_path: name + 's',
    }
}

export const getListModels = () => Object.keys(models);

export const getAlias = (modelName) => {
    return models[modelName].alias;
}

export const getColums = (modelName) => {
    return models[modelName].columns;
}

export const models = {

    app: {
        alias: {
            Model: 'App',
            model: 'app',
            Models: 'Apps',
            models: 'apps',
            file: 'app.js',
            folder: 'app',
            path: 'apps',
            label: 'App',
            table: 'aplicaciones',
            ui_Model: 'Aplicación',
            ui_model: 'aplicación',
            ui_Models: 'Aplicaciónes',
            ui_models: 'aplicaciónes'
        },
        columns: [
            {
                name: 'nombre',
                type: 'STRING',
                allowNull: false,
                unique: true,
                autoIncrement: true,
                primaryKey: true,
                defaultValue: 'Esteban',
                example: ''
            },
            {
                name: 'descripcion',
                type: 'STRING',
                allowNull: false,
                unique: true,
                autoIncrement: true,
                defaultValue: true,
                example: ''
            },
            {
                name: 'cantidad',
                type: 'NUMBER',
                allowNull: false,
                unique: true,
                autoIncrement: true,
                defaultValue: 1,
                example: ''
            },
            {
                name: 'enlace',
                type: 'STRING',
                allowNull: false,
                unique: true,
                autoIncrement: true,
                defaultValue: 'https://ww.eq.com',
                example: ''
            },
            {
                name: 'estado',
                type: 'STRING',
                allowNull: false,
                unique: true,
                autoIncrement: true,
                defaultValue: 'activo',
                example: ''
            },
            {
                name: 'activo',
                type: 'BOOLEAN',
                allowNull: false,
                unique: true,
                autoIncrement: true,
                defaultValue: true,
                example: ''
            }
        ]

    }
}

export const models2 = {

    communication: {
        alias: {
            Model: 'Communication',
            model: 'communication',
            Models: 'Communications',
            models: 'communications',
            file: 'communication.js',
            folder: 'communication',
            path: 'communications',
            label: 'Communication',
            table: 'comunicados',
            ui_Model: 'Comunicado',
            ui_model: 'comunicado',
            ui_Models: 'Comunicados',
            ui_models: 'comunicados'
        }
    },

    service: {
        alias: {
            Model: 'Service',
            model: 'service',
            Models: 'Services',
            models: 'services',
            file: 'service.js',
            folder: 'service',
            path: 'services',
            label: 'Service',
            table: 'servicios',
            ui_Model: 'Servicio',
            ui_model: 'servicio',
            ui_Models: 'Servicios',
            ui_models: 'servicios'
        }
    },

    incident: {
        alias: {
            Model: 'Incident',
            model: 'incident',
            Models: 'Incidents',
            models: 'incidents',
            file: 'incident.js',
            folder: 'incident',
            path: 'incidents',
            label: 'Incident',
            table: 'incidentes',
            ui_Model: 'Incidente',
            ui_model: 'incidente',
            ui_Models: 'Incidentes',
            ui_models: 'incidentes'
        }
    },

    user: {
        alias: {
            Model: 'User',
            model: 'user',
            Models: 'Users',
            models: 'users',
            file: 'user.js',
            folder: 'user',
            path: 'users',
            label: 'User',
            table: 'usuarios',
            ui_Model: 'Usuario',
            ui_model: 'usuario',
            ui_Models: 'Usuarios',
            ui_models: 'usuarios'
        }
    },

    userSession: {
        alias: {
            Model: 'UserSession',
            model: 'userSession',
            Models: 'UserSessions',
            models: 'userSessions',
            file: 'userSession.js',
            folder: 'userSession',
            path: 'userSessions',
            label: 'UserSession',
            table: 'sesionesUsuarios',
            ui_Model: 'Sesión de usuario',
            ui_model: 'sesión de usuario',
            ui_Models: 'Sesiones de usuario',
            ui_models: 'sesiones de usuario'
        }
    }
};

//console.log(genereteNames('aplicación'));

export default models;