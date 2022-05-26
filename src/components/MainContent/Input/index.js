import { Button, Input } from 'antd'
import { useForm } from "react-hook-form";
import { Form } from './styled'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCities } from '../../../store/weather/slice'

const InputComponent = () => {
	const dispatch = useDispatch()
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const citiesArr = JSON.parse(localStorage.getItem('cities')) || [];

	useEffect(() => {
		dispatch(getCities())
	}, [citiesArr])

	const onSubmit = (data) => {
		console.log(data)
		citiesArr.push({name: data.name, default: false})
		localStorage.setItem('cities', JSON.stringify(citiesArr))
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<input placeholder="Enter city" {...register("name")} />
			<button type='submit'>Enter</button>
		</Form>
	)
}

export default InputComponent