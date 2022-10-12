import { useRecoilValue, useSetRecoilState } from "recoil";
import { Lucide, Tippy, TomSelect, Alert, ClassicEditor } from "@/base-components";
import { useState } from "react";
import { darkModeValue, darkMode as darkModeStore } from "@/stores/dark-mode";
import dom from "@left4code/tw-starter/dist/js/dom";
import classnames from "classnames";

function Main(props) {
  const [isShown, setIsShown] = useState(true);
  const darkMode = useRecoilValue(darkModeStore);
  const setDarkModeValue = useSetRecoilState(darkModeValue);

  const setDarkModeClass = () => {
    darkMode ? dom("html").addClass("dark") : dom("html").removeClass("dark");
  };

  const switchMode = () => {
    setDarkModeValue(() => !darkMode);
    localStorage.setItem("darkMode", !darkMode);
    setDarkModeClass();
  };

  setDarkModeClass();

  const closeHandler = (event) => {
    event.preventDefault();
    // 👇️ toggle visibility
    setIsShown((current) => !current);
  };

  return (
    <>
      {/* BEGIN: Dark Mode Switcher */}
      <div
        className="dark-mode-switcher cursor-pointer shadow-md fixed bottom-0 right-0 box border rounded-full w-40 h-12 flex items-center justify-center z-50 mb-10 mr-10"
        style={{ display: isShown ? "flex" : "none" }}
      >
        <Tippy
          onClick={closeHandler}
          className="tooltip w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-danger right-0 top-0 -mr-2 -mt-2"
        >
          <Lucide icon="X" className="w-4 h-4" />
        </Tippy>
        {/* <div className=" dark:text-red-400 text-xl text-red-800 mr-2" onClick={closeHandler}>
          x
        </div> */}
        <div className="flex" onClick={switchMode}>
          <div className="mr-2 text-slate-600 dark:text-slate-200">Dark Mode</div>
          <div
            className={classnames({
              "dark-mode-switcher__toggle border": true,
              "dark-mode-switcher__toggle--active": darkMode,
            })}
          ></div>
        </div>
        {/* END: Dark Mode Switcher */}
      </div>
    </>
  );
}

export default Main;
