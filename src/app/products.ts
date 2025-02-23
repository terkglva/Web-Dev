export interface Product {
  id: number;
  img: string;
  rating: string;
  name: string;
  price: string;
  description: string;
  category: string;
  likes: number;
}

export const products = [
  {
    id: 1,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
    name: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
    rating: "./assets/img/stars.png",
    price: "294 452",
    link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR...',
    category: "Техника",
    likes: 45665
  },
  {
    id: 2,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h98/h2b/64400497737758.jpg?format=gallery-medium",
    name: 'Смартфон Apple iPhone 14 128Gb черный',
    rating: "./assets/img/stars.png",
    price: "327 584",
    link: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000",
    description: 'Представляем вам элегантные и функциональные плавки...',
    category: "Техника",
    likes: 78964
  },
  {
    id: 7,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h7b/h7d/85093492031518.jpg?format=gallery-medium",
    name: 'Маска Маска Осёл силиконовая Endeva',
    rating: "./assets/img/stars.png",
    price: "7 998",
    link: "https://kaspi.kz/shop/p/maska-maska-osjol-silikonovaja-endeva-116430717/?c=750000000",
    description: 'Маска Осла',
    category: "Необычные товары",
    likes: 1456
  },
  {
    id: 8,
    img: "https://resources.cdn-kaspi.kz/img/m/p/hd3/h79/84649212510238.jpg?format=gallery-medium",
    name: 'Седло Киргизское',
    rating: "./assets/img/stars.png",
    price: "45 000",
    link: "https://kaspi.kz/shop/p/kirgizskoe-yr-yz-er-115137674/?c=750000000",
    description: 'Представляем вам аутентичное киргизское седло...',
    category: "Необычные товары",
    likes: 456
  },
  {
    id: 5,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-medium",
    rating: "./assets/img/stars.png",
    name: 'Зарядное устройство Apple 20W USB-C Power Adapter белый',
    price: "3 775",
    link: "https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000",
    description: 'Адаптер питания Apple USB‑C мощностью 20 Вт...',
    category: "Аксессуары",
    likes: 45697
  },
 
];