import React from "react";

function FAQs() {
  return (
    <>
      <div className="min-h-screen">
        <div className="bg-white mx-12 p-6">
          
          <div
            tabIndex={0}
            className="mb-4 collapse border border-base-300 bg-base-100 rounded-lg hover:bg-gray-100 collapse-plus"
          >
            <div className="collapse-title text-lg font-medium">
              What is the eligibility criteria for applying for PhD programme?
            </div>
            <div className="collapse-content">
              <p>They are:<br/>
                1. A candidate who has qualified for the award of Master's degree of this Institute or a recognised
                Institute or University in the discipline as prescribed in the regulations of the Senate is eligible
                to apply for the PhD programme of this Institute.
                <br/>
                2. A candidate who has qualified for the award of Bachelor's Degree in Engineering / Technology
                with exceptionally good academic background in the discipline as prescribed in the regulations
                of the Senate is also eligible to apply for PhD programme in Engineering/Technology of this
                Institute. 
              </p>
            </div>
          </div>

          <div
            tabIndex={0}
            className="mb-4 collapse border border-base-300 bg-base-100 hover:bg-gray-100 rounded-lg collapse-plus"
          >
            <div className="collapse-title text-lg font-medium">
              What are the requirements during the course of PhD programme?
            </div>
            <div className="collapse-content">
              <p>
                The academic programme leading to PhD degree is broad based and involves a minimum course credit requirement, comprehensive examination, synopsis seminar and thesis submission. The institute also encourages research in interdisciplinary areas through a system of joint supervision and interdepartmental  group activities.<br />
              </p>
            </div>
          </div>

          <div
            tabIndex={0}
            className="mb-4 collapse border border-base-300 bg-base-100 hover:bg-gray-100 rounded-lg collapse-plus"
          >
            <div className="collapse-title text-lg font-medium">
              How will students be evaluated during the course of PhD programme?
            </div>
            <div className="collapse-content">
              <p>
                Student is supposed to do a literature survey in a particular area of interest (may or may not be tightly coupled to research proposal), and find out at least 5 papers. The selected papers should be regular papers from A*/A/B ranked conferences/journals published in last 10 years. There will be two kinds of evaluation: <br />
                <br />
                (a) WRITTEN COMPREHENSIVE: DC of the student will conduct a written exam based on the papers identified by student/DC. Scope of the written examination will be the content and underneath basics of the papers. The evaluation of the written exam would be done by DC members.
                <br /><br/>
                (b) ORAL COMPREHENSIVE: Student will present these papers in front of department faculty members and doctoral committee members.
<br/>
Doctoral committee will ask questions on basics as well as detail of the research problems
being addressed in the given papers.
<br/>
Based on presentation and viva-voce, doctoral committee would decide marks in the oral
comprehensive examination.
                
              </p>
            </div>
          </div>

          <div
            tabIndex={0}
            className="mb-4 collapse border border-base-300 bg-base-100 hover:bg-gray-100 rounded-lg collapse-plus"
          >
            <div className="collapse-title text-lg font-medium">
              In what fields, can PhD be pursued?
            </div>
            <div className="collapse-content">
              <p>
                We, at IIT Ropar, provide the facility for research work leading to PhD degree in all the following departments:
                <br/>
                1. Department of Biomedical Engineering
                <br/>
                2. Department of Metallurgical and Materials Engineering
                <br/>
                3. Department of Chemical Engineering
                <br/>
                4. Department of Chemistry
                <br/>
                5. Department of Civil Engineering
                <br/>
                6. Department of Computer Science & Engineering
                <br/>
                7. Department of Electrical Engineering
                <br/>
                8. Department of Humanities & Social Sciences
                <br/>
                9. Department of Mathematics
                <br/>
                10. Department of Mechanical Engineering
                <br/>
                11. Department of Physics  
                <br/>
              </p>
            </div>
          </div>

          <div
            tabIndex={0}
            className="mb-4 collapse border border-base-300 bg-base-100 rounded-lg hover:bg-gray-100 collapse-plus"
          >
            <div className="collapse-title text-lg font-medium">
              From where can I access the courses in PhD provided by respective departments?
            </div>
            <div className="collapse-content">
              <p>
                Here's this direct link to the required page: 
                <a href="https://www.iitrpr.ac.in/phd-courses" target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgb(88 80 236)" }}> Link</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default FAQs;
