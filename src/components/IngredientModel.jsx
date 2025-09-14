import Nonveg from "./Nonveg";
import Veg from "./Veg";
import ingredientImage from "../assets/FLAT.png";
import { useNavigate } from "react-router-dom";
import allDishes from "../assets/alldishes.jpg";





const DetailsModel = ({ currentDish, setCartList, cartList }) => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-[350px] sm:h-72 sm:fixed sm:left-0 sm:bottom-0 flex flex-col gap-5 bg-white rounded-tl-[30px] rounded-tr-[30px] left-0 px-6 py-6 shadow-2xl shadow-black/30 sm:mx-auto sm:w-96 ">
      <div className="bg-black w-84 h-40 sm:h-32 flex rounded-3xl items-center justify-center">
        {<img className=" mt-6 rounded-2xl w-full h-full" src={currentDish?.category?.image || allDishes} alt="" />}
      </div>
      <div className="flex sm:h-4 items-center justify-between  gap-2">
        <div className="flex items-center justify-center gap-3">
          <p className="text-[18px] font-semibold">{currentDish?.name}</p>
          {currentDish?.type === "NON-VEG" ? <Nonveg /> : <Veg />}
        </div>
        <div className=" bg-white px-3 py-1 shadow-md rounded-lg flex items-center justify-center gap-2">
          {cartList.some((item) => item.id === currentDish.id) ? (
            <button
              onClick={() => {
                setCartList((prev) =>
                  prev.filter((item) => item.id !== currentDish.id)
                );
              }}
              className="text-orange-500 font-semibold cursor-pointer "
            >
              Remove
            </button>
          ) : (
            <button
              onClick={() => {
                setCartList((prev) => [...prev, currentDish]);
              }}
              className="text-[#73AE78] cursor-pointer"
            >
              Add +
            </button>
          )}
        </div>
      </div>
      <div className="sm:h-8">
        <p className="text-sm">
          <strong>{currentDish?.category?.name} </strong>
          <span>{currentDish?.description}</span>
        </p>
      </div>
      <div
        onClick={() => navigate(`/:${currentDish.id}`)}
        className="flex items-center  gap-2"
      >
        <img src={ingredientImage} alt="" />
        <p className="text-[#ff941a] font-medium text-sm cursor-pointer">Ingredient</p>
      </div>
    </div>
  );
};
export default DetailsModel;
