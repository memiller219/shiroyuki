import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IHFdFDk5Dxxbgd7pK6BCLtAMIlWaBkrl7wyE4TOsk4S870h3OBlpE69qakLMHMIYcbao2VoJ8QX550AanuN17jE00bZYfIsFC";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Shiro Yuki Ltd."
      billingAddress
      shippingAddress
      description={`Your total is: $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
