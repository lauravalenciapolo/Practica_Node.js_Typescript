import { Weather, Visibility} from "./types"

export const validateDataDiary = (object: any): boolean =>{
    if (typeof(object.date) !== "string") throw new Error ("Incorrecto")
    if (typeof(object.comment) !== "string") throw new Error ("Incorrecto")
    if (!Object.values(Weather).includes(object.weather)) throw new Error ("Incorrecto")
    if (!Object.values(Visibility).includes(object.visibility)) throw new Error ("Incorrecto")
    else return true 
}