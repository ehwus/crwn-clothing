import React from "react";

import {
  CartItemContainer,
  ItemImage,
  NameContainer,
  PriceContainer,
  ItemDetailsContainer,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <NameContainer>{name}</NameContainer>
      <PriceContainer>
        {quantity} x £{price}
      </PriceContainer>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
