import React, { useEffect, useState } from 'react'

const WeatherTimeData = () => {
    const APIKEY = '73d287dd990c454a82b4c6a5264637ce'
    const [weather, setWeather] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=tuxtepec&lang=es&key=${APIKEY}`)
            const data = await response.json()
            // console.log(data.data)
            setWeather(data.data)
        }

        fetchData()
    }, [])


    return (
        <div>
            {
                weather.map(currentWeather => {
                    return (
                        <div className='row d-flex justify-content-center'>
                            <div className='col-md-4'>
                                <div className='card mt-3' >
                                    <div className="card-header">
                                        Ficha meteorologica
                                    </div>
                                    <div className='card-body'>
                                        <h5 className='card-title'>Ciudad : {currentWeather.city_name}</h5>
                                        <p className='card-text'>Pais : {currentWeather.country_code}</p>
                                        <p className='card-text'>Fecha : {currentWeather.datetime}</p>
                                        <p className='card-text'>Temperatura : {currentWeather.temp}°</p>
                                        <p className='card-text'>Sensación terminca : {currentWeather.app_temp}°</p>
                                        <p className='card-text'>Humedad : {currentWeather.rh}%</p>
                                        <p className='card-text'>Probabilidad de lluvia : {currentWeather.precip}%</p>
                                        <p className='card-text'>Descripción : {currentWeather.weather.description}</p>
                                        <p className='card-text'>Amencer : {currentWeather.sunrise}</p>
                                        <p className='card-text'>Atardecer : {currentWeather.sunset}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default WeatherTimeData