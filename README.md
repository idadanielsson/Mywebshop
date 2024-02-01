# Skandinavisk Design

En e-handel som säljer inredning byggd med PHP som backend och React med Typescript som Frontend.
Projektet utgår från en egendesignad databas med tabeller som rör produkterna. Databashantering, skapande av REST API och query strings görs med PHP.

## Beroenden & krav

Webbserver: Apache 2.4 och Nginx 1.18
Databas: MySQL 5.7
Webbläsare: Chrome 88+, Firefox 85+, Safari 14+

## Begränsningar

### Lösning av CORS-problem

För att lösa CORS-relaterade problem vid utveckling lokalt, rekommenderas att använda en proxy-server eller ett tillägg som hanterar CORS-begäranden. Ett exempel är att använda cors-anywhere som en proxy-server eller installera en webbläsartillägg som 'Allow CORS: Access-Control-Allow-Origin'

## Installation

git clone https://github.com/idadanielsson/Mywebshop.git
cd my-app
npm install
för att starta: npm start

## API Endpoints

Detta projekt erbjuder ett RESTful API för att interagera med produkt-, kategori- och färgdata. Nedan följer en lista över tillgängliga endpoints:

### Produkter

- **Hämta alla produkter**

  - **GET** `http://localhost:8888/mywebshop/server/index.php?action=products`
  - Returnerar en lista över alla produkter.

- **Hämta produkt med ID**

  - **GET** `http://localhost:8888/mywebshop/server/index.php?action=products-id&id={productId}`
  - Returnerar detaljerad information för en produkt baserat på dess ID.

- **Hämta nya produkter**

  - **GET** `http://localhost:8888/mywebshop/server/index.php?action=products-news`
  - Returnerar en lista över de senaste produkterna.

- **Hämta produkter efter kategori**

  - **GET** `http://localhost:8888/mywebshop/server/index.php?action=products-by-category&id={categoryId}`
  - Returnerar produkter baserade på kategori-ID.

- **Hämta produkter efter underkategori**

  - **GET** `http://localhost:8888/mywebshop/server/index.php?action=products-by-subcategory&id={subcategoryId}`
  - Returnerar produkter baserade på underkategori-ID.

- **Hämta produkter efter färg**

  - **GET** `http://localhost:8888/mywebshop/server/index.php?action=products-by-color&id={colorId}`
  - Returnerar produkter som matchar en specifik färg.

- **Sök produkter**
  - **GET** `http://localhost:8888/mywebshop/server/index.php?action=search-products&term={searchTerm}`
  - Utför en sökning på produkter baserat på en sökterm.

### Kategorier

- **Hämta alla kategorier**

  - **GET** `http://localhost:8888/mywebshop/server/index.php?action=categories`
  - Returnerar en lista över alla kategorier.

- **Hämta kategori med ID**
  - **GET** `http://localhost:8888/mywebshop/server/index.php?action=categories-id&id={categoryId}`
  - Returnerar detaljer för en kategori baserat på dess ID.

### Underkategorier

- **Hämta alla underkategorier**

  - **GET** `http://localhost:8888/mywebshop/server/index.php?action=subcategories`
  - Returnerar en lista över alla underkategorier.

- **Hämta underkategori med ID**
  - **GET** `http://localhost:8888/mywebshop/server/index.php?action=subcategories-id&id={subcategoryId}`
  - Returnerar detaljer för en underkategori baserat på dess ID.

### Färger

- **Hämta alla färger**

  - **GET** `http://localhost:8888/mywebshop/server/index.php?action=colors`
  - Returnerar en lista över alla tillgängliga färger.

- **Hämta färg med ID**
  - **GET** `http://localhost:8888/mywebshop/server/index.php?action=colors-id&id={colorId}`
  - Returnerar detaljer för en färg baserat på dess ID.
