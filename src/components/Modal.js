import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
// import useAnalyticsEventTracker from "../hooks/useAnalyticsEventTracker";

export default function Modal({ title, text, open, setOpen }) {
  // const gaEventTracker = useAnalyticsEventTracker("Modal");
  const startButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={startButtonRef}
        // disable background clicks
        onClose={() => {}}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-200 sm:mx-0 sm:h-10 sm:w-10">
                      <Squares2X2Icon
                        className="h-6 w-6 text-blue-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        {title}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{text}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex bg-gray-50 px-4 py-3 sm:flex sm:px-6">
                  <button
                    type="button"
                    className="mt-3 mr-1 grow justify-center rounded-md border border-gray-300 bg-lime-200 px-4 py-2 text-base font-medium shadow-sm hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setOpen(1);
                      // gaEventTracker("level easy");
                    }}
                    ref={startButtonRef}
                  >
                    Easy
                  </button>
                  <button
                    type="button"
                    className="mt-3 mr-1 grow justify-center rounded-md border border-gray-300 bg-amber-200 px-4 py-2 text-base font-medium shadow-sm hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setOpen(2);
                      // gaEventTracker("level hard");
                    }}
                    ref={startButtonRef}
                  >
                    Hard
                  </button>
                  <button
                    type="button"
                    className="mt-3 grow justify-center rounded-md border border-gray-300 bg-red-300 px-4 py-2 text-base font-medium shadow-sm hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setOpen(3);
                      // gaEventTracker("level hardest");
                    }}
                    ref={startButtonRef}
                  >
                    Hardest!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
