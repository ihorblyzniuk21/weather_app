import { createSlice } from "@reduxjs/toolkit";
import { getCurrentWeatherByCityName, getHourlyWeatherByCityName } from './asyncThunks'

const slice = createSlice({
	name: 'weather',
	initialState: {
		data: null,
		hourlyWeather: [],
		cities: []
	},
	reducers: {
		getCities(state) {
			state.cities = JSON.parse(localStorage.getItem('cities')) || [];
		}
	},
	extraReducers: {
		[getHourlyWeatherByCityName.fulfilled]: (state, action) => {
			state.data = action.payload;
			state.hourlyWeather = action.payload.list
		}
	}
})

export const { getCities } = slice.actions;
export default slice.reducer;