import {JwtPayload} from "jsonwebtoken";

export interface AuthInterface extends JwtPayload {
    user: Object | String
}