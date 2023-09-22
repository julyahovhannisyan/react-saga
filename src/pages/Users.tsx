import { useNavigate } from "react-router-dom";
import UsersListTable from "../components/users/UsersList";
import { Button } from "@mui/material";

function UsersList() {
  const navigate = useNavigate();

  const createNewUser = () => {
    navigate("/new");
  };

  return (
    <div className="UsersContainer">
      <div className="UsersContainer_header">
        <span>All users</span>
        <Button
          onClick={createNewUser}
          variant="contained"
          style={{ fontSize: "10px" }}
        >
          New user
        </Button>
      </div>
      <UsersListTable />
    </div>
  );
}

export default UsersList;
