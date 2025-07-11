// app/not-found.tsx
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4">Halaman tidak ditemukan 😢</p>
      <Link href="/" className="mt-6 text-blue-500 underline">
        Kembali ke Beranda
      </Link>
    </div>
  );
}
