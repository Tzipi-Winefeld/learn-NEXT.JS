import { addProduct } from "../actions/productActions";

export default function AdminPage() {
  return (
    <form action={addProduct}>
      <input name="title" placeholder="name" required />
      <input name="price" type="number" placeholder="price" required />
      <textarea name="description" placeholder="description"></textarea>
      <button type="submit">add product</button>
    </form>
  );
}
