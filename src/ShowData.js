import CurrentData from './CurrentData'
import {useState} from 'react'

function ShowData(){

    const [search, setSearch] = useState('')
    const [country, setCountry] = useState('')

    function updateSearch(e){
        setSearch(e.target.value)
    }

    function getSearch(e){
        e.preventDefault()
        setCountry(search)
    }

    return(
        <div>
            <form onSubmit={getSearch} className="form-inline my-2 my-lg-0 centered">
                <input className="form-control mr-sm-2" type="search" placeholder="Country name" aria-label="Search" value={search} onChange={updateSearch}/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <br></br>
            <CurrentData country={country}/>
        </div>  
    );
}

export default ShowData