import React from "react";

const EnquiryDetails = ({ details, onNewEntry }) => {
  return (
    <div className="w-full border-2 rounded-md flex flex-col p-4 space-y-2 bg-white">
      <h4 className="font-medium text-black text-lg">Enquiry Details</h4>
      <table>
        <tbody>
          <DetailRow title="Phone number">{details.phone}</DetailRow>
          <DetailRow title="Rooftop area available">
            {details.area} m<sup>2</sup>
          </DetailRow>
          <DetailRow title="Average monthly electricity bill">
            Rs. {details.avgMonthBill}
          </DetailRow>
          <DetailRow title="Number of panels needed">
            {details.result.numberOfPanels}
          </DetailRow>
          <DetailRow title="Required Area for Rooftop Solar">
            {details.result.rooftopSolarArea} m<sup>2</sup>
          </DetailRow>
          <DetailRow title="Capital needed">
            Rs. {details.result.capitalNeeded}
          </DetailRow>
          <DetailRow title="Breakeven years">
            {details.result.breakEvenYears} years
          </DetailRow>
          <DetailRow title="Next 25 Years earnings because of solar">
            Rs. {details.result.earning}
          </DetailRow>
        </tbody>
      </table>
      <button
        type="button"
        className="px-5 py-2 rounded-md bg-gray-800 text-white text-sm"
        onClick={onNewEntry}
      >
        Calculate new
      </button>
    </div>
  );
};

const DetailRow = ({ title, children }) => (
  <tr className="border-y first-of-type:border-t-0 last-of-type:border-b-0">
    <td className="py-2">{title}</td>
    <td className="py-2">{children}</td>
  </tr>
);

export default EnquiryDetails;
