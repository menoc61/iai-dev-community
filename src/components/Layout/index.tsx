import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import useAuth from "../../hooks/useAuth";
import Navbar from "../Navbar";
import AuthModal from "../Modal/Auth";

interface ChildrenProps {
  children: React.ReactNode;
  // other props
}

const Layout: React.FC<ChildrenProps>  = ({ children }) => {

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
