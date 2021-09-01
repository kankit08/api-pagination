import { useEffect, useState } from 'react';
import axios from 'axios';
import Users from './components/Users';
import Pagination from './components/Pagination';
import './App.css'
import { USER_PER_PAGE } from './utils/constants';


const App = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  

  useEffect( () => {
    const fetchUsers = async () =>{
      setLoading(true)
      const res = await axios.get('https://reqres.in/api/users')
      setLoading(false)

      setUsers(res.data.data);
      setTotalPages(Math.ceil(res.data.data.length/ USER_PER_PAGE))
    }
    fetchUsers()
  }, [])

  const handleClick = (num) => {
    setPage(num)
  }

  return(
    <div className="App">
      <h2 className="heading">Pagination App</h2>
      <p className="page_no">page{page}</p>
      { loading ? <p>Loading....</p>: 
      <> 
      <Users
      users={users}
      page={page} /> 
      <Pagination  totalPages={totalPages} handleClick={handleClick}/>
      </>}
    </div>
  )
}

export default App;
