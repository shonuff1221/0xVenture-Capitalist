"use client";

import { logout } from "../actions/aurh";

export const LogOutButton: React.FC = () => {
  async function handleClick() {
    await logout();
  }
  return <button onClick={handleClick}>Log out</button>;
};
