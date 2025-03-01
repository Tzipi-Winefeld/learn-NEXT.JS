import Link from "next/link";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function ProductPage() {
  const products = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>
            {" "}
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
