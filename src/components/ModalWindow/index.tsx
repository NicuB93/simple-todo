import { createPortal } from "react-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { modal, mounted } from "../../../atoms/modal";
import * as S from "./styled";

type Props = {
  content?: { title?: string; message?: string };
};

const Modal = ({ content }: Props) => {
  const [isOpenModal, setIsOpenModal] = useRecoilState<boolean>(modal);

  return (
    <S.ModalContainer modal={isOpenModal}>
      <S.ModalWindow modal={isOpenModal} onClick={(e) => e.stopPropagation()}>
        <div className="modal-title">
          <span>{content?.title}</span>
          <button
            onClick={() => {
              setIsOpenModal(false);
            }}
          />
        </div>
        <div className="modal-content">{content?.message}</div>
      </S.ModalWindow>
    </S.ModalContainer>
  );
};

export const PortalModal = ({ content }: Props) => {
  const isMounted = useRecoilValue(mounted);

  let modal: HTMLElement | null;
  isMounted && (modal = document.getElementById("modal"));

  return (
    <>{isMounted ? createPortal(<Modal content={content} />, modal!) : null}</>
  );
};
