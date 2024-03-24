interface CategoriesProps {
	value: number
	onClickCategory: (index: number) => void
}

const Categories = ({ value, onClickCategory }: CategoriesProps) => {
	const categories = [
		'Все',
		'Шутеры',
		'Хорроры',
		'Гонки',
		'Файтинги',
		'Стратегии'
	]

	return (
		<div className='categories'>
			<ul>
				{categories.map((category, index) => (
					<li
						key={index}
						className={value === index ? 'active' : ''}
						onClick={() => onClickCategory(index)}
					>
						{category}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Categories
