"use client";

import React, { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editId) {
      await fetch("/api/products", {
        method: "PUT",
        body: JSON.stringify({ id: editId, name, price: +price }),
      });
      setEditId(null);
    } else {
      await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify({ name, price: +price }),
      });
    }
    setName("");
    setPrice("");
    fetchProducts();
  };

  const handleDelete = async (id: number) => {
    await fetch("/api/products", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    fetchProducts();
  };

  const handleEdit = (product: Product) => {
    setName(product.name);
    setPrice(product.price.toString());
    setEditId(product.id);
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Daftar Produk</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          className="border p-2 w-full"
          placeholder="Nama Produk"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="border p-2 w-full"
          placeholder="Harga"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editId ? "Update" : "Tambah"} Produk
        </button>
      </form>

      <ul className="space-y-2">
        {products.map((product) => (
          <li
            key={product.id}
            className="border p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{product.name}</p>
              <p className="text-sm text-gray-600">Rp {product.price}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(product)}
                className="text-blue-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="text-red-600 hover:underline"
              >
                Hapus
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
