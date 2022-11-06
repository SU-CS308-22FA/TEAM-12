import React from "react";

export const HomeScreen = ({ user }) => {
  return(
    <div>{user?.fullname}</div>   
  ) 
  
};

