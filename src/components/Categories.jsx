export default function Categories({ categories, selected, onClick }) {
  return (
    <div className="text-center p-4 w-full mx-auto overflow-scroll">
      <h1 className="text-lg font-bold border-b my-2 p-2">Category</h1>
      <ul className="flex flex-row">
        {categories.map((category) => (
          <li
            className={`mx-2 w-full  rounded-md font-semibold px-2 bg-green-300 cursor-pointer hover:bg-green-500 ${
              category === selected && "bg-green-500"
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
