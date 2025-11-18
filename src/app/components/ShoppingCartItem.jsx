"use server";

export default async function GetItems({ id, key }) {
  const url = `https://dummyjson.com/products/${id}`;
  const response = await fetch(url);
  const { items } = await response.json();
  return items.map((item) => <h1>{item.title}</h1>);
}
