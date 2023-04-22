import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="py-2 px-4 flex bottom-0 justify-between text-center items-center">
      <p>@jangdu</p>
      <div className="text-4xl">
        <BsGithub />
      </div>
    </div>
  );
}
