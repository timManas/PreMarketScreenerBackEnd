import express from 'express'

import { getPreMarketData } from '../controllers/preMarketDataController.js'

const router = express.Router()

router.get('/', getPreMarketData)

export default router
