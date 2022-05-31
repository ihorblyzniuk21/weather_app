import { useForm } from 'react-hook-form'
import { Form, Input, Button } from './styled'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	getAllCitiesFromLocalStorage,
	setCitiesToLocalStorage,
	setCurrentCity,
} from '../../../store/weather/slice'
import { getHourlyWeatherByCityName } from '../../../store/weather/asyncThunks'

const InputComponent = () => {
	const dispatch = useDispatch()
	const { register, handleSubmit } = useForm()
	const citiesArr = JSON.parse(localStorage.getItem('cities')) || []
	const error = useSelector(state => state.weather.error)

	useEffect(() => {
		dispatch(getAllCitiesFromLocalStorage())
	}, [citiesArr])

	const onSubmit = async (data) => {
		const arr = citiesArr.filter((city) => {
			if (city.name === data.name) {
				return city
			}
		})
		if (!arr.length && data.name !== '' && !error) {
			citiesArr.push({ name: data.name, default: false })
			dispatch(setCitiesToLocalStorage(citiesArr))
			await dispatch(getHourlyWeatherByCityName(data.name))
			console.log('input')
			dispatch(setCurrentCity(data.name))
		}

	}

	return (
		<>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input placeholder="Enter city" {...register('name')} />
				<Button type="submit">Enter</Button>
			</Form>
			<div style={{ color: 'red' }}>{error}</div>
		</>
	)
}

export default InputComponent