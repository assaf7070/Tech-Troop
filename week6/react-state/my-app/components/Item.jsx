import React from "react";

const Item = ({ item, price, discount, shouldDiscount }) => {
  const finalPrice = shouldDiscount
    ? price * (1 - discount)
    : price;

  return <div>{item}: ${finalPrice.toFixed(2)}</div>;
};

export default Item;
