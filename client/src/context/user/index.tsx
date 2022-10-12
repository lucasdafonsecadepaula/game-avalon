import React, { createContext, useState } from "react";

type SearchProvider = {
  children: React.ReactNode;
};

const userInitState = {
  name: "",
  type: "",
};

type ChangeUserPropsType = Partial<typeof userInitState>;

export const UserContext = createContext({
  user: userInitState,
  changeUserProps: (obj: ChangeUserPropsType) => {},
});

export function UserProvider({ children }: SearchProvider) {
  const [user, setUser] = useState(userInitState);

  const changeUserProps = (obj: ChangeUserPropsType) => {
    setUser((prev) => ({ ...prev, ...obj }));
  };

  return (
    <UserContext.Provider value={{ user, changeUserProps }}>
      {children}
    </UserContext.Provider>
  );
}
