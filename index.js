import { Table, Button } from './component';

export default function Page() {

    const thead = ["No", "Subject", "Date"];

    const tbody = [
        {
          id: "1",
          items: ["1", "jhhh", "01/01/2021"]
        },
        {
          id: "2",
          items: ["2", "xixi", "12/24/2020"]
        },
        {
          id: "3",
          items: ["3", "aihihihi", "12/01/2020"]
        },
    ]

    return (

        <div className="grid grid-cols-1 gap-5">

            <div className="col-span-1 bg-white border border-gray-300">

                <Button text="New" btn="primary" />
                <Table thead_data={thead} tbody_data={tbody} /> 
               
            </div>

        </div>

    )
}
