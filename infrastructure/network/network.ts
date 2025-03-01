import { NetworkConstants } from "./network.constants";
import { SessionManager } from "../../domain/manager/sessionmanager";
import { ConstantPreference } from "../storage/constant.preference";
import { ApiRoutes } from "domain/api/api.routes";

class NetworkService {
    private static instance: NetworkService;
    private baseUrl: string;

    // Private constructor to prevent direct instantiation
    private constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    // Method to get the singleton instance
    public static getInstance(baseUrl: string): NetworkService {
        if (!NetworkService.instance) {
            NetworkService.instance = new NetworkService(baseUrl);
        }
        return NetworkService.instance;
    }

    public async callPostApi<T>(routeCode: string, data: any): Promise<T> {
        return new Promise(async (resolve, reject) => {
            try {
                const finalUrl = `${this.baseUrl}${ApiRoutes.route(routeCode)}`;
                console.log(`Request -> ${finalUrl}\n${JSON.stringify(data)}\n`)

                const sessionToken = await SessionManager.retrieveString(ConstantPreference.SESSION_TOKEN)
                console.log('Current session token '+ sessionToken)
                
                const result = await fetch(finalUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${sessionToken}`
                    },
                    body: JSON.stringify(data),
                });
                
                if (!result.ok) {
                    reject(new Error('Looks like something went wrong'));
                    console.log(`Response <- ${JSON.stringify(result)}`);

                    return;
                }
                
                const apiResponse = await result.json() as T;
                console.log(`Response <- ${JSON.stringify(apiResponse)}`);
                resolve(apiResponse);
            } catch (error) {
                console.error('Error in callPostApi:', error);
                reject(undefined);
            }
        });
    }

    public async callGetApi<T>(baseUrl: string = this.baseUrl, routeCode: string, params: Record<string, any> = {}): Promise<T> {
        return new Promise(async (resolve, reject) => {
            try {
                const queryString = this.buildQueryString(params);
                const finalUrl = `${baseUrl}${ApiRoutes.route(routeCode)}${queryString}`;
                console.log(`Request -> ${finalUrl}\n`);
    
                const sessionToken = await SessionManager.retrieveString(ConstantPreference.SESSION_TOKEN)

                const result = await fetch(finalUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${sessionToken}`
                    }
                });
    
                if (!result.ok) {
                    reject(new Error('Looks like something went wrong'));
                    console.warn(`\n\n${result}`);
                    return;
                }
    
                const apiResponse = await result.json() as T;
                console.log(`Response <- ${JSON.stringify(apiResponse)}`);
                resolve(apiResponse);
            } catch (error) {
                console.error('Error in callGetApi:', error);
                reject(undefined);
            }
        });
    }
    
    // Utility function to build the query string
    private buildQueryString(params: Record<string, any>): string {
        const queryString = Object.keys(params)
            .map(key => {
                if (params[key] !== undefined && params[key] !== null) {
                    return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
                }
                return '';
            })
            .filter(Boolean) // Remove empty strings
            .join('&');
    
        return queryString ? `?${queryString}` : '';
    }
}

export const networkService = NetworkService.getInstance(NetworkConstants.BASE_URL);