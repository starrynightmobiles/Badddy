import { View, FlatList, Button } from "react-native"
import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

export default function ShopScreen({ navigation }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://YOUR-IP:5000/api/products")
      .then(res => res.json())
      .then(setProducts)
  }, [])

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
      />

      <Button title="Checkout" onPress={() => navigation.navigate("Checkout")} />
    </View>
  )
}
