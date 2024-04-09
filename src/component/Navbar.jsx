// import React from "react";
// import image1 from "../images/RadiaantLogo-removebg-preview.png";
// import {
//   Navbar,
//   Collapse,
//   Typography,
//   Button,
//   IconButton,
//   List,
//   ListItem,
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
// } from "@material-tailwind/react";
// import {
//   ChevronDownIcon,
//   Bars3Icon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";
// import {
//   Bars4Icon,
//   GlobeAmericasIcon,
//   NewspaperIcon,
//   PhoneIcon,
//   RectangleGroupIcon,
//   SquaresPlusIcon,
//   SunIcon,
//   TagIcon,
//   UserGroupIcon,
// } from "@heroicons/react/24/solid";
// import { NavLink } from "react-router-dom";
// import App from "../App";
// import Home from "./Home";

// const navListMenuItems = [
//   {
//     title: "Products",
//     description: "Find the perfect solution for your needs.",
//     icon: SquaresPlusIcon,
//   },
//   {
//     title: "About Us",
//     description: "Meet and learn about our dedication",
//     icon: UserGroupIcon,
//   },
//   {
//     title: "Blog",
//     description: "Find the perfect solution for your needs.",
//     icon: Bars4Icon,
//   },
//   {
//     title: "Services",
//     description: "Learn how we can help you achieve your goals.",
//     icon: SunIcon,
//   },
//   {
//     title: "Support",
//     description: "Reach out to us for assistance or inquiries",
//     icon: GlobeAmericasIcon,
//   },
//   {
//     title: "Contact",
//     description: "Find the perfect solution for your needs.",
//     icon: PhoneIcon,
//   },
//   {
//     title: "News",
//     description: "Read insightful articles, tips, and expert opinions.",
//     icon: NewspaperIcon,
//   },
//   {
//     title: "Products",
//     description: "Find the perfect solution for your needs.",
//     icon: RectangleGroupIcon,
//   },
//   {
//     title: "Special Offers",
//     description: "Explore limited-time deals and bundles",
//     icon: TagIcon,
//   },
// ];

// function NavListMenu() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
//   const renderItems = navListMenuItems.map(
//     ({ icon, title, description }, key) => (
//       <a href="#" key={key}>
//         <MenuItem classNameName="flex items-center gap-3 rounded-lg">
//           <div classNameName="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
//             {" "}
//             {React.createElement(icon, {
//               strokeWidth: 2,
//               classNameName: "h-6 text-gray-900 w-6",
//             })}
//           </div>
//           <div>
//             <Typography
//               variant="h6"
//               color="blue-gray"
//               classNameName="flex items-center text-sm font-bold"
//             >
//               {title}
//             </Typography>
//             <Typography
//               variant="paragraph"
//               classNameName="text-xs !font-medium text-blue-gray-500"
//             >
//               {description}
//             </Typography>
//           </div>
//         </MenuItem>
//       </a>
//     )
//   );

