import { useRef } from "react";

function useDialog(){
    const dialogRef = useRef(null);

    function openDialog(){
        dialogRef.current.showModal();
    }

    function closeDialog(){
        dialogRef.current.close();
    }
    function Dialog({children}) {
    <dialog ref={dialogRef} onCancel={closeDialog}>
        {children}
    </dialog>
    }
    return {openDialog, closeDialog, Dialog};
}

export default useDialog;