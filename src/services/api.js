import apiClient from '../libs/apiClient'

export const api = {
	getCurrentWeatherByCityName: async (name) => {
		const response = await apiClient.get(`/weather?q=London&units=metric&appid=08d67261903182adfe0cf1b06eeca5fc`)
		return response
	},

	getHourlyWeatherByCityName: async (name) => {
		const response = await apiClient.get(`/forecast?q=${name}&units=metric&appid=08d67261903182adfe0cf1b06eeca5fc`)
		return response
	},
}