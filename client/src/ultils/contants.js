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
const {BsTruck, FaTty, FaReply, FaShieldAlt, } = icons
export const productExtraInfo = [
    {
        id: 1,
        title: 'Free Shipping',
        icon: <BsTruck />,
        sub: 'Free On All Products'
    },
    {
        id: 2,
        title: 'Consultancy',
        icon: <FaTty />,
        sub: 'Lifetime 24/7/356'
    },
    {
        id: 3,
        title: 'Free Return',
        icon: <FaReply />,
        sub: 'Within 7 Days'
    },
    {
        id: 4,
        title: 'Guarantee',
        icon: <FaShieldAlt />,
        sub: 'Quality Checked'
    }
]
export const productInfoTabs = [
    {
        id:1,
        name: 'DISCRIPTION',
        content: `Long talk time – Up to 10 hours
        Tells you how it’s doing
        For calls and music
        Perfect iPhone partner
        Charging is quick
        Connects to two devices
        USB charging cable
        Clear as HD
        Easy call control
        Always in control
        Peace of mind`
    },
    {
        id:2,
        name: 'WARRANT',
        content : `WARRANTY INFORMATION,
        LIMITED WARRANTIES
        Limited Warranties are non-transferable. The following Limited Warranties are given to the original retail purchaser of the following Ashley Furniture Industries, Inc.Products:
        
        Frames Used In Upholstered and Leather Products
        Limited Lifetime Warranty
        A Limited Lifetime Warranty applies to all frames used in sofas, couches, love seats, upholstered chairs, ottomans, sectionals, and sleepers. Ashley Furniture Industries,Inc. warrants these components to you, the original retail purchaser, to be free from material manufacturing defects.`
    },
    {
        id:3,
        name: 'DELIVERY',
        content: `PURCHASING & DELIVERY,
        Before you make your purchase, it’s helpful to know the measurements of the area you plan to place the furniture. You should also measure any doorways and hallways through which the furniture will pass to get to its final destination.
        Picking up at the store
        Shopify Shop requires that all products are properly inspected BEFORE you take it home to insure there are no surprises. Our team is happy to open all packages and will assist in the inspection process. We will then reseal packages for safe transport. We encourage all customers to bring furniture pads or blankets to protect the items during transport as well as rope or tie downs. Shopify Shop will not be responsible for damage that occurs after leaving the store or during transit. It is the purchaser’s responsibility to make sure the correct items are picked up and in good condition.
        Delivery
        Customers are able to pick the next available delivery day that best fits their schedule. However, to route stops as efficiently as possible, Shopify Shop will provide the time frame. Customers will not be able to choose a time. You will be notified in advance of your scheduled time frame. Please make sure that a responsible adult (18 years or older) will be home at that time.
        In preparation for your delivery, please remove existing furniture, pictures, mirrors, accessories, etc. to prevent damages. Also insure that the area where you would like your furniture placed is clear of any old furniture and any other items that may obstruct the passageway of the delivery team. Shopify Shop will deliver, assemble, and set-up your new furniture purchase and remove all packing materials from your home. Our delivery crews are not permitted to move your existing furniture or other household items. Delivery personnel will attempt to deliver the purchased items in a safe and controlled manner but will not attempt to place furniture if they feel it will result in damage to the product or your home. Delivery personnel are unable to remove doors, hoist furniture or carry furniture up more than 3 flights of stairs. An elevator must be available for deliveries to the 4th floor and above.`
    },
    {
        id:4,
        name: 'PAYMENT',
        content: `PURCHASING & DELIVERY,
        Before you make your purchase, it’s helpful to know the measurements of the area you plan to place the furniture. You should also measure any doorways and hallways through which the furniture will pass to get to its final destination.
        Picking up at the store
        Shopify Shop requires that all products are properly inspected BEFORE you take it home to insure there are no surprises. Our team is happy to open all packages and will assist in the inspection process. We will then reseal packages for safe transport. We encourage all customers to bring furniture pads or blankets to protect the items during transport as well as rope or tie downs. Shopify Shop will not be responsible for damage that occurs after leaving the store or during transit. It is the purchaser’s responsibility to make sure the correct items are picked up and in good condition.
        Delivery
        Customers are able to pick the next available delivery day that best fits their schedule. However, to route stops as efficiently as possible, Shopify Shop will provide the time frame. Customers will not be able to choose a time. You will be notified in advance of your scheduled time frame. Please make sure that a responsible adult (18 years or older) will be home at that time.`
    },
    {
        id:5,
        name: 'CUSTOMER REVIEW'
    },
]

export const color = [
    'black',
    'brown',
    'gray',
    'white',
    'pink',
    'red',
    'yellow',
    'orange',
    'blue',
    'green',
    'purple'
]

export const sorts = [
    {
        id: 1,
        value: '-sold',
        text: 'Best selling'
    },
    {
        id: 2,
        value: 'title',
        text: 'Alphabetically, A-Z'
    },
    {
        id: 3,
        value: '-title',
        text: 'Alphabetically, Z-A'
    },
    {
        id: 4,
        value: '-price',
        text: 'Price, high to low'
    },
    {
        id: 5,
        value: 'price',
        text: 'Price, low to high'
    },
    {
        id: 6,
        value: '-createdAt',
        text: 'Date, Old to New'
    },
    {
        id: 7,
        value: 'createdAt',
        text: 'Date, New to Old'
    }
]
