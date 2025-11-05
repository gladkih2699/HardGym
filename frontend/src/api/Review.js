import axios from "axios";

// Функция создания отзыва
export async function createReview(formData) {
    try {
        const response = await axios.post('http://localhost:3000/reviews', formData, {
            headers: { "Content-Type": 'application/json'}
        })
        return response.data
    } catch (error) {
        console.log(error.message);
        throw error
    }
    
}

// Функция получения отзывов
export async function getReviews() {
    try {
        const response = await axios.get('http://localhost:3000/reviews?limit=3')
        return response.data
    } catch (error) {
        console.log(error.message)
        throw error
    }
    
}