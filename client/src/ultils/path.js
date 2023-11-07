const path = {
    PUBLIC : '/',
    HOME: '',
    ALL : '*',
    LOGIN: 'login',
    PRODUCTS: ':category',
    BLOGS: 'blogs',
    OURSERVICES: 'ourservices',
    SERVICES: 'services',
    FINAL_REGISTER: 'finalregister/:status', 
    FAQs: 'fqa',
    DETAIL_PRODUCT__PID__TITLE :'san-pham/:pid/:title',
    DETAIL_PRODUCT : 'san-pham',
    RESET_PASSWORD : 'reset-password/:token',
    //Admin
    ADMIN: 'admin',
    DASHBOARD: 'dashboard',
    MANGE_USER: 'manage-user',
    MANGE_PRODUCTS: 'manage-products',
    MANGE_ORDER: 'manage-order',
    CREATE_PRODUCTS: 'create-products',

    //Member
    MEMBER:'member',
    PERSONAL: 'personal'

}

export default path