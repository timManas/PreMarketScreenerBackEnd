import express from 'express'

import { getPreMarketData } from '../controllers/preMarketDataController.js'

const router = express.Router()

router.route('/').get(getPreMarketData)

export default router
