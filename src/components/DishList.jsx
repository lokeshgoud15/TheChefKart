import { useEffect } from "react";
import DishCard from "./DishCard";

const DishList = ({
  cartList,
  setCartList,
  setIsModalOpen,
  setCurrentDish,
  filterItemsList,
}) => {
  return (
    <div className="">
      {filterItemsList.length > 0 &&
        filterItemsList?.map((selectedItem) => (
          <DishCard
            key={selectedItem.id}
            cartList={cartList}
            selectedItem={selectedItem}
            setIsModalOpen={setIsModalOpen}
            setCurrentDish={setCurrentDish}
            setCartList={setCartList}
          />
        ))}
    </div>
  );
};
export default DishList;
