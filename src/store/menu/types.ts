export interface StateProps {
    showMenu: boolean,
    minim: boolean,
    path: string,
    menus: [],
    showNotification: boolean,
    notificationMessage: string,
    notificationType: string,
}

export interface PayloadProps {
    showMenu: boolean,
    minim: boolean,
    path: string,
    show: boolean,
    menus: [],
    showNotification: boolean,
    notificationMessage: string,
    notificationType: string,
}

export interface PayloadMenuSearchProps {
    menu_name : string
}

export interface MenuProps {
    link : string
    description : string
    menus: MenuProps[]
    id: number
    hasSubGroup: boolean
    icon: string
}