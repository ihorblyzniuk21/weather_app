import { Container } from './styled'
import Aside from '../../components/Aside'
import MainContent from '../../components/MainContent'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCurrentWeatherByCityName, getHourlyWeatherByCityName } from '../../store/weather/asyncThunks'

const MainPage = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getHourlyWeatherByCityName())
	}, [])
	console.log(process.env.REACT_APP_API_URL)
	return (
		<Container>
			<Aside/>
			<MainContent/>
		</Container>
	)
}

export default MainPage;