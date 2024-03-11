import React, { ReactElement, useState } from "react"
import { Modal, CloseButton } from "react-bootstrap"


interface Props {
  buttonText?: string,
  buttonColor?: string,
  buttonIcon?: React.ReactNode,
  buttonExtraClass?: string,
  modalTitle?: string,
  children: ReactElement
}

function GenericModal({ buttonColor = 'primary', buttonText, buttonExtraClass, buttonIcon, modalTitle = '', children }: Props) {

  const [modalView, setModalView] = useState<boolean>(false)

  function turnModalOff() {
    setModalView(false)
  }

  function openModal() {
    setModalView(true)
  }

  const childrensWithModalCloser: React.ReactElement[] = React.Children.map(children, (child) => {
    return React.cloneElement(child, { turnModalOff })
  })

  return (
    <>
      <button className={`btn btn-${buttonColor} ${buttonExtraClass}`} onClick={openModal}>
        {buttonText ? buttonText : ''}
        {buttonIcon ? buttonIcon : ''}
      </button>
      {modalView ?
        <Modal show={modalView}>
          <Modal.Title>
            <div className="d-flex px-2 py-2 border-bottom">
              <span>{modalTitle}</span>
              <CloseButton className="ms-auto fs-5" onClick={turnModalOff} />
            </div>
          </Modal.Title>
          <Modal.Body>
            {childrensWithModalCloser}
          </Modal.Body>
        </Modal>
        : ''}
    </>
  )
}

export default GenericModal