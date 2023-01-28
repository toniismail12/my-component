import React from 'react'

const TableHeadItem = ({ item }) => {
    return (
        <th title={item} scope="col" className="py-3 px-6"> {item} </th>
    );
};

const TableRow = ({ data }) => {
    return (
        <tr className="bg-white border-b hover:bg-gray-200">

            {data.map((item) => {
                return <td key={item} className="py-4 px-6">{item}</td>;
            })}
           
        </tr>
    );
};

const Table = ({thead_data, tbody_data}) => {

    return (
        
        <table className="w-full text-xs text-left text-gray-600">
            <thead className="text-normal text-gray-800 uppercase bg-gray-300">
                <tr className='border-b'>

                    {thead_data.map((h) => {
                        return <TableHeadItem key={h} item={h} />;
                    })}

                </tr>
            </thead>
            <tbody>

                {tbody_data.map((item) => {
                    return <TableRow key={item.id} data={item.items} />;
                })}

            </tbody>
        </table>
        
    );

}

export default Table;
