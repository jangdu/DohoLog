import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="bg-slate-500 text-white py-2 px-4 flex justify-between text-center items-center">
      <p>@jangdu</p>
      <div className="text-4xl">
        <BsGithub />
      </div>
    </div>
  );
}
