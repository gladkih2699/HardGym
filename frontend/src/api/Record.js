import axios from "axios";

// Функция создания записи
export async function createRecord(formData) {
    console.log('Record', formData)
    try {
        const response = await axios.post('http://localhost:3000/records', formData, {
            headers: { "Content-Type": 'application/json'}
        })
        return response.data
    } catch (error) {
        console.log(error.message);
        throw error
    }
    
}