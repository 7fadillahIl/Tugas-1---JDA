// components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-4">
      <Link href="/dashboard">Home</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Kontak</Link>
      <Link href="/products/1">Product Awal</Link>
      <Link href="/products/2">Product Lanjutan</Link>
    </nav>
  );
}
