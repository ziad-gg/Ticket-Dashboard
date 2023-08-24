interface CardProps {
    image: String | any;
    title: number | any;
    description: string
}

interface Panal {
    id: string | number;
    categoryId: string;
    channels: string[];
    limits: number
}

interface CheckProps {
    title: string;
    placeholder: string;
    options: Array<{ id: string, label: string }>;
    description: string
}

interface Role {
    name: string
    id: string
}

interface Channel {
    name: string
    id: string
}

interface Category {
    name: string
    id: string
}

interface data {
    id: string;
    name: string;
    description: string;
    limit: number;
    category: { label: string, id: string };
    blackListRoles: Array<{ label: string, id: string }>;
    allowedRoles: Array<{ label: string, id: string }>;
    supportRoles: Array<{ label: string, id: string }>;
    closeChannelLogMenu: { label: string, id: string };
    openLogChannelMenu: { label: string, id: string };
    claimLogChannelMenu: { label: string, id: string };
    deleteLogChannelMenu: { label: string, id: string };
    claimButton: boolean;
    addAllBots: boolean;
    oneStepClose: boolean;
    disabled: Boolean
}

interface PanelModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    data?: data;
    refresh?: () => void
}


export interface OmitDashboardContext {
    page: string;
    username: string;
    serverName: string;
    serverImage: String;
    botImage: string;
    userImage: String;
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