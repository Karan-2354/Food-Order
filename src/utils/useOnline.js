import { useEffect, useState } from "react";

export const useOnline = () => {
  const [isOnliline, setIsOnline] = useState(true);

  const HandleOnline = () => {
    setIsOnline(true);
  };
  const HandleOffline = () => {
    setIsOnline(false);
  };
  useEffect(() => {
    window.addEventListener("online", HandleOnline);
    window.addEventListener("offline", HandleOffline);

    return () => {
      window.removeEventListener("online", HandleOnline);
      window.removeEventListener("offline", HandleOffline);
    };
  }, []);

  return isOnliline;
};

export default useOnline;
