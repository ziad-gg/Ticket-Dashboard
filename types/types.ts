import { StaticImageData } from "next/image";

export interface DashboardContext {
    page: string;
    username: string;
    serverName: string;
    serverImage: String | StaticImageData | any;
    botImage: string | StaticImageData;
    userImage: String | StaticImageData;
    statics: {
        tickets: {
            total: number,
            new: number,
            closed: number,
        },
        server: {
            owner: {
                id: string | number,
                username: string,
            },
            panals?: Panal[],
            roles: Role[],
            channels: Channel[],
            categories: Category[]
        }
    }
};



export type OptionalDashboardContext = {
    [K in keyof DashboardContext]?: DashboardContext[K];
};

