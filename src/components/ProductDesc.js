import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDesc() {
  const { productId } = useParams();
  return (
    <>
      <div>Product Desc Component</div>
      <div>ProductId = {productId}</div>
    </>
  );
}
