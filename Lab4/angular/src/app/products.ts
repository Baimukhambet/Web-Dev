export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'Видеокарта Palit GeForce RTX 3060 Dual',
    price: 190000,
    description: 'серия: GeForce RTX 30 Series частота графического процессора: 1320 МГц объем видеопамяти: 12 ГБ тип видеопамяти: GDDR6 рекомендуемая мощность блока питания: 550 Вт',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdc/h7d/33720830722078/palit-geforce-rtx-3060-dual-ne63060019k9-190ad-12gb-101214928-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/palit-geforce-rtx-3060-dual-ne63060019k9-190ad-12gb-101214928/?c=750000000#!/item"
  },
  {
    id: 2,
    name: 'Видеокарта Palit GeForce GTX 1660 Super GP 6 ГБ',
    price: 146000,
    description: 'серия: GeForce 16 Series частота графического процессора: 1530 МГц (базовая), 1785 МГц (разогнанная) объем видеопамяти: 6 ГБ тип видеопамяти: GDDR6 рекомендуемая мощность блока питания: 450 Вт',
    rating: 5,
    image : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h94/he6/31993471729694/palit-geforce-gtx-1660-super-gp-6gb-100017856-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/palit-geforce-gtx-1660-super-gp-6-gb-100017856/?c=750000000#!/item"
  },
  {
    id: 3,
    name: 'Игровая приставка Sony PlayStation 5 белый',
    price: 330000,
    description: 'тип: стационарная объем SSD: 825 Гб поддержка UHD (4K): Да тип носителя для игр: UHD Blu-ray',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd1/hbe/49348562681886/sony-playstation-5-belyj-100746577-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000#!/item"
  },
  {
    id: 4,
    name: 'Lactel молоко 2.5% 1000 мл',
    price: 632,
    description: 'вид молока: коровье особенности: нe содержит искусственные красители тип: молоко страна производства: Казахстан',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/heb/h5b/46879409569822/foodmaster-lactel-ultrapasterizovannoe-2-5-1-l-100223139-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/lactel-moloko-2-5-1000-ml-100223139/?c=750000000#!/item"
  },
  {
    id: 5,
    name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum черный',
    price: 225000,
    description: 'поддержка платформ: iOS материал корпуса: алюминий цвет корпуса: черный технология экрана: OLED объем встроенной памяти: 32 Гб интерфейсы: Bluetooth, ,Wi-Fi, ,NFC время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h69/63158968057886/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg",
    link: "https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item"
  },
  {
    id: 6,
    name: 'Наушники JBL Tune 510BT черный',
    price: 25517,
    description: 'тип: гарнитура вид: накладные подключение: беспроводное тип акустического оформления: закрытые тип крепления: оголовье система активного шумоподавления: Нет микрофон: Да',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/h1d/33957524537374/jbl-tune-510bt-cernyj-101420081-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/jbl-tune-510bt-chernyi-101420081/?c=750000000#!/item"
  },
  {
    id: 7,
    name: 'Наушники CAT EAR STN-28 розовый',
    price: 4395 ,
    description: 'тип: гарнитура вид: накладные подключение: беспроводное тип акустического оформления: закрытые тип крепления: оголовье система активного шумоподавления: Нет микрофон: Да',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb2/h0f/34032100704286/cat-stn-28-rozovyj-101768468-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/cat-ear-stn-28-rozovyi-101768468/?c=750000000#!/item"
  },
  {
    id: 8,
    name: 'Книга Хилл Н.: Думай и богатей',
    price: 2595 ,
    description: 'жанр: бизнес-беллетристика iSBN: 978-5-699-97616-4 язык издания: русский переплет: мягкий переплет',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h89/62280172568606/hill-n-dumaj-i-bogatej-26027925-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/hill-n-dumai-i-bogatei-26027925/?c=750000000#!/item"
  },
  {
    id: 9,
    name: 'Книга Кийосаки Р.: Богатый папа, бедный папа',
    price: 7760,
    description: 'жанр: бизнес-беллетристика iSBN: 9789851542976 язык издания: русский переплет: мягкий переплет',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8e/h75/32600585469982/kijosaki-r-bogatyj-papa-bednyj-papa-100221328-1.jpg",
    link: "https://kaspi.kz/shop/p/kiiosaki-r-bogatyi-papa-bednyi-papa-100221328/?c=750000000#!/item"
  },
  {
    id: 10,
    name: 'Смартфон Apple iPhone 13 128Gb розовый',
    price: 369320,
    description: 'технология NFC: Да цвет: розовый тип экрана: OLED, Super Retina XDR диагональ: 6.1 дюйм размер оперативной памяти: 4 ГБ процессор: 6-ядерный Apple A15 Bionic объем встроенной памяти: 128 ГБ емкость аккумулятора: 3095 мАч',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h0e/46392660819998/apple-iphone-13-128gb-rozovyj-102298145-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000#!/item"
  },
  {
    id: 11,
    name: 'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
    price: 669886,
    description: 'технология NFC: Да цвет: фиолетовый тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы диагональ: 6.7 дюйм размер оперативной памяти: 6 ГБ процессор: 6-ядерный Apple A16 Bionic объем встроенной памяти: 256 ГБ емкость аккумулятора: 3095 мАч',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
    link: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item"
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/