import { $api, config } from "../index";
import { shopDto } from "../../types/common/data.types";

export const getCommon = () => {
    return $api.get('/my', { headers: config() });
}

export const getId = (id: number) => {
    return $api.get(`/my/${id}`, { headers: config() });
}

export const getData = () => {
    return $api.get('/api/data/', { headers: config() });
}

export const getDataId = (id: number) => {
    return $api.get(`/api/data/${id}`, { headers: config() });
}

export const createData = (body: shopDto) => {
    return $api.post(`/api/data/`, body, { headers: config() });
}

export const editDataId = (id: number, body: shopDto) => {
    return $api.put(`/api/data/${id}`, body, { headers: config() });
}

export const deleteDataId = (id: number) => {
    return $api.delete(`/api/data/${id}`, { headers: config() });
}
