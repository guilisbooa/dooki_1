import { MenuItem, CustomizationOption } from './restaurant';

export interface CartItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  customizations: SelectedCustomization[];
  specialInstructions?: string;
  totalPrice: number;
  restaurantId: string;
}

export interface SelectedCustomization {
  customizationId: string;
  optionId: string;
  name: string;
  price: number;
}

export interface CartState {
  items: CartItem[];
  restaurantId: string | null;
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  couponCode?: string;
}

export interface Order {
  id: string;
  userId: string;
  restaurantId: string;
  items: CartItem[];
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  deliveryAddress: string;
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  createdAt: Date;
  estimatedDeliveryTime: Date;
  couponCode?: string;
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'preparing'
  | 'ready'
  | 'dispatched'
  | 'delivered'
  | 'cancelled';

export type PaymentMethod = 
  | 'credit_card'
  | 'debit_card' 
  | 'pix'
  | 'cash';