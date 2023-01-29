import React from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

const Pagination = ({limit, page, total_row, next_page, before_page}) => {

    return (
        
        <div className="flex flex-col items-end">

            <div className="inline-flex mt-2 xs:mt-0">

                <button className="inline-flex items-center px-4 py-2 text-sm font-medium rounded mr-5">
                    <span className="text-sm text-gray-700">
                        Page <span className="font-semibold text-gray-900">{page}</span>
                        <span className="mx-1">Per</span>
                        <span className="font-semibold text-gray-900"> {Math.ceil(total_row / limit)} </span>  of <span className="font-semibold text-gray-900 "> {total_row} </span> Entries
                    </span>
                </button>

                {page > 1 &&
                    <button onClick={before_page} className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded-l hover:bg-gray-900 ">
                        <BiLeftArrowAlt className="w-5 h-5" />
                        Prev
                    </button>
                }

                {page < Math.ceil(total_row / limit) &&
                    <button onClick={next_page} className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-500 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 ">
                        Next
                        <BiRightArrowAlt className='w-5 h-5' />
                    </button>
                }

            </div>
            
        </div>
        
    );

}

export default Pagination
