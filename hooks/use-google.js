import { useContext } from "react";
import GoogleContext from "context/google-context";

export const useGoogle = () => useContext(GoogleContext);
