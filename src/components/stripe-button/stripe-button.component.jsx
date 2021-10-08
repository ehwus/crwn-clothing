import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const PUBLISHABLE_KEY =
    "pk_test_51JiDx7J5XBw4dlpgbSrVQGCIORPF8XtYzuV9lIKe95f3Ill62a8Arq9G2NUYGsu8q3WwNuQZsxj6dCwKRwTiv0Mv00NZsszyTw";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      amount={priceForStripe}
      stripeKey={PUBLISHABLE_KEY}
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is £${price}`}
      panelLabel="Pay Now"
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
