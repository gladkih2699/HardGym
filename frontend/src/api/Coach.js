import axios from "axios";

// Функция создания тренера
export async function createCoach(formData) {
    console.log('Coach', formData)
    try {
        const response = await axios.post('http://localhost:3000/coaches', formData)
        return response.data
    } catch (error) {
        console.log(error.message);
        throw error
    }
    
}

// Функция получения тренеров
export async function getCoaches() {
    try {
        const response = await axios.get('http://localhost:3000/coaches')
        return response.data
    } catch (error) {
        console.log(error.message)
        throw error
    }
    
}