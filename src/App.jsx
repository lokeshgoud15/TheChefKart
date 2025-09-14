import { useEffect, useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import Nonveg from "./components/Nonveg";
import Veg from "./components/Veg";
import { FaChevronRight } from "react-icons/fa";
import IngredientModel from "./components/IngredientModel";
import DishList from "./components/DishList";
import Filter from "./components/Filter";

import MobileTop from "./components/MobileTop";

const dishData = [
  // ===== MAIN COURSE =====
  {
    id: 1,
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    name: "Palak Paneer",
    description: "Cottage cheese cooked with spinach and mild spices.",
    dishType: "CURRY",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
  },
  {
    id: 2,
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    name: "Butter Chicken",
    description: "Tender chicken cooked with butter, cream, and spices.",
    dishType: "CURRY",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
  },
  {
    id: 3,
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "VEG",
    name: "Masala Dosa",
    description:
      "South Indian rice and lentil crepe with spiced potato filling.",
    dishType: "DOSAI",
    image: null,
    forChefit: true,
    forParty: false,
    nameHi: "",
    nameBn: "",
    category: {
      id: 2,
      name: "South Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png",
      isRecommendedForMealSuggestion: true,
    },
  },
  {
    id: 4,
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "VEG",
    name: "Idli Sambar",
    description: "Steamed rice cakes with lentil soup and chutneys.",
    dishType: "BREAKFAST",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 2,
      name: "South Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png",
      isRecommendedForMealSuggestion: true,
    },
  },
  {
    id: 5,
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    name: "Chole Bhature",
    description: "Spicy chickpeas curry served with fried bread.",
    dishType: "CURRY",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 1,
      name: "North Indian",
      image: "",
      isRecommendedForMealSuggestion: true,
    },
  },
  {
    id: 6,
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    name: "Mutton Rogan Josh",
    description: "Aromatic lamb curry from Kashmir.",
    dishType: "CURRY",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 1,
      name: "North Indian",
      image: "",
      isRecommendedForMealSuggestion: true,
    },
  },
  {
    id: 7,
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "VEG",
    name: "Vegetable Biryani",
    description: "Fragrant rice with vegetables and spices.",
    dishType: "RICE",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 2,
      name: "South Indian",
      image: "",
      isRecommendedForMealSuggestion: true,
    },
  },
  {
    id: 8,
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    name: "Chicken Biryani",
    description: "Classic Hyderabadi style rice and chicken with spices.",
    dishType: "RICE",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 2,
      name: "South Indian",
      image: "",
      isRecommendedForMealSuggestion: true,
    },
  },
  {
    id: 9,
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    name: "Dal Tadka",
    description: "Yellow lentils tempered with ghee, garlic, and spices.",
    dishType: "CURRY",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 1,
      name: "North Indian",
      image: "",
      isRecommendedForMealSuggestion: true,
    },
  },
  {
    id: 10,
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    name: "Fish Curry",
    description: "Tangy and spicy fish curry with coconut.",
    dishType: "CURRY",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 2,
      name: "South Indian",
      image: "",
      isRecommendedForMealSuggestion: true,
    },
  },

  // ===== STARTERS =====
  {
    id: 11,
    categoryId: 3,
    mealType: "STARTER",
    type: "NON-VEG",
    name: "Chilli Chicken",
    description: "Crispy fried chicken wings tossed in spicy sauce.",
    dishType: "APPETIZER",
    image: null,
    forChefit: false,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 3,
      name: "Chinese",
      image: "",
      isRecommendedForMealSuggestion: true,
    },
  },
  {
    id: 12,
    categoryId: 3,
    mealType: "STARTER",
    type: "VEG",
    name: "Veg Manchurian",
    description: "Crispy fried balls of vegetables in spicy garlic sauce.",
    dishType: "APPETIZER",
    image: null,
    forChefit: false,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 3,
      name: "Chinese",
      image: "",
      isRecommendedForMealSuggestion: true,
    },
  },
  {
    id: 13,
    categoryId: 3,
    mealType: "STARTER",
    type: "VEG",
    name: "Spring Rolls",
    description: "Crispy rolls stuffed with vegetables.",
    dishType: "APPETIZER",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 3,
      name: "Chinese",
      image: "",
      isRecommendedForMealSuggestion: true,
    },
  },
  {
    id: 14,
    categoryId: 3,
    mealType: "STARTER",
    type: "NON-VEG",
    name: "Chicken Lollipop",
    description: "Deep-fried chicken wings with spicy coating.",
    dishType: "APPETIZER",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 3,
      name: "Chinese",
      image: "",
      isRecommendedForMealSuggestion: true,
    },
  },
  {
    id: 15,
    categoryId: 3,
    mealType: "STARTER",
    type: "VEG",
    name: "Paneer Tikka",
    description: "Grilled cottage cheese cubes marinated in spices.",
    dishType: "APPETIZER",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 1,
      name: "North Indian",
      image: "",
      isRecommendedForMealSuggestion: true,
    },
  },
  {
    id: 16,
    categoryId: 3,
    mealType: "STARTER",
    type: "NON-VEG",
    name: "Seekh Kebab",
    description: "Minced meat skewers grilled with spices.",
    dishType: "APPETIZER",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 1,
      name: "North Indian",
      image: "",
      isRecommendedForMealSuggestion: true,
    },
  },
  {
    id: 17,
    categoryId: 3,
    mealType: "STARTER",
    type: "VEG",
    name: "Aloo Tikki",
    description: "Crispy potato patties with chutney.",
    dishType: "APPETIZER",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 1,
      name: "North Indian",
      image: "",
      isRecommendedForMealSuggestion: true,
    },
  },
  {
    id: 18,
    categoryId: 3,
    mealType: "STARTER",
    type: "NON-VEG",
    name: "Fish Fingers",
    description: "Crispy golden fried fish sticks.",
    dishType: "APPETIZER",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 2,
      name: "South Indian",
      image: "",
      isRecommendedForMealSuggestion: true,
    },
  },
  {
    id: 19,
    categoryId: 3,
    mealType: "STARTER",
    type: "VEG",
    name: "Hara Bhara Kabab",
    description: "Spinach and green pea patties.",
    dishType: "APPETIZER",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 1,
      name: "North Indian",
      image: "",
      isRecommendedForMealSuggestion: true,
    },
  },
  {
    id: 20,
    categoryId: 3,
    mealType: "STARTER",
    type: "VEG",
    name: "Stuffed Mushrooms",
    description: "Mushrooms filled with cheese and spices.",
    dishType: "APPETIZER",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 1,
      name: "North Indian",
      image: "",
      isRecommendedForMealSuggestion: true,
    },
  },

  // ===== DESSERTS =====
  {
    id: 21,
    categoryId: 4,
    mealType: "DESSERT",
    type: "VEG",
    name: "Gulab Jamun",
    description: "Traditional sweet dumplings soaked in sugar syrup.",
    dishType: "SWEET",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 4,
      name: "Desserts",
      image: "",
      isRecommendedForMealSuggestion: false,
    },
  },
  {
    id: 22,
    categoryId: 4,
    mealType: "DESSERT",
    type: "VEG",
    name: "Kulfi",
    description: "Frozen dessert flavored with saffron & pistachio.",
    dishType: "SWEET",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 4,
      name: "Desserts",
      image: "",
      isRecommendedForMealSuggestion: false,
    },
  },
  {
    id: 23,
    categoryId: 4,
    mealType: "DESSERT",
    type: "VEG",
    name: "Rasgulla",
    description: "Spongy cheese balls soaked in sugar syrup.",
    dishType: "SWEET",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 4,
      name: "Desserts",
      image: "",
      isRecommendedForMealSuggestion: false,
    },
  },
  {
    id: 24,
    categoryId: 4,
    mealType: "DESSERT",
    type: "VEG",
    name: "Rasmalai",
    description: "Cottage cheese patties soaked in sweetened milk.",
    dishType: "SWEET",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 4,
      name: "Desserts",
      image: "",
      isRecommendedForMealSuggestion: false,
    },
  },
  {
    id: 25,
    categoryId: 4,
    mealType: "DESSERT",
    type: "VEG",
    name: "Ice Cream",
    description: "Vanilla, chocolate, and strawberry flavors.",
    dishType: "SWEET",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 4,
      name: "Desserts",
      image: "",
      isRecommendedForMealSuggestion: false,
    },
  },
  {
    id: 26,
    categoryId: 4,
    mealType: "DESSERT",
    type: "VEG",
    name: "Brownie",
    description: "Rich chocolate brownie with nuts.",
    dishType: "SWEET",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 4,
      name: "Desserts",
      image: "",
      isRecommendedForMealSuggestion: false,
    },
  },
  {
    id: 27,
    categoryId: 4,
    mealType: "DESSERT",
    type: "VEG",
    name: "Cheesecake",
    description: "Creamy cheesecake with biscuit base.",
    dishType: "SWEET",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 4,
      name: "Desserts",
      image: "",
      isRecommendedForMealSuggestion: false,
    },
  },
  {
    id: 28,
    categoryId: 4,
    mealType: "DESSERT",
    type: "VEG",
    name: "Payasam",
    description: "South Indian sweet milk pudding with vermicelli.",
    dishType: "SWEET",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 4,
      name: "Desserts",
      image: "",
      isRecommendedForMealSuggestion: false,
    },
  },
  {
    id: 29,
    categoryId: 4,
    mealType: "DESSERT",
    type: "VEG",
    name: "Mysore Pak",
    description: "Ghee-rich gram flour sweet from Karnataka.",
    dishType: "SWEET",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 4,
      name: "Desserts",
      image: "",
      isRecommendedForMealSuggestion: false,
    },
  },
  {
    id: 30,
    categoryId: 4,
    mealType: "DESSERT",
    type: "VEG",
    name: "Halwa",
    description: "Carrot, sooji, or wheat-based Indian halwa.",
    dishType: "SWEET",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 4,
      name: "Desserts",
      image: "",
      isRecommendedForMealSuggestion: false,
    },
  },

  // ===== SIDES =====
  {
    id: 31,
    categoryId: 5,
    mealType: "SIDES",
    type: "VEG",
    name: "Naan",
    description: "Soft tandoor baked flatbread.",
    dishType: "BREAD",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 5,
      name: "Sides",
      image: "",
      isRecommendedForMealSuggestion: false,
    },
  },
  {
    id: 32,
    categoryId: 5,
    mealType: "SIDES",
    type: "VEG",
    name: "Roti",
    description: "Whole wheat Indian bread.",
    dishType: "BREAD",

    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 5,
      name: "Sides",
      image: "",
      isRecommendedForMealSuggestion: false,
    },
  },
  {
    id: 33,
    categoryId: 5,
    mealType: "SIDES",
    type: "VEG",
    name: "Paratha",
    description: "Whole wheat Indian bread.",
    dishType: "BREAD",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 5,
      name: "Sides",
      image: "",
      isRecommendedForMealSuggestion: false,
    },
  },
  {
    id: 34,
    categoryId: 5,
    mealType: "SIDES",
    type: "VEG",
    name: "Chapati",
    description: "Whole wheat Indian bread.",
    dishType: "BREAD",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 5,
      name: "Sides",
      image: "",
      isRecommendedForMealSuggestion: false,
    },
  },
  {
    id: 35,
    categoryId: 5,
    mealType: "SIDES",
    type: "VEG",
    name: "Puri",
    description: "Whole wheat Indian bread.",
    dishType: "BREAD",
    image: null,
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    category: {
      id: 5,
      name: "Sides",
      image: "",
      isRecommendedForMealSuggestion: false,
    },
  },
];

