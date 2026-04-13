const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

global.orders = []

const paymentsRoute = require("./routes/payments")

app.use("/api/payments", paymentsRoute)

// PRODUCTS
app.get("/api/products", (req, res) => {
  res.json([
    { id: "1", name: "Luxury Shoes", price: 120, image: "https://via.placeholder.com/300" }
  ])
})

// ORDERS
app.post("/api/orders", (req, res) => {
  const order = { id: Date.now().toString(), ...req.body, status: "pending" }
  global.orders.push(order)
  res.json(order)
})

app.get("/api/orders", (req, res) => res.json(global.orders))

app.listen(5000, () => console.log("🚀 Backend running"))
