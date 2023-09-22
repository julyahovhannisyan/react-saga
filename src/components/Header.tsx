import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import { Input } from '@mui/material';

function Header() {
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const handleClick = () => {
    setIsSearch(!isSearch);
  };

  return (
    <header className="Header">
      <Box>
        <IconButton
          onClick={handleClick}
          size="large"
          aria-label="search"
          color="inherit"
          disableRipple
        >
          <SearchIcon  />
        </IconButton>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          disableRipple
        >
          {isSearch ? <Input style={{ borderRadius: 3 }} type="text" /> : ""}
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Box>
    </header>
  );
}

export default Header;
