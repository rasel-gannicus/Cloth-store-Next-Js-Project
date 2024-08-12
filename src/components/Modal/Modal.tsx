import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { closeModal } from "@/utils/Redux/features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "@/utils/Redux/hooks";
import { signOut } from "next-auth/react";
import { useState } from "react";

const Modal = () => {
  //   const [open, setOpen] = useState(true);
  const modalStatus = useAppSelector((state) => state.modalSlice.modalStatus);
  const dispatch = useAppDispatch();

  //   -- closing modal and logging out
  const handleModalClose = () => {
    dispatch(closeModal(false));
    signOut();
  };
  return (
    <Dialog open={modalStatus} onOpenChange={() => dispatch(closeModal(false))}>
      <DialogContent>
        <DialogHeader>
          {/* <DialogTitle>Modal Title</DialogTitle> */}
          {/* <DialogDescription>
            This is a description inside the modal.
          </DialogDescription> */}
        </DialogHeader>
        <p className="text-2xl font-semibold text-center my-5">
          Want to Log out ?
        </p>
        <div className="flex justify-center items-center gap-4">
          <Button className="bg-red-700" onClick={handleModalClose}>
            Logout
          </Button>
          <Button className="" onClick={() => dispatch(closeModal(false))}>
            Cancel
          </Button>
        </div>
        {/* <DialogClose asChild>
        </DialogClose> */}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
