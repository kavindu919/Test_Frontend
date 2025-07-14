import React, { useState } from "react";
import type { StudentInterface } from "../../Interfaces/LoginInterface";
import axios from "axios";
import { toast } from "react-toastify";

interface EditStudentProps {
  editModalData: StudentInterface;
  setLoading: (value: boolean) => void;
  setOpenEditModal: (value: boolean) => void;
  loading: boolean;
}

const EditStudent = ({
  editModalData,
  loading,
  setLoading,
  setOpenEditModal,
}: EditStudentProps) => {
  const [edit, setEdit] = useState<StudentInterface>({
    ...editModalData,
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value,
    });
  };

  const token = localStorage.getItem("authToken");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/editstudent",
        {
          first_name: edit.first_name,
          last_name: edit.last_name,
          phone: edit.phone,
          gender: edit.gender,
          birthdate: edit.birthdate,
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
      }
    } catch (error: any) {
      if (error.response && error.response.status === 422) {
        const validationErrors = error.response.data.errors;
        Object.keys(validationErrors).forEach((field) => {
          toast.error(validationErrors[field][0]);
        });
      } else {
        toast.error("Something went wrong, please try again!");
      }
    } finally {
      setLoading(false);
      setOpenEditModal(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-2.5">
        <form onSubmit={handleSubmit}>
          <section>
            <input
              type="text"
              name="first_name"
              value={editModalData.first_name}
              onChange={handleChange}
              id="price"
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />

            <select
              name="gender"
              value={editModalData.gender}
              onChange={handleChange}
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              id="gender"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </section>
          <section>
            <input
              type="text"
              name="last_name"
              value={editModalData.last_name}
              onChange={handleChange}
              id="price"
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
            <input
              type="text"
              name="phone"
              value={editModalData.phone}
              onChange={handleChange}
              id="price"
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
            <input
              type="date"
              name="birthdate"
              value={editModalData.birthdate}
              onChange={handleChange}
              id="date"
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </section>
          <section className="w-full flex items-center justify-center">
            <button type="submit">Submit</button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default EditStudent;
