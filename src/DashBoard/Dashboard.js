import React from 'react'
import {
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; 

function Dashboard() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div>

      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
        </Typography>
        <div className="hidden lg:block">
        
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href='/Login' className="flex items-center hover:text-blue-500 transition-colors">
          Login
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="/Register" className="flex items-center hover:text-blue-500 transition-colors">
          Register
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="/userTasks" className="flex items-center hover:text-blue-500 transition-colors">
          User
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Docs
        </a>
      </Typography>
    </ul>
    <div className="absolute bottom-0 bg-slate-900 text-white inset-x-0 md:text-md text-sm py-4 text-center font-mono mt-20">
      <div className="grid md:grid-cols-5 grid-cols-1 mt-6 gap-4">
        <div className="hover:text-yellow-400 cursor-pointer"><a href="https://www.linkedin.com/in/soham-kayal-90939720b/"><ion-icon name="logo-linkedin"></ion-icon> LinkedIn</a></div>
        <div className="hover:text-yellow-400 cursor-pointer"><a href="https://github.com/Sohamkayal4103"><ion-icon name="logo-github"></ion-icon> Github</a></div>
        <div className="hover:text-yellow-400 cursor-pointer"><a href="https://twitter.com/kayal_soham"><ion-icon name="logo-twitter"></ion-icon> Twitter</a></div>
        <div className="hover:text-yellow-400 cursor-pointer"><a href="https://www.instagram.com/sohamkayal/"><ion-icon name="logo-instagram"></ion-icon> Instagram</a></div>
        <div className="hover:text-yellow-400 cursor-pointer"><a href="https://www.youtube.com/channel/UCIdHJ31IXugn2ec7yio3yQA"><ion-icon name="logo-youtube"></ion-icon> YouTube</a></div>
      </div>
     </div>
      </div>

  )
  
}

export default Dashboard