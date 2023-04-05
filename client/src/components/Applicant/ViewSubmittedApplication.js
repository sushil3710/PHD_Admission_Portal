import { PaperClipIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../SignIn_SignUp/Sessions";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DownloadIcon from "@mui/icons-material/Download";
import pic_clear from "../../images/iit-ropar-logo-clear.png";

export default function ViewSubmittedApplication() {
  const navigate = useNavigate();
  const [degrees, setDegrees] = useState([]);
  const [applicationInfo, setApplicationInfo] = useState(0);
  const params = useParams();

  function convert2dArrayToJsonObjectArray(degrees) {
    if (degrees === null) return [];

    var result = [];
    for (var i = 0; i < degrees.length; i++) {
      if (degrees[i][0] === "") continue;
      var degree = {};
      for (var j = 0; j < degrees[i].length; j++) {
        degree[String(j)] = degrees[i][j];
      }
      degree["id"] = i;
      result.push(degree);
    }
    return result;
  }

  useEffect(() => {
    axios
      .get("/get-application-info", {
        headers: {
          Authorization: getToken(),
          application_id: `${params.application_id}`,
        },
      })
      .then((response) => {
        if (response.data === 1) {
          navigate("/logout");
        } else {
          setApplicationInfo(response.data);
          setDegrees(convert2dArrayToJsonObjectArray(response.data.degrees));
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="flex space-x-3 justify-between mx-6">
        <div className="do-not-print-me mt-6 text-gray-400 shadow-sm border-[3px] pl-[8px] pt-[8px] w-[60px] h-[60px] border-gray-200 rounded-full hover:border-gray-600 hover:bg-gray-300 hover:text-gray-600">
          <ArrowBackIcon
            fontSize="large"
            onClick={() => navigate("/my-applications")}
          ></ArrowBackIcon>
        </div>
        <div className="do-not-print-me mt-6 ml-6 text-gray-400 shadow-sm border-[3px] pl-[8px] pt-[8px] w-[60px] h-[60px] border-gray-200 rounded-full hover:border-gray-600 hover:bg-gray-300 hover:text-gray-600">
          <DownloadIcon
            fontSize="large"
            onClick={() => window.print()}
          ></DownloadIcon>
        </div>
      </div>

      <div
        className="relative flex flex-col sm:justify-center items-center mb-6"
        id="divcontents"
      >
        <div className="bg-white shadow-lg overflow-hidden sm:rounded-lg w-3/4 mx-12 mt-1">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Application Details
            </h3>
            <div className="h-12 w-12 ml-auto flex-shrink-0">
              <img src={pic_clear} alt="IIT Ropar"></img>
            </div>
          </div>

          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Department
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.department_name}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Specialization
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.specialization_name}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Application For
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.applying_for}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Amount</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.amount}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Transaction ID
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.transaction_id}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Bank</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.bank}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Transaction Slip{" "}
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    <div className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <PaperClipIcon
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-2 flex-1 w-0 truncate">
                          Transaction_Slip
                        </span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href={
                            applicationInfo.transaction_slip_url
                              ? applicationInfo.transaction_slip_url
                              : "#"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Date Of Transaction{" "}
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.date_of_transaction}
                </dd>
              </div>
              {applicationInfo.applying_for == "Regular/External/Part Time" ? (<>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Whether you want to apply for interdisciplinary program?
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {applicationInfo.interdisciplinary_prog_check}
                  </dd>
                </div>
                {applicationInfo.interdisciplinary_prog_check === "YES" ? (<>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Name of interdisciplinary department
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {applicationInfo.interdisciplinary_prog_name}
                    </dd>
                  </div>
                </>) : (<></>)}
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Mode of Application:
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {applicationInfo.mode_of_app}
                  </dd>
                </div>
                {applicationInfo.department_name == "Computer Science and Engineering" ?
                  (<>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Area of Research (as per advertisement)
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {applicationInfo.area_of_research}
                      </dd>
                    </div>
                  </>) :
                  (<>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Area of Research (as per advertisement)
                      </dt>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        1st Preference
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {applicationInfo.first_pref}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        2nd Preference
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {applicationInfo.second_pref}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        3rd Preference
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {applicationInfo.third_pref}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        4th Preference
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {applicationInfo.fourth_pref}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Specific area of research ( if known ):
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {applicationInfo.specific_research_area}
                      </dd>
                    </div>
                  </>)}
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    NOC
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <div className="border border-gray-200 rounded-md divide-y divide-gray-200">
                      <div className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                          <PaperClipIcon
                            className="flex-shrink-0 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-2 flex-1 w-0 truncate">
                            noc.pdf
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            href={
                              applicationInfo.noc_pdf
                                ? applicationInfo.noc_pdf
                                : "#"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </dd>
                </div>
              </>) : applicationInfo.applying_for == "Direct" ? (<>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Have you Finished your Bachelor's degree:
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {applicationInfo.bachelor_degree_complete}
                  </dd>
                </div>
                {applicationInfo.department_name === "Computer Science and Engineering" ?
                  (<>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Area of Research (as per advertisement)
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {applicationInfo.area_of_research}
                      </dd>
                    </div>
                  </>) :
                  (<>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Area of Research (as per advertisement)
                      </dt>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        1st Preference
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {applicationInfo.first_pref}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        2nd Preference
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {applicationInfo.second_pref}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        3rd Preference
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {applicationInfo.third_pref}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        4th Preference
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {applicationInfo.fourth_pref}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Specific area of research ( if known ):
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {applicationInfo.specific_research_area}
                      </dd>
                    </div>
                  </>)}
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Resume
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <div className="border border-gray-200 rounded-md divide-y divide-gray-200">
                      <div className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                          <PaperClipIcon
                            className="flex-shrink-0 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-2 flex-1 w-0 truncate">
                            resume.pdf
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            href={
                              applicationInfo.resume_pdf
                                ? applicationInfo.resume_pdf
                                : "#"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </dd>
                </div>
              </>) : applicationInfo.applying_for == "Staff Member" ? (<>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Area of Research (as per advertisement)
                  </dt>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    1st Preference
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {applicationInfo.first_pref}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    2nd Preference
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {applicationInfo.second_pref}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    3rd Preference
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {applicationInfo.third_pref}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    4th Preference
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {applicationInfo.fourth_pref}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Specific area of research ( if known ):
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {applicationInfo.specific_research_area}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    NOC file
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <div className="border border-gray-200 rounded-md divide-y divide-gray-200">
                      <div className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                          <PaperClipIcon
                            className="flex-shrink-0 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-2 flex-1 w-0 truncate">
                            noc_pdf
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            href={
                              applicationInfo.noc_pdf
                                ? applicationInfo.noc_pdf
                                : "#"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Resume
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <div className="border border-gray-200 rounded-md divide-y divide-gray-200">
                      <div className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                          <PaperClipIcon
                            className="flex-shrink-0 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-2 flex-1 w-0 truncate">
                            resume_pdf
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            href={
                              applicationInfo.resume_pdf
                                ? applicationInfo.resume_pdf
                                : "#"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </dd>
                </div>
              </>) : (<>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Name of PI and Project Number:
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {applicationInfo.pi_project_number}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Area of Research (as per advertisement)
                  </dt>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    1st Preference
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {applicationInfo.first_pref}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    2nd Preference
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {applicationInfo.second_pref}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    3rd Preference
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {applicationInfo.third_pref}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    4th Preference
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {applicationInfo.fourth_pref}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Specific area of research ( if known ):
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {applicationInfo.specific_research_area}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Letter of recommendation from PI
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <div className="border border-gray-200 rounded-md divide-y divide-gray-200">
                      <div className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                          <PaperClipIcon
                            className="flex-shrink-0 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-2 flex-1 w-0 truncate">
                            PI_letter
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            href={
                              applicationInfo.letter_pi_pdf
                                ? applicationInfo.letter_pi_pdf
                                : "#"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </dd>
                </div>
              </>)}
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  State of Purpose
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    <div className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <PaperClipIcon
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-2 flex-1 w-0 truncate">
                          sop_pdf
                        </span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href={
                            applicationInfo.sop_pdf
                              ? applicationInfo.sop_pdf
                              : "#"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Qualifying Examination
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.department_name == "Computer Science and Engineering" ? (<>GATE</>) : (<>{applicationInfo.qualifying_examination_1}</>)}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Branch </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.branch_code_1}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Year </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.year_1}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  All India Rank
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.all_india_rank_1}
                </dd>
              </div>

              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Score in Qualifying Exam </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.score_1}
                </dd>
              </div>

              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Valid Upto</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.valid_upto_1}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Qualifying Examination
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.department_name == "Computer Science and Engineering" ? (<>GATE</>) : (<>{applicationInfo.qualifying_examination_2}</>)}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Branch </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.branch_code_2}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Year </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.year_2}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  All India Rank
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.all_india_rank_2}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Score</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.score_2}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Valid Upto</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.valid_upto_2}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Qualifying Examination
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.qualifying_examination_3}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Branch </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.branch_code_3}
                </dd>
              </div>

              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Year</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.year_3}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  All India Rank
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.all_india_rank_3}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Score </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.score_3}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Valid Upto</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.valid_upto_3}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Self attested copies of GATE/CSIR/UGC/NET etc. as mentioned in the form
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    <div className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <PaperClipIcon
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-2 flex-1 w-0 truncate">
                          exam.pdf
                        </span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href={
                            applicationInfo.exam_result_pdf
                              ? applicationInfo.exam_result_pdf
                              : "#"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Name of the Organisation:
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.name_of_working_org_1}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Designation:
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.designation_1}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  From
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.duration_post_start_1}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  To
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.duration_post_end_1}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Nature of Work
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.nature_of_work_1}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Name of the Organisation:
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.name_of_working_org_2}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Designation:
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.designation_2}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  From
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.duration_post_start_2}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  To
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.duration_post_end_2}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Nature of Work
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.nature_of_work_2}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Total Year(s) of Experience as on the last date mentioned in advertisement
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.total_years_of_service}
                </dd>
              </div>
              {applicationInfo.department_name == "Computer Science and Engineering" ?
                (<>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      IEEE/ACM/Springer conferences or journals
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {applicationInfo.ieee_acm_springer_journals}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      National/International Conferences /Journals not mentioned in first field:
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {applicationInfo.natn_itnl_journals}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      US patents applied/granted
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {applicationInfo.us_patents}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Indian patents applied/granted
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {applicationInfo.indian_patents}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Details of two best research/publications/patents:
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {applicationInfo.details_research_work}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Statement of Purpose:
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {applicationInfo.stat_of_purpose}
                    </dd>
                  </div>
                </>) :
                (<>
                </>)}
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Pulications
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    <div className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <PaperClipIcon
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-2 flex-1 w-0 truncate">
                          publications_pdf
                        </span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href={
                            applicationInfo.publications_pdf
                              ? applicationInfo.publications_pdf
                              : "#"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="bg-white shadow-lg overflow-hidden sm:rounded-lg w-3/4 mx-12 mt-8">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Personal Details
            </h3>
          </div>

          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.full_name}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Father's Name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.fathers_name}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Date of Birth
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.date_of_birth}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Aadhar Card Number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.aadhar_card_number}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Category</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.category}
                </dd>
              </div>

              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Whether belongs to PWD Category
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.is_pwd}
                </dd>
              </div>

              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Marital Status
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.marital_status === "null"
                    ? ""
                    : applicationInfo.marital_status}
                </dd>
              </div>

              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Nationality
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.nationality === "null"
                    ? ""
                    : applicationInfo.nationality}
                </dd>
              </div>

              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Gender</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.gender}
                </dd>
              </div>

              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Uploads</dt>
                {applicationInfo.category_certificate_url && (
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                      <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                          <PaperClipIcon
                            className="flex-shrink-0 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-2 flex-1 w-0 truncate">
                            Category_Certificate
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            href={applicationInfo.category_certificate_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            View
                          </a>
                        </div>
                      </li>
                    </ul>
                  </dd>
                )}
              </div>
            </dl>
          </div>
        </div>

        <div className="bg-white shadow-lg overflow-hidden sm:rounded-lg w-3/4 mx-12 mt-8">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Communication Details
            </h3>
          </div>

          <div className="outline rounded outline-[#f3f4f5] m-4 grid grid-cols-6 gap-6">
            <div className="col-span-full sm:col-span-full">
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Address for Communication
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {applicationInfo.communication_address}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">City</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {applicationInfo.communication_city}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">State</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {applicationInfo.communication_state}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      PIN Code
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {applicationInfo.communication_pincode}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="outline rounded outline-[#f3f4f5] m-4 grid grid-cols-6 gap-6">
            <div className="col-span-full sm:col-span-full">
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Permanent Address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {applicationInfo.permanent_address}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">City</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {applicationInfo.permanent_city}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">State</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {applicationInfo.permanent_state}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      PIN Code
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {applicationInfo.permanent_pincode}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="outline rounded outline-[#f3f4f5] m-4 grid grid-cols-6 gap-6">
            <div className="col-span-full sm:col-span-full">
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Email Address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {applicationInfo.email_id}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Mobile Number
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {applicationInfo.mobile_number}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Alternate Mobile Number
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {applicationInfo.alternate_mobile_number === "null"
                        ? ""
                        : applicationInfo.alternate_mobile_number}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg overflow-hidden sm:rounded-lg w-3/4 mx-12 mt-8 mb-8">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Educational Details
            </h3>
          </div>

          <div className="border-t border-gray-300">
            <dl className="py-3 border-t border-gray-200">
              <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Degree</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.degree_10th}
                </dd>

                <dt className="text-sm font-medium text-gray-500">
                  Board/University
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.board_10th}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Percentage/CGPA
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.percentage_cgpa_value_10th}
                </dd>

                <dt className="text-sm font-medium text-gray-500">
                  Year of Passing
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.year_of_passing_10th}
                </dd>
              </div>
              <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Attachments
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div className="mr-4 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <PaperClipIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2 flex-1 w-0 truncate">
                        10th_marksheet
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href={
                          applicationInfo.marksheet_10th_url
                            ? applicationInfo.marksheet_10th_url
                            : "#"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </dd>
              </div>
            </dl>
          </div>

          <div className="border-t border-gray-300">
            <dl className="py-3 border-t border-gray-200">
              <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Degree</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.degree_12th}
                </dd>

                <dt className="text-sm font-medium text-gray-500">
                  Board/University
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.board_12th}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Percentage/CGPA
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.percentage_cgpa_value_12th}
                </dd>

                <dt className="text-sm font-medium text-gray-500">
                  Year of Passing
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {applicationInfo.year_of_passing_12th}
                </dd>
              </div>
              <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Attachments
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div className="pr-4 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <PaperClipIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2 flex-1 w-0 truncate">
                        12th_marksheet
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href={
                          applicationInfo.marksheet_12th_url
                            ? applicationInfo.marksheet_12th_url
                            : "#"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </dd>
              </div>
            </dl>
          </div>

          <div className="border-t border-gray-300">
            {degrees.map((Degree) => (
              <dl className="py-3 border-t border-gray-200" key={Degree.id}>
                <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Degree</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {Degree["1"]}, {Degree["0"]}
                  </dd>

                  <dt className="text-sm font-medium text-gray-500">
                    Board/University
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {Degree["2"]}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Percentage/CGPA
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {Degree["5"]}
                  </dd>

                  <dt className="text-sm font-medium text-gray-500">
                    Year of Passing
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {Degree["3"]}
                  </dd>
                </div>
                <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Attachments
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <div className="pr-4 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <PaperClipIcon
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-2 flex-1 w-0 truncate">
                          Gradesheet
                        </span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href={Degree["8"] ? Degree["8"] : "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          View
                        </a>
                      </div>
                    </div>
                  </dd>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <div className="pr-4 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <PaperClipIcon
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-2 flex-1 w-0 truncate">Degree</span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href={Degree["9"] ? Degree["9"] : "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          View
                        </a>
                      </div>
                    </div>
                  </dd>
                </div>
              </dl>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
