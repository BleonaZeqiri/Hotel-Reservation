import { useEffect, useState } from "react";

export default function useSticky ()  {
  const [sticky, setSticky] = useState(false);

  const stickyHeader = (): void => {
    if (window.scrollY > 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);

    return (): void => {
      window.removeEventListener("scroll", stickyHeader);
    };
  }, []);

  return {
    sticky,
  };
};
