let products = [
  { id: 1, name: "Laptop", price: 12000000 },
  { id: 2, name: "Keyboard", price: 500000 },
];

export async function GET() {
  return Response.json(products);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newProduct = { id: Date.now(), ...body };
  products.push(newProduct);
  return Response.json(newProduct, { status: 201 });
}

export async function PUT(req: Request) {
  const body = await req.json();
  const { id, name, price } = body;

  products = products.map((p) => (p.id === id ? { ...p, name, price } : p));
  return Response.json({ message: "Updated", id });
}

export async function DELETE(req: Request) {
  const body = await req.json();
  const { id } = body;

  products = products.filter((p) => p.id !== id);
  return Response.json({ message: "Deleted", id });
}
