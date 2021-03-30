// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: `${__dirname}/database/db.sqlite`
    }, migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/database/seeds`
    },
    useNullAsDefault: true,
  },


  staging: {
    client: 'sqlite3',
    connection: {
      filename: "./database/db.sqlite"
    },
    pool: {
      min: 1,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: "./database/db.sqlite"
    },
    pool: {
      min: 1,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true,
  }

};
