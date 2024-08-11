import Link from 'next/link';
//NAVBAR 
const Navbar = () => {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/cats', label: 'Cats' },
    // Add other links as needed
  ];

  return (
    <nav className=" w-full text-white p-4 shadow-lg m-0 badge-ghost">
      <div className="container mx-auto flex justify-between items-center p-0">
        <div className="text-2xl font-bold">
          <Link href="/">Whisker Wisdom</Link>
        </div>
        <div className="space-x-4 flex items-center">
          {links.map(link => (
            <Link key={link.href} href={link.href} className="hover:text-gray-300">
              {link.label}
            </Link>
          ))}
      
        </div>
      </div>
    </nav>
  );
};

export default Navbar;