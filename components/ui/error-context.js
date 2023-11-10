import Button from "./button";
import ErrorAlert from "./error-alert";

export const openPdf = () => {
  const pdfURL = '/files/ao_cv.pdf';
  window.open(pdfURL, '_blank');
};
export default function ErrorContext() {

  return (
    <ErrorAlert>
      <p>Oops, something wrong :( </p>
      <Button onClick={openPdf}>Check CV</Button>
    </ErrorAlert>
  )
}