import asyncHandler from 'express-async-handler'
// import preMarketData from '../data/preMarketData.json'

const getPreMarketData = asyncHandler((req, res) => {
  //   res.send(200).json({ message: 'Hello World' })
  res.json({ message: 'Hello World' })
})

export { getPreMarketData }
