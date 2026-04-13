const express = require("express")
const cors = require("cors")
const { v4: uuid } = require("uuid")

const app = express()
app.use(cors())
app.use(express.json())

let products = [
  { id: "1", name: "Luxury Shoes", price: 120, image: "https://via.placeholder.com/300" },
  { id: "2", name: "Designer Watch", price: 250, image: "https://via.placeholder.com/300" }
]

let orders = []
let users = []

// PRODUCTS
app.get("/api/products", (req, res) => res.json(products))

// AUTH
app.post("/api/auth/register", (req, res) => {
  const user = { id: uuid(), ...req.body }
  users.push(user)
  res.json(user)
})

// ORDERS
app.post("/api/orders", (req, res) => {
  const order = {
    id: uuid(),
    ...req.body,
    status: "pending",
    createdAt: new Date()
  }
  orders.push(order)
  res.json(order)
})

app.get("/api/orders", (req, res) => res.json(orders))

// PAYMENT (SIMULATED)
app.post("/api/payments/pay", (req, res) => {
  res.json({
    redirectUrl: "https://example.com/payment-success"
  })
})

app.listen(5000, () => console.log("🚀 Backend running"))
