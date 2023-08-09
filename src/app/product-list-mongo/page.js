const getProducts = async () => {
  let result = await fetch("http://localhost:3000/api/products");
  result = await result.json();
  if (result.success) {
    return result.result;
  } else {
    return result.result;
  }
};

export default async function ProductListMongo() {
  const products = await getProducts();
  console.log(products);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Product list from mongoDB</h1>
      {/* {products.map((product) => (
        <div>
          <p>{product.name}</p>
          <p>{product.color}</p>
        </div>
      ))} */}
    </main>
  );
}
