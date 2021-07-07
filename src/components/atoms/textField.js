import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <input
        type="text"
        className={`bg-gray-100 text-gray-500  outline-none rounded content-center
                 inline-block w-60 md:w-72 lg:w-80  h-10 px-10
            ${meta.touched && meta.error && "is-invalid"}
            `}
        {...field}
        {...props}
      />
      <ErrorMessage name={field.name}>
        {(msg) => <div className="text-red">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};
