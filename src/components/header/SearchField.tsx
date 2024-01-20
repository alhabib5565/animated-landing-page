import cn from "../../utils/cn";
import { IoSearchOutline } from "react-icons/io5";

const SearchField = () => {
  return (
    <div className="relative">
      <input
        type="search"
        className={cn(
          "outline-none pl-8 text-[18px] w-[120px] focus:w-[180px] focus:border-b-[1px] overflow-hidden border-accent transition-all duration-200"
        )}
        id=""
        placeholder="search..."
      />

      <IoSearchOutline className="w-6 h-6 text-accent absolute top-1/2 -translate-y-1/2 left-0" />
    </div>
  );
};

export default SearchField;
