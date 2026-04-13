import { useEffect, useState } from "react"

export default function Shop() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(setProducts)
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>Shop</h1>

      {products.map(p => (
        <div key={p.id}>
          <img src={p.image} width="200" />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  )
}
