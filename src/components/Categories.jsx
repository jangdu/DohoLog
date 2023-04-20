export default function Categories({ categories, selected, onClick }) {
  return (
    <div className="text-center p-4 w-full mx-auto">
      <h1 className="text-lg font-bold border-b my-2 p-2">Category</h1>
      <ul className="flex flex-row overflow-scroll py-4">
        {categories.map((category) => (
          <li
            className={`mx-2 border-b-white border-b-2 transition delay-150 cursor-pointer bg-white hover:border-b-green-300 duration-300 ${
              category === selected && "border-b-green-300 font-semibold"
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
