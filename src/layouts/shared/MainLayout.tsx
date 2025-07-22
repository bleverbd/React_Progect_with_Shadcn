import { Outlet, ScrollRestoration } from "react-router";


const MainLayout = () => {
  return (
    <div className="font-poppins flex min-h-screen">
      <ScrollRestoration />
      
      <div className="grow min-w-0">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
