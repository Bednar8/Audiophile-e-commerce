import {createContext, useContext, useState} from "react"
import PropTypes from "prop-types"

export const ConfirmContext = createContext()

function ConfirmProvider({children}) {
	const [isConfirmOrder, setIsConfirmOrder] = useState(false)

	const handleConfirm = () => {
		setIsConfirmOrder(!isConfirmOrder)
	}

	const closeConfirm = () => {
		setIsConfirmOrder(false)
	}

	return (
		<ConfirmContext.Provider
			value={{
				handleConfirm,
				isConfirmOrder,
				closeConfirm,
			}}>
			{children}
		</ConfirmContext.Provider>
	)
}

ConfirmProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

function useConfirmOrder() {
	const context = useContext(ConfirmContext)
	if (context === undefined)
		throw new Error("BasketContext must be used inside BasketProvider")
	return context
}

export {ConfirmProvider, useConfirmOrder}
