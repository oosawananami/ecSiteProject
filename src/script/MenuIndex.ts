export const MenuIndex = {
    MainUI:0,
    ProductDetailUI:1,
    FavoritProductUI:2,
    ShoppingCartUI:3,
    UserLoginUI:4,
} as const

export type MenuIndex = (typeof MenuIndex)[keyof typeof MenuIndex]