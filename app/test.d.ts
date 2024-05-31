interface Human {
    name: string;
}
interface MenuOverlayProp {
    title: string
     path: string
}
 interface MenuOverlayProps extends Array<MenuOverlayProp>{}