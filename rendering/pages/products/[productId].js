import { useRouter } from "next/router";

function Product({ products }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h2>
        {products.id} {products.title} {products.price}
      </h2>
      <p>{products.description}</p>
      <hr />
    </>
  );
}

export default Product;

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://localhost:4000/products/${params.productId}`
  );

  const data = await response.json();
  return {
    props: {
      products: data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
}
