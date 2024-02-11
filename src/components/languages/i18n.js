import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
        //Landing page:
      "welcome": "We provide the best food for you",
      "menu" : "Menu",
      "gallery":"Reviews",
      "about":"About",
      "Contact":"Contact",
      "book":"Book a table",
      "child_heading":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum fugit vel nisi iste dolorem quis sequi, ducimus laudantium assumenda. Neque eaque dolorem delectus ipsum velit impedit recusandae! Mollitia, vel.",
      "menu_header" : "Our Special Dishes",
      "menu_text" : "We provide the best quality and reasonable price.",
      "menu_text_sec":"You deserve the best service!",
      "main_dishes":"Main Dishes",
      "Drinks":"Drinks",
      "Salads":"Salads",
      "Desserts":"Desserts",
      "description":"description_eng",
      "Cart":"Cart",
      //Dish page
      "card_success":"Successfully added to cart!",
      "go_menu":"Go To Menu",
      "go_cart":"Go To Cart",
      "close_look":"Have a  closer look on the image and decide to make you happy!",
      "add_cart":"Add To Cart",

      //Cart page:

      "cart_header":"My Cart",
      "Product":"Product",
      "Name":"Name",
      "unit_price":"Unit Price",
      "Count":"Count",
      "Total":"Total",
      "Action":"Action",
      "Delete":"Delete",
      "no_data":"No Order Yet!",
      "Subtotal":"Subtotal",
      "Checkout":"Checkout",
      "order_submitted":"Order Submitted!",
      "return_menu":"Return to menu",

      //Profile page:
      "First Name":"First Name",
      "Last Name":"Last Name",
      "Phone Number":"Phone Number",
      "Email":"Email",
      "Password":"Password",
      "Update Profile":"Update Profile",
      "Profile":"Profile",
      "Wish list":"Wish list",
      "Log out":"Log out",
      //Table page:

      "table_header":"Find your table for any occasion!",
      "number":"Number of people",
      "DATE":"DATE",
      "Date":"Date",
      "TIME":"TIME",
      "Time":"Time",
      "Ordinary":"Ordinary",
      "Premium":"Premium",
      "table_success":"Table is ordered successfully!",
      "table_error":"Something went wrong!",
      "Confirm":"Confirm",
      "Order":"Order",
      "List":"List",
      "Type":"Type",

    }
  },
  kor: {
    translation: {
        //Landing page:
      "welcome": "우리는 당신에게 최고의 음식을 제공합니다",
      "menu" : "매뉴",
      "gallery":"갤러리",
      "about":"정보",
      "Contact":"연락",
      "book":"테이블 예약",
      "child_heading":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum fugit vel nisi iste dolorem quis sequi, ducimus laudantium assumenda. Neque eaque dolorem delectus ipsum velit impedit recusandae! Mollitia, vel.",
      "menu_header" : "우리의 특별 요리",
      "menu_text":"최고의 품질과 합리적인 가격을 제공합니다.",
      "menu_text_sec":"당신은 최고의 서비스를 받을 자격이 있습니다!",
      "main_dishes":"메인 요리",
      "Drinks":"임료",
      "Salads":"샐러드",
      "Desserts":"디저트",
      "description":"description_kor",
      "Cart":"장바구니",
      // Dish page:
      "card_success":"장바구니에 성공적으로 추가되었습니다!",
      "go_menu":"메뉴로 이동",
      "go_cart":"장바구니로 이동",
      "close_look":"이미지를 자세히 살펴보고 행복하게 해주기로 결정하세요!",
      "add_cart":"장바구니에 담기",

        //Cart page:

        "cart_header":"내 장바구니",
        "Product":"상품",
        "Name":"이름",
        "unit_price":"단가",
        "Count":"개수",
        "Total":"총액",
        "Action":"행동",
        "Delete":"삭제",
        "no_data":"아직 주문이 없습니다!",
        "Subtotal":"소계",
        "Checkout":"지불",
        "order_submitted":"주문이 제출되었습니다!",
        "return_menu":"메뉴로 돌아가기",

        //Profile page:
      "First Name":"이름",
      "Last Name":"성",
      "Phone Number":"전화 번호",
      "Email":"이매일",
      "Password":"비밀 번호",
      "Update Profile":"프로필 업데이트",
      "Profile":"프로필",
      "Wish list":"위시리스트",
      "Log out":"로그 아웃",
        //Table page:

        "table_header":"어떤 상황에도 어울리는 테이블을 찾아보세요!",
        "number":"인원수",
        "DATE":"날짜",
        "Date":"날짜",
        "TIME":"시간",
        "Time":"시간",
        "Ordinary":"평범한",
        "Premium":"프리미엄",
        "table_success":"테이블이 성공적으로 주문되었습니다!",
        "table_error":"문제가 발생했습니다!",
        "Confirm":"확인",
        "Order":"주문하기",
        "List":"목록",
        "Type":"유형",
    }
  },
  uz:{
    translation:{
        //Landing page:
        "welcome":"Biz siz uchun eng yaxshi taomni taqdim etamiz",
        "menu" : "Menyu",
        "gallery":"Galereya",
        "about":"Biz Haqimizda",
        "Contact":"Bog'lanish",
        "book":"Bron qilish",
        "child_heading":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum fugit vel nisi iste dolorem quis sequi, ducimus laudantium assumenda. Neque eaque dolorem delectus ipsum velit impedit recusandae! Mollitia, vel.",
        "menu_header" : "Bizning Maxsus Taomlarimiz",
        "menu_text":"Biz eng yaxshi sifat va maqbul narxlarni taqdim etamiz.",
        "menu_text_sec":"Siz eng yaxshi xizmatga loyiqsiz!",
        "main_dishes":"Asosiy taomlar",
        "Drinks":"Ichimliklar",
        "Salads":"Salatlar",
        "Desserts":"Desertlar",
        "description":"description_uz",
        "Cart":"Savatcha",

        //Dish page:

        "card_success":"Savatchaga qo'shildi!",
        "go_menu":"Menyuga qaytish",
        "go_cart":"Savatchaga qaytish",
        "close_look":"To'g'ri qaror qabul qilish uch rasmga yaqindan qarang!",
        "add_cart":"Savatchaga qo'shish",

        
      //Cart page:

      "cart_header":"Mening Savatcham",
      "Product":"Maxsulot",
      "Name":"Ismi",
      "unit_price":"Tan narxi",
      "Count":"Miqdori",
      "Total":"Jami",
      "Action":"Harakat",
      "Delete":"O'chirish",
      "no_data":"Buyurtma mavjud emas!",
      "Subtotal":"Umumiy Hisob",
      "Checkout":"To'lov",
      "order_submitted":"Buyurtma Qabul qilindi!",
      "return_menu":"Menyuga qaytish",

      //Profile page:
      "First Name":"Ism",
      "Last Name":"Familiya",
      "Phone Number":"Telefont Raqam",
      "Email":"Pochta(email)",
      "Password":"Maxfiy raqam",
      "Update Profile":"Profilni yangilash",
      "Profile":"Profil",
      "Wish list":"Istaklar roʻyxati",
      "Log out":"Chiqish",
        //Table page:

        "table_header":"Har qanday vaziyatga mos keladigan stolni toping!",
        "number":"Xo'randalar soni",
        "DATE":"SANA",
        "Date":"Sana",
        "TIME":"VAQT",
        "Time":"Vaqt",
        "Ordinary":"Oddiy",
        "Premium":"Premium",
        "table_success":"Buyurtma muvaffaqiyatli yakunlandi!",
        "table_error":"Qandaydir xatolik!",
        "Confirm":"Tasdiqlash",
        "Order":"Buyurtma",
        "List":"Ro'yxat",
        "Type":"Tur",

    }
  }
};

i18n
.use(Backend)
// detect user language
// learn more: https://github.com/i18next/i18next-browser-languageDetector
.use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;