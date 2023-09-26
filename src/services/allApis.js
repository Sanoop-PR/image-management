import { BASE_URL } from "./base_url"
import { commonRequest } from "./commenHTTPRequest"

// Register API
export const register = async (body, header) => {
    return await commonRequest("POST", `${BASE_URL}/register`, body, header)
}