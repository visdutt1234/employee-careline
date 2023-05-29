import React, { useCallback } from "react";
import ShippingForm from "./ShippingForm";

function ProductPage({ productId, reference, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post("/product/" + productId + "/buy/", {
      reference,
      orderDetails,
    });
  }, [productId, reference])

  console.log("re-render productPage")

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}

export default ProductPage;

function post(url, data) {
  // Imagine this sends a request...
  console.log("POST /" + url);
  console.log(data);
}
