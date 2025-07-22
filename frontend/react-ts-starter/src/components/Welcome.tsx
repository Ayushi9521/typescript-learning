import React from "react";
import type { User } from "../types/User.ts";

type Props = {
  user: User;
};

const Welcome: React.FC<Props> = ({ user }) => {
  return (
    <>
      <h2> Welcome {user.name} !</h2>;
      <div>{user.age > 18 ? "You are an adult!" : "You are a children!"}</div>
    </>
  );
};

export default Welcome;
