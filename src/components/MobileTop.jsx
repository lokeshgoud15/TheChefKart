import { BiSignal3 } from "react-icons/bi";
import { MdSignalWifi3Bar } from "react-icons/md";
import { BsBatteryHalf } from "react-icons/bs";
const MobileTop = () => {
  return (
    <div className="flex justify-between  px-3 mt-1 items-center">
      <p className="text-xs">
        12:10 <span className="text-xs">PM</span>
      </p>{" "}
      <div className="flex items-center justify-center gap-3">
        <BiSignal3 />
        <MdSignalWifi3Bar />
        <BsBatteryHalf />
      </div>{" "}
    </div>
  );
};
export default MobileTop;
