import React from "react";

const ErrorMessageBox = ({ message }) => {
  return (
    <div className="w-full p-4 rounded-md bg-red-400/40">
      <p className="text-center text-sm text-red-600">{message}</p>
    </div>
  );
};

export default ErrorMessageBox;
