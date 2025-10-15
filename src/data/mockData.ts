import { Restaurant } from '../types/restaurant';

export const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Restaurante 1',
    category: 'Comida Brasileira',
    rating: 4.5,
    deliveryTime: '30-40 min',
    deliveryFee: 5.50,
    minimumOrder: 25.00,
    image: '🍽️',
    description: 'O melhor da culinária brasileira',
    isOpen: true,
    menu: [
      {
        id: 'cat1',
        name: 'Categoria1',
        items: [
          {
            id: 'item1',
            name: 'Item1',
            description: 'Descrição do item delicioso',
            price: 25.90,
            category: 'Categoria1',
            available: true,
            image: '🍲'
          },
          {
            id: 'item2',
            name: 'Item2',
            description: 'Outro item saboroso',
            price: 32.50,
            category: 'Categoria1',
            available: true,
            image: '🥘'
          }
        ]
      },
      {
        id: 'cat2',
        name: 'Categoria2',
        items: [
          {
            id: 'item3',
            name: 'Item3',
            description: 'Item especial da casa',
            price: 28.00,
            category: 'Categoria2',
            available: true,
            image: '🍖'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'Restaurante 2',
    category: 'Pizza',
    rating: 4.2,
    deliveryTime: '25-35 min',
    deliveryFee: 4.50,
    minimumOrder: 20.00,
    image: '🍕',
    description: 'As melhores pizzas da cidade',
    isOpen: true,
    menu: [
      {
        id: 'cat3',
        name: 'Pizzas',
        items: [
          {
            id: 'pizza1',
            name: 'Pizza Margherita',
            description: 'Molho de tomate, mussarela e manjericão',
            price: 35.90,
            category: 'Pizzas',
            available: true,
            image: '🍕'
          },
          {
            id: 'pizza2',
            name: 'Pizza Pepperoni',
            description: 'Molho de tomate, mussarela e pepperoni',
            price: 42.90,
            category: 'Pizzas',
            available: true,
            image: '🍕'
          }
        ]
      }
    ]
  },
  {
    id: '3',
    name: 'Restaurante 3',
    category: 'Hambúrguer',
    rating: 4.8,
    deliveryTime: '20-30 min',
    deliveryFee: 6.00,
    minimumOrder: 15.00,
    image: '🍔',
    description: 'Hambúrgueres artesanais',
    isOpen: true,
    menu: [
      {
        id: 'cat4',
        name: 'Hambúrgueres',
        items: [
          {
            id: 'burger1',
            name: 'Classic Burger',
            description: 'Hambúrguer, queijo, alface, tomate',
            price: 22.90,
            category: 'Hambúrgueres',
            available: true,
            image: '🍔'
          }
        ]
      }
    ]
  },
  {
    id: '4',
    name: 'Restaurante 4',
    category: 'Japonesa',
    rating: 4.6,
    deliveryTime: '35-45 min',
    deliveryFee: 8.00,
    minimumOrder: 30.00,
    image: '🍣',
    description: 'Culinária japonesa autêntica',
    isOpen: true,
    menu: [
      {
        id: 'cat5',
        name: 'Sushi',
        items: [
          {
            id: 'sushi1',
            name: 'Combo Sushi',
            description: '15 peças variadas',
            price: 45.90,
            category: 'Sushi',
            available: true,
            image: '🍣'
          }
        ]
      }
    ]
  },
  {
    id: '5',
    name: 'Restaurante 5',
    category: 'Italiana',
    rating: 4.3,
    deliveryTime: '30-40 min',
    deliveryFee: 5.50,
    minimumOrder: 25.00,
    image: '🍝',
    description: 'Sabores da Itália',
    isOpen: true,
    menu: [
      {
        id: 'cat6',
        name: 'Massas',
        items: [
          {
            id: 'pasta1',
            name: 'Spaghetti Carbonara',
            description: 'Massa com bacon e molho cremoso',
            price: 32.90,
            category: 'Massas',
            available: true,
            image: '🍝'
          }
        ]
      }
    ]
  }
];

export const mockUser = {
  id: '1',
  name: 'João Silva',
  email: 'joao@email.com',
  phone: '(11) 99999-9999',
  cpf: '123.456.789-00',
  addresses: [
    {
      id: '1',
      street: 'Rua das Flores',
      number: '123',
      complement: 'Apt 45',
      neighborhood: 'Centro',
      city: 'São Paulo',
      zipCode: '01234-567',
      isDefault: true
    }
  ]
};