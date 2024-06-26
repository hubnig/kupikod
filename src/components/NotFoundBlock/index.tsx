import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
	const handleGoBack = () => {
		window.history.back()
	}

	return (
		<div className={styles.root}>
			<h1>
				<span>😕</span>
				<br />
				Ничего не найдено
			</h1>
			<p>
				К сожалению данная страница отсутсвтует в нашем интернет-магазине.
			</p>
			<button onClick={handleGoBack}>Назад</button>
		</div>
	)
}

export default NotFoundBlock
