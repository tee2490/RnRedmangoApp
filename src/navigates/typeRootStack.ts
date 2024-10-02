import { menuItemModel } from "../interfaces";

export type RootStackParamList = {
    HomeScreen : undefined
    MenuItemDetailScreen: { id: number };
    ShoppingCartScreen : undefined
    ProfileScreen: undefined
    Login: undefined
    Register: undefined;
    PaymentScreen: {state: any}
  };
  