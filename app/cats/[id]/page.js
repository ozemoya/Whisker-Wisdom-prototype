import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { notFound } from 'next/navigation';
 // Adjust the path as necessary

const url = "https://api.thecatapi.com/v1/breeds";

export async function generateStaticParams() {
  const cats = await getCats(); // Fetch all cat data
  return cats.map(cat => ({
    id: cat.id.toString(), // Ensure the id is a string
  }));
}

export async function generateMetadata({ params }) {
  const cat = await getCatById(params.id);
  if (!cat) {
    return {
      title: 'Cat Not Found',
    };
  }
  return {
    title: cat.name,
  };
}

export default async function CatPage({ params }) {
  const cat = await getCatById(params.id);
  if (!cat) {
    notFound();
  }

  return (
    <div>
      <h1>{cat.name}</h1>
      <p>{cat.description}</p>
      {cat.image ? (
        <img src={cat.image} alt={cat.name} />
      ) : (
        <p>No image available</p>
      )}
    </div>
  );
}

const getSingleCat = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {};
  }
};

const SingleCatPage = async ({ params }) => {
  const data = await getSingleCat(params.id);
  const title = data?.name;
  const imgSrc = data?.reference_image_id;
  const description = data?.description;
  const temperament = data?.temperament;
  const adaptability = data?.adaptability;

  // Define backup images

  return (
    <div>
      <h1>{title}</h1>
      <img src={imgSrc || backupImages[0]} alt={title} />
      <p>{description}</p>
      <p>Temperament: {temperament}</p>
      <p>Adaptability: {adaptability}</p>
    </div>
  );
};