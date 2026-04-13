import * as Linking from "expo-linking"

const API = "http://YOUR-IP:5000/api"

export const startPayment = async (email, amount, orderId) => {
  const res = await fetch(`${API}/payments/pay`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, amount, orderId })
  })

  const data = await res.json()

  if (data.redirectUrl) {
    Linking.openURL(data.redirectUrl)
  }
}
