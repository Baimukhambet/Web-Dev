import { Injectable } from '@angular/core';
import { Tag } from 'src/app/tag';
import { Product } from 'src/app/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getAllTags():Tag[]{
    return [
      {
        name:'Phone',
        image:'/assets/img/iphone.png'
      },
      {
        name:'Hardware',
        image:'/assets/img/rtx.png'
      },
      {
        name:'Book',
        image:'/assets/img/6-books-png-image-with-transparency-background.png'
      },
      {
        name:'Food',
        image:'/assets/img/food.png'
      },

    ]
  }

  getAllByTag(tag:string):Product[]{
    return this.getAllProducts().filter(p => p.tag?.includes(tag));
  }

  getAllProducts():Product[]{
    return [
      {
        id: 1,
        name: 'Видеокарта Palit GeForce RTX 3060 Dual',
        price: 190000,
        description: 'серия: GeForce RTX 30 Series частота графического процессора: 1320 МГц объем видеопамяти: 12 ГБ тип видеопамяти: GDDR6 рекомендуемая мощность блока питания: 550 Вт',
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdc/h7d/33720830722078/palit-geforce-rtx-3060-dual-ne63060019k9-190ad-12gb-101214928-1-Container.jpg",
        link: "https://kaspi.kz/shop/p/palit-geforce-rtx-3060-dual-ne63060019k9-190ad-12gb-101214928/?c=750000000#!/item",
        tag: "Hardware"
      },
      {
        id: 2,
        name: 'Видеокарта Palit GeForce GTX 1660 Super GP 6 ГБ',
        price: 146000,
        description: 'серия: GeForce 16 Series частота графического процессора: 1530 МГц (базовая), 1785 МГц (разогнанная) объем видеопамяти: 6 ГБ тип видеопамяти: GDDR6 рекомендуемая мощность блока питания: 450 Вт',
        rating: 5,
        image : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h94/he6/31993471729694/palit-geforce-gtx-1660-super-gp-6gb-100017856-1-Container.jpg",
        link: "https://kaspi.kz/shop/p/palit-geforce-gtx-1660-super-gp-6-gb-100017856/?c=750000000#!/item",
        tag: "Hardware"
      },
      {
        id: 3,
        name: 'Игровая приставка Sony PlayStation 5 белый',
        price: 330000,
        description: 'тип: стационарная объем SSD: 825 Гб поддержка UHD (4K): Да тип носителя для игр: UHD Blu-ray',
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd1/hbe/49348562681886/sony-playstation-5-belyj-100746577-1-Container.jpg",
        link: "https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000#!/item",
        tag:'Hardware'
    
      },
      {
        id: 4,
        name: 'Lactel молоко 2.5% 1000 мл',
        price: 632,
        description: 'вид молока: коровье особенности: нe содержит искусственные красители тип: молоко страна производства: Казахстан',
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/heb/h5b/46879409569822/foodmaster-lactel-ultrapasterizovannoe-2-5-1-l-100223139-1-Container.jpg",
        link: "https://kaspi.kz/shop/p/lactel-moloko-2-5-1000-ml-100223139/?c=750000000#!/item",
        tag:'Food'
      },
      {
        id: 5,
        name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum черный',
        price: 225000,
        description: 'поддержка платформ: iOS материал корпуса: алюминий цвет корпуса: черный технология экрана: OLED объем встроенной памяти: 32 Гб интерфейсы: Bluetooth, ,Wi-Fi, ,NFC время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов',
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h69/63158968057886/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg",
        link: "https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item",
        tag:'Watch'
      },
      {
        id: 6,
        name: 'Наушники JBL Tune 510BT черный',
        price: 25517,
        description: 'тип: гарнитура вид: накладные подключение: беспроводное тип акустического оформления: закрытые тип крепления: оголовье система активного шумоподавления: Нет микрофон: Да',
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/h1d/33957524537374/jbl-tune-510bt-cernyj-101420081-1-Container.jpg",
        link: "https://kaspi.kz/shop/p/jbl-tune-510bt-chernyi-101420081/?c=750000000#!/item",
        tag:'Headphones'
      },
      {
        id: 7,
        name: 'Наушники CAT EAR STN-28 розовый',
        price: 4395 ,
        description: 'тип: гарнитура вид: накладные подключение: беспроводное тип акустического оформления: закрытые тип крепления: оголовье система активного шумоподавления: Нет микрофон: Да',
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb2/h0f/34032100704286/cat-stn-28-rozovyj-101768468-1-Container.jpg",
        link: "https://kaspi.kz/shop/p/cat-ear-stn-28-rozovyi-101768468/?c=750000000#!/item",
        tag:'Headphones'
      },
      {
        id: 8,
        name: 'Книга Хилл Н.: Думай и богатей',
        price: 2595 ,
        description: 'жанр: бизнес-беллетристика iSBN: 978-5-699-97616-4 язык издания: русский переплет: мягкий переплет',
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h89/62280172568606/hill-n-dumaj-i-bogatej-26027925-1-Container.jpg",
        link: "https://kaspi.kz/shop/p/hill-n-dumai-i-bogatei-26027925/?c=750000000#!/item",
        tag:'Book'
      },
      {
        id: 9,
        name: 'Книга Кийосаки Р.: Богатый папа, бедный папа',
        price: 7760,
        description: 'жанр: бизнес-беллетристика iSBN: 9789851542976 язык издания: русский переплет: мягкий переплет',
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8e/h75/32600585469982/kijosaki-r-bogatyj-papa-bednyj-papa-100221328-1.jpg",
        link: "https://kaspi.kz/shop/p/kiiosaki-r-bogatyi-papa-bednyi-papa-100221328/?c=750000000#!/item",
        tag:'Book'
      },
      {
        id: 10,
        name: 'Смартфон Apple iPhone 13 128Gb розовый',
        price: 369320,
        description: 'технология NFC: Да цвет: розовый тип экрана: OLED, Super Retina XDR диагональ: 6.1 дюйм размер оперативной памяти: 4 ГБ процессор: 6-ядерный Apple A15 Bionic объем встроенной памяти: 128 ГБ емкость аккумулятора: 3095 мАч',
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h0e/46392660819998/apple-iphone-13-128gb-rozovyj-102298145-1-Container.jpg",
        link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000#!/item",
        tag:'Phone'
      },
      {
        id: 11,
        name: 'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
        price: 669886,
        description: 'технология NFC: Да цвет: фиолетовый тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы диагональ: 6.7 дюйм размер оперативной памяти: 6 ГБ процессор: 6-ядерный Apple A16 Bionic объем встроенной памяти: 256 ГБ емкость аккумулятора: 3095 мАч',
        rating:5,
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
        link: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item",
        tag:'Phone'
      },
      {
        id: 12,
        name: 'Смартфон Samsung Galaxy Z Fold4 12 ГБ/512 ГБ черный',
        price: 1099880,
        description: 'технология NFC: Да цвет: черный тип экрана: Dynamic AMOLED 2X диагональ: 7.6 дюйм размер оперативной памяти: 12 ГБ процессор: 8-ядерный Qualcomm Snapdragon 8 Gen 1 объем встроенной памяти: 512 ГБ емкость аккумулятора: 4400 мАч',
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h87/h60/61658891714590/samsung-galaxy-z-fold4-12-gb-512-gb-chernyi-smart-chasy-samsung-galaxy-watch-4-classic-106036420-1.jpg',
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-fold4-12-gb-512-gb-chernyi-podarok-106036420/?c=750000000#!/item',
        tag: 'Phone'
      },
      {
        id:13,
        name: 'Смартфон Samsung Galaxy S23 Ultra 5G 12 ГБ/1024 ГБ бежевый',
        price:969890,
        description: 'технология NFC: Да цвет: бежевый тип экрана: Dynamic AMOLED 2X, HDR10+, Corning Gorilla Glass Victus+ диагональ: 6.8 дюйм размер оперативной памяти: 12 ГБ процессор: 8-ядерный Snapdragon 8 Gen 2 объем встроенной памяти: 1024 ГБ емкость аккумулятора: 5000 мАч',
        rating:5,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h46/hae/68538924367902/samsung-galaxy-s23-ultra-5g-12-gb-512-gb-bezhevyi-108714434-1.jpg',
        link:'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-5g-12-gb-1024-gb-bezhevyi-podarok-108714434/?c=750000000#!/item',
        tag:'Phone'
      },
      {
        id:14,
        name: 'Смартфон Samsung Galaxy Z Flip 3 8 ГБ/256 ГБ черный',
        price:624983,
        description: 'технология NFC: Да цвет: черный тип экрана: Dynamic AMOLED 2X, HDR 10+, Corning Gorilla Glass Victus диагональ: 6.7 дюйм размер оперативной памяти: 8 ГБ процессор: 8-ядерный Qualcomm Snapdragon 888 Octa-core объем встроенной памяти: 256 ГБ емкость аккумулятора: 3300 мАч',
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h0c/44394792517662/samsung-galaxy-z-flip-3-8-256gb-cernyj-102033464-1-Container.jpg',
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-flip-3-8-gb-256-gb-chernyi-102033464/?c=750000000#!/item',
        tag: 'Phone'
      },
      {
        id:15,
        name: 'Процессор Intel Core i5-10400F OEM',
        price: 51095,
        description: 'тип процессора: Core i5 сокет: LGA1200 базовая частота процессора: 2900 МГц максимальная частота процессора: 4300 МГц тип поставки: OEM количество ядер: 6',
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/h19/32961747091486/intel-core-i5-10400f-oem-100422560-1-Container.jpg',
        link: 'https://kaspi.kz/shop/p/intel-core-i5-10400f-oem-100422560/?c=750000000#!/item',
        tag: 'Hardware'
      },
      {
        id:16,
        name: 'Материнская плата ASRock B450 Steel Legend',
        price: 53285,
        description: 'сокет: AM4 чипсет: AMD B450 количество слотов памяти: 4 слоты расширения: 2xPCI-E x16, 4xPCI-E x1 количество разъемов SATA: 6 форм-фактор: ATX',
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/h37/50962570575902/asrock-b450-steel-legend-6501005-1-Container.jpg',
        link: 'https://kaspi.kz/shop/p/asrock-b450-steel-legend-6501005/?c=750000000#!/item',
        tag: 'Hardware'
      },
      {
        id:17,
        name: 'Рахат шоколадная плитка молочный 100 г',
        price: 463,
        description: 'вид шоколада: молочный начинка: без начинки добавки: без добавок страна производства: Казахстан условия хранения: хранить при температуре от +8°C до +23°C и относительной влажности не более 75%',
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h76/h2a/67021630144542/rakhat-shokoladnaya-plitka-molochnyi-100-g-100221859-1.jpg',
        link: 'https://kaspi.kz/shop/p/rahat-shokoladnaja-plitka-molochnyi-100-g-100221859/?c=750000000#!/item',
        tag: 'Food'
      },
      {
        id:18,
        name: 'KINDER шоколадная плитка молочная 100 г',
        price: 625,
        description:  'вид шоколада: молочный начинка: молочнаядобавки: без добавокстрана производства: Россияусловия хранения: хранить при температуре от +3°С до +18°С и относительной влажностью воздуха не более 65%',
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3c/h31/67249861722142/kinder-shokoladnaya-plitka-molochnaya-100-g-100223058-1.jpg',
        link: 'https://kaspi.kz/shop/p/kinder-shokoladnaja-plitka-molochnaja-100-g-100223058/?c=750000000#!/item',
        tag: 'Food'
      },
      {
        id:19,
        name: 'KINDER Bueno шоколадный батончик молочный, вафли 43 г',
        price: 347,
        description: 'вид шоколада: молочный начинка: вафли добавки: без добавок страна производства: Россия условия хранения: хранить при температуре от 14°C до 18°C и относительной влажности не более 65%',
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd1/h61/46751854002206/kinder-sokoladnyj-batoncik-molocnyj-vafli-43-g-100222744-1-Container.jpg',
        link: 'https://kaspi.kz/shop/p/kinder-bueno-shokoladnyi-batonchik-molochnyi-vafli-43-g-100222744/?c=750000000#!/item',
        tag: 'Food'
      },
      {
        id:20,
        name: 'Snickers шоколадный батончик молочный, нуга 81 г',
        price: 425,
        description: 'вид шоколада: молочный начинка: арахис, ,лесной орех, ,нуга добавки: нуга, ,карамель страна производства: Россия условия хранения: хранить при температуре от 5°C до 25°C и относительной влажности не более 70%',
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6c/h19/32520917123102/snickers-sokoladnyj-batoncik-molocnyj-nuga-81-g-100222670-1-Container.jpg',
        link: 'https://kaspi.kz/shop/p/snickers-shokoladnyi-batonchik-molochnyi-nuga-81-g-100222670/?c=750000000#!/item',
        tag: 'Food'
      },
      {
        id:21,
        name: 'Книга Әуезов М.: Абай жолы',
        price: 6920,
        description: 'жанр: казахская классика iSBN: 9786017495817 язык издания: казахский переплет: твердый переплет',
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6f/h69/49287589888030/-uezov-m-abaj-zoly-104065851-1.jpg',
        link: 'https://kaspi.kz/shop/p/-uezov-m-abai-zholy-104065851/?c=750000000#!/item',
        tag: 'Book'
      },
      {
        id:22,
        name: 'Книга Киз Д.: Цветы для Элджернона',
        price: 2160,
        description: 'жанр: современная мировая проза iSBN: 9785041567620 язык издания: русский переплет: мягкий переплет',
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h68/h80/46925301743646/kiz-d-cvety-dla-eldzernona-102756563-1.jpg',
        link: 'https://kaspi.kz/shop/p/kiz-d-tsvety-dlja-eldzhernona-102756563/?c=750000000#!/item',
        tag: 'Book'
      },
      {
        id:23,
        name: 'Книга Вуйчич Н.: Өмірде шектеу жоқ',
        price: 3490,
        description: 'жанр: биографии и мемуары iSBN: 9786017630157 язык издания: русский переплет: твердый переплет',
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h98/hca/34318623801374/vuichich-n-omirde-shekteu-zhoq-101347042-1.jpg',
        link: 'https://kaspi.kz/shop/p/vuichich-n-m-rde-shekteu-zho--101347042/?c=750000000#!/item',
        tag: 'Book'
      }
    ]
  }
}



