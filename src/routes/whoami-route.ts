import { Express } from 'express';

import { CS571Route } from "@cs571/api-framework/src/interfaces/route";
import { CS571IceTokenAgent } from '../services/token-agent';

export class CS571WhoAmIRoute implements CS571Route {

    public static readonly ROUTE_NAME: string = (process.env['CS571_BASE_PATH'] ?? "") + '/whoami';

    private readonly tokenAgent: CS571IceTokenAgent;

    public constructor(tokenAgent: CS571IceTokenAgent) {
        this.tokenAgent = tokenAgent;
    }

    public addRoute(app: Express): void {
        app.get(CS571WhoAmIRoute.ROUTE_NAME, async (req, res) => {
            const user = await this.tokenAgent.validateToken(req.cookies['icewebdev4_auth']);
            res.status(200).send({
                isLoggedIn: user ? true : false,
            })
        })
    }


    public getRouteName(): string {
        return CS571WhoAmIRoute.ROUTE_NAME;
    }
}
