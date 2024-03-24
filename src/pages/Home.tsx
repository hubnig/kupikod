import { useContext, useEffect, useState } from 'react'
import GameBlock from '@/components/GameBlock'
import { SearchContext } from '@/App'
import Categories from '@/components/Categories'
import Sort from '@/components/Sort'
import { Skeleton } from '@/components/GameBlock/Skeleton'

interface Igame {
	id: number
	title: string
	price: number
	imageUrl: string
	sizes: number[]
	types: number[]
}

const Home = () => {
	const [games, setgames] = useState<Igame[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [filters, setFilters] = useState({
		categoryName: 0,
		orderType: 'asc',
		sortType: {
			name: 'популярности',
			sortProperty: 'rating',
		},
	})

	const { searchValue } = useContext(SearchContext)

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true)

				const { categoryName, sortType, orderType } = filters
				const categoryQuery = categoryName > 0 ? `category=${categoryName}` : ''
				const searchQuery = searchValue ? `&search=${searchValue}` : ''

				const response = await fetch(
					`https://636524e2f711cb49d1f662c6.mockapi.io/items?${categoryQuery}&sortBy=${sortType.sortProperty}&order=${orderType}${searchQuery}`,
				)
				const gamesData = await response.json()
				//TODO: переделать следующие 4 строчки
				if (gamesData === 'Not found') {
					setgames([])
				} else {
					setgames(gamesData)
				}
				setIsLoading(false)
			} catch (error) {
				console.log(error)
				setIsLoading(false)
			}
		}

		fetchData()
		window.scrollTo(0, 0)
	}, [filters, searchValue])

	const handleCategoryClick = (item: number) => {
		setFilters(prevFilters => ({
			...prevFilters,
			categoryName: item,
		}))
	}

	const handleSortOrderClick = (item: string) => {
		setFilters(prevFilters => ({
			...prevFilters,
			orderType: item,
		}))
	}

	const handleSortItemClick = (item: {
		name: string
		sortProperty: string
	}) => {
		setFilters(prevFilters => ({
			...prevFilters,
			sortType: item,
		}))
	}

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories
					value={filters.categoryName}
					onClickCategory={handleCategoryClick}
				/>
				<Sort
					value={filters.sortType}
					onClickSortOrder={handleSortOrderClick}
					onClickSortItem={handleSortItemClick}
				/>
			</div>
			{isLoading ? (
				<>
					<h2 className='content__title'>Загрузка игр</h2>
					<div className='content__items'>
						{[...new Array(8).keys()].map(key => (
							<Skeleton key={key} />
						))}
					</div>
				</>
			) : (
				<>
					<h2 className='content__title'>Все игры:</h2>
					<div className='content__items'>
						{games.map(obj => (
							<GameBlock key={obj.id} {...obj} />
						))}
					</div>
				</>
			)}
		</div>
	)
}

export default Home
