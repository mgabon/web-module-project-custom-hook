import { useState } from "react";


const useLocalStorage = (key, initvalue) => {
    //useLocalStorage
    //1. when we set our initalValue, check to see if we have saved a local storage value.
    //2. if that localStorage value exists: set initial value to localStorage value
    //3. if it does not exist, set inital value to initValue && make localStorage value initValue
    //4. anytime we setState, also set localStorage 
    
    const [value, setValue] = useState(() => {
      if(localStorage.getItem(key)) {
        return(localStorage.getItem(key))
      } else {
        localStorage.setItem(key, initvalue);
        return(initvalue);
      }
    });
    const setStoredValue = (newValue) => {
      localStorage.setItem(key, newValue)
      setValue(newValue)
    }
    return([value, setStoredValue])
    }

    export default useLocalStorage