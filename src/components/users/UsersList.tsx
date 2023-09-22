import { Stack, Switch, styled } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import downIcon from "../../assets/icons/arrow-down.svg";
import upIcon from "../../assets/icons/arrow-up.svg";
import { useDispatch, useSelector } from "react-redux";
import { getUsersSelector } from "../../store/users/selectors";
import { ChangeEvent, useMemo, useState } from "react";
import Pagination from "../pagination/Pagination";
import { getTotalUsersSelector } from "../../store/users/selectors";
import {
  userDeleteRequest,
  usersRequest,
  usersSortRequest,
} from "../../store/users/actions";

import { useNavigate } from "react-router-dom";
import { IUsersList } from "../../models/users";
function UsersListTable() {
  const navigate = useNavigate();
  const users: IUsersList[] = useSelector(getUsersSelector);
  const usersTotal: IUsersList[] = useSelector(getTotalUsersSelector);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageSize, setCurrentPageSize] = useState(10);

  const currentTableData = useMemo(() => {
    return dispatch(
      usersRequest({ page: currentPage, limit: currentPageSize })
    );
  }, [currentPage, currentPageSize]);

  const tableHeader: string[] = [
    "Photo",
    "Name",
    "Location",
    "Registered date",
    "Last active date",
    "Email",
    "Actions",
  ];

  const handleUpdater = (id: number) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (userId: number) => {
    dispatch(userDeleteRequest({ id: userId }));
  };

  const handleSort = (fildName: string, direction: string) => {
    dispatch(
      usersSortRequest({
        fieldName: fildName.toLowerCase(),
        direction: direction,
      })
    );
  };

  const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {};
  const handleToggle = (user: IUsersList) => {};
  const handelAllChecked = (e: ChangeEvent<HTMLInputElement>) => {};

  return (
    <div className="UsersTableContainer">
      <div className="UsersTableContainer_wrapper">
        <table style={{ width: "100%" }}>
          <thead className="UsersTableContainer_wrapper-header">
            <tr>
              <th scope="col">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="mastercheck"
                  onChange={(e) => handelAllChecked(e)}
                />
              </th>
              {tableHeader.map((header: string, index: number) => {
                return (
                  <th key={header} scope="col">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {header}
                      {index < tableHeader.length - 2 && (
                        <div className="SortActions"> 
                          <div
                            className="SortActions_asc"
                            onClick={() => handleSort(header, "asc")}
                          >
                            <img src={upIcon} />
                          </div>
                          <div
                            className="SortActions_desc"
                            onClick={() => handleSort(header, "desc")}
                          >
                            <img src={downIcon} />
                          </div>
                        </div>
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {users.map((user: IUsersList) => (
              <tr key={user.id}>
                <th scope="row">
                  <input
                    type="checkbox"
                    id="rowcheck{user.id}"
                    onChange={(e) => handleChecked(e)}
                  />
                </th>
                <td>
                  <div className="ImageContainer">
                    <img src={user.photo} />
                  </div>
                </td>
                <td>{user.name}</td>
                <td>{user.location}</td>
                <td>
                  {user.registeredDate &&
                    new Date(user.registeredDate)
                      .toLocaleDateString(undefined, {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })
                      .replace(/\//g, "/")}
                </td>
                <td>
                  {user.lastActiveDate &&
                    new Date(user.lastActiveDate)
                      .toLocaleDateString(undefined, {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })
                      .replace(/\//g, "/")}
                </td>
                <td>{user.email}</td>
                <td>
                  <div style={{ display: "flex" }}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <AntSwitch
                        checked={user.disabled}
                        inputProps={{ "aria-label": "ant design" }}
                        onChange={() => handleUpdater(user.id)}
                      />
                    </Stack>
                    <DeleteIcon
                      onClick={() => handleDelete(user.id)}
                      sx={{ color: "red", marginLeft: '10px' }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={usersTotal.length} //from server
        pageSize={currentPageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
        onPageChangeSize={(pageSize: number) => setCurrentPageSize(pageSize)}
      />
      <span style={{color: '#878787', fontSize: '18px'}}>Total number of users 
      <span style={{color: '#407EFF', marginLeft: '10px'}}>{usersTotal.length}</span></span>
      </div>
    </div>
  );
}

export default UsersListTable;

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
    backgroundColor: "green", // Background color when active
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "red",
      },
      backgroundColor: "red", // Background color when checked
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      backgroundColor: "red", // Background color when focused
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "green",
    boxSizing: "border-box",
  },
}));
