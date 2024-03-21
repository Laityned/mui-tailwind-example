import { Slider } from "@mui/material";

export default function Home() {
  return (
    <main>
      <h1 className="text-teal-600">Hello, world!</h1>
      <Slider defaultValue={30} />
      <Slider defaultValue={30} className="text-teal-600" />
    </main>
  );
}
