/* eslint-disable jsx-a11y/label-has-associated-control */
import type { FC, ChangeEvent } from 'react';

type FormProps = {
  name: string;
  updateName: (event: ChangeEvent<HTMLInputElement>) => void;
  email: string;
  updateEmail: (event: ChangeEvent<HTMLInputElement>) => void;
};
const Form: FC<FormProps> = ({ name, updateName, email, updateEmail }) => (
  <div className="mx-16">
    <form>
      <div className="group relative z-0 mb-6 w-full">
        <input
          value={name}
          onChange={updateName}
          type="text"
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 "
          placeholder=" "
          required
          size={100}
        />
        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
          your nickname
        </label>
      </div>
      <div className="group relative z-0 mb-6 w-full">
        <input
          value={email}
          onChange={updateEmail}
          type="text"
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 "
          placeholder=" "
          required
          size={100}
        />
        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
          your email
        </label>
      </div>
    </form>
  </div>
);
export default Form;
