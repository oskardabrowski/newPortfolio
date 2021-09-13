document.addEventListener('DOMContentLoaded', function() {
    const skillsAll = document.querySelectorAll('.skills-container-group-element');
    const skills = document.querySelector('.navigator-skills');
    const skillsCloseBtn = document.querySelector('.navigator-skills-container-close');
    const skillIco = document.querySelector('.navigator-skills-container-content-svg');
    const skillDots = document.querySelector('.navigator-skills-container-content-dots');
    const skillDesc = document.querySelector('.navigator-skills-container-content-desc');
    const descObjects = [
        {
            icon: './img/icons/html-five.svg#html',
            dots: 4.5,
            desc: `Jest to moja obiektywna ocena znajomości tego języka pod kątem pisania stron internetowych. HTML tak jak przez większość programistów jest przeze mnie uznawany bardziej jako język struktury strony niż pełnoprawny język programowania. Mogę uznać, że znam go bardzo dobrze, gdyż nie mam problemu, aby dodawać do moich stron elementy i je edytować. Obiektywnie oceniam swoją znajomość HTML na 4,5/5, gdyż nie mogę powiedzieć, iż znam wszystkie tagi i elementy wchodzące w jego skład.`
        },
        {
            icon: './img/icons/css3.svg#css',
            dots: 4,
            desc: `Jest to moja obiektywna ocena znajomości tego języka pod kątem pisania stron internetowych. CSS jako język arkuszy stylów kaskadowych ma ogromne możliwości, nie służy tylko do tworzenia stylów, ale także zaawansowanych animacji. Moja obiektywna ocena wynosi 4/5, gdyż nie mam problemu ze stosowaniem tego języka na moich stronach internetowych a nawet rozwinąłem się w stronę Sass. Nie potrafię jednak tworzyć w nim niesamowitych rzeczy jak niektórzy z Developerów.`
        },
        {
            icon: './img/icons/javascript.svg#js',
            dots: 3,
            desc: `Jest to moja obiektywna ocena znajomości tego języka pod kątem pisania stron internetowych. JavaScript zwłaszcza w wersji VanillaJS jest obecnie najbardziej lubianym przeze mnie językiem programowania. Dla mnie znacznym plusem jest fakt, iż posiada wiele przydatnych bibliotek i rozszerzeń oraz jest najpopularniejszym językiem programowania przez co łatwo znaleźć wiele ciekawych projektów i inspiracji.`
        },
        {
            icon: './img/icons/jquery.svg#jquery',
            dots: 2.5,
            desc: `Dobrze mi znana i najpopularniejsza biblioteka JavaScript, ułatwia ona pisanie wielu rzeczy, szczególnie przydany dla mnie jest AJAX CALL który pisany za pomocą jQuery jest znacznie bardziej przejrzysty niż w przypadku VanillaJS. Aktualnie ciekawi mnie Replace jQuery który zamienia wszystkie wykorzystane metody jQuery na czysty JavaScript.`
        },
        {
            icon: './img/icons/sass.svg#sass',
            dots: 4,
            desc: `Sass, czyli znaczna poprawa możliwości CSS. Jest on bardzo przeze mnie lubiany i korzystam z niego obecnie cały czas. Aby go kompilować wykorzystuje moduł NodeJS - node-sass który przetwarza Sass na CSS. Pozwala mi to na komfortową pracę z CSS dzieląc style na wiele plików a następnie kompresję stylów.`
        },
        {
            icon: './img/icons/php.svg#php',
            dots: 3.5,
            desc: `PHP jako język programowania wykorzystuję głównie do budowania stron internetowych które mają
            interakcję z bazami danych. Pozwala on na tworzenie dużych i bezpiecznych projektów oraz ma dwie bardzo przydatne
            biblioteki (Laravel i Symphony) które mnie ciekawią i w przyszłości chętnie się z nimi zapoznam.`
        },
        {
            icon: './img/icons/mysql.svg#mysql',
            dots: 3,
            desc: `MySQL - język zapytań do baz danych który znam zarówno przez wzgląd na interakcję z bazami danych przez PHP oraz przez zapytania kierowane z poziomu Systemów Informacji Przestrzennych.`
        },
        {
            icon: './img/icons/node-dot-js.svg#node',
            dots: 2.5,
            desc: `NodeJS obecnie wykorzystuję do instalacji i użytkowania modułów, dążę do rozwinięcia swojej znajomości Node, gdyż pozwala na wiele więcej niż to do czego wykorzystuję go obecnie.`
        },
        {
            icon: './img/icons/database.svg#db',
            dots: 0,
            desc: `Bazy danych MySQL, potrafię je tworzyć w PHP My Admin oraz prowadzić swobodną interakcję z nimi poprzez PHP. Nie jest dla mnie problemem umieszczeni gotowej aplikacji wykorzystującej bazę danych w Internecie.`
        },
        {
            icon: './img/icons/bootstrap.svg#bootstrap',
            dots: 4,
            desc: `Bootstrap, jest to lubiana przeze mnie biblioteka, która pozwala na szybkie budowanie aplikacji internetowych bez większych umiejętności technicznych. Jest dla mnie bardzo użyteczna zwłaszcza przez wzgląd na przejrzystą dokumentację, która bardzo podczas wykorzystywania tej biblioteki.`
        },
        {
            icon: './img/icons/webpack.svg#webpack',
            dots: 0,
            desc: `Webpack, czyli jeden z podstawowych modułów pozwalający na wykorzystanie innych modułów jednocześnie. Obecnie korzystam z niego do konfiguracji BabelJS, czyli kompilatora kodu wersji powyżej ES5 do ES5 która jest odczytywana przez wszystkie przeglądarki.`
        },
        {
            icon: './img/icons/babel.svg#babel',
            dots: 0,
            desc: `Jeden z najbardziej przydatnych modułów dla mnie osobiście, pozwalający na konwersję JavaScript z wersji powyżej ES5 do wersji ES5 tak aby wszystkie przeglądarki mogły odczytać dany kod, gdyż wsparcie dla najnowszych wersji ECMAScript jest uzyskiwane przez nie wolniej lub wcale jak już w przypadku Internet Explorer.`
        },
        {
            icon: './img/icons/expand.svg#expand',
            dots: 0,
            desc: `RWD (Responsive Web Design) jest to podstawowa umiejętność, która moim zdaniem powinna być znana każdemu programiście. Jednakże wpisuję ją tutaj, aby nie było wątpliwości odnośnie tego, iż ją znam.`
        },
        {
            icon: './img/icons/react.svg#react',
            dots: 1,
            desc: `Jest to mój obecny cel rozwoju. Uczę się Reacta od niedawna i bardzo mi się podoba, mimo iż ma wyższy próg wejścia niż przykładowo VueJS. W niedługim czasie spodziewam się stworzyć projekt oparty na React.`
        },
        {
            icon: './img/icons/styled-components.svg#styled',
            dots: 0,
            desc: `Jest to moduł dla Reacta który pozwala na tworzenie komponentów o danym stylu. Lubię go oraz wiąże z nim pewne nadzieje w trakcie nauki React.`
        },
    ]
    skillsCloseBtn.addEventListener('click', function() {
        skills.style.clipPath = 'polygon(100% 0, 100% 0%, 100% 100%, 100% 100%, 100% 50%)';
    })

    skillsAll.forEach(el => {
        el.addEventListener('click', function() {
            let id = el.getAttribute('elid')-1;
            let dotsNum = descObjects[id].dots;
            let dotsString = '';
            if(dotsNum > 0) {
                for(let i = 0; i < 5; i++) {
                    if(i+1 <= dotsNum) {
                        dotsString += `<svg>
                        <use xlink:href="./img/icons/dotfillall.svg#all">
                        </svg>`;
                    } else if (i+1 > dotsNum && ((i+1)-dotsNum) == 0.5) {
                        dotsString += `<svg>
                        <use xlink:href="./img/icons/dotfillhalf.svg#half">
                        </svg>`;
                    } else {
                        dotsString += `<svg>
                        <use xlink:href="./img/icons/dotempty.svg#empty">
                        </svg>`;
                    }
                }
            }
            skillDots.innerHTML = dotsString;
            skillIco.innerHTML = `<svg>
                <use xlink:href="${descObjects[id].icon}"></use>
            </svg>`;
            skillDesc.innerHTML = descObjects[id].desc
            skills.style.clipPath = 'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)';
        })
    })
})