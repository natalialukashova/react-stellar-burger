import React from "react";
import { useDrop } from "react-dnd";
import { setSwitchedFillings } from "../../services/ConstuctorSlice";
import { useDispatch } from "react-redux";

export default function DropZone({children}) {
  const dispatch = useDispatch();

  const [, dropZone] = useDrop({
    accept: "item",
    drop(item) {
        dispatch(setSwitchedFillings(item));
    },
  });

  return <div ref={dropZone}>{children}</div>;
}
