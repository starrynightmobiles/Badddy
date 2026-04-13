import { View, Text, Button } from "react-native"

export default function CheckoutScreen() {
  const handlePay = async () => {
    await fetch("http://YOUR-IP:5000/api/payments/pay", {
      method: "POST"
    })
    alert("Payment simulated")
  }

  return (
    <View>
      <Text>Checkout</Text>
      <Button title="Pay Now" onPress={handlePay} />
    </View>
  )
}
