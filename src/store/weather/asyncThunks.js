import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/api";

export const getCurrentWeatherByCityName = createAsyncThunk(
	"weather/getWeatherByCityName",
	async (name, { rejectWithValue }) => {
		try {
			const { data } = await api.getCurrentWeatherByCityName(name);
			return data
		} catch (e) {
			return rejectWithValue(e);
		}
	}
)

export const getHourlyWeatherByCityName = createAsyncThunk(
	"weather/getHourlyWeatherByCityName",
	async (name, { rejectWithValue }) => {
		try {
			const { data } = await api.getHourlyWeatherByCityName(name);
			return data
		} catch (e) {
			return rejectWithValue(e);
		}
	}
)