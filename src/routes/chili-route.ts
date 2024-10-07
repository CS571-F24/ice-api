import { Express } from 'express';

import { CS571Route } from "@cs571/api-framework";

export class CS571ChiliRoute implements CS571Route {

    public static readonly ROUTE_NAME: string = (process.env['CS571_BASE_PATH'] ?? "") + '/chili';

    private readonly chili: any;

    public constructor(chili: any) {
        this.chili = chili;
    }

    public addRoute(app: Express): void {
        app.get(CS571ChiliRoute.ROUTE_NAME, (req, res) => {
            res.status(200).set('Cache-control', 'public, max-age=60').send(this.chili);
        })
    }

    public getRouteName(): string {
        return CS571ChiliRoute.ROUTE_NAME;
    }
}