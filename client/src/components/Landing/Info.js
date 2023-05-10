import React, { useState, useEffect } from "react";
import Axios from "axios";

function Info() {
  const curr_year = new Date().getFullYear();
  const [reqUrls, setReqUrls] = useState({});
  const [isCyclePresent, setIsCyclePresent] = useState(false);

  useEffect(() => {
    Axios.get("/get-brochure-ranklist-url")
      .then((response) => {
        if (response.data === 1) {
          setIsCyclePresent(false);
        } else {
          setReqUrls(response.data);
          setIsCyclePresent(true);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen">
      <div className="card w-9/12 sm:w-10/12 md:w-11/12 ml-14 my-2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Research at IIT Ropar?</h2>
          <p>
          IIT Ropar puts immense emphasis on promoting cutting edge research and publications of high quality and not quantity.
           We firmly believe that this is the key to our recognition in the international research community. 
           We offer PhD degrees in all disciplines that we offer.
            At present, we have 574 PhD scholars in the Institute. 
           102 PhD scholars have successfully defended their thesis and 179 scholars have joined the PhD program during the last one year.

          Over the last year, as many as 416 papers have been published in various high impact international journals. 
          This has already placed us at the second position among 2nd generation IITs with the average publications per author (APPA) of 3.99; the average citation per paper (ACPP) of 22.45 and the H-Index of 62 (Scopus data - February 2020).
          </p>
        </div>
      </div>
      <div className="card w-9/12 sm:w-10/12 md:w-11/12 ml-14 my-2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Shortlisiting Criteria and Shortlisted Students</h2>
          <p>Here's this direct link to the page stating the shortlisiting criteria for the candidates and their list: 
                <a href="https://www.iitrpr.ac.in/phd-list-shortlisted-candidates" target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgb(88 80 236)" }}> https://www.iitrpr.ac.in/phd-list-shortlisted-candidates</a>
          </p>
        </div>
      </div>
      <div className="card w-9/12 sm:w-10/12 md:w-11/12 ml-14 my-2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Financial Assistance</h2>
          <p>
          i) Tuition fee exemption is admissible to all SC/ST students irrespective of their parents/guardians income.
          <br/><br/>
ii) The Institute offers a scholarship of Rs. 300/- per month and exemption from paying room rent of the hostel, only to those SC/ST students whose parent'/guardians' income does not exceed the limit prescribed by the Government of India from time to time for the award of Merit-cum-Means scholarship. The students can opt for free mess facilities (basic menu) and Rs. 250/- per month as pocket allowance in lieu of the amount of the scholarship.
<br/><br/>
iii) The backward students (whose family income is less than Rs.1 lakh per annum, shall get full remission of the tuition fee). The other economically backward students (whose family income is between Rs.1 lakh to Rs.5 lakh per annum, shall get remission of 2/3rd of the tuition fee. This has no reference to the caste category of the students.
<br/><br/>
iv) In addition to above mentioned scholarships there are few other scholarships awarded by State Govt./NGO's and some external agencies
          </p>
        </div>
      </div>
      <div className="card w-9/12 sm:w-10/12 md:w-11/12 ml-14 my-2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Reservation of Seats</h2>
          <p>
            Seats are reserved for Indian National under the categories, SC / ST
            / OBC(Non-creamy layer) / EWS(Economically Weaker Section) and
            PWD(Persons with Disability) according to the Government of India
            rules.
          </p>
        </div>
      </div>
      <div className="card w-9/12 sm:w-10/12 md:w-11/12 ml-14 my-2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Final Authority</h2>
          <p>
          The Head of the Department (HoD) will intimate to the Dean (Research), for each scholar the area of
research, the name(s) of the supervisor(s) and the names of faculty members constituting the
Doctoral Committee (DC), within 15 days of the date of joining of the research scholar. The final
approving authority of the DC will be Dean (Research).
          </p>
        </div>
      </div>

      {isCyclePresent ? (
        <div>
          <a
            href={reqUrls.brochure_url}
            target="_blank"
            rel="noopener noreferrer"
            className="card w-9/12 sm:w-10/12 md:w-11/12 ml-14 my-2 flex flex-col justify-between p-8 transition-shadow bg-white rounded-sm shadow-xl group hover:shadow-lg"
          >
            <div>
              <h5 className="text-3xl font-bold text-indigo-600">
                Information Brochure for PHD Admissions
              </h5>
              <div className="pt-2 mt-4 border-t-2 border-indigo-100">
                <p className="text-sm font-medium tracking-widest text-gray-500">
                  Detailed Information Brochure for admissions to PHD
                  programme at IIT Ropar for the current academic year.
                </p>
              </div>
            </div>
            <div className="inline-flex items-center mt-12 text-indigo-600">
              <p className="text-lg font-medium">Open Brochure</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 ml-3 transition-transform transform group-hover:translate-x-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Info;
