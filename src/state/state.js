import Like from "./Cards/icon.svg";
import Target from "./Cards/secondIcon.svg";
import Warranty from "./Cards/thirdIconsvg.svg";

import Phone from "./Repair/Rectangle 21.png";
import Tablet from "./Repair/Rectangle 23.png";
import LapTop from "./Repair/Rectangle 26.png";
import Console from "./Repair/Rectangle 27.png";
import graphicsCard from "./Repair/Rectangle 30.png";
import Tv from "./Repair/Rectangle 31.png";

import CareTime from "./Care/иконка - время.png";
import CareMoney from "./Care/иконка - деньги.png";
import CarePhone from "./Care/иконка - телефон.png";

import PersonTeam from "./Team/team.png";

import Avatar1 from "./Reviews/Ellipse 1.png";
import Avatar2 from "./Reviews/Ellipse 2.png";
import Avatar4 from "./Reviews/Ellipse 4.png";
import Avatar5 from "./Reviews/Ellipse 5.png";

import Film1 from "./ProtectCard/film_1.jpg";
import Film2 from "./ProtectCard/film_2.jpg";
import Film3 from "./ProtectCard/film_3.jpg";
import Film4 from "./ProtectCard/film_4.jpg";

import Brands1 from "./Brand/Rectangle 89.png";
import Brands2 from "./Brand/Rectangle 74.png";
import Brands3 from "./Brand/Rectangle 87.png";
import Brands4 from "./Brand/Rectangle 90.png";
import Brands5 from "./Brand/Rectangle 95.png";
import Brands6 from "./Brand/Rectangle 93.png";

// Импорт иконок услуг
/*Телефоны*/
import backglass from "./Repair/RepairCustom/phones/backglass.png";
import battery from "./Repair/RepairCustom/phones/battery.png";
import camera from "./Repair/RepairCustom/phones/camera.png";
import charge from "./Repair/RepairCustom/phones/charge.png";
import charger from "./Repair/RepairCustom/phones/charger.png";
import display from "./Repair/RepairCustom/phones/display.png";
import film from "./Repair/RepairCustom/phones/film.png";
import housing from "./Repair/RepairCustom/phones/housing.png";
import soldering from "./Repair/RepairCustom/phones/soldering.png";
import voice from "./Repair/RepairCustom/phones/voice.png";
import water from "./Repair/RepairCustom/phones/water.png";

/*Планшеты*/
import displayTablet from "./Repair/RepairCustom/tablets/displayTablet.png";
import repairTablet from "./Repair/RepairCustom/tablets/repairTablet.png";
import touchscreen from "./Repair/RepairCustom/tablets/touchscreen.png";

/*Ноутбуки*/
import bios from "./Repair/RepairCustom/notebooks/bios.png";
import clean from "./Repair/RepairCustom/notebooks/clean.png";
import happypc from "./Repair/RepairCustom/notebooks/happypc.png";
import keyboard from "./Repair/RepairCustom/notebooks/keyboard.png";
import motherboard from "./Repair/RepairCustom/notebooks/motherboard.png";
import windows from "./Repair/RepairCustom/notebooks/windows.png";

/*Приставки*/
import gamepad from "./Repair/RepairCustom/consoles/gamepad.png";

/*Видеокарты*/
import repairCard from "./Repair/RepairCustom/cards/repairCard.png";
import memory from "./Repair/RepairCustom/cards/memory.png";
import gpu from "./Repair/RepairCustom/cards/gpu.png";

/*Мелкобытовая*/
import robots from "./Repair/RepairCustom/goods/robots.png";
import tvs from "./Repair/RepairCustom/goods/tvs.png";
import headphones from "./Repair/RepairCustom/goods/headphones.png";
import other from "./Repair/RepairCustom/goods/other.png";

import diagnostic from "./Repair/RepairCustom/common/diagnostic.png";

