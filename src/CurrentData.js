import {useEffect, useState} from 'react'

function CurrentData(props){

    const [dataToShow, setDataToShow] = useState({
        "TotalConfirmed":0,
        "TotalDeaths":0,
        "TotalRecovered":0,
    })

    const [country, setCountry] = useState('')

    useEffect(() => {
        if (props.country !== ''){
            getCountryData()
        }else{
            setCountry('World')
            getWorldData()  
        }
    }, [props.country])

    async function getWorldData(){
        const result = await fetch('https://api.covid19api.com/world/total')
        const data = await result.json()
        setDataToShow(data);
    }

    async function getCountryData(){
        const result = await fetch(`https://api.covid19api.com/total/country/${props.country}`)
        var data = await result.json()
        console.log(data)
        if(data.message === 'Not Found'){
            
        }else{
            setCountry(props.country)
            data = data.slice(-1)[0]
            const clearData = {'TotalConfirmed': data.Confirmed, "TotalDeaths":data.Deaths, "TotalRecovered":data.Recovered}
            setDataToShow(clearData)
        }
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return(
        <div style={{textAlign:'center'}}>
            <div className='card'>     
                <div className='card-body'>
                    <h3 className='mb-4'>Showing results for: {country}</h3>
                    <h4>Confirmed cases: <span className='text-primary'>{numberWithCommas(dataToShow.TotalConfirmed)}</span></h4>
                    <h4>Total deaths: <span className='text-danger'>{numberWithCommas(dataToShow.TotalDeaths)}</span></h4>
                    <h4>Total recovered: <span className='text-success'>{numberWithCommas(dataToShow.TotalRecovered)}</span></h4>
                </div>
            </div>
                
        </div>
    );
}

export default CurrentData