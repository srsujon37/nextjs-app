import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function AddressPage() {
  const router = useRouter()
  const isLoggedIn = true;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    }
    else {
      router.push("/");
    }
  }

  return (
    <div>
      <p>AddressPage</p>
      <Link href="/about/address">
        <li>Address</li>
        <button type="button" onClick={handleNavigation}></button>
      </Link>
    </div>
  );
}
