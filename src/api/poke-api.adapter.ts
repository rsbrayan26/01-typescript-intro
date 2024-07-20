import axios from "axios"

export interface HttpAdapter {
    get<T>(url: string): Promise<T>
}

export class POkeApiFetchAdapter implements HttpAdapter {
    async get<T>(url: string): Promise<T> {
        const res = await fetch(url)
        const data = await res.json()
        return data
    }
}

export class PokeApiAdapter implements HttpAdapter {

    private readonly axios = axios

    constructor() { }

    async get<T>(url: string) {
        const { data } = await this.axios.get<T>(url)
        return data
    }

    async post(url: string, data: any) {
        return await 1
    }

    async patch(url: string, data: any) {
        return await 1
    }

    async delete(url: string, data: any) {
        return await 1
    }
}