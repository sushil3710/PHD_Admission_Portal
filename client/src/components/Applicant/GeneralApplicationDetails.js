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
                                <h3 className="ml-5 mb-2 text-left text-2xl font-medium leading-6 text-gray-900">
                                    General Details
                                </h3>
                                {props.offering.department === "Computer Science and Engineering" && (props.offering.offering_type === "Regular/External/Part Time" || props.offering.offering_type == "Direct") ?
                                    (<>
                                        <p className="ml-5 mb-2 text-left text-sm font-medium leading-6 text-gray-900">** Theory areas of research include algorithms design,approximate algorithms, theory of computation,logic of computer science,complexity theory etc. </p>
                                        <p className="ml-5 mb-2 text-left text-sm font-medium leading-6 text-gray-900">** Systems areas of research includes operating systems,computer systems/architecture,computer network,software architecture,databases etc.</p>
                                        <p className="ml-5 mb-2 text-left text-sm font-medium leading-6 text-gray-900">** Application areas of research include artificial intelligence,machine learning,image analysis,graphics,vision,bioinformatics, etc</p>
                                        <p className="ml-5 mb-2 text-left text-sm font-medium leading-6 text-gray-900">NOTE : Select your research area that is closest of these three categories.</p>
                                    </>) : (<></>)}
                            </div>
                        </div>

                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form method="POST" onSubmit={() => props.increasePageNumber()}>
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="department"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Department
                                                    <span style={{ color: "#ff0000" }}> *</span>
                                                </label>
                                                <input
                                                    id="department"
                                                    value={props.offering.department}
                                                    name="department"
                                                    readOnly
                                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                ></input>
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="specialization"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Specialization
                                                    <span style={{ color: "#ff0000" }}> *</span>
                                                </label>
                                                <input
                                                    id="specialization"
                                                    value={props.offering.specialization}
                                                    name="specialization"
                                                    readOnly
                                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                ></input>
                                            </div>
                                            {props.offering.offering_type == "Regular/External/Part Time" ? (<></>) : (<>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        htmlFor="applying_for"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Applying For
                                                        <span style={{ color: "#ff0000" }}> *</span>
                                                    </label>
                                                    <input
                                                        id="applying_for"
                                                        value={props.offering.offering_type}
                                                        name="applying_for"
                                                        readOnly
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    ></input>
                                                </div>
                                            </>)}
                                            
                                            {props.offering.offering_type === "Regular/External/Part Time" ?
                                                (<>
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label className="block text-sm font-medium text-gray-700">
                                                            Whether you want to apply for interdisciplinary program?
                                                            <span style={{ color: "#ff0000" }}> *</span>
                                                        </label>
                                                        <select
                                                            id="interdisciplinary_prog_check"
                                                            name="interdisciplinary_prog_check"
                                                            value={props.details[42]}
                                                            onChange={(event) => props.onChange(event, 42)}
                                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                            required
                                                        >
                                                            <option value="">Select</option>
                                                            <option value="YES">YES</option>
                                                            <option value="NO">NO</option>
                                                        </select>
                                                    </div>
                                                    {props.details[42] === "YES" ? (<>
                                                        <div className="col-span-6 sm:col-span-3">
                                                            <label className="block text-sm font-medium text-gray-700">
                                                                Name of interdisciplinary department
                                                                <span style={{ color: "#ff0000" }}> *</span>
                                                            </label>
                                                            <select
                                                                id="interdisciplinary_prog_check"
                                                                name="interdisciplinary_prog_check"
                                                                value={props.details[65]}
                                                                onChange={(event) => props.onChange(event, 65)}
                                                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                required
                                                            >
                                                                <option value="">Select</option>
                                                                <option value="Department of Bio-Medical Engineering (DBME)">Department of Bio-Medical Engineering (DBME)</option>
                                                            </select>
                                                        </div>
                                                    </>) : (<></>)}
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label className="block text-sm font-medium text-gray-700">
                                                            Mode of Application
                                                            <span style={{ color: "#ff0000" }}> *</span>
                                                        </label>
                                                        <select
                                                            id="mode_of_app"
                                                            name="mode_of_app"
                                                            value={props.details[43]}
                                                            onChange={(event) => props.onChange(event, 43)}
                                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                            required
                                                        >
                                                            <option value="">Select</option>
                                                            <option value="Regular">Regular</option>
                                                            <option value="External">External</option>
                                                            <option value="Part-Time">Part-Time</option>
                                                        </select>
                                                    </div>
                                                    {props.offering.department === "Computer Science and Engineering" ?
                                                        (<>
                                                            <div className="col-span-6 sm:col-span-3">
                                                                <label className="block text-sm font-medium text-gray-700">
                                                                    Area of Research (as per advertisement)
                                                                    <span style={{ color: "#ff0000" }}> *</span>
                                                                </label>
                                                                <select
                                                                    id="area_of_research"
                                                                    name="area_of_research"
                                                                    value={props.details[44]}
                                                                    onChange={(event) => props.onChange(event, 44)}
                                                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                    required
                                                                >
                                                                    <option value="">Select</option>
                                                                    <option value="Theory Area of CS">Theory Area of CS</option>
                                                                    <option value="Systems Area of CS">Systems Area of CS</option>
                                                                    <option value="Applications Area of CS">Applications Area of CS</option>
                                                                </select>
                                                            </div>
                                                        </>) :
                                                        (<>
                                                            <div className="col-span-6 sm:col-span-3">
                                                                <h3
                                                                    className="block text-xl font-medium text-gray-700"
                                                                >
                                                                    Area of research (as per advertisement)
                                                                </h3>
                                                                <label
                                                                    className="block text-sm font-medium text-gray-700"
                                                                >
                                                                    1st Preference
                                                                    <span style={{ color: "#ff0000" }}> *</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="1st_pref"
                                                                    value={props.details[45]}
                                                                    id="1st_pref"
                                                                    required
                                                                    onChange={(event) =>
                                                                        props.onChange(event, 45)
                                                                    }
                                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                />
                                                            </div>
                                                            <div className="col-span-6 sm:col-span-3">
                                                                <label
                                                                    className="block text-sm mt-6  font-medium text-gray-700"
                                                                >
                                                                    2nd Preference
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="2nd_pref"
                                                                    value={props.details[46]}
                                                                    id="2nd_pref"
                                                                    onChange={(event) =>
                                                                        props.onChange(event, 46)
                                                                    }
                                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                />
                                                            </div>
                                                            <div className="col-span-6 sm:col-span-3">
                                                                <label
                                                                    className="block text-sm font-medium text-gray-700"
                                                                >
                                                                    3rd Preference
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="3rd_pref"
                                                                    value={props.details[47]}
                                                                    id="3rd_pref"
                                                                    onChange={(event) =>
                                                                        props.onChange(event, 47)
                                                                    }
                                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                />
                                                            </div>
                                                            <div className="col-span-6 sm:col-span-3">
                                                                <label
                                                                    className="block text-sm font-medium text-gray-700"
                                                                >
                                                                    4th Preference
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="4th_pref"
                                                                    value={props.details[48]}
                                                                    id="4th_pref"
                                                                    onChange={(event) =>
                                                                        props.onChange(event, 48)
                                                                    }
                                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                />
                                                            </div>

                                                            <div className="col-span-full sm:col-span-full">
                                                                <label
                                                                    htmlFor="specific_research_area"
                                                                    className="block text-sm font-medium text-gray-700"
                                                                >
                                                                    Specific area of research ( if known ):
                                                                </label>
                                                                <div className="mt-1">
                                                                    <textarea
                                                                        id="specific_research_area"
                                                                        name="specific_research_area"
                                                                        rows={4}
                                                                        value={props.details[49]}
                                                                        onChange={(event) => props.onChange(event, 49)}
                                                                        className="resize-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </>)}
                                                </>) : props.offering.offering_type == "Direct" ? (<>
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label className="block text-sm font-medium text-gray-700">
                                                            Have you Finished your Bachelor's degree:
                                                            <span style={{ color: "#ff0000" }}> *</span>
                                                        </label>
                                                        <select
                                                            id="bachelor_degree_complete"
                                                            name="bachelor_degree_complete"
                                                            value={props.details[50]}
                                                            onChange={(event) => props.onChange(event, 50)}
                                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                            required
                                                        >
                                                            <option value="">Select</option>
                                                            <option value="YES">YES</option>
                                                            <option value="NO">NO</option>
                                                        </select>
                                                    </div>
                                                    {props.offering.department === "Computer Science and Engineering" ?
                                                        (<>
                                                            <div className="col-span-6 sm:col-span-3">
                                                                <label className="block text-sm font-medium text-gray-700">
                                                                    Area of Research (as per advertisement)
                                                                    <span style={{ color: "#ff0000" }}> *</span>
                                                                </label>
                                                                <select
                                                                    id="area_of_research"
                                                                    name="area_of_research"
                                                                    value={props.details[44]}
                                                                    onChange={(event) => props.onChange(event, 44)}
                                                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                    required
                                                                >
                                                                    <option value="">Select</option>
                                                                    <option value="Theory Area of CS">Theory Area of CS</option>
                                                                    <option value="Systems Area of CS">Systems Area of CS</option>
                                                                    <option value="Applications Area of CS">Applications Area of CS</option>
                                                                </select>
                                                            </div>
                                                        </>) :
                                                        (<>
                                                            <div className="col-span-6 sm:col-span-3">
                                                                <h3
                                                                    className="block text-xl font-medium text-gray-700"
                                                                >
                                                                    Area of research (as per advertisement)
                                                                </h3>
                                                                <label
                                                                    className="block text-sm font-medium text-gray-700"
                                                                >
                                                                    1st Preference
                                                                    <span style={{ color: "#ff0000" }}> *</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="1st_pref"
                                                                    value={props.details[45]}
                                                                    id="1st_pref"
                                                                    required
                                                                    onChange={(event) =>
                                                                        props.onChange(event, 45)
                                                                    }
                                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                />
                                                            </div>
                                                            <div className="col-span-6 sm:col-span-3">
                                                                <label
                                                                    className="block text-sm mt-6  font-medium text-gray-700"
                                                                >
                                                                    2nd Preference
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="2nd_pref"
                                                                    value={props.details[46]}
                                                                    id="2nd_pref"
                                                                    onChange={(event) =>
                                                                        props.onChange(event, 46)
                                                                    }
                                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                />
                                                            </div>
                                                            <div className="col-span-6 sm:col-span-3">
                                                                <label
                                                                    className="block text-sm font-medium text-gray-700"
                                                                >
                                                                    3rd Preference
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="3rd_pref"
                                                                    value={props.details[47]}
                                                                    id="3rd_pref"
                                                                    onChange={(event) =>
                                                                        props.onChange(event, 47)
                                                                    }
                                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                />
                                                            </div>
                                                            <div className="col-span-6 sm:col-span-3">
                                                                <label
                                                                    className="block text-sm font-medium text-gray-700"
                                                                >
                                                                    4th Preference
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="4th_pref"
                                                                    value={props.details[48]}
                                                                    id="4th_pref"
                                                                    onChange={(event) =>
                                                                        props.onChange(event, 48)
                                                                    }
                                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                />
                                                            </div>
                                                            <div className="col-span-full sm:col-span-full">
                                                                <label
                                                                    htmlFor="specific_research_area"
                                                                    className="block text-sm font-medium text-gray-700"
                                                                >
                                                                    Specific area of research ( if known )Specific area of research ( if known ):
                                                                </label>
                                                                <div className="mt-1">
                                                                    <textarea
                                                                        id="specific_research_area"
                                                                        name="specific_research_area"
                                                                        rows={4}
                                                                        value={props.details[49]}
                                                                        onChange={(event) => props.onChange(event, 49)}
                                                                        className="resize-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </>)}
                                                </>) : props.offering.offering_type == "Staff Member" ? (<>
                                                    <div className="col-span-6 sm:col-span-3"></div>
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <h3
                                                            className="block text-xl font-medium text-gray-700"
                                                        >
                                                            Area of research (as per advertisement)
                                                        </h3>
                                                        <label
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            1st Preference
                                                            <span style={{ color: "#ff0000" }}> *</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="1st_pref"
                                                            value={props.details[45]}
                                                            id="1st_pref"
                                                            required
                                                            onChange={(event) =>
                                                                props.onChange(event, 45)
                                                            }
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label
                                                            className="block text-sm mt-6  font-medium text-gray-700"
                                                        >
                                                            2nd Preference
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="2nd_pref"
                                                            value={props.details[46]}
                                                            id="2nd_pref"
                                                            onChange={(event) =>
                                                                props.onChange(event, 46)
                                                            }
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            3rd Preference
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="3rd_pref"
                                                            value={props.details[47]}
                                                            id="3rd_pref"
                                                            onChange={(event) =>
                                                                props.onChange(event, 47)
                                                            }
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            4th Preference
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="4th_pref"
                                                            value={props.details[48]}
                                                            id="4th_pref"
                                                            onChange={(event) =>
                                                                props.onChange(event, 48)
                                                            }
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-full sm:col-span-full">
                                                        <label
                                                            htmlFor="specific_research_area"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            Specific area of research ( if known )Specific area of research ( if known ):
                                                        </label>
                                                        <div className="mt-1">
                                                            <textarea
                                                                id="specific_research_area"
                                                                name="specific_research_area"
                                                                rows={4}
                                                                value={props.details[49]}
                                                                onChange={(event) => props.onChange(event, 49)}
                                                                className="resize-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                            />
                                                        </div>
                                                    </div>
                                                </>) :
                                                    (<>
                                                        <div className="col-span-6 sm:col-span-3">
                                                            <label
                                                                className="block text-sm font-medium text-gray-700"
                                                            >
                                                                Name of PI and Project Number:
                                                                <span style={{ color: "#ff0000" }}> *</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="PI_Project_Number"
                                                                value={props.details[51]}
                                                                id="PI_Project_Number"
                                                                onChange={(event) =>
                                                                    props.onChange(event, 51)
                                                                }
                                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                required
                                                            />
                                                        </div>
                                                        <div className="col-span-6 sm:col-span-3">
                                                            <h3
                                                                className="block text-xl font-medium text-gray-700"
                                                            >
                                                                Area of research (as per advertisement)
                                                            </h3>
                                                            <label
                                                                className="block text-sm font-medium text-gray-700"
                                                            >
                                                                1st Preference
                                                                <span style={{ color: "#ff0000" }}> *</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="1st_pref"
                                                                required
                                                                value={props.details[45]}
                                                                id="1st_pref"
                                                                onChange={(event) =>
                                                                    props.onChange(event, 45)
                                                                }
                                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            />
                                                        </div>
                                                        <div className="col-span-6 sm:col-span-3">
                                                            <label
                                                                className="block text-sm mt-6  font-medium text-gray-700"
                                                            >
                                                                2nd Preference
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="2nd_pref"
                                                                value={props.details[46]}
                                                                id="2nd_pref"
                                                                onChange={(event) =>
                                                                    props.onChange(event, 46)
                                                                }
                                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            />
                                                        </div>
                                                        <div className="col-span-6 sm:col-span-3">
                                                            <label
                                                                className="block text-sm font-medium text-gray-700"
                                                            >
                                                                3rd Preference
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="3rd_pref"
                                                                value={props.details[47]}
                                                                id="3rd_pref"
                                                                onChange={(event) =>
                                                                    props.onChange(event, 47)
                                                                }
                                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            />
                                                        </div>
                                                        <div className="col-span-6 sm:col-span-3">
                                                            <label
                                                                className="block text-sm font-medium text-gray-700"
                                                            >
                                                                4th Preference
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="4th_pref"
                                                                value={props.details[48]}
                                                                id="4th_pref"
                                                                onChange={(event) =>
                                                                    props.onChange(event, 48)
                                                                }
                                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            />
                                                        </div>
                                                        <div className="col-span-full sm:col-span-full">
                                                            <label
                                                                htmlFor="specific_research_area"
                                                                className="block text-sm font-medium text-gray-700"
                                                            >
                                                                Specific area of research ( if known )Specific area of research ( if known ):
                                                            </label>
                                                            <div className="mt-1">
                                                                <textarea
                                                                    id="specific_research_area"
                                                                    name="specific_research_area"
                                                                    rows={4}
                                                                    value={props.details[15]}
                                                                    onChange={(event) => props.onChange(event, 15)}
                                                                    className="resize-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                                />
                                                            </div>
                                                        </div>
                                                    </>)}

                                        </div>
                                    </div>

                                    {props.offering.offering_type === "Regular/External/Part Time" ? (<>

                                        <div className="px-4 bg-white sm:p-6">
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-full sm:col-span-full">
                                                    <label
                                                        className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                                                        htmlFor="noc_pdf"
                                                    >
                                                        Upload your NOC (if applying for admission other than regular PhD)
                                                        <span style={{ color: "#ff0000" }}> *</span>
                                                    </label>
                                                    {!props.details[61].name && (
                                                        <>
                                                            <input
                                                                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                                                aria-describedby="profile-picture-desc"
                                                                id="noc_pdf"
                                                                name="noc_pdf"
                                                                required
                                                                type="file"
                                                                accept=".pdf"
                                                                onChange={(e) =>
                                                                    props.handleFileSubmit(e, 5, 61, 1)
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
                                                                    NOC_&lt;your_email_id&gt; <br />
                                                                    For Example: NOC_abc@gmail.com
                                                                </span>
                                                            </div>
                                                        </>
                                                    )}

                                                    {props.details[61].name && (
                                                        <>
                                                            <div className="flex border-2 mt-1 w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                                                <input
                                                                    className="border-none block w-full shadow-sm sm:text-sm"
                                                                    id="noc_pdf"
                                                                    name="noc_pdf"
                                                                    type="text"
                                                                    required
                                                                    value={props.details[61].name}
                                                                    readOnly
                                                                />
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center ml-2 mr-2 justify-center"
                                                                    onClick={() => props.emptyFileIndex(61)}
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

                                    </>)
                                        : props.offering.offering_type === "Direct" ? (<>

                                            <div className="px-4 bg-white sm:p-6">
                                                <div className="grid grid-cols-6 gap-6">
                                                    <div className="col-span-full sm:col-span-full">
                                                        <label
                                                            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                                                            htmlFor="resume_pdf"
                                                        >
                                                            Resume
                                                            <span style={{ color: "#ff0000" }}> *</span>
                                                        </label>

                                                        {!props.details[62].name && (
                                                            <>
                                                                <input
                                                                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                                                    aria-describedby="profile-picture-desc"
                                                                    id="resume_pdf"
                                                                    name="resume_pdf"
                                                                    type="file"
                                                                    required
                                                                    accept=".pdf"
                                                                    onChange={(e) =>
                                                                        props.handleFileSubmit(e, 5, 62, 1)
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
                                                                        resume_&lt;your_email_id&gt; <br />
                                                                        For Example:resume_abc@gmail.com
                                                                    </span>
                                                                </div>
                                                            </>
                                                        )}

                                                        {props.details[62].name && (
                                                            <>
                                                                <div className="flex border-2 mt-1 w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                                                    <input
                                                                        className="border-none block w-full shadow-sm sm:text-sm"
                                                                        id="resume_pdf"
                                                                        name="resume_pdf"
                                                                        type="text"
                                                                        value={props.details[62].name}
                                                                        required
                                                                        readOnly
                                                                    />

                                                                    <button
                                                                        type="button"
                                                                        className="flex items-center ml-2 mr-2 justify-center"
                                                                        onClick={() => props.emptyFileIndex(62)}
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

                                        </>)
                                            : props.offering.offering_type == "Staff Member" ? (<>
                                                <div className="px-4 bg-white sm:p-6">
                                                    <div className="grid grid-cols-6 gap-6">
                                                        <div className="col-span-full sm:col-span-full">
                                                            <label
                                                                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                                                                htmlFor="noc_pdf"
                                                            >
                                                                Upload NOC from IIT Ropar
                                                                <span style={{ color: "#ff0000" }}> *</span>
                                                            </label>

                                                            {!props.details[61].name && (
                                                                <>
                                                                    <input
                                                                        className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                                                        aria-describedby="profile-picture-desc"
                                                                        id="noc_pdf"
                                                                        name="noc_pdf"
                                                                        type="file"
                                                                        required
                                                                        accept=".pdf"
                                                                        onChange={(e) =>
                                                                            props.handleFileSubmit(e, 5, 61, 1)
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
                                                                            NOC_&lt;your_email_id&gt; <br />
                                                                            For Example: NOC_abc@gmail.com
                                                                        </span>
                                                                    </div>
                                                                </>
                                                            )}

                                                            {props.details[61].name && (
                                                                <>
                                                                    <div className="flex border-2 mt-1 w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                                                        <input
                                                                            className="border-none block w-full shadow-sm sm:text-sm"
                                                                            id="noc_pdf"
                                                                            name="noc_pdf"
                                                                            type="text"
                                                                            value={props.details[61].name}
                                                                            required
                                                                            readOnly
                                                                        />

                                                                        <button
                                                                            type="button"
                                                                            className="flex items-center ml-2 mr-2 justify-center"
                                                                            onClick={() => props.emptyFileIndex(61)}
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
                                                    <div className="grid grid-cols-6 gap-6">
                                                        <div className="col-span-full sm:col-span-full">
                                                            <label
                                                                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                                                                htmlFor="resume_pdf"
                                                            >
                                                                Resume
                                                                <span style={{ color: "#ff0000" }}> *</span>
                                                            </label>

                                                            {!props.details[62].name && (
                                                                <>
                                                                    <input
                                                                        className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                                                        aria-describedby="profile-picture-desc"
                                                                        id="resume_pdf"
                                                                        name="resume_pdf"
                                                                        type="file"
                                                                        required
                                                                        accept=".pdf"
                                                                        onChange={(e) =>
                                                                            props.handleFileSubmit(e, 5, 62, 1)
                                                                        }
                                                                    />

                                                                    <div
                                                                        className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                                                                        id="resume_help"
                                                                    >
                                                                        <span className="font-semibold">
                                                                            {" "}
                                                                            Maximum file size:{" "}
                                                                        </span>
                                                                        5 MB
                                                                    </div>

                                                                    <div
                                                                        className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                                                                        id="resume_help"
                                                                    >
                                                                        <span className="font-semibold">
                                                                            Allowed file formats:
                                                                        </span>{" "}
                                                                        .pdf
                                                                    </div>

                                                                    <div
                                                                        className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                                                                        id="resume_help"
                                                                    >
                                                                        <span className="font-semibold">
                                                                            Recommended File Name Format:
                                                                        </span>
                                                                        <span>
                                                                            {" "}
                                                                            resume_&lt;your_email_id&gt; <br />
                                                                            For Example: resume_abc@gmail.com
                                                                        </span>
                                                                    </div>
                                                                </>
                                                            )}

                                                            {props.details[62].name && (
                                                                <>
                                                                    <div className="flex border-2 mt-1 w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                                                        <input
                                                                            className="border-none block w-full shadow-sm sm:text-sm"
                                                                            id="resume_pdf"
                                                                            name="resume_pdf"
                                                                            type="text"
                                                                            value={props.details[62].name}
                                                                            readOnly
                                                                            required
                                                                        />

                                                                        <button
                                                                            type="button"
                                                                            className="flex items-center ml-2 mr-2 justify-center"
                                                                            onClick={() => props.emptyFileIndex(62)}
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

                                            </>) :
                                                (<>
                                                    <div className="px-4 bg-white sm:p-6">
                                                        <div className="grid grid-cols-6 gap-6">
                                                            <div className="col-span-full sm:col-span-full">
                                                                <label
                                                                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                                                                    htmlFor="letter_PI_pdf"
                                                                >
                                                                    Letter of recommendation from PI
                                                                    <span style={{ color: "#ff0000" }}> *</span>
                                                                </label>

                                                                {!props.details[63].name && (
                                                                    <>
                                                                        <input
                                                                            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                                                            aria-describedby="profile-picture-desc"
                                                                            id="letter_PI_pdf"
                                                                            name="letter_PI_pdf"
                                                                            type="file"
                                                                            required
                                                                            accept=".pdf"
                                                                            onChange={(e) =>
                                                                                props.handleFileSubmit(e, 5, 63, 1)
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
                                                                                Letter_of_recom_&lt;your_email_id&gt; <br />
                                                                                For Example: Letter_of_recom_abc@gmail.com
                                                                            </span>
                                                                        </div>
                                                                    </>
                                                                )}

                                                                {props.details[63].name && (
                                                                    <>
                                                                        <div className="flex border-2 mt-1 w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                                                            <input
                                                                                className="border-none block w-full shadow-sm sm:text-sm"
                                                                                id="letter_PI_pdf"
                                                                                name="letter_PI_pdf"
                                                                                type="text"
                                                                                value={props.details[63].name}
                                                                                readOnly
                                                                                required
                                                                            />

                                                                            <button
                                                                                type="button"
                                                                                className="flex items-center ml-2 mr-2 justify-center"
                                                                                onClick={() => props.emptyFileIndex(63)}
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
                                                </>)
                                    }
                                    <div className="px-4 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-full sm:col-span-full">
                                                <label
                                                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                                                    htmlFor="sop_pdf"
                                                >
                                                    Statement of Purpose
                                                    <span style={{ color: "#ff0000" }}> *</span>
                                                </label>

                                                {!props.details[64].name && (
                                                    <>
                                                        <input
                                                            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                                            aria-describedby="profile-picture-desc"
                                                            id="sop_pdf"
                                                            name="sop_pdf"
                                                            type="file"
                                                            required
                                                            accept=".pdf"
                                                            onChange={(e) =>
                                                                props.handleFileSubmit(e, 5, 64, 1)
                                                            }
                                                        />
                                                        <div
                                                            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                                                            id="gate_result_help"
                                                        >
                                                            <span className="font-semibold">
                                                                {" "}
                                                                Mention your area of research interest,research background, and future research interests.
                                                            </span>
                                                        </div>
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
                                                                Statement_of_purpose_&lt;your_email_id&gt; <br />
                                                                For Example: Letter_of_recom_abc@gmail.com
                                                            </span>
                                                        </div>
                                                    </>
                                                )}

                                                {props.details[64].name && (
                                                    <>
                                                        <div className="flex border-2 mt-1 w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                                            <input
                                                                className="border-none block w-full shadow-sm sm:text-sm"
                                                                id="sop_pdf"
                                                                name="sop_pdf"
                                                                type="text"
                                                                value={props.details[64].name}
                                                                readOnly
                                                                required
                                                            />

                                                            <button
                                                                type="button"
                                                                className="flex items-center ml-2 mr-2 justify-center"
                                                                onClick={() => props.emptyFileIndex(64)}
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
