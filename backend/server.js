const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

// Sample products
app.get("/api/products", (req, res) => {
  res.json([
    {
      _id: "1",
      name: "Luxury Shoes",
      price: 120,
      image: "https://via.placeholder.com/300"
    },
    {
      _id: "2",
      name: "Designer Watch",
      price: 250,
      image: "https://via.placeholder.com/300"
    }
  ])
})

app.listen(5000, () => console.log("Server running on port 5000"))
