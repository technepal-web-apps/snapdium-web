import { NetworkConstants } from "@/network/network.constants";

export class ApiRoutes { 

    static routes = {
        LOGIN: 'login',
        LOGIN_GOOGLE: 'oauth2/v3/userinfo'
    }

    public static LOGIN = "LOGIN"
    public static LOGIN_GOOGLE = "LOGIN_GOOGLE"

    static route(code: string) {  return this.routes[code] }
}