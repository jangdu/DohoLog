import { Link } from "react-router-dom";
<<<<<<< HEAD
import Button from "./ui/Button";
=======
>>>>>>> 948cf4b (init project)

export default function Profile() {
  return (
    <section className="ps-2 flex my-5 mx-auto w-80 items-center">
      <img
        src={
          "https://res.cloudinary.com/dyhnnmhcf/image/upload/v1681745025/profileImage_ny0a9b.jpg"
        }
        alt={"profileImg"}
        className="rounded-full object-contain w-32 h-32"
      ></img>
      <div className="ml-3 overflow-hidden items-center">
<<<<<<< HEAD
        <h2 className="text-xl font-bold my-2 ">{"jangdu"}</h2>
        <h3 className="font-semibold border-t-4 border-t-green-300">
          FrontEnd Engineer
        </h3>
        <p className="text-sm">이거 만들면서 더 성장</p>
        <Link to={"/contact"} className="mt-2 font-bold">
          <Button text={"Contact Me"}></Button>
=======
        <h2 className="text-xl font-bold my-2">{"jangdu"}</h2>
        <h3 className="font-semibold">FrontEnd Engineer</h3>
        <p className="text-sm">이거 만들면서 더 성장</p>
        <Link to={"/contact"}>
          <button className="mt-2 rounded-2xl font-bold bg-green-300 px-3 py-1 hover:bg-green-400">
            Contact Me
          </button>
>>>>>>> 948cf4b (init project)
        </Link>
      </div>
    </section>
  );
}
