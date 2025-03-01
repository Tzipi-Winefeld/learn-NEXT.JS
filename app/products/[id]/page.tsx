import { Metadata } from "next";

interface PageProps {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return {
    title: `Product ${params.id}`,
    metadataBase: new URL("localhost:3000/products"),
  };
}

export default async function ProductPage({ params }: PageProps) {
  const product = await fetch(
    `https://fakestoreapi.com/products/${params.id}`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  if (!product.id) return <p>product not found!</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price}$</p>
    </div>
  );
}
