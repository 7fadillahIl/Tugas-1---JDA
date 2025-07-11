export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Produk ID: {params.id}</h1>
      <p>Ini adalah halaman produk dinamis.</p>
    </div>
  );
}
