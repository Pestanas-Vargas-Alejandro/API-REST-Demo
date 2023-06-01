import React, { useState } from 'react'
const APIKEY = '73d287dd990c454a82b4c6a5264637ce'

const WeatherTimeData = () => {
    const [currentWeather, setCurrentWeather] = useState([])
    const [forecastWeather, setForecastWeather] = useState([])
    const [city, setCity] = useState('')

    const searchPressed = () => {
        fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&lang=es&key=${APIKEY}&include=minutely`)
            .then((res) => res.json())
            .then((data) => {
                setCurrentWeather(data.data)
                setForecastWeather(data.minutely)
            })
    }

    return (
        <div className='mt-4'>
            <div>
                <input
                    className='text-center border border-1 rounded-4 w-25 p-3 '
                    type="text"
                    placeholder='Ciudad...'
                    onChange={(e) => setCity(e.target.value)}
                />
                <button
                    className='btn btn-primary ms-4'
                    onClick={(searchPressed)}>
                    Buscar
                </button>
            </div>

            {
                currentWeather.map(currentWeather => {
                    return (
                        <div className='row d-flex justify-content-center'>
                            <div className='col-md-4'>
                                <div className='card shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-5 mt-5' >
                                    <div className='card-body'>
                                        <h5 className='card-title'>Ahora</h5>
                                        <hr />
                                        <h5 className='card-title'>{currentWeather.city_name}, {currentWeather.country_code}</h5>
                                        <p className='card-text'>Temperatura : {currentWeather.temp}°C</p>
                                        <p className='card-text'>Sensación terminca : {currentWeather.app_temp}°C</p>
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

            {
                forecastWeather.map(forecastWeather => {
                    return (
                        <div className='row d-flex justify-content-center'>
                            <div>
                                <h5 className='card-title'>Pronóstico de 1 hora / minuto</h5>
                                <hr />
                            </div>
                            <div className='col-md-4'>
                                <div className='card shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-5 mt-5' >
                                    <div className='card-body'>
                                        <h5 className='card-title'>{forecastWeather.timestamp_local}</h5>
                                        <hr />
                                        <h5 className='card-title'>Temperatura : {forecastWeather.temp}°C</h5>
                                        <p className='card-text'>Probabilidad de lluvia : {forecastWeather.precip}%</p>
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