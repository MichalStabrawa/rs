import CartContext from "../store/CartContext";
import Modal from "./Ui/Modal";
import { currencyFormatter } from "../util/formatting";
import Button from "./Ui/Button";
import { useContext } from "react";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  console.log("ITEMS");
  console.log(cartCtx.items.length);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCartClose() {
    userProgressCtx.hideCart();
    console.log(userProgressCtx.progress);
  }

  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"}  onClose={userProgressCtx.progress === "cart"?handleCartClose:null}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onDecrease={() => cartCtx.removeItem(item.id)}
            onIncrease={() => cartCtx.addItem(item)}
          ></CartItem>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCartClose}>
          Close
        </Button>
        {cartCtx.items.length !== 0 && (
          <Button onClick={handleGoToCheckout}>Go to checkout</Button>
        )}
      </p>
    </Modal>
  );
}
