import { nikoshFont } from "./layout";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="text-xl">সোলাইমানলিপি বাংলা ফন্ট</h1>
      <h1 className={`${nikoshFont.className} text-sm`}>নিকশ বাংলা ফন্ট</h1>
    </div>
  );
}
