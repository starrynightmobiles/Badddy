import { useEffect, useState } from "react"

export default function Admin() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/orders")
      .then(res => res.json())
      .then(setOrders)
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Dashboard</h1>

      {orders.map(o => (
        <div key={o.id}>
          <p>Order ID: {o.id}</p>
          <p>Status: {o.status}</p>
        </div>
      ))}
    </div>
  )
}
