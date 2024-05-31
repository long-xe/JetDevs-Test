import { API } from "../../configs/instances"

export const getUserApi = async (page: number = 0, results: number = 10) => {
    return API.get(`/api/?page=${page}&results=${results}`)
}