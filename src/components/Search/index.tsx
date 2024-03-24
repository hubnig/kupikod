import { ChangeEvent, useContext } from 'react'
import styles from './Search.module.scss'
import { SearchContext } from '@/App'

const Search = () => {
	const { searchValue, setSearchValue } = useContext(SearchContext)

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value)
	}
	
	return (
		<div className={styles.root}>
			<svg
				className={styles.iconSer}
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z'
					stroke='#000000'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
			<input
				className={styles.search}
				type='text'
				placeholder='Поиск игр...'
				value={searchValue}
				onChange={handleChange}
			/>
			{searchValue && (
				<svg
					className={styles.iconDel}
					onClick={() => setSearchValue('')}
					width='32px'
					height='32px'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M8 8L16 16'
						stroke='#000000'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M16 8L8 16'
						stroke='#000000'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			)}
		</div>
	)
}

export default Search
