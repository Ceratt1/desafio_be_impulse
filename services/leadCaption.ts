import api from ".";
import { User } from "../@types/userCaption";


export class LeadCaptionService {
    public static userRegister = async (user: User) => {
        try {
            const response = await api.post("/users", user);
            return response.status === 201;
        } catch (error) {
            throw error;
        }
    }
}