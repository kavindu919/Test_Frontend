import React from "react";
import type { StudentInterface } from "../../Interfaces/LoginInterface";

interface EditStudentProps {
  editModalData: StudentInterface;
}

const EditStudent = ({ editModalData }: EditStudentProps) => {
  const handleChange = () => {};

  return (
    <div>
      <div className="flex flex-col gap-2.5">
        <section>
          <input
            type="text"
            name="first_name"
            value={editModalData.first_name}
            id="price"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
          <input
            type="text"
            name="email"
            value={editModalData.email}
            id="price"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
          <select
            name="gender"
            value={editModalData.gender}
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
            id="price"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
          <input
            type="text"
            name="phone"
            value={editModalData.phone}
            id="price"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
          <input
            type="date"
            name="birthdate"
            value={editModalData.birthdate}
            id="date"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
        </section>
      </div>
    </div>
  );
};

export default EditStudent;
