import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initvalue) => {
const [darkMode, setDarkMode] = useLocalStorage(false, initvalue);

return [darkMode, setDarkMode]
}

export default useDarkMode