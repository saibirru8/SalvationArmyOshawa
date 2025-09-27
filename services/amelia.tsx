import axios from 'axios'; 
import { ReactNode } from 'react';


const ameliaClient = axios.create({
    baseURL: process.env.AMELIA_BASE_URL, 
    headers: {
        Amelia: process.env.AMELIA_API_KEY,
        "Content-Type": "application/json",
    },
}); 

export async function getAppointment(appointmentId: number)  {
    try {
        const response = await ameliaClient.get(`/appointments`);
        return response.data; 
    } catch (error: any) {
        console.error("Error fetching appointments: ", error.message);
        throw error;
    }
}

