import React, { useEffect } from "react";
import { useStateContext } from "@/context/StateContext";
import { client } from "../../lib/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsBagCheckFill } from "react-icons/bs";

const successSlug = ({ products }) => {
  const router = useRouter();
  const { setTotalQty, setCartItems, setTotalPrice } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQty(0);
  }, []);

  const { slug } = router.query;

  const ids = slug.split("_").reverse().slice(1);

  const purchasedItems = products.filter((product) =>
    ids.includes(product._id)
  );
  console.log(purchasedItems);

  const getUrlFromId = (ref) => {
    const [_file, id, extension] = ref.split("-");
    return `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_PROJECT_ID}/${process.env.NEXT_PUBLIC_DATASET}/${id}.${extension}`;
  };

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="back-fill-icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order.</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <Link href="/">
          <button type="button" className="continue-btn">
            Continue Shopping
          </button>
        </Link>
        <div>
          {purchasedItems.map((item) => (
            <div>
              {item.name}: <br />
              <a href={getUrlFromId(item.dng_zip.asset._ref)}>
                DNG (LR Desktop) Files
              </a> <br />
              <a href={getUrlFromId(item.zip_file.asset._ref)}>
                DNG (LR Mobile) Files
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'; // get all products
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default successSlug;
