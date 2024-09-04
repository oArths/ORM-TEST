import * as S from "./styles";
import ReactDOM from "react-dom";

export default function Modal({ isOpen, children }) {
  if (isOpen) {
    return ReactDOM.createPortal(
      <S.Container>{children}</S.Container>,document.getElementById("modal")
    );
  }
}
