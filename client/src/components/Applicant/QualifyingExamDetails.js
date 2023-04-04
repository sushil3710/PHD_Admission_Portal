import React from "react";
import crossPic from "../../images/red_cross.svg";
import HelpIcon from "@mui/icons-material/Help";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

function QualifyingExamDetails(props) {
  const date = new Date();
  const max_year = date.getFullYear();
  const min_year = max_year - 2;

  return (
    <div>
      <div className="px-6 py-6 mx-20 my-20 bg-[#f3f4f6] rounded-2xl">
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="ml-5 mb-2 text-left text-2xl font-medium leading-6 text-gray-900">
                  Qualifying Examination
                </h3>
                <p className="ml-5 text-left mt-1 text-gray-600 text-base leading-relaxed">
                  {props.offering.department == "Computer Science and Engineering" ?
                    (<>
                      (Two most recent GATE scores)</>) :
                    (<>
                      (GATE/CSIR/UGC/NET/NBHM/Others)</>)}
                </p>
              </div>
            </div>

            <div className="mt-5 md:mt-0 md:col-span-2">
              <form onSubmit={() => props.increasePageNumber()} method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="qualifying_examination_1"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Qualifying Examination
                        </label>
                        {props.offering.department == "Computer Science and Engineering" ?
                          (<> <input
                            id="qualifying_examination_1"
                            value="GATE"
                            name="qualifying_examination_1"
                            readOnly
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          ></input>
                          </>) :
                          (<>
                            <input
                              id="qualifying_examination_1"
                              value={props.details[5]}
                              name="qualifying_examination_1"
                              onChange={(e) => props.onChange(e, 5)}
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            ></input></>)}

                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        {props.offering.department == "Computer Science and Engineering" ?
                          (<>
                            <label
                              htmlFor="branch_code_1"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Branch Code
                            </label>
                            <select
                              id="branch_code_1"
                              name="branch_code_1"
                              value={props.details[6]}
                              onChange={(e) => props.onChange(e, 6)}
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option value="">Select</option>
                              <option value="AE">AE</option>
                              <option value="IN">IN</option>
                              <option value="AG">AG</option>
                              <option value="ME">ME</option>
                              <option value="BM">BM</option>
                              <option value="MN">MN</option>
                              <option value="BT">BT</option>
                              <option value="MT">MT</option>
                              <option value="CE">CE</option>
                              <option value="PE">PE</option>
                              <option value="CH">CH</option>
                              <option value="PH">PH</option>
                              <option value="CS">CS</option>
                              <option value="PI">PI</option>
                              <option value="CY">CY</option>
                              <option value="CY">ST</option>
                              <option value="EC">EC</option>
                              <option value="TF">TF</option>
                              <option value="EE">EE</option>
                              <option value="XE*">XE*</option>
                              <option value="ES">ES</option>
                              <option value="XH**">XH**</option>
                              <option value="EY">EY</option>
                              <option value="XL**">XL**</option>
                              <option value="GG">GG</option>
                            </select></>) :
                          (<>
                            <label
                              htmlFor="branch_code_1"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Branch
                            </label>
                            <input
                              name="branch_code_1"
                              id="branch_code_1"
                              value={props.details[6]}
                              onChange={(event) => props.onChange(event, 6)}
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            /></>)}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="year_1"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Year
                        </label>
                        <input
                          type="number"
                          name="year_1"
                          id="year_1"
                          value={props.details[7]}
                          onChange={(event) => props.onChange(event, 7)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="valid_upto_1"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Valid Upto
                        </label>
                        <input
                          type="number"
                          name="valid_upto_1"
                          id="valid_upto_1"
                          
                          value={props.details[8]}
                          onChange={(event) => props.onChange(event, 8)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="all_india_rank_1"
                          className="block text-sm font-medium text-gray-700"
                        >
                          All India Rank (AIR)
                        </label>
                        <input
                          type="number"
                          name="all_india_rank_1"
                          id="all_india_rank_1"
                          min={1}
                          value={props.details[9]}
                          onChange={(event) => props.onChange(event, 9)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="score_1"
                          className="block text-sm font-medium text-gray-700"
                        >
                          GATE Score
                          <HtmlTooltip
                            title={
                              <React.Fragment>
                                <Typography color="inherit"></Typography>
                                {
                                  "Please ensure that you have entered your GATE score, and not GATE marks."
                                }{" "}
                                <br />
                              </React.Fragment>
                            }
                          >
                            <HelpIcon fontSize="small"></HelpIcon>
                          </HtmlTooltip>
                        </label>
                        <input
                          type="number"
                          name="score_1"
                          id="score_1"
                          min={0}
                          value={props.details[10]}
                          onChange={(event) => props.onChange(event, 10)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <hr className="border-black"></hr> <hr className="border-black"></hr> <hr className="border-black"></hr> <hr className="border-black"></hr> <hr className="border-black"></hr> <hr className="border-black"></hr>
                    </div>
                  </div>

                  <div className="px-4 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="qualifying_examination_2"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Qualifying Examination
                        </label>
                        {props.offering.department == "Computer Science and Engineering" ?
                          (<> <input
                            id="qualifying_examination_2"
                            value="GATE"
                            name="qualifying_examination_2"
                            readOnly
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          ></input>
                          </>) :
                          (<>
                            <input
                              id="qualifying_examination_2"
                              value={props.details[11]}
                              name="qualifying_examination_2"
                              onChange={(event) => props.onChange(event, 11)}
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            ></input></>)}

                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        {props.offering.department == "Computer Science and Engineering" ?
                          (<>
                            <label
                              htmlFor="branch_code_2"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Branch Code
                            </label>
                            <select
                              id="branch_code_2"
                              name="branch_code_2"
                              value={props.details[12]}
                              onChange={(e) => props.onChange(e, 12)}
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option value="">Select</option>
                              <option value="AE">AE</option>
                              <option value="IN">IN</option>
                              <option value="AG">AG</option>
                              <option value="ME">ME</option>
                              <option value="BM">BM</option>
                              <option value="MN">MN</option>
                              <option value="BT">BT</option>
                              <option value="MT">MT</option>
                              <option value="CE">CE</option>
                              <option value="PE">PE</option>
                              <option value="CH">CH</option>
                              <option value="PH">PH</option>
                              <option value="CS">CS</option>
                              <option value="PI">PI</option>
                              <option value="CY">CY</option>
                              <option value="CY">ST</option>
                              <option value="EC">EC</option>
                              <option value="TF">TF</option>
                              <option value="EE">EE</option>
                              <option value="XE*">XE*</option>
                              <option value="ES">ES</option>
                              <option value="XH**">XH**</option>
                              <option value="EY">EY</option>
                              <option value="XL**">XL**</option>
                              <option value="GG">GG</option>
                            </select></>) :
                          (<>
                            <label
                              htmlFor="branch_code_2"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Branch
                            </label>
                            <input
                              name="branch_code_2"
                              id="branch_code_2"
                              value={props.details[12]}
                              onChange={(event) => props.onChange(event, 12)}
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            /></>)}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="year_2"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Year
                        </label>
                        <input
                          type="number"
                          name="year_2"
                          id="year_2"
                          value={props.details[13]}
                          onChange={(event) => props.onChange(event, 13)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="valid_upto_2"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Valid Upto
                        </label>
                        <input
                          type="number"
                          name="valid_upto_2"
                          id="valid_upto_2"
                          value={props.details[14]}
                          onChange={(event) => props.onChange(event, 14)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="all_india_rank_2"
                          className="block text-sm font-medium text-gray-700"
                        >
                          All India Rank (AIR)
                        </label>
                        <input
                          type="number"
                          name="all_india_rank_2"
                          id="all_india_rank_2"
                          min={1}
                          value={props.details[15]}
                          onChange={(event) => props.onChange(event, 15)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="score_2"
                          className="block text-sm font-medium text-gray-700"
                        >
                          GATE Score
                          <HtmlTooltip
                            title={
                              <React.Fragment>
                                <Typography color="inherit"></Typography>
                                {
                                  "Please ensure that you have entered your GATE score, and not GATE marks."
                                }{" "}
                                <br />
                              </React.Fragment>
                            }
                          >
                            <HelpIcon fontSize="small"></HelpIcon>
                          </HtmlTooltip>
                        </label>
                        <input
                          type="number"
                          name="score_2"
                          id="score_2"
                          min={0}
                          value={props.details[16]}
                          onChange={(event) => props.onChange(event, 16)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <hr className="border-black"></hr> <hr className="border-black"></hr> <hr className="border-black"></hr> <hr className="border-black"></hr> <hr className="border-black"></hr> <hr className="border-black"></hr>
                    </div>
                  </div>

                  <div className="px-4 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="qualifying_examination_3"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Qualifying Examination
                        </label>
                        {props.offering.department == "Computer Science and Engineering" ?
                          (<> <input
                            id="qualifying_examination_3"
                            name="qualifying_examination_3"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          ></input>
                          </>) :
                          (<>
                            <input
                              id="qualifying_examination_3"
                              name="qualifying_examination_3"
                              value={props.details[17]}
                              onChange={(event) => props.onChange(event, 17)}
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            ></input></>)}

                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="branch_code_3"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Branch
                        </label>
                        <input
                          name="branch_code_3"
                          id="branch_code_3"
                          value={props.details[18]}
                          onChange={(event) => props.onChange(event, 18)}
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />

                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="year_3"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Year
                        </label>
                        <input
                          type="number"
                          name="year_3"
                          id="year_3"
                          value={props.details[19]}
                          onChange={(event) => props.onChange(event, 19)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="valid_upto_3"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Valid Upto
                        </label>
                        <input
                          type="number"
                          name="valid_upto_3"
                          id="valid_upto_3"
                          value={props.details[20]}
                          onChange={(event) => props.onChange(event, 20)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="all_india_rank_3"
                          className="block text-sm font-medium text-gray-700"
                        >
                          All India Rank (AIR)
                        </label>
                        <input
                          type="number"
                          name="all_india_rank_3"
                          id="all_india_rank_3"
                          min={1}
                          value={props.details[21]}
                          onChange={(event) => props.onChange(event, 21)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="score_3"
                          className="block text-sm font-medium text-gray-700"
                        >
                          GATE Score
                          <HtmlTooltip
                            title={
                              <React.Fragment>
                                <Typography color="inherit"></Typography>
                                {
                                  "Please ensure that you have entered your GATE score, and not GATE marks."
                                }{" "}
                                <br />
                              </React.Fragment>
                            }
                          >
                            <HelpIcon fontSize="small"></HelpIcon>
                          </HtmlTooltip>
                        </label>
                        <input
                          type="number"
                          name="score_3"
                          id="score_3"
                          min={0}
                          value={props.details[22]}
                          onChange={(event) => props.onChange(event, 22)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <hr className="border-black"></hr> <hr className="border-black"></hr> <hr className="border-black"></hr> <hr className="border-black"></hr> <hr className="border-black"></hr> <hr className="border-black"></hr>
                    </div>
                  </div>

                  <div className="px-4 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-full sm:col-span-full">
                        <label
                          className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                          htmlFor="exam_result_pdf"
                        >
                          Self attested copies of GATE/CSIR/UGC/NET etc. as mentioned in the form
                          <span style={{ color: "#ff0000" }}> *</span>
                        </label>
                        {!props.details[58].name && (
                          <>
                            <input
                              className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                              aria-describedby="profile-picture-desc"
                              id="exam_result_pdf"
                              name="exam_result_pdf"
                              type="file"
                              required
                              accept=".pdf"
                              onChange={(e) =>
                                props.handleFileSubmit(e, 5, 58, 1)
                              }
                            />

                            <div
                              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                              id="gate_result_help"
                            >
                              <span className="font-semibold">
                                {" "}
                                Maximum file size:{" "}
                              </span>
                              5 MB
                            </div>

                            <div
                              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                              id="gate_result_help"
                            >
                              <span className="font-semibold">
                                Allowed file formats:
                              </span>{" "}
                              .pdf
                            </div>

                            <div
                              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                              id="gate_result_help"
                            >
                              <span className="font-semibold">
                                Recommended File Name Format:
                              </span>
                              <span>
                                {" "}
                                GATE_Copies_&lt;your_email_id&gt; <br />
                                For Example: GATE_Copies_abc@gmail.com
                              </span>
                            </div>
                          </>
                        )}

                        {props.details[58].name && (
                          <>
                            <div className="flex border-2 mt-1 w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                              <input
                                className="border-none block w-full shadow-sm sm:text-sm"
                                id="exam_result_pdf"
                                name="exam_result_pdf"
                                type="text"
                                value={props.details[58].name}
                                required
                                readOnly
                              />

                              <button
                                type="button"
                                className="flex items-center ml-2 mr-2 justify-center"
                                onClick={() => props.emptyFileIndex(58)}
                              >
                                <img
                                  className="w-6 h-6"
                                  src={crossPic}
                                  alt="Cross"
                                ></img>
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="my-4 grid grid-cols-6 gap-6">
                      <button
                        type="button"
                        onClick={() => props.decreasePageNumber()}
                        className="col-start-1 col-end-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white justify-center block py-2 px-4 mr-2 items-center bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="col-start-6 col-end-7 border border-transparent shadow-sm text-sm font-medium rounded-md text-white justify-center block py-2 px-4 mr-2 items-center bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div >
      </div >
    </div >
  );
}

export default QualifyingExamDetails;