const mealTypes = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES"];
const App = () => {
  const [activeMealType, setActiveMealType] = useState("MAIN COURSE");
  const [cartList, setCartList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState(null);
  const [filterItemsList, setFilterItemsList] = useState([]);
  const [vegOnly, setVegOnly] = useState(false);
  const [nonvegOnly, setNonvegOnly] = useState(false);
  const [allInSelectedCategory, setAllInSelectedCategory] = useState(false);

  useEffect(() => {
    const filteredItems = dishData.filter(
      (item) => item.mealType === activeMealType
    );
    setFilterItemsList(filteredItems);
  }, [activeMealType]);

  const modalRef = useRef(null);

  const filterItemsByType = (type) => {
    if (type === "VEG") {
      setVegOnly(true);
      setNonvegOnly(false);
      setAllInSelectedCategory(false);
      let filteredItems = dishData.filter(
        (item) => item.mealType === activeMealType && item.type === "VEG"
      );
      setFilterItemsList(filteredItems);
    } else if (type === "NON-VEG") {
      setVegOnly(false);
      setNonvegOnly(true);
      setAllInSelectedCategory(false);
      let filteredItems = dishData.filter(
        (item) => item.mealType === activeMealType && item.type === "NON-VEG"
      );
      setFilterItemsList(filteredItems);
    } else {
      setVegOnly(false);
      setNonvegOnly(false);
      setAllInSelectedCategory(true);
      let filteredItems = dishData.filter(
        (item) => item.mealType === activeMealType
      );
      setFilterItemsList(filteredItems);
    }
  };

  const filterItemsByMealType = (mealType) => {
    let filteredItems = dishData.filter((item) => item.mealType === mealType);
    setFilterItemsList(filteredItems);
  };

  useEffect(() => {
    if (!isModalOpen) return;
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className=" relative tracking-wide  w-full px-3 py-1 sm:p-4 pb-32 bg-white min-h-screen sm:w-96 smmb-24 sm:flex sm:flex-col sm:mx-auto sm:border  ">
      <MobileTop />

      <Filter
        filterItemsList={filterItemsList}
        setFilterItemsList={setFilterItemsList}
        dishData={dishData}
        activeMealType={activeMealType}
      />
      <div className="flex flex-wrap gap-2 mt-4 cursor-pointer">
        {mealTypes.map((mealType) => (
          <div
            className={` border-gray-400 tracking-wide  text-sm px-2 py-1 rounded-lg ${
              mealType.toLocaleLowerCase() == activeMealType.toLocaleLowerCase()
                ? "bg-[#ff941a]  text-white"
                : " border"
            }`}
            onClick={() => {
              setActiveMealType(mealType);
              filterItemsByMealType(mealType);
            }}
            key={`${mealType}`}
          >
            {mealType[0] + mealType.slice(1).toLowerCase()}{" "}
            {cartList?.filter((item) => item.mealType === mealType).length}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <p className="mt-4 font-semibold text-xs sm:text-base">
          {activeMealType[0] + activeMealType.slice(1).toLowerCase() + "s"}{" "}
          Selected (
          {cartList.filter((each) => each.mealType === activeMealType).length})
        </p>
        <div className="flex mt-4 gap-3 sm:gap-3 mr-1 sm:mr-3">
          <button
            className={`relative w-10 h-3 z-50 border border-gray-400 text-sm sm:text-sm px-2 py-3 sm:py-3 rounded-lg flex items-center justify-center transition-colors cursor-pointer`}
            onClick={() => {
              filterItemsByType(nonvegOnly ? "ALL" : "NON-VEG");
            }}
            aria-label="Show Non-Veg"
          >
            <span
              className={`${
                nonvegOnly
                  ? "absolute top-1.5 right-1"
                  : "absolute top-1.5 left-1"
              }`}
            >
              <Nonveg />
            </span>
            <span className="bg-gray-100 absolute top-[8px] right-[3px] w-[20px] h-[7px] rounded-xl"></span>
          </button>
          <button
            className={`relative w-10 h-3 z-50 border border-gray-400 text-sm px-2 py-3 rounded-lg flex items-center justify-center transition-colors cursor-pointer`}
            onClick={() => {
              filterItemsByType(vegOnly ? "ALL" : "VEG");
            }}
            aria-label="Show Veg"
          >
            <span
              className={`${
                vegOnly ? "absolute top-1.5 right-1" : "absolute top-1.5 left-1 "
              }`}
            >
              <Veg />
            </span>
            <span className="bg-gray-100 absolute top-2 right-[1px] w-6 h-2.5 rounded-xl"></span>
          </button>
        </div>
      </div>

      <div className="mt-5 flex justify-between items-center">
        <p className="text-sm font-semibold tracking-wide">North Indian</p>
        <div className="pr-4">
          <IoIosArrowUp />
        </div>
      </div>

      <div className="mt-3">
        {filterItemsList && filterItemsList.length > 0 && (
          <DishList
            filterItemsList={filterItemsList}
            cartList={cartList}
            setFilterItemsList={setFilterItemsList}
            setCartList={setCartList}
            setIsModalOpen={setIsModalOpen}
            setCurrentDish={setCurrentDish}
          />
        )}
      </div>

      {!isModalOpen && (
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 w-full sm:w-96 max-w-full mx-auto flex flex-col items-center justify-center pt-3 sm:px-3 gap-3 bg-white shadow-lg">
          <div className="flex items-center justify-between bg-[#fffaf4] px-3 text-sm font-medium py-3 w-full sm:w-full max-w-full mx-auto  shadow-lg cursor-pointer">
            <div className="text-xs w-full mx-auto">
              Total Dishes Selected {cartList?.length}
            </div>
            <div>
              <FaChevronRight />
            </div>
          </div>
          <div className="w-full font-semibold bg-black max-w-full rounded-lg text-white mb-3 text-center py-2 self-center cursor-pointer">
            Continue
          </div>
        </div>
      )}
      <div className="">
        <div
          ref={modalRef}
          className="fixed bottom-0  left-0 z-50 sm:left-[50%] sm:translate-x-[-50%] w-full sm:w-96 max-w-full mx-auto flex flex-col items-center justify-center pt-3 sm:px-3 gap-3 bg-white  shadow-2xl"
        >
          {isModalOpen && (
            <IngredientModel
              currentDish={currentDish}
              setCartList={setCartList}
              cartList={cartList}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default App;
