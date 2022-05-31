import { Button, Container, List, ListItem } from './styled'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
	getAllCitiesFromLocalStorage,
	setCitiesToLocalStorage,
	setCurrentCity,
	setDefaultCityToLocalStorage,
} from '../../store/weather/slice'

const Aside = () => {
	const dispatch = useDispatch()
	const cities = useSelector(state => state.weather.cities)
	const currentCityName = useSelector(state => state.weather.currentCityName)
	const defaultCity = useSelector(state => state.weather.defaultCity)

	const setDefaultCity = (name) => {
		dispatch(setCurrentCity(name))

	}

	useEffect(() => {
		dispatch(getAllCitiesFromLocalStorage())
	}, [currentCityName, defaultCity])

	const onCityDeleteClick = (name) => {
		const citiesArr = JSON.parse(localStorage.getItem('cities'))
		const modifiedArr = citiesArr.filter((city) => {
			if (city.name !== name) {
				return city
			}
		})
		dispatch(setCitiesToLocalStorage(modifiedArr))
	}

	const setAsDefault = (city) => {
		const citiesArr = JSON.parse(localStorage.getItem('cities'))
		const filteredDefaultArr = citiesArr.filter((item) => {
			if (city.name === item.name) {
				return item
			}
		}).map((item) => {
			return {
				...item,
				default: true,
			}
		})
		const filteredNotDefaultArr = citiesArr.filter((item) => {
			if (city.name !== item.name) {
				return item
			}
		}).map((item) => {
			return {
				...item,
				default: false,
			}
		})
		const newArray = [...filteredDefaultArr, ...filteredNotDefaultArr]
		dispatch(setCitiesToLocalStorage(newArray))
		dispatch(setCurrentCity(city.name))
		dispatch(setDefaultCityToLocalStorage(city))
		dispatch(getAllCitiesFromLocalStorage())
	}

	return (
		<Container>
			<h2>Your cities: </h2>
			<List>
				{cities && (
					cities?.map((city, index) => {
						return (
							<ListItem onClick={() => setDefaultCity(city.name)}
									  style={city.default ? { color: 'red' } : null} key={index}>
								<div style={{ marginRight: '20px', fontWeight: '700' }}>{city.name}</div>
								<div>
									<Button onClick={() => onCityDeleteClick(city.name)}>Delete</Button>
									<Button onClick={() => setAsDefault(city)}>Set as default</Button>
								</div>
							</ListItem>
						)
					})
				)}
			</List>
		</Container>
	)
}

export default Aside