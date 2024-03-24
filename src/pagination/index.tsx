import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

interface PaginationProps {
	onChangePage: (page: number) => void
}

const Pagination = ({ onChangePage }: PaginationProps) => {
	
	return (
		<ReactPaginate
			className={styles.root}
			breakLabel='...'
			nextLabel={
				<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M6 12H18M18 12L13 7M18 12L13 17'
						stroke='#4ECB4A'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			}
			onPageChange={event => onChangePage(event.selected + 1)}
			pageRangeDisplayed={8}
			pageCount={2}
			previousLabel={
				<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M6 12H18M6 12L11 7M6 12L11 17'
						stroke='#4ECB4A'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			}
			renderOnZeroPageCount={null}
		/>
	)
}

export default Pagination
