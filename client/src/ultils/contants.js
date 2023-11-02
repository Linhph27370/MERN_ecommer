import  icons  from "./icons";
import path from "./path";

export const navigation = [
    {
        id: 1,
        value: 'HOME',
        path: `/${path.HOME}`
    },
    {
        id: 2,
        value: 'PRODUCTS',
        path: `/${path.PRODUCTS}`
    },
    {
        id: 3,
        value: 'BLOGS',
        path: `/${path.BLOGS}`
    },
    {
        id: 4,
        value: 'SERVICES',
        path: `/${path.SERVICES}`
    },
    {
        id: 5,
        value: 'FAQs',
        path: `/${path.FAQs}`
    }
]
const {AiOutlineDashboard,HiOutlineUserGroup,RiProductHuntLine,RiBillLine} = icons
export const adminSidebar = [
    {
        id:1,
        type: 'SINGLE',
        text : 'Dashboard',
        path: `/${path.ADMIN}/${path.DASHBOARD}`,
        icons: <AiOutlineDashboard />
    },
    {
        id:2,
        type: 'SINGLE',
        text : 'Manage Users',
        path: `/${path.ADMIN}/${path.MANGE_USER}`,
        icons: <HiOutlineUserGroup />
    },
    {
        id:3,
        type: 'PARENT',
        text : 'Products',
        path: `/${path.ADMIN}/${path.DASHBOARD}`,
        icons: <RiProductHuntLine />,
        submenu: [
            {
                text: 'Create Product',
                path: `/${path.ADMIN}/${path.CREATE_PRODUCTS}`
            },
            {
                text: 'Manage Product',
                path: `/${path.ADMIN}/${path.MANGE_PRODUCTS}`
            },
        ]
    },
    {
        id:4,
        type: 'SINGLE',
        text : 'Manage Orders',
        path: `/${path.ADMIN}/${path.MANGE_ORDER}`,
        icons: <RiBillLine />
    },
]
