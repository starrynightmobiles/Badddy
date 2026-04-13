import { Text, Image } from "react-native"

export default function ProductCard({ product }) {
  return (
    <>
      <Image source={{ uri: product.image }} style={{ height: 150 }} />
      <Text style={{ color: "white" }}>{product.name}</Text>
      <Text style={{ color: "gray" }}>${product.price}</Text>
    </>
  )
}
