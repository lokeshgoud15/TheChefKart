import { useNavigate } from "react-router-dom";
import Nonveg from "./Nonveg";
import Veg from "./Veg";
import allDishes from "../assets/alldishes.jpg";

const DishCard = ({
  cartList,
  selectedItem,
  setIsModalOpen,
  setCurrentDish,
  setCartList,
}) => {
  const navigate = useNavigate();
  const onRemoveDish = (selectedItem) => {
    setCartList((prev) => prev.filter((item) => item.id !== selectedItem.id));
  };
  const onAddDish = (selectedItem) => {
    setCartList((prev) => [...prev, selectedItem]);
  };

  return (
    <div className=" flex justify-between gap-5 border-b border-gray-100 py-5">
      <div className="flex flex-col gap-4 w-[60%]">
        {" "}
        <div className="font-bold flex gap-2 items-center text-sm">
          <p className="tracking-wide">{selectedItem?.name}</p>
          {selectedItem.type == "VEG" ? <Veg /> : <Nonveg />}
        </div>
        <div
          onClick={() => {
            setIsModalOpen(true);
            setCurrentDish(selectedItem);
          }}
          className=" text-gray-400 text-xs"
        >
          {selectedItem?.description.length > 50 ? (
            <span className="">
              {selectedItem?.description.slice(0, 50)}...{" "}
              <strong
                onClick={() => {
                  setIsModalOpen(true);
                  setCurrentDish(selectedItem);
                }}
                className="text-gray-700"
              >
                More
              </strong>
            </span>
          ) : (
            selectedItem?.description
          )}
        </div>
        <div
          onClick={() => {
            navigate(`/:${selectedItem.id}`);
          }}
        >
          <p className="text-[#ff941a] font-medium text-xs">Ingredient</p>
        </div>
      </div>
      <div className="relative w-[140px] h-80px] bg-black rounded-lg ">
        {selectedItem?.category?.image ? (
          <img
            onClick={() => {
              setIsModalOpen(true);
              setCurrentDish(selectedItem);
            }}
            className="w-full"
            src={selectedItem.category.image}
            alt="image"
          />
        ) : (
          <img
            onClick={() => {
              setIsModalOpen(true);
              setCurrentDish(selectedItem);
            }}
            className="w-full"
            src={allDishes}
            alt="image"
          />
        )}
        <div className="absolute bottom-[-5px] left-0 bg-white w-full shadow-lg rounded-lg flex items-center justify-center gap-2">
          <div className="  font-semibold border-gray-400 px-1 py-1 ">
            {cartList.some((item) => item.id === selectedItem.id) ? (
              <button
                onClick={() => onRemoveDish(selectedItem)}
                className="text-orange-500"
              >
                Remove
              </button>
            ) : (
              <button
                onClick={() => onAddDish(selectedItem)}
                className="text-[#73AE78]"
              >
                Add +
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DishCard;
