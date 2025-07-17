import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="container mx-auto text-center flex justify-center">
      <nav>
        <ul className="flex gap-8 text-blue-400 font-bold">
          <Link href="/">
              <li>Home</li> 
          </Link>
          <Link href='/about'> 
             <li>About</li> 
          </Link>
          <Link href="/services">
              <li>Service</li> 
           </Link>
          <Link href='/contact'>
             <li>Contact</li> 
          </Link>
        </ul>
      </nav>
    </div>
  );
}
