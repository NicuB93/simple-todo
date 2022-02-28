import * as S from "./styled";
import { modal } from "../../../atoms/modal";
import { useRecoilState } from "recoil";

type Props = {
  content?: string;
};

export const Modal = ({ content }: Props) => {
  const [isOpenModal, setIsOpenModal] = useRecoilState<boolean>(modal);

  return (
    <S.ModalContainer modal={isOpenModal}>
      <S.ModalWindow modal={isOpenModal} onClick={(e) => e.stopPropagation()}>
        <div className="modal-title">
          <span>Invalid input</span>
          <button
            onClick={() => {
              setIsOpenModal(false);
            }}
          />
        </div>
        <div className="modal-content">{content}</div>
      </S.ModalWindow>
    </S.ModalContainer>
  );
};
