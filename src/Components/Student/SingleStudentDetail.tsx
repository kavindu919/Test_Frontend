import type { StudentInterface } from "../../Interfaces/LoginInterface";

interface SingleStudentDetail {
  singleStudentModalData: StudentInterface;
}

const SingleStudentDetail = ({
  singleStudentModalData,
}: SingleStudentDetail) => {
  return (
    <div>
      <div>
        <div className="flex flex-col gap-2.5">
          <section>
            <input
              type="text"
              name="first_name"
              value={singleStudentModalData.first_name}
              disabled
              id="price"
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />

            <select
              name="gender"
              disabled
              value={singleStudentModalData.gender}
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
              disabled
              value={singleStudentModalData.last_name}
              id="price"
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
            <input
              type="text"
              name="phone"
              disabled
              value={singleStudentModalData.phone}
              id="price"
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
            <input
              type="date"
              name="birthdate"
              disabled
              value={singleStudentModalData.birthdate}
              id="date"
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </section>
          <section className="w-full flex items-center justify-center">
            <button type="submit">Submit</button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SingleStudentDetail;
