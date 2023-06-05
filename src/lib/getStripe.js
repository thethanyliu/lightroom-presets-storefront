import { loadStripe } from "@stripe/stripe-js";

let stripePromise; // empty stripe promise

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_TEST_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export default getStripe;
