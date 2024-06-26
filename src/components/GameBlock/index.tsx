import { useState } from 'react'

interface Props {
	price: number
	title: string
	imageUrl: string
	sizes: number[]
	types: number[]
}

const GameBlock: React.FC<Props> = ({
	price,
	title,
	imageUrl,
	types,
}: Props) => {
	const typeNames = ['Standart Edition', 'Ultimate Edition']
	const [activeType, setActiveType] = useState(0)
	const [count, setCount] = useState(0)

	const handleClick = () => {
		setCount(prev => prev + 1)
	}

	return (
		<div className='game-block-wrapper'>
			<div className='game-block'>
				<img className='game-block__image' src={imageUrl} alt='game' />
				<h4 className='game-block__title'>{title}</h4>
				<div className='game-block__selector'>
					<ul>
						{types.map((type, index) => (
							<li
								onClick={() => setActiveType(index)}
								key={index}
								className={activeType === index ? 'active' : ''}
							>
								{typeNames[type]}
							</li>
						))}
					</ul>
				</div>
				<div className='game-block__bottom'>
					<div className='game-block__price'>от {price} ₽</div>
					<button
						className='button button--outline button--add'
						onClick={handleClick}
					>
						<svg
							width='12'
							height='12'
							viewBox='0 0 12 12'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
								fill='white'
							/>
						</svg>
						<span>Добавить</span>
						<i>{count}</i>
					</button>
				</div>
			</div>
		</div>
	)
}

export default GameBlock
