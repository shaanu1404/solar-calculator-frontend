import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  phone: "",
  area: "",
  avgMonthBill: "",
};

const validationSchema = Yup.object().shape({
  avgMonthBill: Yup.number().required("Average monthly bill is required"),
  area: Yup.number()
    .required("Area is required")
    .positive("Number should be greater than 0"),
  phone: Yup.string()
    .required("Phone number is required")
    .length(10, "Phone number should be 10 digits")
    .matches(/^[0-9]{10}$/, "Must be only digits"),
});

const CalculatorForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(value, { resetForm }) => {
        onSubmit(value);
        resetForm();
      }}
    >
      {(props) => (
        <Form>
          <div className="w-full border-2 rounded-md flex flex-col p-4 space-y-2 bg-white">
            <h4 className="font-medium text-black text-lg">Solar Calculator</h4>
            <div className="flex flex-col space-y-1">
              <label htmlFor="phone" className="text-sm">
                Enter phone number
              </label>
              <Field
                type="text"
                name="phone"
                id="phone"
                className="px-3 py-2 rounded-md border outline-blue-400 outline-2 text-sm"
              />
              <ErrorMessage
                name="phone"
                component="p"
                className="text-sm text-red-500"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="area" className="text-sm">
                Enter area
              </label>
              <Field
                type="number"
                name="area"
                id="area"
                className="px-3 py-2 rounded-md border outline-blue-400 outline-2 text-sm"
              />
              <ErrorMessage
                name="area"
                component="p"
                className="text-sm text-red-500"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="avgMonthBill" className="text-sm">
                Average Month Bill
              </label>
              <Field
                type="number"
                name="avgMonthBill"
                id="avgMonthBill"
                className="px-3 py-2 rounded-md border outline-blue-400 outline-2 text-sm"
              />
              <ErrorMessage
                name="avgMonthBill"
                component="p"
                className="text-sm text-red-500"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2 rounded-md bg-gray-800 text-white text-sm"
            >
              Calculate
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CalculatorForm;
