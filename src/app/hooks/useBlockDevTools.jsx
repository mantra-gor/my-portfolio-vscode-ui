import { useEffect, useState } from "react";
import isProdEnv from "../utils/environment";

function useBlockDevTools() {
  const [devActivated, setDevActivated] = useState(false);

  useEffect(() => {
    // if dev mode is avtivated do not follow the bellow logic
    if (!isProdEnv() || devActivated) return;

    const isMac = navigator.platform.toUpperCase().includes("MAC");

    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      const isBlockedShortcut =
        key === "f12" ||
        (e.ctrlKey && e.shiftKey && key === "i") ||
        (isMac && e.metaKey && e.altKey && key === "i") ||
        (e.ctrlKey && e.shiftKey && key === "c") ||
        (isMac && key === "dead") ||
        (isMac && e.metaKey && e.shiftKey && key === "c") ||
        (e.ctrlKey && e.shiftKey && key === "j") ||
        (isMac && e.metaKey && e.altKey && key === "j") ||
        (e.ctrlKey && key === "u") ||
        (isMac && e.metaKey && key === "u");

      if (isBlockedShortcut) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [devActivated]);

  return [devActivated, setDevActivated];
}

export default useBlockDevTools;
