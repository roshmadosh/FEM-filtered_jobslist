import cntl from "cntl"
import { MODAL_STATUS_OK, MODAL_STATUS_ERROR } from "../hooks/useModal"

function Modal({ modalState }) {
    const containerStyles = cntl`
        absolute 
        left-0 
        bottom-8 
        ml-2
        sm: ml-4
        w-80 
        p-4 
        ${modalState.status === MODAL_STATUS_OK && 'text-white bg-green-700' }
        ${modalState.status === MODAL_STATUS_ERROR && 'text-white bg-red-700' }
    `

    return (
        <div className={containerStyles}>
            <p className="font-bold">{modalState.message}</p>
        </div>
    )
}

export default Modal;