import { Table, Pagination, Button } from './component';

export default function Page() {

	const url = '/api/';

	const [limit, setLimit] = useState(10);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [total_row, setTotal_row] = useState('');

    const [show_modal, set_show_modal] = useState(false)

    const thead = ["No", "Subject", "Date"];

    const tbody = [
        {
          items: ["1", "jhhh", "01/01/2021"]
        },
        {
          items: ["2", "xixi", "12/24/2020"]
        },
        {
          items: ["3", "aihihihi", "12/01/2020"]
        },
    ]

	const onChangeLimit = (e) => {

        setLimit(e.target.value)

        api.get(url + '?limit=' + e.target.value).then(res => {

            // console.log(res.data)
            setData(res.data.data)

        }).catch(err => {
            console.log(err)
        })

    }

	const onPage = (num, action) => (onClick) => {

        if (action == 'next') {
            setLimit(limit)
            setPage(num + 1)
            var halaman = num + 1
    
            api.get(url + "?limit=" + limit + "&page=" + halaman).then(res => {
    
                // console.log(res.data)
                setData(res.data.data)
    
            }).catch(err => {
                console.log(err)
            })
    
        }

        if (action == 'before') {
            setLimit(limit)
            setPage(num - 1)
            var halaman = num - 1

            api.get(url + "?limit=" + limit + "&page=" + halaman).then(res => {

                // console.log(res.data)
                setData(res.data.data)

            }).catch(err => {
                console.log(err)
            })
        }

    }

    const handle_show_modal = (status) => (onClick) => {

        if (status == false) {
			set_show_modal(true)
		} else {
			set_show_modal(false)
		}
        
    }

    return (

        <div className="grid grid-cols-1 gap-5">

            <div>
                {/* button show modal */}
				<button onClick={handle_show_modal(show_modal)} className="bg-blue-pusri p-2 text-white rounded-lg hover:bg-blue-800 hover:font-bold transition-all"><span className="mx-5">Show Modal</span></button>
			</div>

            <div className="col-span-1 bg-white border border-gray-300">

                {/* button component */}
                <Button text="New" btn="primary" />

				<div className="inline-flex items-center text-sm font-medium rounded col-span-1">
                    Shows <input onChange={onChangeLimit} value={limit} type="number" className="w-14 border-2 p-1 focus:border-blue-600 focus:outline-none transition ease-in-out rounded-lg ml-1" />
                </div>
                
                {/* table component */}
                <Table thead_data={thead} tbody_data={tbody} /> 

                {/* pagination component */}
                <Pagination 
                    limit={limit} 
                    page={page} 
                    total_row={total_row} 
                    before_page={onPage(page, 'before')} 
                    next_page={onPage(page, 'next')} 
                />
               
            </div>

            {/* modal component */}
            <Modal
				// tittle="heheh"
				show_modal={show_modal}
				onClick={handle_show_modal(show_modal)}
			>
				
                {/* content here */}
				<div>
											
					{/* content */}
                    <h1>Hheheh</h1>

				</div>
                {/* end content */}

			</Modal>

        </div>

    )
}
