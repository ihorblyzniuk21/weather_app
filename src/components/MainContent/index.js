import { CityName, Container, Wrapper } from './styled'
import InputComponent from './Input'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import WeatherItem from './WeatherItem'

const MainContent = ({ currentCityName }) => {
	const hourlyWeather = useSelector(state => state.weather.hourlyWeather)
	const city = useSelector(state => state.weather.data)

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 3,
		initialSlide: 0,
	}

	return (
		<Container>
			<InputComponent/>
			<Wrapper>
				<div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
					<CityName>Weather in {currentCityName}</CityName>
				</div>
				<Slider {...settings}>
					{hourlyWeather.length && hourlyWeather.map((item, index) => {
						return (
							<WeatherItem
								key={index}
								data={item}
								city={city}
							/>
						)
					})}
				</Slider>
			</Wrapper>
		</Container>
	)
}

export default MainContent