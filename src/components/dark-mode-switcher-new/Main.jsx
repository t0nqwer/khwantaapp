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

  return (
    <>
      {/* BEGIN: Dark Mode Switcher */}
      <div
        className="dark-mode-switcher cursor-pointer dark:bg-darkmode-400 box shadow-md border rounded-full w-40 h-10 flex items-center justify-center z-50 mr-10"
        style={{ display: isShown ? "flex" : "none" }}
      >
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
