"use client";
import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import { GetCurrentuser } from "@/app/services/Loginsevice";
import { toast } from "react-toastify";

function UseContextprovider({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    dofetchuserdata();
    // return () => {
    //   setUser()
    //  };
    
  }, []);

  const dofetchuserdata = async () => {
    try {
      const data = await GetCurrentuser();
      setUser(data);
      toast.error(data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UseContextprovider;
