import React, { useState } from "react";

import {
  ProSidebarProvider,
  Menu,
  MenuItem,
} from "react-pro-sidebar";

import {
  BsFolder,
  IoPodiumOutline,
  HiOutlineMagnifyingGlass,
  BiBookmarkAlt,
  GrAchievement,
  RiQuestionAnswerLine,
  AiOutlineEdit,
  TbLogout,
  GrHomeRounded,
} from "react-icons";

import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";

const Header = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        <ProSidebarProvider collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <p>{menuCollapse ? "A" : "AutoRef"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<GrHomeRounded />}>
                HOME
              </MenuItem>
              <MenuItem icon={<BiBookmarkAlt />}>REFERÊNCIAS</MenuItem>
              <MenuItem icon={<HiOutlineMagnifyingGlass />}>
                BUSCAR REFERÊNCIAS
              </MenuItem>
              <MenuItem icon={<BsFolder />}>COLEÇÕES</MenuItem>
              <MenuItem icon={<IoPodiumOutline />}>RANKING</MenuItem>
              <MenuItem icon={<GrAchievement />}>CONQUISTAS</MenuItem>
              <MenuItem icon={<RiQuestionAnswerLine />}>FAQ</MenuItem>
              <MenuItem icon={<AiOutlineEdit />}>EDITAR PERFIL</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<TbLogout />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebarProvider>
      </div>
    </>
  );
};

export default Header;
