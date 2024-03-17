import { useState, useEffect } from "react";
import CalculatorForm from "./components/CalculatorForm";
import EnquiryDetails from "./components/EnquiryDetails";
import { getCalculatedDetails } from "./utils/services";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessageBox from "./components/ErrorMessageBox";

const ERROR_MESSAGE_TIMEOUT = 2000;

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [calculatedDetails, setCalculatedDetails] = useState(null);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, ERROR_MESSAGE_TIMEOUT);
    }
  }, [error]);

  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      const details = await getCalculatedDetails(data);
      setCalculatedDetails(details);
    } catch (error) {
      setCalculatedDetails(null);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleNewCalculation = () => {
    setCalculatedDetails(null);
  };

  if (loading) return <LoadingSpinner />;

  return (
    <main className="max-w-lg mx-auto py-4 space-y-2">
      {error && <ErrorMessageBox message="Something went wrong!" />}
      {calculatedDetails ? (
        <EnquiryDetails
          details={calculatedDetails}
          onNewEntry={handleNewCalculation}
        />
      ) : (
        <CalculatorForm onSubmit={handleSubmit} />
      )}
    </main>
  );
}

export default App;
