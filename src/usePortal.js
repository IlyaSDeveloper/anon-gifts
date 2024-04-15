import React, { useEffect } from "react";

function usePortal(id) {
    const rootElemRef = React.useRef(document.createElement('div'));

    useEffect(function setupElements() {
        rootElemRef.current = null;
        // Look existing target dom element to append to
        const parentElem = document.querySelector(`#${id}`);
        // Add the detached element to the parent
        parentElem.appendChild(rootElemRef.current);
        // This function is run on unmount
        return function removeElement() {
            rootElemRef.current.remove();
        };
    }, [id]);
    return rootElemRef.current;
}
// https://www.jayfreestone.com/writing/react-portals-with-hooks/