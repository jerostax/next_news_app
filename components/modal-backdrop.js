"use client";

import { useRouter } from "next/navigation";

// This component is used to create a modal backdrop that closes the modal when clicked
// It uses the router to navigate back to the previous page when clicked
// This is useful for modals that should close when clicking outside of them

export default function ModalBackdrop() {
  const router = useRouter();
  return <div className="modal-backdrop" onClick={router.back} />;
}