//   return (
//     <React.Fragment>
//       <Menu
//         open={isMenuOpen}
//         handler={setIsMenuOpen}
//         offset={{ mainAxis: 20 }}
//         placement="bottom"
//         allowHover={true}
//       >
//         <MenuHandler>
//           <Typography
//             as="div"
//             variant=""
//             classNameName="font-large font-serif font-extrabold font-weight:[600]"
//           >
//             <ListItem
//               classNameName="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
//               selected={isMenuOpen || isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//             >
//               Courses
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 classNameName={` h-3 w-3 transition-transform lg:block ${
//                   isMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 classNameName={`block h-3 w-3 transition-transform lg:hidden ${
//                   isMobileMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </ListItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList classNameName="hidden max-w-screen-xl rounded-xl lg:block">
//           <ul classNameName="grid grid-cols-3 gap-y-2 outline-none outline-0">
//             {renderItems}
//           </ul>
//         </MenuList>
//       </Menu>
//       <div classNameName="block lg:hidden">
//         <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
//       </div>
//     </React.Fragment>
//   );
// }

// function GetStarted() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
//   const renderItems = navListMenuItems.map(
//     ({ icon, title, description }, key) => (
//       <a href="#" key={key}>
//         <MenuItem classNameName="flex items-center gap-3 rounded-lg">
//           <div classNameName="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
//             {" "}
//             {React.createElement(icon, {
//               strokeWidth: 2,
//               classNameName: "h-6 text-gray-900 w-6",
//             })}
//           </div>
//           <div>
//             <Typography
//               variant="h6"
//               color="blue-gray"
//               classNameName="flex items-center text-sm font-bold"
//             >
//               {title}
//             </Typography>
//             <Typography
//               variant="paragraph"
//               classNameName="text-xs !font-medium text-blue-gray-500"
//             >
//               {description}
//             </Typography>
//           </div>
//         </MenuItem>
//       </a>
//     )
//   );

//   return (
//     <React.Fragment>
//       <Menu
//         open={isMenuOpen}
//         handler={setIsMenuOpen}
//         offset={{ mainAxis: 20 }}
//         placement="bottom"
//         allowHover={true}
//       >
//         <MenuHandler>
//           <Typography
//             as="div"
//             variant="large"
//             classNameName="font-large font-serif font-extrabold font-weight:[600]"
//           >
//             <ListItem
//               classNameName="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
//               selected={isMenuOpen || isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//             >
//               Charities
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 classNameName={` h-3 w-3 transition-transform lg:block ${
//                   isMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 classNameName={`block h-3 w-3 transition-transform lg:hidden ${
//                   isMobileMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </ListItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList classNameName="hidden max-w-screen-xl rounded-xl lg:block">
//           <ul classNameName="grid grid-cols-3 gap-y-2 outline-none outline-0">
//             {renderItems}
//           </ul>
//         </MenuList>
//       </Menu>
//       <div classNameName="block lg:hidden">
//         <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
//       </div>
//     </React.Fragment>
//   );
// }

// function NavList() {
//   return (
//     <List classNameName="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
//       <Typography
//         as="a"
//         href="/"
//         variant="small"
//         color="blue-gray"
//         classNameName="font-medium"
//       >
//         <ListItem classNameName="flex size-8 items-center gap-3 py-2 pr-4 text-xl font-normal text-center justify-center align-center">
//         <NavLink to="/" element={<Home />}>Home</NavLink>
//         </ListItem>
//         {/* <ListItem classNameName="flex items-center gap-2 py-2 pr-4 text-xl font-normal text-center justify-center align-center">About </ListItem> */}
//       </Typography>
//       <Typography
//         as="a"
//         href="#"
//         variant="small"
//         color="blue-gray"
//         classNameName="font-medium"
//       >
//         <ListItem classNameName="flex size-8 items-center gap-3 py-2 pr-4 text-xl font-normal text-center justify-center align-center">
//           About
//         </ListItem>
//       </Typography>
//       <NavListMenu />
//       <GetStarted />
//       <Typography
//         as="a"
//         href="/about"
//         variant="small"
//         color="blue-gray"
//         classNameName="font-medium"
//       >
//         <ListItem classNameName="flex items-center gap-2 py-2 pr-4 text-xl font-normal text-center justify-center align-center">
//           Researches
//         </ListItem>
//       </Typography>
//       <Typography
//         as="a"
//         href="/researches"
//         variant="small"
//         color="blue-gray"
//         classNameName="font-medium"
//       >
//         <ListItem classNameName="flex items-center gap-2 py-2 pr-4 text-xl font-normal text-center justify-center align-center">
//           Contact Us
//         </ListItem>
//       </Typography>
//     </List>
//   );
// }

// function NavbarWithMegaMenu() {
//   const [openNav, setOpenNav] = React.useState(false);

//   React.useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setOpenNav(false)
//     );
//   }, []);

//   return (
//     <Navbar classNameName="mx-auto max-w-screen-4xl px-4 py-2  w-[100%]">
//       <div classNameName="flex items-center justify-between text-white">
//         <Typography
//           as="a"
//           href="#"
//           variant="h6"
//           classNameName="mr-4 cursor-pointer py-1.5 lg:ml-2"
//         >
//           <img classNameName="h-[70px]" src={image1}></img>
//         </Typography>
//         <div classNameName="hidden lg:block">
//           <NavList />
//         </div>
//         <div
//           classNameName="hidden lg:flex gap-2 bg-black "
//           style={{ borderRadius: "10px" }}
//         >
//           <Button variant="text" size="sm" classNameName="text-white">
//             Log In / Register
//           </Button>
//           {/* <Button variant="text" size="sm">
//     Sign In
//   </Button> */}
//         </div>

//         <IconButton
//           variant="text"
//           color="black"
//           classNameName="lg:hidden"
//           onClick={() => setOpenNav(!openNav)}
//         >
//           {openNav ? (
//             <XMarkIcon classNameName="h-6 w-6 stroke-2" />
//           ) : (
//             <Bars3Icon classNameName="h-6 w-6 stroke-2" />
//           )}
//         </IconButton>
//       </div>
//       <Collapse open={openNav}>
//         <NavList />
//         <div classNameName="flex w-full flex-nowrap items-center gap-2 lg:hidden">
//           <Button
//             variant="outlined"
//             size="sm"
//             fullWidth
//             style={{ color: "white" }}
//           >
//             Log In
//           </Button>
//           {/* <Button variant="gradient" size="sm" fullWidth>
//             Sign In
//           </Button> */}
//         </div>
//       </Collapse>
//     </Navbar>

//   );
// }
// export {
//   NavbarWithMegaMenu,
// };
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image1 from "../images/RadiaantLogo.jpg";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <header className={`border-b bg-white font-sans min-h-[60px] `}>
      <div className="flex flex-wrap items-center justify-between xl:px-10 px-6 py-1 relative lg:gap-y-2 gap-y-4 gap-x-4">
        <a href="javascript:void(0)">
          <img src={image1} alt="logo" className="w-20" />
        </a>{" "}
        <div className="flex items-center max-lg:ml-auto lg:order-1">
        <span className="relative">
            <i className="fa-brands fa-facebook"></i>
            <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white"></span>
          </span> 

          <span className="relative ml-8">
            {/* Icon elements */}
          </span> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="20px" className="cursor-pointer fill-[#000] hover:fill-yellow-300 inline ml-7">
            {/* Path elements for SVG icon */}
          </svg>
          
          <button id="toggle" className="lg:hidden ml-7" onClick={toggleMenu}>
       
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <ul
          id="collapseMenu"
          style={{ display: isMenuOpen ? "block" : "none" }}
          className="lg:!flex max-lg:hidden max-lg:w-full lg:space-x-10 max-lg:space-y-3 max-lg:my-4"
        >
          <li className="max-lg:border-b max-lg:py-2">
            <Link
              to="/"
              href="javascript:void(0)"
              className="hover:text-grey-800 font-bold text-[#201f1f] text-[15px] lg:hover:fill-gray-800 block"
            >
              Home
            </Link>
          </li>
          <li className="group max-lg:border-b max-lg:py-2 relative">
            <a
              href="javascript:void(0)"
              className="hover:text-grey-800 font-bold text-[#201f1f] text-[15px] lg:hover:fill-gray-800 block"
            >
              About
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="currentColor"
                className="ml-1 inline-block"
                viewBox="0 0 24 24"
              >
                <pat
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16"
                  data-original="#000000"
                />
              </svg>
            </a>
            <ul className="absolute hidden group-hover:block shadow-lg max-lg:border max-lg:border-gray-500 bg-white px-6 pb-4 pt-6 space-y-3 lg:top-5 max-lg:top-8 lg:-left-6 min-w-[250px] z-50">
              <li className="border-b py-2">
                <Link
                  to="/about"
                  className="hover:text-blue-300 font-bold text-[#000] text-[15px] block"
                >
                  WPHF
                </Link>
              </li>
              <li className="border-b py-2">
                <Link
                  to="/vision"
                  className="hover:text-blue-300 font-bold text-[#000] text-[15px] block"
                >
                  Our Founder
                </Link>
              </li>
              <li className="border-b py-2">
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-300 font-bold text-[#000] text-[15px] block"
                >
                  Pranic Healing
                </a>
              </li>
              <li className="border-b py-2">
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-300 font-bold text-[#000] text-[15px] block"
                >
                  Twin Heart
                </a>
              </li>
              {/* <li className="border-b py-2">
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-300 font-bold text-[#000] text-[15px] block"
                >
                  Quality Assurance
                </a>
              </li>
              <li className="border-b py-2">
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-300 font-bold text-[#000] text-[15px] block"
                >
                  Why Us
                </a>
              </li> */}
            </ul>
          </li>

          <li className="group max-lg:border-b max-lg:py-2 relative">
            <a
              href="javascript:void(0)"
              className="hover:text-blue-300 font-bold text-[#000] text-[15px] lg:hover:fill-blue-300 block"
            >
              Courses
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="currentColor"
                className="ml-1 inline-block"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16"
                  data-original="#000000"
                />
              </svg>
            </a>
            <ul className="absolute hidden group-hover:block shadow-lg max-lg:border max-lg:border-gray-500 bg-white px-6 pb-4 pt-6 space-y-3 lg:top-5 max-lg:top-8 lg:-left-6 min-w-[250px] z-50">
              <li className="border-b py-2">
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-300 font-bold text-[#000] text-[15px] block"
                >
                  Wellness
                </a>
              </li>
              <li className="border-b py-2">
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-300 font-bold text-[#000] text-[15px] block"
                >
                  Prosperity
                </a>
              </li>
              <li className="border-b py-2">
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-300 font-bold text-[#000] text-[15px] block"
                >
                  Spirituality
                </a>
              </li>
              <li className="border-b py-2">
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-300 font-bold text-[#000] text-[15px] block"
                >
                 Higher Courses
                </a>
              </li>
             
            </ul>
          </li>

          <li className="group max-lg:border-b max-lg:py-2 relative">
            <a
              href="javascript:void(0)"
              className="hover:text-blue-300 font-bold text-[#000] text-[15px] lg:hover:fill-blue-300 block"
            >
              Donation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="currentColor"
                className="ml-1 inline-block"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16"
                  data-original="#000000"
                />
              </svg>
            </a>
            <ul className="absolute hidden group-hover:block shadow-lg max-lg:border max-lg:border-gray-500 bg-white px-6 pb-4 pt-6 space-y-3 lg:top-5 max-lg:top-8 lg:-left-6 min-w-[250px] z-50">
              <li className="border-b py-2">
                <a 
                  href="/donate"
                  className="hover:text-blue-300 font-bold text-[#000] text-[15px] block"
                >
                  Donation -India National
                </a>
              </li>
              <li className="border-b py-2">
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-300 font-bold text-[#000] text-[15px] block"
                >
                  Donation International
                </a>
              </li>
              <li className="border-b py-2">
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-300 font-bold text-[#000] text-[15px] block"
                >
                  WPHF Charities
                </a>
              </li>
              <li className="border-b py-2">
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-300 font-bold text-[#000] text-[15px] block"
                >
                  Food for Hungry
                </a>
              </li>
              <li className="border-b py-2">
                <a
                  href="/mks"
                  className="hover:text-blue-300 font-bold text-[#000] text-[15px] block"
                >
                MCKS Trust Funds
                </a>
              </li>
            </ul>
          </li>

          {/* <li className="max-lg:border-b max-lg:py-2">
            <a
              href="javascript:void(0)"
              className="hover:text-blue-300 font-bold text-[#000] text-[15px] block"
            >
              Contact Us
            </a>
          </li> */}

          {/* More list items */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
