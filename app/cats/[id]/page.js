import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { notFound } from 'next/navigation';
import { getCats, getCatById } from '../../../lib/cats'; // Adjust the path as necessary

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

export async function CatPage({ params }) {
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

export async function SingleCatPage({ params }) {
  const data = await getSingleCat(params.id);
  const title = data?.name;
  const imgSrc = data?.reference_image_id;
  const description = data?.description;
  const temperament = data?.temperament;
  const adaptability = data?.adaptability;

  const backupImages = [
    bengalcat,
    DevonRex,
    EuropeanBurmese,
    Korat,
    malayancat,
  ];

  return (
    <div className="bg-gradient-orange w-full">
      <Navbar />
      <div className="hero bg-base-200 w-full">
        <div className="hero-content flex-col lg:flex-row bg-none min-h-screen flex w-full items-center justify-center px-4 lg:px-8">
          <section className="flex flex-col items-start justify-start gap-5 w-full max-w-4xl mx-auto ">
            <h1 className="text-3xl font-bold mb-4">{title || "Cat not found"}</h1>
            <p>Origin: {origin}</p>
            <p>{description}</p>
            <p>{temperament}</p>
            <p>Adaptablity: {adaptability}</p>
            <p>Life Span: {life_span}</p>
          </section>

          {imgSrc ? (
            <Image
              src={`https://cdn2.thecatapi.com/images/${imgSrc}.jpg`}
              width={300}
              height={427}
              className="rounded mb-4"
              alt={title}
            />
          ) : (
            <p>No image available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleCatPage;