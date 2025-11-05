import axios from "axios";

// Функция создания тренировки
export async function createTrain(formData) {
    console.log('Train', formData)
    try {
        const response = await axios.post('http://localhost:3000/trains', formData, {
            headers: { "Content-Type": 'application/json'}
        })
        return response.data
    } catch (error) {
        console.log(error.message);
        throw error
    }
    
}

// Функция получения тренировок
export async function getTrains() {
    try {
        const response = await axios.get('http://localhost:3000/trains')
        return response.data
    } catch (error) {
        console.log(error.message);
        throw error
    }
    
}