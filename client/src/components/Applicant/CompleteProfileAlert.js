import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { yellow } from "@mui/material/colors";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  height: "40%",
  bgcolor: '#FFFF8A',
  boxShadow: 40,
  borderRadius: 5,
};
function CompleteProfile(props) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="p-4" style={{ borderRadius: '15px' }} role="alert">
            <div className="pt-2 px-4 flex space-x-6">
              <div className="flex items-center">
                <svg
                  className="mr-2 w-5 h-5 text-yellow-700 dark:text-yellow-800"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <h3 className="text-xl font-medium text-yellow-700 dark:text-yellow-800 text-center">
                  Profile Not Complete
                </h3>
              </div>
            </div>
            <div className="px-4 mt-5 mb-3 text-lg text-yellow-700 dark:text-yellow-800">
              Mandatory details must be filled in your profile. Please complete your
              profile first to participate in the admission process.
            </div>
            <div className="flex justify-center items-center mt-2 p-4">
              <a href="/my-profile">
                <button
                  type="button"
                  className="rounded-xl text-xl focus:outline-none text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-lg mt-12 px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-yellow-800 dark:hover:bg-yellow-900"
                >
                  <svg
                    className="-ml-0.5 mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Visit Profile
                </button>
              </a>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default CompleteProfile;
