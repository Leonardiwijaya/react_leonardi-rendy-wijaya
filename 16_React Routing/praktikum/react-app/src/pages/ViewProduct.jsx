import { useLocation } from "react-router-dom";
import { Header } from "../components/Header.js";
import ProductDetail from "../components/ProductDetail.js";

export default function ViewProduct(props) {
  const location = useLocation();
  const product = location.state.product;
  return (
    <>
      <Header header="Simple header"></Header>
      <ProductDetail product={product}></ProductDetail>
    </>
  );
}
