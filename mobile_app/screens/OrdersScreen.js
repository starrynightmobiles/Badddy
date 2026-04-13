import { View, Text } from "react-native"
import { useEffect, useState } from "react"

export default function OrdersScreen() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch("http://YOUR-IP:5000/api/orders")
      .then(res => res.json())
      .then(setOrders)
  }, [])

  return (
    <View>
      {orders.map(o => (
        <Text key={o.id}>
          {o.id} - {o.status}
        </Text>
      ))}
    </View>
  )
}
