import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_TEST_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      let slug = "";
      req.body.forEach(element => {
        slug += element._id + "_"
        return
      });

      const params = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        line_items: req.body.map((item) => {
          const img = item.productImage.asset._ref;
          const newImage = img
            .replace(
              "image-",
              `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_PROJECT_ID}/production/`
            )
            .replace("-png", ".png");

          return {
            price_data: {
              currency: "cad",
              product_data: {
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${req.headers.origin}/success/${slug}`,
        cancel_url: `${req.headers.origin}/`,
      };

      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err) {
      console.log(err);
      res.status(500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
