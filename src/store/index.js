import { configureStore } from '@reduxjs/toolkit'
import weather from './weather/slice'

export default configureStore({
	reducer: {
		weather,
	},
})