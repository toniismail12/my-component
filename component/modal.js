import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ children, show_modal, onClick, tittle }) => {

    return (
        <>
            {show_modal && (
                <>
                    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto shadow-xl outline-none focus:outline-none">
                        <div className="relative lg:w-5/12 max-w-full mx-auto my-6">
                            {/*content*/}
                            <div className="relative flex flex-col w-full bg-white border-0 rounded-xl shadow-lg outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-center justify-between p-3 border-b border-solid rounded-t border-slate-200">
                                    <h3 className="text-lg font-semibold">
                                        {tittle}
                                    </h3>
                                    <button onClick={onClick} className='hover:bg-gray-300 p-2 rounded-xl'><AiOutlineClose className='w-7 h-7' /></button>
                                </div>

                                {/*body*/}
                                <div className="relative grid grid-cols-1 p-3">

                                    <div className="p-2 lg:w-full">

                                        {children}

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
                </>
            )}
        </>
    );
};

export default Modal;
