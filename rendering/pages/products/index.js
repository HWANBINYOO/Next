import Link from "next/link";

function ProductList({ products }) {
  return (
    <>
      <h1>List of products</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>
              {product.id} {product.title} {product.price}
            </h2>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default ProductList;

export async function getStaticProps() {
  const response = await fetch("https://localhost:4000/products");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
}
