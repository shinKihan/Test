import { parent } from "./utils/parent"
import { database } from "./utils/children"
export const getParent = () => {
	try {
		return parent

	} catch (error) {
		throw new Error("Error to get parents")
	}
}

export const getChildren = (property_category_id) => {
	try {
		return {

			"results": database.filter(item => {
				return property_category_id == item.property_category
				// console.log({a: property_category_id, b: item.property_category, c: property_category_id ==  item.property_category})
				// return true
			})
		}

	} catch (error) {
		throw new Error("Error to get parents")
	}
}
