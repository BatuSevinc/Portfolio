import PhotoPortfolio from "../images/photoPortfolio.png";
import PhotoLand from "../images/photoland.png";
import KukaSocial from "../images/kukaSocial.png";
import Seamark from "../images/seamark.png";
import Booking from "../images/batuBooking.png";
import Restaurant from '../images/restaurant.png'
import Kerzz from '../images/Kerzz.png';
const ProjectCardData = [
  {
    image: Kerzz,
    title: "Kerzz Case",
    descTR: (
      <>
 - Bu proje, React kullanılarak geliştirilmiş tek sayfalık bir web uygulamasıdır. Uygulama, API üzerinden veri çekimi, konum tabanlı mağaza listesi, infinite-scroll özelliği, arama, filtreleme, favoriye ekleme, ürün detayı,favoriye eklenen verileri localStorage'de tutma, skeleton ekranları ve responsive tasarım gibi çeşitli özellikleri içermektedir.
 <br />
 <b> PROJE YAPISI</b>
 <br />
 1- API Üzerinden Veri Çekimi: 
Uygulama, belirli bir API üzerinden post metoduyla veri çekimi yapar. Bu veriler, kullanıcıya mağaza bilgilerini sunar.
<br />
 2- Konum Tabanlı Mağaza Listesi: 
Kullanıcının izni dahilinde bulunduğu lokasyonu alarak, mağazaların konumlarına göre kilometre hesabı yapar ve listeler.
<br />
 3- Infinite-Scroll Özelliği: 
Yoğun veri kullanımını ele almak için sayfanın aşağısına indikçe otomatik olarak 24'lük veri çekimi yapar.
<br />
 4- Arama (Search) Özelliği: 
Kullanıcının mağazalar arasında arama yapmasına olanak tanır.
<br />
 5- Filtreleme İmkanı: 
Kullanıcıya mağaza listesini filtreleme imkanı sunar.
<br />
 6- Sepet İşlevi: 
Kullanıcının sepetine ürün eklemesine, çıkarmasına ve sipariş vermesine olanak tanır.
<br />
 7- Favori Oluşturma: 
Kullanıcının favorilere eklemesi sonucu eklenenler localStorage'a ve navbar kısmında bulunan favoriler kısmına eklenir. Kullanıcı tarayıcıyı kapatsa bile favoriye ekledikleri localStorage'de saklanarak kullanıcının tekrar giriş yapması halinde önceden eklediği favorilere ulaşabilir.
<br />
 8- Ürün Detayı:
Kullanıcı istediği ürünün üzerine tıklayarak daha detaylı bilgiye ulaşabilir. İsterse detay kısmından favorilere ekleyebilir veya favorilerden kaldırabilir.
<br />
 9- Skeleton Ekranları: 
Eksik veya gelmeyen bilgiler için kullanıcıya bilgi vermek amacıyla skeleton ekranları kullanır.
<br />
 10- Responsive (Duyarlı) Tasarım: 
Farklı ekran boyutlarına uyum sağlayacak şekilde tasarlanmıştır.
<br />
      </>
    ),
    descEN: (
      <>
      - This project is a single-page web application developed using React. The application includes various features such as data retrieval via API, a location-based store list, infinite-scroll functionality, search, filtering, adding to favorites, product details, storing favorite data in localStorage, skeleton screens, and responsive design.
      <br />
      <b> PROJECT STRUCTURE</b>
      <br />
      1- Data Retrieval via API:
The application fetches data through a POST method from a specific API. These data provide store information to the user.
     <br />
     2- Location-Based Store List:
By obtaining the user's location with their permission, the application calculates distances based on the locations of stores and lists them accordingly.
     <br />
     3- Infinite-Scroll Feature:
To handle heavy data usage, the page automatically fetches data in sets of 24 as the user scrolls down.
     <br />
     4- Search Feature:
Allows the user to search among stores.
     <br />
     5- Filtering Capability:
Provides the user with the ability to filter the store list.
     <br />
     6- Cart Functionality:
Allows the user to add, remove, and place orders from their cart.
     <br />
     7- Creating Favorites:
When the user adds items to favorites, the added items are stored in localStorage and displayed in the favorites section of the navbar. Even if the user closes the browser, the added favorites are stored in localStorage, allowing the user to access previously added favorites upon logging in again.
     <br />
     8- Product Details:
The user can click on a product to access more detailed information. If desired, they can add or remove the product from favorites through the details section.
     <br />
     9- Skeleton Screens:
Utilizes skeleton screens to provide users with information placeholders in case of missing or yet-to-arrive data.
     <br />
     10- Responsive Design:
Designed to adapt to different screen sizes.
     <br />
           </>
    ),
    view: "https://batuhansevinc-kerzz.netlify.app/",
    source: "https://github.com/BatuSevinc/kerzz",
  },
  {
    image: PhotoPortfolio,
    title: "Photo Portfolio",
    descTR: (
      <>
        React ve Tailwind CSS kullanarak oluşturduğum Photo Portfolio sitesinde,
        sayfalar arasındaki geçişlere animasyonlar ekleyerek kullanıcıların
        ilgisini daha da çekmeyi hedefledim. Sitenin genel teması sade ve göz
        yormayan bir tasarım üzerine kurulu. Ayrıca, tüm sayfalarda kullanmak
        için Mouse move efekti eklemek için createContext yapısını kullanmayı
        tercih ettim.
        <br />
        Sayfalar arasındaki geçişleri React Router Dom kullanarak sağladım ve
        aynı zamanda tasarımı responsive olacak şekilde düzenledim. Bu sayede
        kullanıcılar, farklı cihazlarda siteyi rahatlıkla kullanabilirler.
        <br />
        Proje, sade ve şık bir websitesi oluşturmak için özenle tasarlandı.
        Animasyonlar, kullanıcı deneyimini artırmak ve görsel olarak etkileyici
        bir sunum sağlamak amacıyla kullanıldı. Ayrıca, Mouse move efekti
        sayesinde kullanıcılar farelerini hareket ettirdikçe site üzerinde hoş
        bir etki elde ediyorlar.
        <br />
        Bu proje, fotoğraf portföyünüze odaklanmanızı sağlamak için minimalist
        bir yaklaşımla oluşturuldu. Sitenin sade ve şık tasarımı,
        fotoğraflarınızın ön plana çıkmasını sağlarken, animasyonlar ve efektler
        de kullanıcıların ilgisini çekmek için kullanıldı.
        <br />
        Sade ve şık bir websitesi deneyimi için bu projeyi keyifle
        inceleyebilirsiniz.
      </>
    ),
    descEN: (
      <>
        I created a Photo Portfolio website using React and Tailwind CSS, aiming
        to enhance user engagement by adding animations to page transitions. The
        overall theme of the site is simple and easy on the eyes. Additionally,
        I utilized the createContext structure to incorporate a Mouse move
        effect, making it available across all pages.
        <br />
        <br />
        I implemented page transitions using React Router Dom and ensured that
        the design is responsive, allowing users to comfortably navigate the
        site on different devices.
        <br />
        <br />
        The project was meticulously designed to create a sleek and elegant
        website. The animations were used to enhance the user experience and
        provide visually impressive presentations. Moreover, the Mouse move
        effect adds a pleasant touch as users move their cursors on the site.
        <br />
        <br />
        This project was developed with a minimalist approach to focus on your
        photo portfolio. The clean and stylish design allows your photos to take
        center stage, while the animations and effects are used to captivate
        users attention.
        <br />
        <br />
        Feel free to explore this project for a simple and elegant website
        experience.
      </>
    ),
    view: "https://batusevinc-photoportfolio.netlify.app",
    source: "https://github.com/BatuSevinc/Photo-portfolio",
  },
  {
    image: PhotoLand,
    title: "Photo Land",
    descTR: (
      <>
        Bu web sitesi, fotoğraf makinelerinin satışını sağlamak amacıyla
        tasarlanmıştır. Kullanıcılar, kategorilere göre istedikleri ürünleri
        filtreleyebilir veya arama butonunu kullanarak arama yapabilirler.
        Ayrıca, en son eklenen ürünler ana sayfada "new" etiketiyle bir Carousel
        olarak görüntülenir.
        <br />
        Kullanıcılar istedikleri ürünleri sepete ekleyebilir, sepet içerisindeki
        ürün sayısını değiştirebilir veya ürünü sepetten çıkarabilirler.
        Sepetteki ürünlerin birim fiyatı ve toplam tutarı da görüntülenebilir.
        Sepeti boşalt seçeneğiyle sepeti tamamen boşaltma veya satın alma
        butonuyla satın alma işlemi gerçekleştirme imkanı sunulmaktadır.
        <br />
        Beğendikleri ürünün sayfasına giderek özelliklerini daha detaylı
        inceleyebilir ve benzer ürünleri görüntüleyebilirler.
        <br />
        Back end tarafını strapi’den oluşturduğum bu proje kullanıcı dostu ve
        hoş bir arayüzle tasarlanmıştır, kullanıcıları karşılamak için idealdir.
        <br />
        Bu web sitesi aynı zamanda responsive (duyarlı) tasarıma sahiptir. Yani,
        farklı cihazlarda, örneğin bilgisayarlarda, tabletlerde veya mobil
        telefonlarda, kullanıcıların rahatça erişebilmesi ve kullanabilmesi için
        otomatik olarak uyum sağlar. Kullanıcılar, farklı cihazlarda aynı
        kullanıcı dostu arayüzü deneyimleyebilir ve fotoğraf makinelerinin
        satışını gerçekleştirebilirler.
      </>
    ),
    descEN: (
      <>
        This website is designed to facilitate the sale of cameras. Users can
        filter the products they want based on categories or perform searches
        using the search button. Additionally, the latest added products are
        displayed on the homepage as a Carousel with a "new" label.
        <br />
        Users can add desired products to their shopping cart, modify the
        quantity of items in the cart, or remove products from the cart. The
        unit price and total amount to be paid in the cart are also visible. The
        website provides the option to empty the cart or proceed to checkout by
        clicking the purchase button.
        <br />
        Users can also navigate to the product page to explore its features in
        more detail and view similar products.
        <br />
        This project, with its user-friendly and visually appealing interface,
        is designed to welcome users and provide an ideal shopping experience.
        <br />
        Furthermore, this website is built with a responsive design, ensuring it
        adapts to different devices such as computers, tablets, and mobile
        phones. Users can easily access and navigate the website on various
        devices, experiencing the same user-friendly interface and completing
        their camera purchases.
      </>
    ),
    view: "https://youtu.be/Es6bMD4gP58",
    source: "https://github.com/BatuSevinc/PhotoLand",
  },
   {
    image: Restaurant,
    title: "Batu Restaurant",
    descTR: (
      <>
React ve Tailwind CSS kullanarak geliştirdiğim restoran sayfası, kullanıcıları etkileyici bir arayüzle karşılıyor. Animasyonları kullanarak, kullanıcıların dikkatini çekmeyi ve deneyimlerini daha da keyifli hale getirmeyi amaçladım. Framer Motion kütüphanesini kullanarak sayfa geçişleri ve bileşen animasyonları oluşturdum, böylece sayfanın canlı ve dinamik bir hissiyat yaratmasını sağladım.
<br/>
Kullanıcıların kolayca tarihleri seçebilmeleri ve saatleri ile saat dilimlerini ayarlayabilmeleri için React Datepicker ve React Time Picker bileşenlerini ekledim. Bu, kullanıcıların randevularını yönetmelerini ve zaman tabanlı etkinlikleri düzenlemelerini kolaylaştırdı.
<br/>
Oluşturduğum karusel (slayt gösterisi) için React Responsive Carousel kütüphanesini tercih ettim. Bu sayede kullanıcılar, sayfanın responsive yapısına uygun ve kolay kullanılabilen bir karusel ile içerikleri keşfedebiliyorlar.
<br/>
Tarayıcı uyumluluğunu artırmak için Autoprefixer kullanırken, sayfada kullanacağım ikonlar için React Icons kütüphanesini kullandım. Bu, sayfayı farklı tarayıcılarda sorunsuz bir şekilde çalıştırmamı ve çeşitli ikonları kolayca entegre etmemi sağladı.
<br/>
Proje, lezzetli restoran içerikleri ve kullanıcı dostu bir arayüz sunarak kullanıcıların iştahını kabartıyor. Daha detaylı incelemek için 'View' butonuna tıklayarak projeyi keşfedebilirsiniz. Keyifli kullanımlar dilerim!

      </>
    ),
    descEN: (
      <>
I developed a restaurant page using React and Tailwind CSS, which welcomes users with an impressive interface. By incorporating animations, my aim was to captivate users' attention and make their experiences even more enjoyable. Leveraging the Framer Motion library, I created smooth page transitions and captivating component animations, resulting in a lively and dynamic feel to the page.
<br/>
To facilitate users in easily selecting dates and adjusting time and time zones, I added React Datepicker and React Time Picker components. This enables users to efficiently manage appointments and time-based events.
<br/>
For the carousel (slideshow) I implemented, I opted for the React Responsive Carousel library. As a result, users can explore content seamlessly with a carousel that adapts to the page's responsive layout and provides a user-friendly experience.
<br/>
To enhance browser compatibility, I utilized Autoprefixer, ensuring the page runs smoothly on various browsers. Additionally, I employed the React Icons library for incorporating icons throughout the page. This facilitated smooth integration of various icons.
<br/>
The project offers a delectable restaurant experience and presents a user-friendly interface that whets the users' appetite. Feel free to click the 'View' button to explore the project in more detail. Enjoy your experience!

      </>
    ),
    view: "https://batusevinc-restaurant.netlify.app/",
    source: "https://github.com/BatuSevinc/Restaurant",
  },
  {
    image: KukaSocial,
    title: "KUKA Social Media",
    descTR: (
      <>
        Bu projemde, sosyal medya uygulaması geliştirdim. Uygulama,
        kullanıcıların paylaştığı verilerin anasayfada gösterilmesini sağlamak
        için componentler arası geçişleri kullanıyor. Ayrıca, kullanıcılar
        fotoğraflara yapılan yorumlara tıklayarak yorum yapanları görebiliyor ve
        bu kullanıcıların profillerine ulaşabiliyor. Bu uygulama, kullanıcılara
        iki farklı mod seçeneği sunuyor: dark mode ve light mode. Kullanıcılar
        tercihlerine göre uygulamanın arka plan rengini ve tema stilini
        değiştirebiliyorlar. Böylece, kullanıcılar kendi tercihlerine göre daha
        kişiselleştirilmiş bir deneyim yaşayabiliyorlar. Sonuç olarak, bu
        projemde geliştirdiğim sosyal medya uygulaması, kullanıcıların
        paylaşımları görüntüleyebilmelerini, yorumları inceleyebilmelerini ve
        farklı tema seçeneklerinden yararlanabilmelerini sağlayarak kapsamlı bir
        deneyim sunmaktadır.
      </>
    ),
    descEN: (
      <>
        In this project, I have developed a social media application. The
        application utilizes component-based transitions to display
        user-generated data on the homepage. Additionally, users can click on
        comments made on photos to view the users who made those comments and
        access their profiles. The application offers users two mode options:
        dark mode and light mode. Users can customize their experience by
        choosing their preferred background color and theme style. This allows
        users to personalize the application according to their preferences.
        Overall, this project delivers a comprehensive experience by enabling
        users to view posts, explore comments, and take advantage of different
        theme options.
      </>
    ),
    view: "https://batusevinc-social-app.netlify.app/",
    source: "https://github.com/BatuSevinc/SocialMedia",
  },
  {
    image: Seamark,
    title: "SEAMARK",
    descTR: (
      <>
        Bu proje, Seamark Consultancy web sitesinin anasayfasının bir klonunu
        oluşturma amacıyla geliştirildi. Anasayfayı aktifleştirdik ve kullanıcı
        deneyimini zenginleştirmek için bazı özellikler ekledik.
        <br />
        Çözüm kısmında, hover özelliğinde arka plan görselinin görüntülenmesini
        sağlamak için bir background-image kullandık. Bu sayede, kullanıcının
        fareyi üzerine getirdiği alanlarda hoş bir görsel etkileşim sağladık.
        <br />
        Ayrıca, card yapılarını daha okunaklı hale getirmek için bileşenlerden
        yararlandık. Bu şekilde, her bir kartı ayrı bir bileşen olarak
        oluşturduk ve kodun daha modüler olmasını sağladık. Bu yapı, projenin
        daha sürdürülebilir ve genişletilebilir olmasını sağladı.
        <br />
        Responsive uyumluluk konusunda da özen gösterdik. Tasarımı, farklı ekran
        boyutlarına uyum sağlayacak şekilde geliştirdik. Böylece, projenin mobil
        cihazlardan büyük ekranlı masaüstü bilgisayarlara kadar her türlü
        cihazda düzgün bir şekilde görüntülenmesini sağladık.
        <br />
      </>
    ),
    descEN: (
      <>
        This project was developed with the aim of creating a clone of the
        Seamark Consultancy website's homepage. We activated the homepage and
        added some features to enhance the user experience.
        <br />
        In the solution section, we used a background-image to display the
        background image on hover, creating a pleasant visual interaction when
        the user hovers over certain areas.
        <br />
        Furthermore, we utilized components to make the card structures more
        readable. Each card was created as a separate component, resulting in a
        more modular code structure. This approach makes the project more
        sustainable and extensible.
        <br />
        We also paid attention to responsive compatibility. The design was
        developed to adapt to different screen sizes, ensuring proper display
        across various devices, from mobile devices to large desktop computers.
      </>
    ),
    view: "https://batusevinc-seamark.netlify.app/",
    source: "https://github.com/BatuSevinc/seaMark-App",
  },
  {
    image: Booking,
    title: "BOOKING",
    descTR: (
      <>
        Bu projemde, Booking uygulamasının web sayfasını React kullanarak
        geliştirdim. Kullanıcılar date-fns ve react-date-range kütüphanelerini
        kullanarak tatil yapmak istedikleri tarih aralığını seçebilir ve otel
        arayabilirler. Ayrıca, gitmek istedikleri şehirlere göre filtreleme
        yapma imkanına sahiptirler. Kullanıcılar, oda sayısını seçmeden veya
        geçmiş tarihleri işaretleyerek arama yapamazlar.
        <br />
        Bu web sayfası kullanıcı dostu bir arayüzle tasarlandı. Menüler,
        düğmeler ve diğer etkileşimli bileşenler kolayca erişilebilir ve
        kullanılabilir durumdadır. Renk paleti ve görsel düzenlemeler, sayfanın
        daha çekici ve estetik görünmesini sağlamak için özenle seçildi.
        <br />
        Projem, React'in güçlü özelliklerini kullanarak interaktif bir deneyim
        sunuyor. Kullanıcılar, tatil planlarını kolayca oluşturabilir ve
        istedikleri özelliklere sahip otelleri bulabilirler.
      </>
    ),
    descEN: (
      <>
        I have developed the web page of the Booking application in this project
        using React. Users can select their desired vacation date range using
        date-fns and react-date-range libraries, and search for hotels by
        entering the number of guests. Additionally, they can filter the results
        based on the cities they want to visit. Users are not able to perform a
        search without selecting the number of rooms or marking past dates. The
        web page is designed with a user-friendly interface. Menus, buttons, and
        other interactive components are easily accessible and usable. The color
        palette and visual enhancements are carefully chosen to make the page
        more appealing and aesthetically pleasing. The project utilizes the
        powerful features of React to provide an interactive experience. Users
        can easily plan their vacations and find hotels with their desired
        features.
      </>
    ),
    view: "https://batusevinc-booking.netlify.app/",
    source: "https://github.com/BatuSevinc/Booking",
  },
];
export default ProjectCardData;
