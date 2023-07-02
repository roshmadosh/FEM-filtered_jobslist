import { useEffect, useRef } from "react";


export const ClickOutsideWrapper = ({ enabled, children, onClickOutside }) => {
    const wrapperRef = useRef(null);

    const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            onClickOutside();
        }
    }

    useEffect(() => {
        // Having multiple event listeners for the same event type on the same element will result in the last one overwriting the previous one.
        if (enabled) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }

    }, [enabled]);

    return <div ref={wrapperRef}>{children}</div>;
}