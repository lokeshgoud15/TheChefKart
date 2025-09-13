import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Filter = ({ setFilterItemsList, dishData, activeMealType }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const inputFocus = useRef(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      const filteredItems = dishData.filter((item) => {
        const matchesMeal = item.mealType === activeMealType;
        const matchesSearch = item.name
          .toLowerCase()
          .includes((searchTerm || "").toLowerCase());

        return matchesMeal && matchesSearch;
      });

      setFilterItemsList(filteredItems);
    }, 400);

    return () => clearTimeout(handler);
  }, [searchTerm, activeMealType]);

  return (
    <div className="relative border mt-6 border-gray-500 rounded-lg">
      <div className="absolute top-3 left-3">
        <MdKeyboardArrowLeft size={"20px"} />
      </div>
      <input
        ref={inputFocus}
        value={searchTerm}
        className="relative w-72 ml-10 max-w-xs sm:max-w-md  border-gray-500 rounded-lg px-3 py-2 placeholder:text-gray-500 placeholder:text-sm focus:outline-none  "
        placeholder="Search dish for your party"
        type="text"
        onChange={onSearchChange}
      />
      <div
        onClick={() => inputFocus.current.focus()}
        className="absolute top-2 right-6 sm:right-6"
      >
        <CiSearch size={"24px"} className="text-gray-500" />
      </div>
    </div>
  );
};
export default Filter;
