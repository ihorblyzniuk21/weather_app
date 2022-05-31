import { createSlice } from '@reduxjs/toolkit'
import { getHourlyWeatherByCityName } from './asyncThunks'

const slice = createSlice({
	name: 'weather',
	initialState: {
		data: null,
		hourlyWeather: [],
		cities: [],
		currentCityName: null,
		defaultCity: null,
		error: null,
	},
	reducers: {
		getAllCitiesFromLocalStorage (state) {
			state.cities = JSON.parse(localStorage.getItem('cities')) || []
		},
		getDefaultCity (state) {
			const cities = JSON.parse(localStorage.getItem('cities')) || []
			const defaultCity = cities.filter((city) => {
				return city.default === true
			})
			state.currentCityName = defaultCity.length ? defaultCity[0].name : null
		},
		setDefaultCityToLocalStorage (state, action) {
			localStorage.setItem('defaultCity', JSON.stringify(action.payload))
		},
		getDefaultCityFromLocalStorage (state) {
			state.defaultCity = JSON.parse(localStorage.getItem('defaultCity')) || null
		},
		setCurrentCity (state, action) {
			state.currentCityName = action.payload
		},
		removeCurrentCity (state) {
			state.currentCityName = null
		},
		setCitiesToLocalStorage (state, action) {
			localStorage.setItem('cities', JSON.stringify(action.payload))
		},
	},
	extraReducers: {
		[getHourlyWeatherByCityName.fulfilled]: (state, action) => {
			state.data = action.payload
			state.hourlyWeather = action.payload.list
			state.error = null
		},
		[getHourlyWeatherByCityName.rejected]: (state, action) => {
			state.error = action.payload.response.data.message
		},
	},
})

export const {
	getAllCitiesFromLocalStorage,
	getDefaultCity,
	setCitiesToLocalStorage,
	setCurrentCity,
	setDefaultCityToLocalStorage,
} = slice.actions
export default slice.reducer