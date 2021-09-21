const express = require('express')

const router = express.Router()

const controllers_v1 = require('./v1')
controllers_v1.forEach((controller) => {
  router.use(controller)
})

module.exports = router
