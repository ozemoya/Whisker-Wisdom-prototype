import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { notFound } from 'next/navigation';

const url = "https://api.thecatapi.com/v1/breeds";

// Function to fetch all cat data
export async function getCats() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Function to fetch a specific cat by ID
export async function getCatById(id) {
  const response = await fetch(`${url}/${id}`);
  const data = await response.json();
  return data;
}

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