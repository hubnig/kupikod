import { useState } from 'react'

interface SortProps {
	value: {
		name: string
		sortProperty: string
	}
	onClickSortItem: (item: { name: string; sortProperty: string }) => void
	onClickSortOrder: (item: string) => void
}

const Sort = ({ value, onClickSortItem, onClickSortOrder }: SortProps) => {
	const [isSort, setIsSort] = useState(true)
	const [open, setOpen] = useState(false)
	const list = [
		{ name: 'популярности', sortProperty: 'rating' },
		{ name: 'цене', sortProperty: 'price' },
		{ name: 'алфавиту', sortProperty: 'title' },
	]

	const handleSortClick = (item: { name: string; sortProperty: string }) => {
		onClickSortItem(item)
		setOpen(!open)
	}

	const handleSortOrder = (item: string) => {
		onClickSortOrder(item)
		setIsSort(!isSort)
	}

	return (
		<div className='sort'>
			<div className='sort__label'>
				{isSort ? (
					<svg
						width='10'
						height='6'
						viewBox='0 0 10 6'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						onClick={() => handleSortOrder('desc')}
					>
						<path
							d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
							fill='#2C2C2C'
						/>
					</svg>
				) : (
					<svg
						width='10'
						height='6'
						viewBox='0 0 10 6'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						onClick={() => handleSortOrder('asc')}
					>
						<path
							d='M10 1C10 1.16927 9.93815 1.31576 9.81445 1.43945C9.69075 1.56315 9.54427 1.625 9.375 1.625H0.625C0.455729 1.625 0.309245 1.56315 0.185547 1.43945C0.061849 1.31576 0 1.16927 0 1C0 0.830729 0.061849 0.684245 0.185547 0.560547L4.56055 4.93555C4.68424 5.05925 4.83073 5.1211 5 5.1211C5.16927 5.1211 5.31576 5.05925 5.43945 4.93555L9.81445 0.560547C9.93815 0.436849 10 0.290365 10 0.121094C10 -0.0481768 9.93815 -0.194661 9.81445 -0.318359C9.69075 -0.442057 9.54427 -0.503912 9.375 -0.503912H0.625C0.455729 -0.503912 0.309245 -0.442057 0.185547 -0.318359C0.061849 -0.194661 0 -0.0481768 0 0.121094C0 0.290365 0.061849 0.436849 0.185547 0.560547L4.56055 4.93555C4.68424 5.05925 4.83073 5.1211 5 5.1211C5.16927 5.1211 5.31576 5.05925 5.43945 4.93555L9.81445 0.560547C9.93815 0.436849 10 0.290365 10 0.121094Z'
							fill='#2C2C2C'
						/>
					</svg>
				)}

				<b>Сортировка&nbsp;по:</b>
				<button onClick={() => setOpen(!open)}>{value.name}</button>
			</div>
			{open && (
				<div className='sort__popup'>
					<ul>
						{list.map((obj, index) => (
							<li
								onClick={() => handleSortClick(obj)}
								key={index}
								className={
									value.sortProperty === obj.sortProperty ? 'active' : ''
								}
							>
								{obj.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default Sort
