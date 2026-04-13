import { View, Button } from "react-native"
import { startPayment } from "../services/payment"

export default function CheckoutScreen() {
  const handlePay = async () => {
    const orderRes = await fetch("http://YOUR-IP:5000/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [] })
    })

    const order = await orderRes.json()

    await startPayment("test@email.com", 100, order.id)
  }

  return (
    <View>
      <Button title="Pay Now" onPress={handlePay} />
    </View>
  )
}
