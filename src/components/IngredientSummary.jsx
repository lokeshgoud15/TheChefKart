import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import MobileTop from "./MobileTop";
import { useEffect, useState } from "react";
import allDishes  from '../assets/alldishes.jpg'


const IngredientSummary = ({ dishData }) => {
  const [currentDish, setCurrentDish] = useState(null);
  const params = useParams();

  useEffect(() => {
    const foundDish = dishData.find(
      (item) => item.id === parseInt(params.id.slice(1))
    );
    setCurrentDish(foundDish || null);
  }, [params.id]);

  return (
    <div className="w-full sm:mx-auto sm:border sm:shadow-lg tracking-wide max-w-md  px-3 py-1 bg-white h-screen ">
      <MobileTop />
      <div className="flex shadow-lg mx-[-10px] relative mt-2 px-3 py-2 items-center space-x-2 mb-4  ">
        <Link to="/" className="absolute top-6 left-3">
          <MdKeyboardArrowLeft size={"20px"} />
        </Link>
        <p className="font-bold mt-3 mx-3 ml-10 text-xl">Ingredient List</p>
      </div>

      <div className="mx-[-13px]  border-b border-gray-200 px-4  p-4">
        <div className="flex ">
          <div className="w-50">
            <h2 className="text-lg font-bold text-gray-800 ">
              {currentDish?.name}
            </h2>
            <p className="text-[10px] text-gray-600 mt-2">
              {currentDish?.description}
            </p>
          </div>
          <img
            src={currentDish?.category?.image || allDishes}
            alt="Fried Avocado Tacos"
            className="bg-black rounded-md mb-2 w-40 h-40 object-cover"
          />
        </div>
        <div>
          <h3 className="text--[12px] font-semibold   mb-2">Ingredients</h3>
          <p className="text-xs font-medium text-gray-600 mb-2">
            (For 2 people)
          </p>
        </div>
      </div>

      <div className="mx-[-13px]  mt-4 px-3">
        <ul className="space-y-2 text-sm">
          {currentDish?.ingredients?.map((item) => {
            const fractions = ["1/4", "1/2", "3/4", "1", "1 1/2", "2"];
            const randomFraction =
              fractions[Math.floor(Math.random() * fractions.length)];
            return (
              <li key={item} className="flex justify-between  pb-1">
                <span>{item}</span>
                <span>{randomFraction} pcs</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default IngredientSummary;
