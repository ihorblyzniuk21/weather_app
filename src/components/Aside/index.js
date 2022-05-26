import { Container, List, ListItem } from './styled'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Aside = () => {
	// const cities = JSON.parse(localStorage.getItem('cities')) || null
	const cities = useSelector(state => state.weather.cities);
	return (
		<Container>
			<List>
				{cities && (
					cities.map((city, index) => {
						return (
							<ListItem key={index}>{city.name}</ListItem>
						)
					})
				)}

			</List>
		</Container>
	)
}

export default Aside