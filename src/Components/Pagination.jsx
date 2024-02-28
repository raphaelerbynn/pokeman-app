import { useContext } from "react";
import { ArrowIcon } from "../assets/icons";
import { UiContext } from "../Context";

// eslint-disable-next-line react/prop-types
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const { themeColor } = useContext(UiContext)

    const getPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 4) {
        for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
        }
    } else {
        if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
            pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
        } else if (currentPage >= totalPages - 3) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
        }
    }

    return pageNumbers;
    };

  return (
    <div className="flex gap-2">
        <button className="rounded-lg flex items-center justify-center w-10 h-10 bg-[#E1E1E1] disabled:opacity-50" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage <= 1}>
            <img src={ArrowIcon} alt="" />
        </button>
        {totalPages > 1 && 
            <>
            {getPageNumbers().map((pageNumber, index) => (
              <button className="text-[20px]  rounded-lg flex items-center justify-center w-10 h-10 "
                key={index}
                style={{
                  backgroundColor: currentPage === pageNumber ? themeColor : "#E1E1E1",
                  color: currentPage === pageNumber ? "#FFFFFF" : "#000000",
                }}
                onClick={() => {
                    if (pageNumber !== "...") {
                        onPageChange(pageNumber);
                    }
                }}
              >
                {pageNumber}
              </button>
            ))}
            </>
        }
        <button className="rounded-lg flex items-center justify-center w-10 h-10 bg-[#E1E1E1] disabled:opacity-50" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage >= totalPages}>
            <img src={ArrowIcon} alt="" className="rotate-180" />
        </button>
    </div>
  );
};

export default Pagination;