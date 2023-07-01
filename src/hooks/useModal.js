import { useRef, useState } from "react";

export const MODAL_STATUS_OK = 'ok'; 
export const MODAL_STATUS_ERROR = 'error'; 

export function useModal() {
    const [isActive, setIsActive] = useState(false);
    const [status, setStatus] = useState(MODAL_STATUS_OK);
    const [message, setMessage] = useState('');
    let timeout = useRef(); 

    function dispatch(message, modalStatus) {
        setIsActive(true);
        setMessage(message);
        setStatus(modalStatus);

        window.clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
            setIsActive(false);
            setMessage('');
            setStatus(MODAL_STATUS_OK);
        }, 3000);
    }

    return [{ isActive, status, message }, dispatch];
}