import { useContext, useEffect, useState } from 'react'

import Categories from '@/components/Categories'
import PizzaBlock from '@/components/PizzaBlock'
import { Skeleton } from '@/components/PizzaBlock/Skeleton'
import Sort from '@/components/Sort'
import { SearchContext } from '@/App'

interface IPizza {
	id: number
	title: string
	price: number
	imageUrl: string
	sizes: number[]
	types: number[]
}

const Home = () => {
	const [pizzas, setPizzas] = useState<IPizza[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
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
				const pizzasData = await response.json()
				//TODO: переделать следующие 4 строчки
				if (pizzasData === 'Not found') {
					setPizzas([])
				} else {
					setPizzas(pizzasData)
				}
				setIsLoading(false)
			} catch (error) {
				console.log(error)
				setIsLoading(false)
			}
		}

		fetchData()
		window.scrollTo(0, 0)
	}, [filters, searchValue, currentPage])

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
						{pizzas.map(obj => (
							<PizzaBlock key={obj.id} {...obj} />
						))}
					</div>
				</>
			)}
		</div>
	)
}

export default Home
