import React from "react";
import Image from "next/image";
import { urlFor } from "@/lib/client";
import { useStateContext } from "@/context/StateContext";
import { Input, Button } from "@nextui-org/react";
import styles from "./CartInfo.module.css";

const CartInfo = () => {
  const { cartItems, totalPrice, removeFromCart } = useStateContext();

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Your Cart</h2>
      <div className={styles.innerContainer}>
        <div className={styles.cartItemsInnerWrapper}>
          {cartItems.length < 1 && <span>Your shopping bag is empty</span>}
          <div className={styles.container}>
            {cartItems?.map((item, i) => (
              <div key={i} className={styles.cartProduct}>
                <Image
                  src={urlFor(item.productImage).url()}
                  alt="product image"
                  width={60}
                  height={60}
                  className={styles.cartPics}
                />
                <div className={styles.cartItemDesc}>
                  <div className={styles.titlePrice}>
                    <div className={styles.nameQuantity}>
                      <h4>{item.name}</h4>
                      <span className={styles.qty}>x {item.quantity}</span>
                    </div>
                    <div>
                      <h5>${item.price}</h5>
                      <Button
                        disableRipple
                        color="error"
                        variant="shadow"
                        className="p-0"
                        onPress={() => removeFromCart(item)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.checkoutOuterWrapper}>
          <div className={styles.checkoutInnerWrapper}>
            <h4 className={styles.checkoutTitle}>Order Summary</h4>
            <div className={styles.priceInfo}>
              <h5 className={styles.checkoutSubtitles}>Subtotal: </h5>
              <h5>${totalPrice.toFixed(2)}</h5>
            </div>
            <div className={styles.priceInfo}>
              <h5 className={styles.checkoutSubtitles}>Tax:</h5>
              <h5>${(totalPrice * 0.05).toFixed(2)}</h5>
            </div>
            <div className={styles.divider} />
            <div className={styles.priceInfo}>
              <h5 className={styles.checkoutSubtitles}>Order Total:</h5>
              <h5>
                ${totalPrice === 0 ? "0.00" : (totalPrice * 1.05).toFixed(2)}
              </h5>
            </div>
            <div className={styles.promoContainer}>
              <Input label="PROMO CODE" />
              <Button size="md" radius="sm" color="primary">
                APPLY
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartInfo;
