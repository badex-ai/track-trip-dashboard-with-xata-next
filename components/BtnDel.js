"use client";

import { deleteNote } from "@/utils/delete";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BtnDel({ id }) {
  const router = useRouter();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteNote(id);
      router.push("/dashboard/note/");
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const toggleConfirmation = () => {
    setShowConfirmation(!showConfirmation);
  };
  return (
    <>
      <button
        className='px-7 py-2 bg-red-300 rounded hover:bg-red-200 hover:cursor-pointer'
        onClick={toggleConfirmation}>
        Delete
      </button>
      {showConfirmation && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg'>
            <p>Are you sure you want to delete this item?</p>
            <div className='mt-4 flex justify-end'>
              <button
                className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-2'
                onClick={handleDelete}>
                Delete
              </button>
              <button
                className='px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400'
                onClick={toggleConfirmation}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
