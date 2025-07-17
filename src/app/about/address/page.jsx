import Link from "next/link";
import React from "react";

export default function AddressPage() {
  return (
    <div>
      <p>AddressPage</p>
      <Link href="/address">
        <li>Address</li>
      </Link>
    </div>
  );
}
