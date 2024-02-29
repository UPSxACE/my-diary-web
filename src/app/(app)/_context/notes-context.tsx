"use client";

import {
  Context,
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface INotesContext {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  orderBy: string | null;
  setOrderBy: Dispatch<SetStateAction<string | null>>;
}

const defaultValue: INotesContext = {
  menuOpen: false,
  setMenuOpen: (action: SetStateAction<boolean>) => false,
  orderBy: "",
  setOrderBy: (action: SetStateAction<string | null>) => false,
};

export const NotesContext: Context<INotesContext> = createContext(defaultValue);

export default function NotesContextProvider(props: {
  children: Readonly<ReactNode>;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [orderBy, setOrderBy] = useState<string | null>("Latest First");

  return (
    <NotesContext.Provider
      value={{ menuOpen, setMenuOpen, orderBy, setOrderBy }}
    >
      {props.children}
    </NotesContext.Provider>
  );
}
