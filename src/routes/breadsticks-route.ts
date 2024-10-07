import { Express } from 'express';

import { CS571Route } from "@cs571/api-framework";

export class CS571BreadsticksRoute implements CS571Route {

    public static readonly ROUTE_NAME: string = (process.env['CS571_BASE_PATH'] ?? "") + '/breadsticks';

    private readonly breadsticks: any;

    public constructor(breadsticks: any) {
        this.breadsticks = breadsticks;
    }

    public addRoute(app: Express): void {
        app.get(CS571BreadsticksRoute.ROUTE_NAME, (req, res) => {
            res.status(200).set('Cache-control', 'public, max-age=60').send(this.breadsticks);
        })
    }

    public getRouteName(): string {
        return CS571BreadsticksRoute.ROUTE_NAME;
    }
}