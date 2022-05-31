import { Container, Feels, Humidity, Pressure, Temp, Time } from './styled'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const WeatherItem = ({ data, city }) => {

	return (
		<Container>
			<Time>{dayjs(data.dt * 1000 - (city.city.timezone * 1000)).format('DD/MMM/HH:mm')}</Time>
			<div style={{ fontStyle: 'italic', fontSize: '15px' }}>{data.weather[0].main}</div>
			<div style={{ fontSize: '15px' }}>{data.weather[0].description}</div>
			<Temp>Temperature: {Math.round(data.main.temp)} deg</Temp>
			<Feels>Feels like: {Math.round(data.main.feels_like)} deg</Feels>

			<Pressure>Pressure: {data.main.pressure}</Pressure>
			<Humidity>Humidity: {data.main.humidity}</Humidity>
		</Container>
	)
}

export default WeatherItem