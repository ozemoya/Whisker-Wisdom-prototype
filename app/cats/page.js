// pages/cats.js

"use client"; // This makes the entire file a client component

import CatList from "../../components/CatList";

const url = "https://api.thecatapi.com/v1/breeds";

const fetchCats = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const CatsPage = async () => {
  const data = await fetchCats();
  return (
    <div>
      <CatList cats={data} />
    </div>
  );
};

export default CatsPage;