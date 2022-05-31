import { Container } from './styled'
import Aside from '../../components/Aside'
import MainContent from '../../components/MainContent'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getHourlyWeatherByCityName } from '../../store/weather/asyncThunks'
import { getDefaultCity } from '../../store/weather/slice'

const MainPage = () => {
	const dispatch = useDispatch()
	const currentCityName = useSelector(state => state.weather.currentCityName)

	useEffect(() => {
		if (currentCityName) {
			dispatch(getHourlyWeatherByCityName(currentCityName))
		}
	}, [currentCityName])

	useEffect(() => {
		dispatch(getDefaultCity())
	}, [])

	return (
		<Container>
			<Aside/>
			<MainContent
				currentCityName={currentCityName}
			/>
		</Container>
	)
}

export default MainPage