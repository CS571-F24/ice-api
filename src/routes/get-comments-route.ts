import { Express } from 'express';

import { CS571Route } from "@cs571/api-framework";
import { Ticket } from '../model/ticket';
import { CS571IceDbConnector } from '../services/db-connector';

export class CS571GetCommentsRoute implements CS571Route {

    public static readonly ROUTE_NAME: string = (process.env['CS571_BASE_PATH'] ?? "") + '/comments';

    private readonly connector: CS571IceDbConnector;

    public constructor(connector: CS571IceDbConnector) {
        this.connector = connector;
    }

    public addRoute(app: Express): void {
        app.get(CS571GetCommentsRoute.ROUTE_NAME, async (req, res) => {
            const num = req.query?.num as string;
            const comms = await this.connector.getComments();
            if (num) {
                try {
                    const numnum = parseInt(num);
                    res.status(200).send(comms.slice(0, numnum));
                } catch (e) {
                    res.status(200).send(comms);
                }
            } else {
                res.status(200).send(comms);
            }
        })
    }

    public getRouteName(): string {
        return CS571GetCommentsRoute.ROUTE_NAME;
    }
}