const router = require("express").Router()
const { createPayment } = require("../services/paynow")

let paymentMap = {}

router.post("/pay", async (req, res) => {
  const { email, amount, orderId } = req.body

  const payment = await createPayment(email, amount)

  paymentMap[payment.pollUrl] = orderId

  res.json(payment)
})

// simulate confirmation
router.post("/callback", (req, res) => {
  const { pollUrl } = req.body
  const orderId = paymentMap[pollUrl]

  if (orderId) {
    global.orders = global.orders.map(o =>
      o.id === orderId ? { ...o, status: "paid" } : o
    )
  }

  res.sendStatus(200)
})

module.exports = router
