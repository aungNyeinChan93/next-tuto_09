import React from "react";
import { createUser, getUsers } from "@/database/prisma-db";

const UsersPage = async () => {
  // const addUser = async () => {
  //   const user = await createUser("aung", "aung@123");
  //   console.log(user);
  // };
  // addUser();

  const users = await getUsers();
  console.log(users);

  return (
    <React.Fragment>
      <main>UsersPage</main>
    </React.Fragment>
  );
};

export default UsersPage;
