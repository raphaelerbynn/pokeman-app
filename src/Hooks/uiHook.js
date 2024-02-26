import { useContext } from "react";
import { UiContext } from "../Context";

export const useUiContext = () => useContext(UiContext);