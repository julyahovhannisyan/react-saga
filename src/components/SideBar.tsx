import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import shop from "../assets/icons/shop.svg";
import homepage from "../assets/icons/homepage.svg";
import userPremium from "../assets/icons/user-premium.svg";
import learn from "../assets/icons/learn.svg";
import cuisine from "../assets/icons/cuisine.svg";
import post from "../assets/icons/post.svg";
import { NavLink } from "react-router-dom";
import { ISideBarItems, IsubMenu } from "../models/sideBar";

const sideBarData: ISideBarItems[] = [
  { icon: homepage, text: "Homepage", path: "/homepage" },
  { icon: userPremium, text: "Users", path: "/" },
  {
    icon: userPremium,
    text: "Premium users",
    path: "/premiumusers",
  },
  {
    icon: learn,
    text: "Learn",
    path: "/learn",
    children: [
      { text: "Quick Start", path: "/quuickstart" },
      { text: "Recipes", path: "/resipes" },
      { text: "Books", path: "/books" },
      { text: "Movies", path: "/movies" },
      { text: "Dietician", path: "/dietician" },
    ],
  },
  { icon: shop, text: "Shop", path: "/shop" },
  { icon: cuisine, text: "Cuisine", path: "/cuisine" },
  { icon: post, text: "Post", path: "/post" },
];

function Sidebar() {
  return (
    <aside className="SidebarContainer">
      {sideBarData.map((item: ISideBarItems, index: number) => {
        return (
          <Box key={item.path} className="SidebarWrapperr">
            <NavLink to={item.path} className={({ isActive }) => isActive ? 'activeLink' : ''} >
              <div className="SidebarWrapperr_items">
                <img className="SidebarWrapperr_items-icon" src={item.icon} />
                <span className="SidebarWrapperr_items-text">{item.text}</span>
              </div>
            </NavLink>
            {item.children
              ? item.children.map((child: IsubMenu, index: number) => {
                  return <Stack key={child.path} className="SidebarWrapperr_child">{child.text}</Stack>;
                })
              : ""}
          </Box>
        );
      })}
    </aside>
  );
}

export default Sidebar;
