import { useState } from "react";

export default function useToggleGuests (initialAdult: number, initialChild: number) {
  const [adultGuests, setAdultGuests] = useState(initialAdult);
  const [childGuests, setChildGuests] = useState(initialChild);

  const incrementGuest = (type: "adult" | "child") => {
    if (type === "adult") setAdultGuests(adultGuests + 1);
    else setChildGuests(childGuests + 1);
  };

  const decrementGuest = (type: "adult" | "child") => {
    if (type === "adult" && adultGuests > 1) setAdultGuests(adultGuests - 1);
    else if (type === "child" && childGuests > 0) setChildGuests(childGuests - 1);
  };

  return { adultGuests, childGuests, incrementGuest, decrementGuest };
};
