import { nikoshFont } from "./layout";
import { solaimanFont } from "./layout";
import { robotoFont } from "./layout";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className={`${solaimanFont.className} text-lg`}>সোলাইমানলিপি বাংলা ফন্ট</h1>
      <h1 className={`${nikoshFont.className} text-sm`}>নিকশ বাংলা ফন্ট</h1>
      <h1 className={`${robotoFont.className} text-md font-bold`}>Roboto english font for heading</h1>
      <h1 className= "text-md font-light">Inter Font for articles</h1>
    </div>
  );
}