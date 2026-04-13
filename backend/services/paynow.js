const PAYNOW_BASE = "https://www.paynow.co.zw/interface/initiatetransaction"

exports.createPayment = async (email, amount) => {
  // ⚠️ Replace with real Paynow integration later
  return {
    success: true,
    redirectUrl: "https://www.paynow.co.zw/payment",
    pollUrl: "mock_poll_url_" + Date.now()
  }
}
