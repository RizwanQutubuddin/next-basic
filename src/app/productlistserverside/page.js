import Button from "../core/button";
const productlist = async () => {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();

  console.log(data.products);
  return data.products;
};
export default async function ProductListServerSide() {
  let products = await productlist();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Product List</h1>
      <ul>
        {products.map((item) => (
          <li>
            Title : {item.title} <Button title={item.title} />
          </li>
        ))}
      </ul>
    </main>
  );
}