let state = {
  HeaderInfo: {
    MainPage: {
      textHeader:
        "Починим любую электронику от 5 минут с бессрочной гарантией на работу",
      textDesc: "Ремонт телефонов, ноутбуков и другой электроники в Сургуте",
    },
    Services: {
      textHeader: "Чиним 90% поломок у 90% смартфонов",
      textDesc:
        "Отремонтируем любой смартфон от 5 минут с бессрочной гарантией на работу",
    },
    randomCount: (min, max) => {},
    Counter: Math.floor(Math.random() * (25 - 10 + 1)),
  },
  // TODO: Написать функцию на каунтер, которая будет прибавлять 20 аппаратов в день
  CardInfo: [
    {
      id: 0,
      header: "> 37 800 устройств",
      text: "отремонтировали с 2013 года",
      img: Like,
    },
    {
      id: 1,
      header: "Наша Цель",
      text: "стать лучшим сервисным центром в XMAO",
      img: Target,
    },
    {
      id: 2,
      header: "Лояльная Гарантия",
      text: "даже после окончания гарантийного периода",
      img: Warranty,
    },
  ],
  RepairInfo: [
    {
      id: 0,
      header: "Ремонт телефонов",
      text: "Ремонтируем любые бренды смартфонов в Сургуте: iPhone, Samsung, Xiaomi, Poco, Huawei, Honor, OPPO и от других производителей",
      img: Phone,
    },
    {
      id: 1,
      header: "Ремонт планшетов",
      text: "Заменим разбитое стекло, старую батарею, разъем зарядки, а также произведём ремонт любой другой поломки на вашем устройстве",
      img: Tablet,
    },
    {
      id: 2,
      header: "Ремонт ноутбуков и ПК",
      text: "Ремонтируем обычные и игровые ноутбуки, компьютеры, моноблоки, MacBook и iMac. Мы справимся с самыми сложными поломками",
      img: LapTop,
    },
    {
      id: 3,
      header: "Ремонт игровых приставок",
      text: "Если ваша приставка тормозит — не беда, мы почистим её и заменим термопасту. А если не включается обязательно оживим",
      img: Console,
    },
    {
      id: 4,
      header: "Ремонт видеокарт",
      text: "Восстанавливаем видеокарты на профессиональном оборудовании. Даже если они использовались для майнинга",
      img: graphicsCard,
    },
    {
      id: 5,
      header: "Ремонт мелкобытовой техники",
      text: "Быстро и качественно ремонтируем телевизоры, пылесосы, фены, музыкальные колонки и другую электронику",
      img: Tv,
    },
  ],
  CareInfo: [
    {
      id: 0,
      header: "Платите только за сложное",
      text: "Берём деньги только за результат. Несложный ремонт делаем БЕСПЛАТНО",
      img: CareMoney,
    },
    {
      id: 1,
      header: "Не тратьте время на дорогу",
      text: "Сами заберём устройство, а после ремонта привезём обратно",
      img: CareTime,
    },
    {
      id: 2,
      header: "Оставайтесь на связи",
      text: "Дадим подменный телефон на время ремонта, чтобы вас никто не потерял",
      img: CarePhone,
    },
  ],
  Team: [
    { id: 0, name: "Ильяс Павлов", post: "директор сервиса", img: PersonTeam },
    { id: 1, name: "Ильяс Павлов", post: "директор сервиса", img: PersonTeam },
    { id: 2, name: "Ильяс Павлов", post: "директор сервиса", img: PersonTeam },
    { id: 3, name: "Ильяс Павлов", post: "директор сервиса", img: PersonTeam },
  ],
  Review: [
    {
      id: 0,
      name: "Юлия Михайлова",
      post: "Отличный сервис! Бытро, а главное профессианально ребята предоставляют услуги! Вежливые все, еще и подарки дарят в виде скидок и разных аксессуаров !",
      img: Avatar1,
    },
    {
      id: 1,
      name: "Юлия Михайлова",
      post: "Отличный сервис! Бытро, а главное профессианально ребята предоставляют услуги! Вежливые все, еще и подарки дарят в виде скидок и разных аксессуаров !",
      img: Avatar2,
    },
    {
      id: 2,
      name: "Юлия Михайлова",
      post: "Отличный сервис! Бытро, а главное профессианально ребята предоставляют услуги! Вежливые все, еще и подарки дарят в виде скидок и разных аксессуаров !",
      img: Avatar2,
    },
    {
      id: 3,
      name: "Юлия Михайлова",
      post: "Отличный сервис! Бытро, а главное профессианально ребята предоставляют услуги! Вежливые все, еще и подарки дарят в виде скидок и разных аксессуаров !",
      img: Avatar4,
    },
    {
      id: 3,
      name: "Юлия Михайлова",
      post: "Отличный сервис! Бытро, а главное профессианально ребята предоставляют услуги! Вежливые все, еще и подарки дарят в виде скидок и разных аксессуаров !",
      img: Avatar5,
    },
  ],
  ProtectCards: [
    { id: 0, img: Film1 },
    { id: 1, img: Film2 },
    { id: 2, img: Film3 },
    { id: 3, img: Film4 },
  ],

  Brands: [
    { id: 0, img: Brands1 },
    { id: 1, img: Brands2 },
    { id: 2, img: Brands3 },
    { id: 3, img: Brands4 },
    { id: 4, img: Brands5 },
    { id: 5, img: Brands6 },
    { id: 6, img: Brands1 },
    { id: 7, img: Brands2 },
    { id: 8, img: Brands3 },
    { id: 9, img: Brands4 },
    { id: 10, img: Brands5 },
    { id: 11, img: Brands6 },
  ],
  RepairCustom: {
    phones: {
      offer: "Чиним 90% поломок у 95% смартфонов",
      FirstPath: [
        { id: 0, text: "Разбито стекло", img: display },
        { id: 1, text: "Плохо держит заряд", img: battery },
        { id: 2, text: "Не заряжается", img: charger },
        { id: 3, text: "Не включается", img: charge },
      ],
      SecondPath: [
        { id: 4, text: "Разбита крышка", img: backglass },
        { id: 5, text: "Сломан корпус", img: housing },
        { id: 6, text: "Плохо слышно", img: voice },
        { id: 7, text: "Не работает камера", img: camera },
      ],
      ThirdPath: [
        { id: 8, text: "Сложный ремонт", img: soldering },
        { id: 9, text: "Ремонт после воды", img: water },
        { id: 10, text: "Общая диагностика ", img: diagnostic },
        { id: 11, text: "Защита стекла и корпуса", img: film },
      ],
    },
    tablets: {
      offer: "Чиним 90% поломок у 95% планшетов",
      FirstPath: [
        { id: 0, text: "Разбито стекло", img: displayTablet },
        { id: 1, text: "Плохо держит заряд", img: battery },
        { id: 2, text: "Не заряжается", img: charger },
        { id: 3, text: "Сломан корпус", img: housing },
      ],
      SecondPath: [
        { id: 4, text: "Не включается", img: charge },
        { id: 5, text: "Сложный ремонт", img: soldering },
        { id: 6, text: "Ремонт после воды", img: water },
        { id: 7, text: "Общая диагностика ", img: diagnostic },
      ],
      ThirdPath: [],
    },
    notebooks: {
      offer: "Чиним 90% поломок ноутбуков и ПК",
      FirstPath: [
        { id: 0, text: "Обслуживание и чистка", img: clean },
        { id: 1, text: "Переустановка ПО", img: windows },
        { id: 2, text: "Не работает клавиатура", img: keyboard },
        { id: 3, text: "Диагностика и апгрейд ", img: happypc },
      ],
      SecondPath: [
        { id: 4, text: "Не включается", img: charge },
        { id: 5, text: "Сложный ремонт", img: soldering },
        { id: 6, text: "Ремонт после воды", img: water },
        { id: 7, text: "Прошивка BIOS", img: bios },
      ],
      ThirdPath: [],
    },
    consoles: {
      offer: "Чиним 90% поломок игровых приставок",
      FirstPath: [
        { id: 0, text: "Обслуживание и чистка", img: clean },
        { id: 1, text: "Ремонт геймпадов", img: gamepad },
        { id: 2, text: "Переустановка ПО", img: bios },
        { id: 3, text: "Сложный ремонт", img: soldering },
      ],
      SecondPath: [],
      ThirdPath: [],
    },
    cards: {
      offer: "Чиним 90% поломок видеокарт",
      FirstPath: [
        { id: 0, text: "Замена видеопамяти", img: memory },
        { id: 1, text: "Замена видеочипа", img: gpu },
        { id: 2, text: "Восстановление питания ", img: charge },
        { id: 3, text: "Диагностика", img: repairCard },
      ],
      SecondPath: [],
      ThirdPath: [],
    },
    goods: {
      offer: "Чиним ВСЁ: от пультов до роботов-пылесосов",
      FirstPath: [
        { id: 0, text: "Ремонт роботов-пылесосов", img: robots },
        { id: 1, text: "Ремонт телевизоров", img: robots },
        { id: 2, text: "Ремонт наушников", img: robots },
        { id: 3, text: "Ремонт электроники", img: robots },
      ],
      SecondPath: [],
      ThirdPath: [],
    },
  },
  Models: [
    {
      label: "Huawei",
      value: "Huawei",
      role: "Master",
    },
    {
      label: "Samsung",
      value: "Samsung",
      role: "Master",
    },
    {
      label: "Nokia",
      value: "Nokia",
      role: "Master",
    },
    {
      label: "iPhone",
      value: "iPhone",
      role: "Master",
    },
  ],
};

export default state;
