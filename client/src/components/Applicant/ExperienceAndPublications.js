import React from "react";
import crossPic from "../../images/red_cross.svg";

function ExperienceAndPublications(props) {

    return (
        <div>
            <div className="px-6 py-6 mx-20 my-20 bg-[#f3f4f6] rounded-2xl">
                <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                                {props.offering.department == "Computer Science and Engineering" ?
                                    (<>
                                        <h3 className="ml-5 mb-2 text-left text-2xl font-medium leading-6 text-gray-900">
                                            Professional Experiences
                                        </h3>
                                        <h3 className="ml-5 mb-2 text-left text-2xl font-medium leading-6 text-gray-900">
                                            & Number of publications section.
                                        </h3>
                                        <p className="ml-5 mb-2 text-left font-medium leading-6 text-gray-700">
                                            Professional Experiences can be Teaching/ Reasearch/ Industrial. (From Current Onwards)
                                        </p>

                                    </>) :
                                    (<>
                                        <h3 className="ml-5 mb-2 text-left text-2xl font-medium leading-6 text-gray-900">
                                            Professional Experiences ( Teaching/ Reasearch/ Industrial) (From Current Onwards)
                                        </h3>
                                    </>)}

                            </div>
                        </div>

                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form method="POST" onSubmit={() => props.increasePageNumber()}>
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Name of the Organisation
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name_of_working_org_1"
                                                    value={props.details[25]}
                                                    id="name_of_working_org_1"
                                                    onChange={(event) =>
                                                        props.onChange(event, 25)
                                                    }
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />

                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Designation
                                                </label>
                                                <input
                                                    type="text"
                                                    name="designation_1"
                                                    value={props.details[26]}
                                                    id="designation_1"
                                                    onChange={(event) =>
                                                        props.onChange(event, 26)
                                                    }
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    From
                                                </label>
                                                <input
                                                    type="date"
                                                    id="duration_post_start_1"
                                                    name="duration_post_start_1"
                                                    value={props.details[27]}
                                                    className="mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    onChange={(e) => props.onChange(e, 27)}
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    To
                                                </label>
                                                <input
                                                    type="date"
                                                    id="duration_post_end_1"
                                                    name="duration_post_end_1"
                                                    value={props.details[28]}
                                                    className="mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    onChange={(e) => props.onChange(e, 28)}
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Nature of Work
                                                </label>
                                                {props.offering.department == "Computer Science and Engineering" ?
                                                    (<>
                                                        <select
                                                            id="nature_of_work_1"
                                                            name="nature_of_work_1"
                                                            value={props.details[29]}
                                                            onChange={(event) => props.onChange(event, 29)}
                                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                                                        >
                                                            <option value="">Select</option>
                                                            <option value="Industry">Industry</option>
                                                            <option value="Research">Research</option>
                                                            <option value="Teaching">Teaching</option>
                                                        </select>
                                                    </>) :
                                                    (<>
                                                        <input
                                                            type="text"
                                                            name="nature_of_work_1"
                                                            value={props.details[29]}
                                                            id="nature_of_work_1"
                                                            onChange={(event) =>
                                                                props.onChange(event, 29)
                                                            }
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                        
                                                    </>)}
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Name of the Organisation
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name_of_working_org_2"
                                                    value={props.details[30]}
                                                    id="name_of_working_org_2"
                                                    onChange={(event) =>
                                                        props.onChange(event, 30)
                                                    }
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />

                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Designation
                                                </label>
                                                <input
                                                    type="text"
                                                    name="designation_2"
                                                    value={props.details[31]}
                                                    id="designation_2"
                                                    onChange={(event) =>
                                                        props.onChange(event, 31)
                                                    }
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    From
                                                </label>
                                                <input
                                                    type="date"
                                                    id="duration_post_start_2"
                                                    name="duration_post_start_2"
                                                    value={props.details[32]}
                                                    className="mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    onChange={(e) => props.onChange(e, 32)}
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    To
                                                </label>
                                                <input
                                                    type="date"
                                                    id="duration_post_end_2"
                                                    name="duration_post_end_2"
                                                    value={props.details[33]}
                                                    className="mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    onChange={(e) => props.onChange(e, 33)}
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Nature of Work
                                                </label>
                                                {props.offering.department == "Computer Science and Engineering" ?
                                                    (<>
                                                        <select
                                                            id="nature_of_work_2"
                                                            name="nature_of_work_2"
                                                            value={props.details[34]}
                                                            onChange={(event) => props.onChange(event, 34)}
                                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                                                        >
                                                            <option value="">Select</option>
                                                            <option value="Industry">Industry</option>
                                                            <option value="Research">Research</option>
                                                            <option value="Teaching">Teaching</option>
                                                        </select>
                                                    </>) :
                                                    (<>
                                                        <input
                                                            type="text"
                                                            name="nature_of_work_2"
                                                            value={props.details[34]}
                                                            id="nature_of_work_2"
                                                            onChange={(event) =>
                                                                props.onChange(event, 34)
                                                            }
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />

                                                    </>)}

                                            </div>

                                        </div>
                                    </div>
                                    <div className="px-4 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Total Year(s) of Experience as on the last date mentioned in advertisement:
                                                </label>
                                                <input
                                                    type="text"
                                                    name="total_years_of_service"
                                                    value={props.details[35]}
                                                    id="total_years_of_service"
                                                    onChange={(event) =>
                                                        props.onChange(event, 35)
                                                    }
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>
                                    </div>


                                    {props.offering.department == "Computer Science and Engineering" && (props.offering.offering_type === "Regular/External/Part Time" || props.offering.offering_type === "Direct") ?
                                        (<>
                                            <div className="px-4 bg-white sm:p-6">
                                                <div className="grid grid-cols-6 gap-6">

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            IEEE/ACM/Springer conferences or journals
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="IEEE_ACM_Springer_journals"
                                                            value={props.details[36]}
                                                            id="IEEE_ACM_Springer_journals"
                                                            onChange={(event) =>
                                                                props.onChange(event, 36)
                                                            }
                                                            className="mt-6 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />

                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            National/International Conferences /Journals not mentioned in first field: 
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="natn_itnl_journals"
                                                            value={props.details[37]}
                                                            id="natn_itnl_journals"
                                                            onChange={(event) =>
                                                                props.onChange(event,37)
                                                            }
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            US patents applied/granted
                                                            <span style={{ color: "#ff0000" }}> **applied means you have the patent application number</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="US_patents"
                                                            value={props.details[38]}
                                                            id="US_patents"
                                                            onChange={(event) =>
                                                                props.onChange(event, 38)
                                                            }
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />

                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            Indian patents applied/granted 
                                                            <span style={{ color: "#ff0000" }}> **applied means you have the patent application number</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="Indian_patents"
                                                            value={props.details[39]}
                                                            id="Indian_patents"
                                                            onChange={(event) =>
                                                                props.onChange(event, 39)
                                                            }
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>
                                                    <div className="col-span-full sm:col-span-full">
                                                        <label
                                                            htmlFor="details_research_work"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            Write details of two best research/publications/patents:
                                                        </label>
                                                        <div className="mt-1">
                                                            <textarea
                                                                id="details_research_work"
                                                                name="details_research_work"
                                                                rows={4}
                                                                value={props.details[40]}
                                                                onChange={(event) => props.onChange(event, 40)}
                                                                className="resize-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                            />
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="col-span-full sm:col-span-full">
                                                        <label
                                                            htmlFor="stat_of_purpose"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            Statement of Purpose
                                                        </label>
                                                        <div className="mt-1">
                                                            <textarea
                                                                id="stat_of_purpose"
                                                                name="stat_of_purpose"
                                                                rows={4}
                                                                value={props.details[41]}
                                                                onChange={(event) => props.onChange(event, 41)}
                                                                className="resize-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                            />
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            </>) :
                                            (<>
                                        </>)}
                                    
                                    <div className="px-4 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-full sm:col-span-full">
                                                <label
                                                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                                                    htmlFor="publications_pdf"
                                                >
                                                    List of Publications/Patent
                                                    <span style={{ color: "#ff0000" }}> *</span>
                                                </label>

                                                {!props.details[60].name && (
                                                    <>
                                                        <input
                                                            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                                            aria-describedby="profile-picture-desc"
                                                            id="publications_pdf"
                                                            name="publications_pdf"
                                                            type="file"
                                                            required
                                                            accept=".pdf"
                                                            onChange={(e) =>
                                                                props.handleFileSubmit(e, 5, 60, 1)
                                                            }
                                                        />

                                                        <div
                                                            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                                                            id="publication_help"
                                                        >
                                                            <span className="font-semibold">
                                                                {" "}
                                                                Maximum file size:{" "}
                                                            </span>
                                                            5 MB
                                                        </div>

                                                        <div
                                                            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                                                            id="publication_help"
                                                        >
                                                            <span className="font-semibold">
                                                                Allowed file formats:
                                                            </span>{" "}
                                                            .pdf
                                                        </div>

                                                        <div
                                                            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                                                            id="publication_help"
                                                        >
                                                            <span className="font-semibold">
                                                                Recommended File Name Format:
                                                            </span>
                                                            <span>
                                                                {" "}
                                                                Publications_&lt;your_email_id&gt; <br />
                                                                For Example: publications_abc@gmail.com
                                                            </span>
                                                        </div>
                                                    </>
                                                )}

                                                {props.details[60].name && (
                                                    <>
                                                        <div className="flex border-2 mt-1 w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                                            <input
                                                                className="border-none block w-full shadow-sm sm:text-sm"
                                                                id="publications_pdf"
                                                                name="publications_pdf"
                                                                type="text"
                                                                value={props.details[60].name}
                                                                required
                                                                readOnly
                                                            />

                                                            <button
                                                                type="button"
                                                                className="flex items-center ml-2 mr-2 justify-center"
                                                                onClick={() => props.emptyFileIndex(60)}
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
                                    </div>

                                    <div className="px-4 bg-white sm:p-6">
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
                </div>
            </div>
        </div>
    );
}

export default ExperienceAndPublications;
