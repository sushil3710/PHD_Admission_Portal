import React, { useState, useEffect } from "react";
import ChevronDots from "./ChevronDots.js";
import QualifyingExamDetails from "./QualifyingExamDetails";
import Declaration from "./Declaration";
import ApplicationFeeDetails from "./ApplicationFeeDetails";
import Review from "./Review.js";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { getToken } from "../SignIn_SignUp/Sessions";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import screenSpinner from "../../images/2300-spinner.gif";
import ExperienceAndPublications from "./ExperienceAndPublications.js";
import GeneralApplicationDetails from "./GeneralApplicationDetails.js"
function ReApplicantionDetails() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { handleSubmit } = useForm();
  const [full_name, setFullName] = useState("");
  const [category, setCategory] = useState("");
  const [categoryFees, setCategoryFees] = useState("");
  const [offering, setOffering] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const [hasFilledHighestGate, setHasFilledHighestGate] = useState("");
  const [hasGivenMultipleGates, setHasGivenMultipleGates] = useState("");
  const [isFetching, setIsFetching] = useState(true);

  function changeDateFormat() {
    let date = new Date();

    let month = date.getMonth() + 1;
    let day = String(date.getDate());
    if (day.length === 1) day = "0" + day;
    if (month.length === 1) month = "0" + month;

    date = date.getFullYear() + "-0" + month + "-" + day;

    return date;
  }

  useEffect(() => {
    Axios.get("/reapply-check-applicant-info", {
      headers: {
        Authorization: getToken(),
        offering_id: params.offering_id,
      },
    })
      .then((response) => {
        if (response.data === 1) {
          navigate("/logout");
        } else if (response.data === 2) {
          navigate("/home");
        } else if (response.data === 3) {
          navigate("/home");
        } else {
          setFullName(response.data.full_name);
          setCategory(response.data.category);
          setCategoryFees(response.data.category_fees);
          setIsFetching(false);
        }
      })
      .catch((err) => console.log(err));

    Axios.get("/get-offering-info", {
      headers: {
        Authorization: getToken(),
        offering_id: params.offering_id,
      },
    })
      .then((response) => {
        if (response.data === 1) {
          navigate("/logout");
        } else {
          setOffering(response.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const init_application_details = () => {
    const array = Array.from({ length: 65 }, () => "");

    array[4] = changeDateFormat();
    array[23] = changeDateFormat();
    array[27] = changeDateFormat();
    array[28] = changeDateFormat();
    array[32] = changeDateFormat();
    array[33] = changeDateFormat();
    array[52] = offering.department;
    array[53] = offering.specialization;
    array[54] = offering.offering_type;
    array[55] = params.offering_id;
    return array;
  };

  const [applicant_details, setApplicantDetails] = useState(
    init_application_details()
  );

  function handleApplicantDetailsChange(e, index) {
    let copy = [...applicant_details];
    copy[index] = e.target.value;
    setApplicantDetails(copy);
  }

  function emptyFileIndex(index) {
    let copy = [...applicant_details];
    copy[index] = "";
    setApplicantDetails(copy);
  }

  const handleFileSubmit = (e, maxSize, index, fileType) => {
    const file = e.target.files[0];
    // ref.current = file;

    if (fileType === 1) {
      if (file.type !== "application/pdf") {
        e.target.value = null;
        alert("File format not followed! Allowed formats: .pdf");
        return;
      }
    } else if (fileType === 2) {
      if (
        file.type !== "image/jpeg" &&
        file.type !== "image/jpg" &&
        file.type !== "application/pdf"
      ) {
        e.target.value = null;
        alert("File format not followed! Allowed formats: .jpeg, .jpg, .pdf");
        return;
      }
    } else if (fileType === 3) {
      if (
        file.type !== "image/jpeg" &&
        file.type !== "image/jpg" &&
        file.type !== "image/png" &&
        file.type !== "image/gif"
      ) {
        e.target.value = null;
        alert(
          "File format not followed! Allowed formats: .jpeg, .jpg, .png, .gif"
        );
        return;
      }
    }

    if (file.size > maxSize * 1000000) {
      e.target.value = null;
      const error =
        "File size cannot exceed more than " + maxSize.toString() + "MB";
      alert(error);
    } else {
      let copy = [...applicant_details];
      copy[index] = file;
      setApplicantDetails(copy);
    }
  };

  function handleApplicationSubmit() {
    setIsLoading(true);
    const formData = new FormData();

    formData.append("applicant_details", JSON.stringify(applicant_details));
    formData.append("signature", applicant_details[57]);
    formData.append("exam_result_pdf", applicant_details[58]);
    formData.append("transaction_slip", applicant_details[59]);
    formData.append("publications_pdf", applicant_details[60]);
    formData.append("noc_pdf", applicant_details[61]);
    formData.append("resume_pdf", applicant_details[62]);
    formData.append("letter_PI_pdf", applicant_details[63]);
    formData.append("sop_pdf", applicant_details[64]);

    Axios.post("/reapply-save-application-info", formData, {
      headers: {
        Authorization: getToken(),
      },
    })
      .then((response) => {
        if (response.data === 1) {
          navigate("/logout");
        } else {
          navigate("/success");
        }
      })
      .catch((err) => console.log(err));
  }

  function increasePageNumber() {
    setPage(page + 1);
  }

  function decreasePageNumber() {
    setPage(page - 1);
  }

  return (
    <div>
      {isFetching ? (
        <div className="mt-40">
          <img
            className="mx-auto h-[200px] w-[200px]"
            alt="Spinner"
            src={screenSpinner}
          />{" "}
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-12 gap-2">
            <div className="mx-12 mb-12 mt-10 px-12 col-start-1 col-end-12">
              <ChevronDots
                steps={[
                    "General Application Details",
                    "Qualifying Exam Details",
                    "Experiences and Publications",
                    "Application Fee Details",
                    "Declaration",
                    "Review",
                ]}
                currentStep={page}
              />
            </div>

            <Link
              to="/my-applications"
              className="col-start-12 col-end-13 justify-center lg:w-12 lg:h-12 w-8 h-8 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm m-3 p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="lg:w-6 lg:h-6 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {
              {
                1: (
                  <GeneralApplicationDetails
                    increasePageNumber={increasePageNumber}
                    decreasePageNumber={decreasePageNumber}
                    offering={offering}
                    details={applicant_details}
                    onChange={handleApplicantDetailsChange}
                    handleFileSubmit={handleFileSubmit}
                    emptyFileIndex={emptyFileIndex}
                  />
                ),
                2: (
                  <QualifyingExamDetails
                    hasFilledHighestGate={hasFilledHighestGate}
                    setHasFilledHighestGate={setHasFilledHighestGate}
                    hasGivenMultipleGates={hasGivenMultipleGates}
                    setHasGivenMultipleGates={setHasGivenMultipleGates}
                    offering={offering}
                    increasePageNumber={increasePageNumber}
                    details={applicant_details}
                    onChange={handleApplicantDetailsChange}
                    handleFileSubmit={handleFileSubmit}
                    emptyFileIndex={emptyFileIndex}
                  />
                ),
                3: (
                  <ExperienceAndPublications
                    increasePageNumber={increasePageNumber}
                    decreasePageNumber={decreasePageNumber}
                    offering={offering}
                    details={applicant_details}
                    onChange={handleApplicantDetailsChange}
                    handleFileSubmit={handleFileSubmit}
                    emptyFileIndex={emptyFileIndex}
                  />
                ),
                4: (
                  <ApplicationFeeDetails
                    category={category}
                    increasePageNumber={increasePageNumber}
                    decreasePageNumber={decreasePageNumber}
                    details={applicant_details}
                    onChange={handleApplicantDetailsChange}
                    handleFileSubmit={handleFileSubmit}
                    emptyFileIndex={emptyFileIndex}
                    categoryFees={categoryFees}
                  />
                ),
                5: (
                  <Declaration
                    full_name={full_name}
                    increasePageNumber={increasePageNumber}
                    details={applicant_details}
                    decreasePageNumber={decreasePageNumber}
                    onChange={handleApplicantDetailsChange}
                    handleFileSubmit={handleFileSubmit}
                    emptyFileIndex={emptyFileIndex}
                  />
                ),
                6: (
                  <Review
                    offering={offering}
                    decreasePageNumber={decreasePageNumber}
                    details={applicant_details}
                    handleSubmit={handleSubmit}
                    onSubmit={handleApplicationSubmit}
                    isLoading={isLoading}
                  />
                ),
              }[page]
          }
        </div>
      )}
    </div>
  );
}

export default ReApplicantionDetails;
