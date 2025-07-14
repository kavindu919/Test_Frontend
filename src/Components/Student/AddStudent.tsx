import axios from "axios";
import React, { useState } from "react";
import type { StudentInterface } from "../../Interfaces/LoginInterface";
import { toast } from "react-toastify";

interface AddStudentProps {
  setLoading: (value: boolean) => void;
  setopenAddModal: (value: boolean) => void;
  loading: boolean;
}

const AddStudent = ({
  setLoading,
  loading,
  setopenAddModal,
}: AddStudentProps) => {
  const [data, setData] = useState<StudentInterface>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    gender: "",
    birthdate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const token = localStorage.getItem("authToken");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/addstudent",
        {
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          phone: data.phone,
          gender: data.gender,
          birthdate: data.birthdate,
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
      setopenAddModal(false);
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
              onChange={handleChange}
              id="price"
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              id="price"
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />

            <select
              name="gender"
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
              onChange={handleChange}
              id="price"
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              id="price"
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
            <input
              type="date"
              name="birthdate"
              onChange={handleChange}
              id="date"
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </section>
          <section className="w-full flex items-center justify-center">
            <button disabled={loading} type="submit">
              Submit
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
