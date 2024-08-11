import Head from 'next/head';
import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us - Cat App</title>
        <meta name="description" content="Learn more about the Cat App and its creators." />
      </Head>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-none p-6 gap-5">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
        Welcome to Whisker Wisdom, your ultimate destination for all things feline! Whether you are a seasoned cat enthusiast or a new pet owner, Whisker Wisdom offers a wealth of information, insights, and tips to help you better understand and care for your furry friends.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          We aim to create a friendly and engaging platform where users can learn, share, and enjoy all things related to cats. Whether you are a cat owner, lover, or just curious, we have something for everyone.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our team is passionate about cats and dedicated to bringing you the most accurate and up-to-date information. We believe in the joy and companionship that cats bring to our lives and want to share that with the world.
        </p>
        <p className="text-lg text-gray-700">
          Thank you for visiting our site, and we hope you find it informative and enjoyable!
        </p>
      </main>
    </div>
  );
}