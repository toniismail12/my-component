import React from 'react'

const Button = ({text, btn, onClick}) => {

    if (btn == 'primary') {
        return (
            
            <button onClick={onClick} className='bg-blue-500 text-white hover:text-white p-2 rounded-lg hover:font-bold transition-all'> <span className="mx-3"> {text}  </span> </button>
            
        );
    }

    if (btn == 'success') {
        return (
            
            <button onClick={onClick} className='bg-green-600 text-white hover:text-white p-2 rounded-lg hover:font-bold transition-all'> <span className="mx-3"> {text}  </span> </button>
            
        );
    }

    if (btn == 'warning') {
        return (
            
            <button onClick={onClick} className='bg-yellow-500 text-white hover:text-white p-2 rounded-lg hover:font-bold transition-all'> <span className="mx-3 text-gray-900"> {text}  </span> </button>
            
        );
    }

    if (btn == 'danger') {
        return (
            
            <button onClick={onClick} className='bg-red-500 text-white hover:text-white p-2 rounded-lg hover:font-bold transition-all'> <span className="mx-3 text-white"> {text}  </span> </button>
            
        );
    }

    if (btn == 'secondary') {
        return (
            
            <button onClick={onClick} className='bg-gray-500 text-white hover:text-white p-2 rounded-lg hover:font-bold transition-all'> <span className="mx-3 text-white"> {text}  </span> </button>

        );
    }

}

export default Button
