import { getAll } from "./api";
import Rules from "./components/Rules";

export default async function Home() {
  const res = await getAll();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <Rules rules={res} />
    </main>
  );
}
