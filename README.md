# Recriutment task

1 Installation  
    a)npm install or sudo npm install - install dependencies.  
    b)npm run dev - developement mode at <http://localhost:8000/>.  
    c)npm run build - to transpile for sendig at serwer.
    d)on Windows u need install build tools for node-sass with command -npm install --global --production windows-build-tools for node-sass.
    e)if u dont want download, its avaible at <http://rectask2.rafalmalenta.usermd.net/>.

1. Stwórz projekt front-endowy w wybranym przez siebie frameworku/bibliotece
(React,Angularitp.) lub vanilla js.</li>
2. Utworz widgeta, którego zadaniem będzie wyświetlanie informacji pogodowych dladanego miasta
    1. Instancja widgeta powinna zostać dodana do strony głównej
    2. Podstawowy design widgetu:<https://webm.red/M3GK.webm>
    3. W widgecie należy przeprowadzić następujące modyfikacje:
        1. Nazwę miasta zastąpić drop downem zasilanym danymi z zewnętrznego API (patrz niżej)
        2. Zmiana miasta powinna przeładowywać dane pogodowe
    4. Assety (obrazki):(nieistotny adres)
    5. Aplikacja powinna być responsywna
    6. Dane pogodowe powinny być pobierane z zewnętrznego API pogodowego
        1. Lista miast:<http://dev-weather-api.azurewebsites.net/api/city>
        2. Pogoda dla wybranego miasta:<http://dev-weather-api.azurewebsites.net/api/city/{cityId}/weather?date=yyyy-MM-dd>
        3. Przykład użycia:<http://dev-weather-api.azurewebsites.net/api/city/1/weather?date=2019-07-25>
    7. Zwróć uwagę na strukturę aplikacji oraz organizację kodu
3. Kod projektu powinien być hostowany na platformie github.
4. Dostarczenie rozwiązania nastąpi poprzez przesłanie linku do projektu githuba.
5. Rozwiązanie powinno zawierać informacje dotyczące sposobuinstalacji oraz uruchomienia projektu
