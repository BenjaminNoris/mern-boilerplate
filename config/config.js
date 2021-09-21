const dotenv = require('dotenv')
const path = require('path')
const Joi = require('joi')

dotenv.config({ path: path.join(__dirname, '../../.env') })

const schema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required().description('node environment'),
    PORT: Joi.number().default(3000).required().description('application port'),
    DB_HOST: Joi.string().default('localhost').required().description('database host'),
    DB_NAME: Joi.string().default('lincus-external').required().description('database name'),
    DB_USERNAME: Joi.string().required(),
    DB_PASSWORD: Joi.string()
  })
  .unknown()

const { value: env, error } = schema.prefs({ errors: { label: 'key' } }).validate(process.env)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

module.exports = {
  env: env.NODE_ENV,
  port: env.PORT,
  db_host: env.DB_HOST,
  db_name: env.DB_NAME,
  db_username: env.DB_USERNAME,
  db_password: env.DB_PASSWORD
}
