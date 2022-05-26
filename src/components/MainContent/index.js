import { CityName, Container, Wrapper } from './styled'
import InputComponent from './Input'
import { useSelector } from 'react-redux'
import Slider from "react-slick";
import WeatherItem from './WeatherItem'

const MainContent = () => {

	const hourlyWeather = useSelector(state => state.weather.hourlyWeather);
	const city = useSelector(state => state.weather.data)

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
	};

	return (
		<Container>
			<InputComponent/>
			<Wrapper>
				<CityName>Kyiv</CityName>
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