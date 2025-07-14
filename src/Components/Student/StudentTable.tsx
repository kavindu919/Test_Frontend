import axios from "axios";
import React, { useEffect, useState } from "react";
import type { StudentInterface } from "../../Interfaces/LoginInterface";
import { toast } from "react-toastify";
import { CiEdit } from "react-icons/ci";
import EditStudent from "./EditStudent";

const StudentTable = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<StudentInterface[]>([]);

  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [editModalData, setEditModalData] = useState<StudentInterface>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    gender: "",
    birthdate: "",
  });
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:8000/api/student/getallstudents"
      );
      if (res.data.status == true) {
        setData(res.data.data);
        toast.success(res.data.message);
      } else if (res.data.status == false) {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log("Error Happend", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              First name
            </th>
            <th scope="col" className="px-6 py-3">
              Last name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Gender
            </th>
            <th scope="col" className="px-6 py-3">
              Birthdate
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              key={index}
            >
              <td className="px-6 py-4">{item.first_name}</td>
              <td className="px-6 py-4">{item.last_name}</td>
              <td className="px-6 py-4">{item.email}</td>
              <td className="px-6 py-4">{item.phone}</td>
              <td className="px-6 py-4">{item.gender}</td>
              <td className="px-6 py-4">{item.birthdate}</td>
              <td className="flex items-center justify-between px-6 py-4">
                <button
                  onClick={() => {
                    setOpenEditModal(true);
                    setEditModalData({
                      first_name: item.first_name,
                      last_name: item.last_name,
                      email: item.email,
                      phone: item.phone,
                      gender: item.gender,
                      birthdate: item.birthdate,
                    });
                  }}
                >
                  <CiEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {openEditModal && <EditStudent editModalData={editModalData} />}
    </div>
  );
};

export default StudentTable;
