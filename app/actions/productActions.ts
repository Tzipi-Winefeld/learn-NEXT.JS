"use server";

export async function addProduct(formData: FormData) {
  const newProduct = {
    title: formData.get("title"),
    price: parseFloat(formData.get("price") as string),
    description: formData.get("description"),
  };

  const r = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });
  console.log(r);
}
