import classnames from "classnames";
import { usePagination, DOTS } from "./usePagination";
import "./pagination.scss";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
const Pagination = (props: {
  onPageChange: any;
  onPageChangeSize: any;
  totalCount: number;
  siblingCount?: number | undefined;
  currentPage: any;
  pageSize: any;
  className: string;
}) => {
  const {
    onPageChange,
    onPageChangeSize,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const handleChange = (event: SelectChangeEvent) => {
    onPageChangeSize(event.target.value);
  };

  const customStyles = {
    height: "28px",
    width: "87px",
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className="PaginationWrapper">
      <ul
        className={classnames("pagination-container", {
          [className]: className,
        })}
      >
        <li
          className={classnames("pagination-item", {
            disabled: currentPage === 1,
          })}
          onClick={onPrevious}
        >
          <div className="arrow left" />
        </li>
        {paginationRange.map((pageNumber: string) => {
          if (pageNumber === DOTS) {
            return (
              <li key={pageNumber} className="pagination-item dots">
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={pageNumber}
              className={classnames("pagination-item", {
                selected: pageNumber === currentPage,
              })}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        <li
          className={classnames("pagination-item", {
            disabled: currentPage === lastPage,
          })}
          onClick={onNext}
        >
          <div className="arrow right" />
        </li>
      </ul>
      <FormControl sx={{ m: 5, width: 40, fontSize: "9px" }}>
        <Select
          value={pageSize}
          onChange={handleChange}
          displayEmpty
          style={customStyles}
          sx={{ fontSize: "9px" }}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="" sx={{ fontSize: "12px" }}>
            <em>{pageSize} / Page </em>
          </MenuItem>
          <MenuItem value={5} sx={{ fontSize: "12px" }}>
            5 / page
          </MenuItem>
          <MenuItem value={10} sx={{ fontSize: "12px" }}>
            10 / page
          </MenuItem>
          <MenuItem value={20} sx={{ fontSize: "12px" }}>
            20 / page
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Pagination;
