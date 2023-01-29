import React from 'react'

const TableHeadItem = ({ item }) => {
    return (
        <th title={item} scope="col" className="py-3 px-6"> {item} </th>
    );
};

const TableRow = ({ data }) => {
    if (data == undefined) {
        return "loading ..."
    }
    
    return (
        <tr className="bg-white border-b hover:bg-gray-200">

            {data.map((item, i) => {
                return <td key={i} className="py-4 px-6">{item}</td>;
            })}
           
        </tr>
    );
};

const Table = ({thead_data, tbody_data}) => {
    if (thead_data == undefined || tbody_data == undefined) {
        return "loading ..."
    }

    return (
        
        <table className="w-full text-xs text-left text-gray-600">
            <thead className="text-normal text-gray-800 uppercase bg-gray-300">
                <tr className='border-b'>

                    {thead_data.map((h, i) => {
                        return <TableHeadItem key={i} item={h} />;
                    })}

                </tr>
            </thead>
            <tbody>

                {tbody_data.map((item, i) => {
                    return <TableRow key={i} data={item.items} />;
                })}

            </tbody>
        </table>
        
    );

}

export default Table;
