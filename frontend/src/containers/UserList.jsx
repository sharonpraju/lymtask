import React from 'react';
import axios from 'axios';
import Pagination from '../components/Pagination'

function UserList() {

    const [data, setData] = React.useState([]);
    const [keyword, setKeyword] = React.useState('');
    const [currentPage, setCurrentPage] = React.useState(1);
    const [limit, setLimit] = React.useState(10);

    const fetchUsers = (page) => {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_BASE_URL}/users`,
            params: {
                page: page,
                limit: limit,
                keyword: keyword
            }
        }).then((response) => {
            setData(response.data.data);
            setCurrentPage(page);
        }).catch((error) => {
            console.log(error.response.data.message);
        });
    }
    
    React.useEffect(() => {
        fetchUsers(1);
    }, [keyword]);

    React.useEffect(() => {
        fetchUsers(currentPage);
    }, []);

    return (
        <div className='container'>
            <div className='col-12 d-flex justify-content-end mb-3'>
                <div>
                    <input className='form-control' type='text' placeholder='Search' onChange={(e) => { setKeyword(e.target.value) }}></input>
                </div>
            </div>
            <div className='p-3'>
                {
                    data?.users?.map((obj) => {
                        return (
                            <div className='col-12 row border rounded p-3 mt-3'>
                                <div className='col-12 col-md-3 text-start'>{obj.name}</div>
                                <div className='col-12 col-md-3 text-start'>{obj.email}</div>
                                <div className='col-12 col-md-3 text-start'>{obj.phone}</div>
                                <div className='col-12 col-md-3 text-start'>{obj.country}</div>
                            </div>
                        )
                    })
                }
                <div className='col-12 d-flex justify-content-end mt-5 pe-3'>
                    <Pagination currentPage={currentPage} pageCount={Math.ceil(data.count / limit)} paginationFun={fetchUsers}></Pagination>
                </div>
            </div>
        </div>
    )
}

export default UserList