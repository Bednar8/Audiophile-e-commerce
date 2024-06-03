import {useNavigate} from "react-router-dom"

function ButtonGoBack() {
	const navigate = useNavigate()

	const handleGoBack = () => navigate(-1)
	return (
		<button
			className="capitalize opacity-50 text-[15px]"
			onClick={handleGoBack}>
			go back
		</button>
	)
}

export default ButtonGoBack
