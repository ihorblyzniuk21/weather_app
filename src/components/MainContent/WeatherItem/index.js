import { Container, Feels, Humidity, Pressure, Temp, Time } from './styled'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc)

const WeatherItem = ({ data, city }) => {
	// console.log(dayjs().utcOffset(6000))
	if (city) {
		console.log(dayjs(data.dt*1000-(city.city.timezone*1000)).format('ddd/MMM/HH'));
	}

	return (
		<Container>
			<Time>{dayjs(data.dt*1000-(city.city.timezone*1000)).format('d/MMM/HH:mm')}</Time>
			<div>{data.weather[0].main}</div>
			<div>{data.weather[0].description}</div>
			<div style={{display: "flex"}}>
				<Temp>Temperature: {Math.round(data.main.temp)} deg</Temp> /
				<Feels>Feels like: {Math.round(data.main.feels_like)} deg</Feels>

			</div>
			<Pressure>Pressure: {data.main.pressure}</Pressure>
			<Humidity>Humidity: {data.main.humidity}</Humidity>
		</Container>
	)
}

export default WeatherItem