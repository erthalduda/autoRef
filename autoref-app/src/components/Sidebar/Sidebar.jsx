// import React, { useState } from "react";

// import { ProSidebarProvider, Menu, MenuItem, SidebarContent} from "react-pro-sidebar";

// import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
// import { BiBookmarkAlt } from "react-icons/bi";
// import { IoMdPodium } from "react-icons/io";
// import { BsFolder } from "react-icons/bs";
// import { HiMagnifyingGlass } from "react-icons/hi2";
// import { GrAchievement } from "react-icons/gr";
// import { RiQuestionAnswerLine } from "react-icons/ri";
// import { AiOutlineEdit } from "react-icons/ai";
// import { TbLogout } from "react-icons/tb";
// import { GrHomeRounded } from "react-icons/gr";

// import "./Sidebar.css";

// const Sidebar = () => {
//   const [menuCollapse, setMenuCollapse] = useState(false);

//   const menuIconClick = () => {
//     menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
//   };

//   return (
//     <>
//       <div id="header">
//         <ProSidebarProvider collapsed={menuCollapse}>
//           <SidebarHeader>
//             <div className="textoLogo">
//               <p>{menuCollapse ? "A" : "AutoRef"}</p>
//             </div>
//             <div className="fechaMenu" onClick={menuIconClick}>
//               {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
//             </div>
//           </SidebarHeader>
//           <SidebarContent>
//             <Menu iconShape="square">
//               <MenuItem active={true} icon={<GrHomeRounded />}>
//                 HOME
//               </MenuItem>
//               <MenuItem icon={<BiBookmarkAlt />}>REFERÊNCIAS</MenuItem>
//               <MenuItem icon={<HiMagnifyingGlass />}>
//                 BUSCAR REFERÊNCIAS
//               </MenuItem>
//               <MenuItem icon={<BsFolder />}>COLEÇÕES</MenuItem>
//               <MenuItem icon={<IoMdPodium />}>RANKING</MenuItem>
//               <MenuItem icon={<GrAchievement />}>CONQUISTAS</MenuItem>
//               <MenuItem icon={<RiQuestionAnswerLine />}>FAQ</MenuItem>
//               <MenuItem icon={<AiOutlineEdit />}>EDITAR PERFIL</MenuItem>
//             </Menu>
//           </SidebarContent>
//           <SidebarFooter>
//             <Menu iconShape="square">
//               <MenuItem icon={<TbLogout />}>Logout</MenuItem>
//             </Menu>
//           </SidebarFooter>
//         </ProSidebarProvider>
//       </div>
//     </>
//   );
// };

// export default Sidebar;