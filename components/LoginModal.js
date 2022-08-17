import { useState } from "react";
import Modal from "./Modal";

const LoginModal = ({ name, styling }) => {
  const [open, setOpen] = useState();
  return (
    <>
      <button type="button" className={styling} onClick={() => setOpen(true)}>
        {name}
      </button>
      <Modal open={open}>
        <div className="fixed inset-0 bg-opacity-80 bg-black z-50 ">
          <div className="bg-themeLight absolute rounded-lg inset-0 md:mt-5 md:right-1/4 md:mb-5 md:left-1/4 ">
            <form className="flex flex-col justify-center p-10 space-y-5 h-full">
              <h1 className="text-2xl">Add New Offer:</h1>
              <div className="flex flex-col">
                <label className="flex flex-col">
                  Title:
                  <input
                    type="text"
                    placeholder="Add offer title"
                    className="border-b-2 pt-2 border-themePrimary outline-none "
                  />
                </label>
              </div>
              <label className="flex flex-col">
                Description:
                <textarea
                  rows="7"
                  placeholder="Max 200 signs"
                  className="border-b-2 pt-2 border-themePrimary outline-none resize-none"
                />
              </label>

              <label className="flex flex-col">
                Hourly rate:
                <input
                  type="text"
                  placeholder="Give your price "
                  className="border-b-2 pt-2 border-themePrimary outline-none "
                />
              </label>

              <div className="flex justify-center space-x-10">
                <button type="submit" className="button text-themePrimary">
                  Add Offer
                </button>
                <button
                  type="button"
                  className="button"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LoginModal;
