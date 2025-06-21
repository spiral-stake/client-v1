import { ClipLoader } from "react-spinners";
import Loader from "./Loader";
import CheckIconBlue from "../../assets/icons/CheckBig.svg";

const BtnFull = ({
  text,
  onClick,
  disabled,
  btnLoading,
}: {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  btnLoading?: boolean;
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="bg-spiral-blue text-sm font-light min-w-10 h-10 text-white px-2.5 py-2 rounded-full outline-none w-full disabled:bg-neutral-700 disabled:bg-opacity-50 disabled:text-zinc-500"
    >
      {!btnLoading ? (text ? text : <img className="w-5" src={CheckIconBlue} alt="" />) : <ClipLoader size={11} color="white" />}
    </button>
  );
};

export default BtnFull;
