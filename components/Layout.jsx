import React from 'react'
import Sidebar from "./Sidebar";
import Main from "./Main";

const Layout = () => {
  return (
    <div className="pt-[60px] flex w-full">
        <Sidebar />
        <Main />
    </div>
  )
}

export default Layout