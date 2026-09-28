import React, { useEffect, useState } from "react";

import UserCard from "../components/UserCard";
import { AxiosInstance } from "../config/AxiosInstance";

const UsersPage = () => {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let getUsersData = async () => {
    try {
      let res = await AxiosInstance.get("/users"); 
      setUsersData(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUsersData();
  }, []);

  if(isLoading) return <h1 className="text-3xl font-semibold">Loading...</h1>;
  return (
    <div className="grid grid-cols-4 gap-5">
      {usersData.map((val) => (
        <UserCard key={val.id} user={val} />
      ))}
    </div>
  );
};

export default UsersPage;
