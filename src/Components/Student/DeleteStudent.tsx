import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
interface DeleteStudentProps {
  selectId: string | null;
  setOpenDeleteModal: (value: boolean) => void;
  setLoading: (value: boolean) => void;
  setSelectId: (value: string | null) => void;
  loading: boolean;
}

const DeleteStudent = ({
  selectId,
  setOpenDeleteModal,
  setLoading,
  loading,
  setSelectId,
}: DeleteStudentProps) => {
  const token = localStorage.getItem("authToken");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/student/deletestudent",
        {
          id: selectId,
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: `{Bearer ${token}}`,
          },
        }
      );
      if (res.data.status == true) {
        toast.success(res.data.message);
      } else if (res.data.status == false) {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log("Error Happend", error);
    } finally {
      setLoading(false);
      setSelectId(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Are You Sure to Delete this code</h3>
        <button disabled={loading} type="submit">
          Submit
        </button>
        <button
          onClick={() => {
            setOpenDeleteModal(false);
          }}
          type="button"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default DeleteStudent;
