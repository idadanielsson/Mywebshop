-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Värd: localhost:8889
-- Tid vid skapande: 04 feb 2024 kl 12:07
-- Serverversion: 5.7.39
-- PHP-version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `mywebshop`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `brands`
--

CREATE TABLE `brands` (
  `id` int(200) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `brands`
--

INSERT INTO `brands` (`id`, `name`) VALUES
(1, 'Ferm living'),
(2, 'Mateus'),
(3, 'Rörstrand'),
(4, 'Skrufs Glasbruk'),
(5, '&Tradition'),
(6, 'Scandi living'),
(7, 'Globen Lighting'),
(8, 'Fine Little Day'),
(9, 'Stoff');

-- --------------------------------------------------------

--
-- Tabellstruktur `categories`
--

CREATE TABLE `categories` (
  `id` int(100) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Dukning & servering'),
(2, 'Inredning'),
(3, 'Belysning'),
(4, 'Mattor & textil'),
(5, 'Möbler');

-- --------------------------------------------------------

--
-- Tabellstruktur `colors`
--

CREATE TABLE `colors` (
  `id` int(100) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `colors`
--

INSERT INTO `colors` (`id`, `name`) VALUES
(1, 'Vit'),
(2, 'Klar'),
(3, 'Smokey grey'),
(4, 'Beige'),
(5, 'Silver'),
(6, 'Grå'),
(7, 'Sand'),
(8, 'multifärgad'),
(9, 'Dark Plum'),
(10, 'Ljusgrå'),
(11, 'Grön'),
(12, 'Mustard'),
(13, 'Svart'),
(14, 'Mässing');

-- --------------------------------------------------------

--
-- Tabellstruktur `products`
--

CREATE TABLE `products` (
  `id` int(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(500) NOT NULL,
  `short_description` varchar(200) NOT NULL,
  `img` varchar(200) NOT NULL,
  `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fk_categoryId` int(100) NOT NULL,
  `fk_subcategoryId` int(100) NOT NULL,
  `fk_brandId` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `short_description`, `img`, `date_created`, `fk_categoryId`, `fk_subcategoryId`, `fk_brandId`) VALUES
(1, 'Ripple glas 4-pack', 'Ripple är den dekorativa serien med munblåsta glas från danska Ferm Living. Glasen kommer i ett set om fyra stycken glas där alla har olika uttryck. Den räfflade ytan ger glasen en exklusiv look som är enkel att duka med till både vardags och fest. Glasen går utmärkt att stapla på varandra så att du kan optimera utrymmet i dina köksskåp.', 'Ripple är den dekorativa serien med munblåsta glas från danska Ferm Living. ', 'https://www.nordicnest.se/assets/blobs/ferm-living-ripple-glas-4-pack-klar/p_28072-01-01-5d43dc3981.jpg?preset=medium&dpr=2', '2024-01-25 14:03:54', 1, 1, 1),
(2, 'Ripple champagneglas 2-pack', 'Ripple champagneglas från Ferm Living kommer att passa till alla dina festliga tillställningar. Varje champagnekupa är munblåst med en vackert räfflad yta vilket ger glaset ett dynamiskt och energiskt uttryck. Champagneglasen Ripple är inte bara ultimata för mousserande viner, de kan med fördel även användas som eleganta serveringsskålar eller dessertskålar. Ripple-glasen från Ferm Living säljs i 2-pack. ', 'Ripple champagneglas från Ferm Living kommer att passa till alla dina festliga tillställningar.', '', '2024-01-25 14:03:54', 1, 1, 1),
(3, 'Ripple long drink glas 4-pack', 'Ripple long drink glas är ett set med fyra munblåsta glas från Ferm Living. Glasen ingår i den eleganta Ripple-serien som kännetecknas vid sin räfflade struktur, raka linjer och sofistikerade uttryck. Precis som övriga glas i serien har även dessa olika geometriska former vilket skapar en dynamisk och spännande look samtidigt som de blir stapelbara. Dessa glas kan användas vid alla typer av måltider men är även perfekta för bubbliga, fräscha och fruktiga drinkar när festen är ett faktum!', 'Ripple long drink glas är ett set med fyra munblåsta glas från Ferm Living.', 'https://www.nordicnest.se/assets/blobs/ferm-living-ripple-long-drink-glas-4-pack-klar/p_31545-01-01-d477c93bdc.jpg?preset=medium&dpr=2', '2024-01-25 14:03:54', 1, 1, 1),
(4, 'Oyster skål Ø24 cm', 'Oyster ostronskål 24 cm från svenska varumärket Mateus är en vid skål med böljande kanter. Skålen passar att äta en sallad eller pastarätt ur, eller att använda vid servering. Den vackra handmålade keramiken är fin att kombinera i olika varianter och färger som ger en vacker dukning.', 'Oyster ostronskål 24 cm från svenska varumärket Mateus är en vid skål med böljande kanter.', '', '2024-01-25 14:03:54', 1, 3, 2),
(11, 'Oyster Tallrik, Sand, 28 cm', 'Tallriken från Mateus är gjord av handgjord, handmålad keramik. Tallriken har en miljövänlig förpackning. Med produkter från denna serie skapar du enkelt en elegant bordsdukning som passar för finare tillfällen.', 'Oyster tallrik från Mateus i handgjord, handmålad keramik.\r\n', '', '2024-01-25 14:03:54', 1, 3, 2),
(12, 'Bubbles Tallrik 28 cm,', 'Som alla produkter från Mateus är även denna vackra tallrik från serien Bubbles handtillverkad. Därav kan det förekomma skiftningar i färgen, vilket gör att varje tallrik är unik. Mixa gärna med fler tallrikar från Mateus i olika kulörer och storlekar, för att skapa en vacker helhet.', 'Denna tallrik från Mateus kommer från serien Bubbles.', '', '2024-01-25 14:03:54', 1, 3, 2),
(13, 'Ostindia Floris assiett', 'Ostindia Floris assiett från Rörstrand är en liten tallrik designad av Caroline Slotte och Anna Lerinder och tillverkad i fältspatsporslin. Assietten Ostindia Floris är en modern klassiker och inspirationen från sitt äldre syskon Ostindia är tydlig. Ostindia Floris har samma vackra färg som Ostindia och ett mönster med bladverk som täcker fatet. Skapa en fantastisk och klassisk dukning genom att mixa porslin från hela Ostindia-familjen.', 'Ostindia Floris assiett från Rörstrand är en tallrik designad av Caroline Slotte och Anna Lerinder.', '', '2024-01-25 14:03:54', 1, 3, 3),
(14, 'Swedish Grace tallrik Ø27 cm', 'Swedish Grace tallrik från Rörstrand är en klassisk mattallrik för alla tillfällen. Den populära servisen som tidigare gick under namnet \"Nationalservisen\", är formgiven av Louise Adelborg och är minst lika omtyckt idag som när den premiärvisades 1930. Swedish Grace tallrik har en stilren design med ett vackert reliefmönster inspirerat av vajande veteax i sommarvinden och finns i flera fina färger. Kombinera gärna med djupa tallrikar, muggar, skålar och andra delar i Swedish Grace-serien.', 'Swedish Grace tallrik från Rörstrand är en klassisk mattallrik för alla tillfällen. ', '', '2024-01-25 14:03:54', 1, 3, 3),
(15, 'Kolonn vas struktur', 'Kolonn vas struktur från småländska Skrufs Glasbruk är ett vackert glashantverk formgivet av designern Carina Seth Andersson. Serien är skapad till Nationalmuseums nyöppning i oktober 2018. Vasen passar både till den stora blombuketten och några enstaka kvistar eller blad. Designen är enkel och tidlös, och passa de flesta hem.', 'Kolonn vas struktur från småländska Skrufs Glasbruk är ett vackert glashantverk formgivet av designern Carina Seth Andersson.', 'https://www.nordicnest.se/assets/blobs/skrufs-glasbruk-kolonn-vas-struktur-20-cm/554856-01_1_ProductImageMain-bb6524fd85.jpeg?preset=medium&dpr=2', '2024-01-25 14:39:10', 2, 14, 4),
(16, 'Flowerpot portable bordslampa', 'Flowerpot portable bordslampa VP9 från &Tradition är en innovativ variant till Verner Pantons populära bordslampa VP3. Denna bärbara bordslampa är något mindre i storleken än den klassiska bordslampan och är perfekt att förflytta mellan inomhus och utomhus för att skapa en stämningsfull atmosfär var du än är. Lampan går att dimma i tre steg med hjälp av den lilla stålknoppen på toppen av lampskärmen.', 'Flowerpot portable bordslampa VP9 från &Tradition är en innovativ variant till Verner Pantons populära bordslampa VP3. ', '', '2024-01-25 15:02:01', 3, 15, 5),
(17, 'Sandstone ullpläd ', 'Sandstone är en mjuk ullpläd med fransar från Scandi Living. Den något tunnare kvalitén ger ullpläden ett vackert fall och gör den mycket behaglig att svepa in sig i. Den speciella vävtekniken ger den melerade pläden en vackert strukturerad yta som passar lika bra i det moderna som i det klassiskt inredda hemmet. Den värmande pläden är perfekt för de lite svalare sommarkvällarna på balkongen eller för att kura ihop sig i soffan med en god bok och en kopp te när regnet smattrar mot fönstret.', 'Sandstone är en mjuk ullpläd med fransar från Scandi Living. Den något tunnare kvalitén ger ullpläden ett vackert fall och gör den mycket behaglig att svepa in sig i.', 'https://www.nordicnest.se/assets/blobs/scandi-living-sandstone-ullplad-130x180-cm-beige/45453-02-01-dffe036446.jpg?preset=medium&dpr=2', '2024-01-29 11:51:17', 4, 23, 6),
(18, 'Fungo bordslampa Special Edition', 'Fungo bordslampa Special Edition Grön från Globen Lighting är en exklusiv lampa som adderar färg till ditt utrymme. Med sitt distinkta utseende skapar den en lekfull atmosfär. En unik design som fångar uppmärksamheten utan att behöva säga mycket. Fungo är inte bara en lampa, utan en konstnärlig detalj som ger din inredning extra karaktär.', 'Fungo bordslampa Special Edition Grön från Globen Lighting är en exklusiv lampa som adderar färg till ditt utrymme.', '', '2024-01-31 14:55:23', 3, 15, 7),
(19, 'Fungo bordslampa Special Edition', 'Fungo bordslampa Special Edition från Globen Lighting är en innovativ lampa med tydliga influenser från skogen och svampen. Lampan i glas har en räfflad fot där räfflorna går hela vägen upp under lampskärmen, precis som lamellerna på en skivlingsvamp. Fungo är en något större bordslampa vilket gör att den passar bra i ett djupare fönster eller på ett sidobord.', 'Fungo bordslampa Special Edition från Globen Lighting är en innovativ lampa med tydliga influenser från skogen och svampen.', '', '2024-01-31 14:59:01', 3, 15, 7),
(20, 'Fair bordslampa', 'Fair bordslampa 34,5 cm från svenska Scandi Living har en mjukt formad lampskärm i frostat glas med en räfflad yta samt en cylinderformad lampfot i vacker ask. Placera bordslampan i exempelvis fönstret eller på ett sidobord och låt lampans sken spridas i rummet.', 'Fair bordslampa 34,5 cm från svenska Scandi Living har en mjukt formad lampskärm i frostat glas.', '', '2024-01-31 15:01:13', 3, 15, 6),
(21, 'Calm kuddfodral linne 50x50 cm', 'Calm kuddfodral linne 50x50 cm från svenska Scandi Living är tillverkat i 100% linne med en dekorativ kant runtom. Det kvadratiska kuddfodralet blir ett fint inslag i soffan eller på sängen tack vare det härliga materialet och den enfärgade designen. Det kvadratiska kuddfodralet finns i ett flertal färger som gärna kan kombineras med varandra för en extra ombonad känsla.', 'Calm kuddfodral linne 50x50 cm från svenska Scandi Living är tillverkat i 100% linne med en dekorativ kant runtom.', '', '2024-01-31 15:06:18', 4, 21, 6),
(22, 'Dots kuddfodral 48x48 cm', 'Dots kuddfodral 48x48 cm från svenska Fine Little Day är tillverkat av mjuk kraftig oblekt linnekanvas och har ett abstrakt motiv som kan liknas vid utdragna prickar. Kuddfodralet är designat av Elisabeth Dunker och är tryckt med hjälp av så kallat screentryck på båda sidorna. Placera kuddfodralet i exempelvis soffan eller på en bänk i hallen.', 'Dots kuddfodral 48x48 cm från svenska Fine Little Day är tillverkat av mjuk kraftig oblekt.', '', '2024-01-31 15:09:52', 4, 21, 8),
(23, 'Freckle kopp med fat 26 cl', 'Freckle kopp med fat 26 cl från svenska Scandi Living är ett set tillverkat i glaserat fältspatporslin med ett spräckligt mönster som gör att varje exemplar får ett helt unikt utseende. Mixa och matcha flera färger för ett personligt uttryck och kombinera gärna koppen och fatet med andra delar ur Freckle-serien för att skapa en enhetlig dukning till dagens alla måltider.', 'Freckle kopp med fat 26 cl från svenska Scandi Living är ett set tillverkat i glaserat fältspatporslin med ett spräckligt mönster.', '', '2024-01-31 15:11:56', 1, 2, 6),
(24, 'Swedish Grace skål 60 cl', 'Swedish Grace skål 60 cl är en riktig klassiker från Rörstrand! Reliefmönstret designades av Louise Adelborg 1930 med inspiration från veteax som vajar i sommarvinden och den tidlösa dekoren är omåttligt populär. Servisen finns i flera olika delar och den stora skålen passar perfekt till frukosten, lördagsgodiset eller en värmande soppa.', 'Swedish Grace skål 60 cl är en riktig klassiker från Rörstrand! Reliefmönstret designades av Louise Adelborg.', '', '2024-01-31 15:14:24', 1, 4, 3),
(25, 'Fallow matta dusty green', 'Fallow matta dusty green från Scandi Living är en mångsidig bomullsmatta som passar både i hallen, under matbordet och i vardagsrummet. Vävtekniken och materialmixen gör att mattan får ett diskret randigt utseende och en behagligt mjuk yta som ger en lite mer ombonad känsla jämfört med en traditionell plastmatta. Bomullsgarnet i mattan skiftar i olika nyanser vilket skapar ett livfullt och naturligt utseende. Mattan finns i flera olika storlekar.', 'Fallow matta dusty green från Scandi Living är en mångsidig bomullsmatta som passar både i hallen, under matbordet och i vardagsrummet.', '', '2024-02-01 23:06:12', 4, 22, 6),
(26, 'STOFF Nagel ljusstake 3-pack', 'STOFF Nagel ljusstake från STOFF Copenhagen är designklassikern som funnit en ny storhetstid med sin eleganta, tidlösa och inspirerande design. På 1960-talet, slog den magnetiska duon Werner Stoff och Hans Nagel sig samman för att skapa en vacker och enkel ljusstake som minst sagt utstått tidens test. Utifrån duons originalritningar, har det danska företaget STOFF Copenhagen återlanserat Nagel som nu finner sin väg tillbaka till hem och hus där den ställs på middagsbord och byråar. ', 'STOFF Nagel ljusstake från STOFF Copenhagen.', '', '2024-02-01 23:10:26', 2, 13, 9);

-- --------------------------------------------------------

--
-- Tabellstruktur `product_colors`
--

CREATE TABLE `product_colors` (
  `id` int(100) NOT NULL,
  `fk_productId` int(100) NOT NULL,
  `fk_colorId` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `product_colors`
--

INSERT INTO `product_colors` (`id`, `fk_productId`, `fk_colorId`) VALUES
(1, 1, 2),
(2, 1, 3),
(3, 4, 4),
(4, 12, 6),
(5, 3, 3),
(6, 13, 8),
(7, 16, 4),
(8, 16, 9),
(9, 16, 10),
(10, 16, 11),
(11, 16, 12),
(12, 1, 3),
(13, 17, 4),
(14, 25, 11),
(15, 26, 5);

-- --------------------------------------------------------

--
-- Tabellstruktur `product_sizes`
--

CREATE TABLE `product_sizes` (
  `id` int(100) NOT NULL,
  `fk_productId` int(100) NOT NULL,
  `fk_sizeId` int(100) NOT NULL,
  `price` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `product_sizes`
--

INSERT INTO `product_sizes` (`id`, `fk_productId`, `fk_sizeId`, `price`) VALUES
(1, 1, 2, '575'),
(2, 2, 2, '465'),
(3, 3, 2, '699'),
(4, 4, 2, '565'),
(5, 11, 2, '345'),
(6, 12, 2, '345'),
(7, 13, 2, '239'),
(8, 14, 2, '299'),
(9, 15, 3, '4950'),
(10, 15, 4, '1219'),
(11, 15, 5, '309'),
(12, 16, 2, '1490'),
(13, 17, 2, '679'),
(14, 18, 2, '1299'),
(15, 19, 2, '1399'),
(16, 20, 2, '1439'),
(17, 21, 2, '319'),
(18, 22, 2, '399'),
(19, 23, 2, '199'),
(20, 24, 2, '159'),
(21, 25, 2, '5099'),
(22, 26, 2, '1069');

-- --------------------------------------------------------

--
-- Tabellstruktur `product_sizes_colors`
--

CREATE TABLE `product_sizes_colors` (
  `id` int(100) NOT NULL,
  `fk_productId` int(100) NOT NULL,
  `fk_sizeId` int(100) NOT NULL,
  `fk_colorId` int(100) NOT NULL,
  `price` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `product_sizes_colors`
--

INSERT INTO `product_sizes_colors` (`id`, `fk_productId`, `fk_sizeId`, `fk_colorId`, `price`) VALUES
(1, 1, 2, 2, '575'),
(2, 1, 2, 3, '575'),
(3, 13, 2, 8, '219'),
(4, 14, 2, 1, '185'),
(5, 15, 3, 2, '4950'),
(6, 15, 4, 2, '575'),
(7, 15, 5, 2, '309'),
(8, 4, 2, 7, '375'),
(9, 11, 2, 7, '345'),
(10, 12, 2, 6, '375'),
(11, 16, 2, 4, '1480'),
(12, 16, 2, 9, '1480'),
(13, 16, 2, 10, '1480'),
(14, 16, 2, 12, '1480'),
(15, 16, 2, 11, '1480'),
(16, 1, 2, 3, '575'),
(17, 17, 2, 4, '679'),
(18, 3, 2, 2, '699'),
(19, 2, 2, 2, '465'),
(20, 18, 2, 11, '1299'),
(21, 19, 2, 1, '1399'),
(22, 20, 2, 1, '1439'),
(23, 17, 2, 1, '679'),
(24, 17, 2, 10, '679'),
(25, 21, 2, 4, '319'),
(26, 21, 2, 6, '319'),
(27, 22, 2, 8, '399'),
(28, 23, 2, 4, '199'),
(29, 24, 2, 1, '159'),
(30, 12, 2, 7, '375'),
(31, 12, 2, 1, '375'),
(32, 12, 2, 11, '375'),
(33, 25, 2, 11, '5099'),
(34, 26, 2, 5, '1069'),
(35, 26, 2, 13, '1069'),
(36, 26, 2, 14, '1069');

-- --------------------------------------------------------

--
-- Tabellstruktur `sizes`
--

CREATE TABLE `sizes` (
  `id` int(100) NOT NULL,
  `size` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `sizes`
--

INSERT INTO `sizes` (`id`, `size`) VALUES
(1, 'large'),
(2, 'One size'),
(3, '30 cm'),
(4, '20 cm'),
(5, '11 cm');

-- --------------------------------------------------------

--
-- Tabellstruktur `subcategories`
--

CREATE TABLE `subcategories` (
  `id` int(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  `fk_categoryId` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `subcategories`
--

INSERT INTO `subcategories` (`id`, `name`, `fk_categoryId`) VALUES
(1, 'Glas', 1),
(2, 'Muggar & koppar', 1),
(3, 'Tallrikar', 1),
(4, 'Skålar & fat', 1),
(13, 'Ljusstakar & ljuslyktor', 2),
(14, 'Vaser & krukor', 2),
(15, 'Lampor', 3),
(21, 'Kuddar & kuddfodral', 4),
(22, 'Mattor', 4),
(23, 'Plädar & filtar', 4),
(25, 'Hyllor & förvaring', 5),
(26, 'Bord', 5);

-- --------------------------------------------------------

--
-- Tabellstruktur `variant_images`
--

CREATE TABLE `variant_images` (
  `id` int(11) NOT NULL,
  `fk_product_sizes_colors_id` int(11) NOT NULL,
  `img_url` varchar(200) NOT NULL,
  `is_primary` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `variant_images`
--

INSERT INTO `variant_images` (`id`, `fk_product_sizes_colors_id`, `img_url`, `is_primary`) VALUES
(1, 1, 'https://www.nordicnest.se/assets/blobs/ferm-living-ripple-glas-4-pack-klar/p_28072-01-01-5d43dc3981.jpg?preset=medium&dpr=2', 1),
(2, 1, 'https://www.nordicnest.se/assets/blobs/ferm-living-ripple-glas-4-pack-klar/p_28072-01-02-50d3ed20b5.jpg?preset=medium&dpr=2', 0),
(3, 1, 'https://www.nordicnest.se/assets/blobs/ferm-living-ripple-glas-4-pack-klar/p_28072-01-03-598d0151d4.jpg?preset=medium&dpr=2', 0),
(8, 2, 'https://www.nordicnest.se/assets/blobs/ferm-living-ripple-glas-4-pack-smoked-grey/28072-02-01-a541d0de5e.jpg?preset=medium&dpr=2', 1),
(9, 3, 'https://www.nordicnest.se/assets/blobs/rorstrand-ostindia-floris-tallrik-djup-22-cm/p_27656-01-01-a3dd1c6042.jpg?preset=medium&dpr=2', 1),
(10, 3, 'https://www.nordicnest.se/assets/blobs/rorstrand-ostindia-floris-tallrik-djup-22-cm/p_27656-01-02-7aa2c17f0d.jpg?preset=medium&dpr=2', 0),
(11, 4, 'https://www.nordicnest.se/assets/blobs/rorstrand-swedish-grace-tallrik-27-cm-sno-vit/12274-01_3_ProductImageExtra-c40d90c0ed.jpeg?preset=medium&dpr=2', 1),
(12, 4, 'https://www.nordicnest.se/assets/blobs/rorstrand-swedish-grace-tallrik-27-cm-sno-vit/12274-01_4_ProductImageExtra-f6978f44bc.jpeg?preset=medium&dpr=2', 0),
(13, 4, 'https://www.nordicnest.se/assets/blobs/rorstrand-swedish-grace-tallrik-27-cm-sno-vit/p_12274-01-04-7788204854.jpg?preset=medium&dpr=2', 0),
(14, 4, 'https://www.nordicnest.se/assets/blobs/rorstrand-swedish-grace-tallrik-27-cm-sno-vit/12274-01-07-c94eaa744c.jpg?preset=medium&dpr=2', 0),
(15, 5, 'https://www.nordicnest.se/assets/blobs/skrufs-glasbruk-kolonn-vas-struktur-30-cm/554849-01_1_ProductImageMain-f227b709ee.jpeg?preset=medium&dpr=2', 1),
(16, 5, 'https://www.nordicnest.se/assets/blobs/skrufs-glasbruk-kolonn-vas-struktur-30-cm/Kolonn-vas-milj%C3%B6bild-1-ef147689bd.jpeg?preset=medium&dpr=2', 0),
(17, 5, 'https://www.nordicnest.se/assets/blobs/skrufs-glasbruk-kolonn-vas-struktur-30-cm/Kolonn-vas-milj%C3%B6bild-42eb1fcee6.jpeg?preset=medium&dpr=2', 0),
(18, 6, 'https://www.nordicnest.se/assets/blobs/skrufs-glasbruk-kolonn-vas-struktur-20-cm/554856-01_1_ProductImageMain-bb6524fd85.jpeg?preset=medium&dpr=2', 1),
(19, 6, 'https://www.nordicnest.se/assets/blobs/skrufs-glasbruk-kolonn-vas-struktur-20-cm/Kolonn-vas-milj%C3%B6bild-42eb1fcee6.jpeg?preset=medium&dpr=2', 0),
(20, 6, 'https://www.nordicnest.se/assets/blobs/skrufs-glasbruk-kolonn-vas-struktur-20-cm/Kolonn-vas-milj%C3%B6bild-1-ef147689bd.jpeg?preset=medium&dpr=2', 0),
(21, 7, 'https://www.nordicnest.se/assets/blobs/skrufs-glasbruk-kolonn-vas-struktur-11-cm/554860-01_1_ProductImageMain-ce7fcb48ae.jpeg?preset=medium&dpr=2', 1),
(22, 7, 'https://www.nordicnest.se/assets/blobs/skrufs-glasbruk-kolonn-vas-struktur-11-cm/Kolonn-vas-milj%C3%B6bild-1-ef147689bd.jpeg?preset=medium&dpr=2', 0),
(23, 8, 'https://www.nordicnest.se/assets/blobs/mateus-oyster-skal-24-cm-sand/37139-05_1_ProductImageMain-33877cbd23.jpg?preset=medium&dpr=2', 1),
(24, 8, 'https://www.nordicnest.se/assets/blobs/mateus-oyster-skal-24-cm-sand/37139-05_2_ProductImageExtra-54c48c4ae7.jpg?preset=medium&dpr=2', 0),
(25, 8, 'https://www.nordicnest.se/assets/blobs/mateus-oyster-skal-24-cm-sand/37139-05_3_ProductImageExtra-b98e8ebe3d.jpg?preset=medium&dpr=2', 0),
(26, 8, 'https://www.nordicnest.se/assets/blobs/mateus-oyster-skal-24-cm-sand/37139-05_4_ProductImageExtra-309d47ec72.jpg?preset=medium&dpr=2', 0),
(27, 9, 'https://www.nordicnest.se/assets/blobs/mateus-oyster-tallrik-20-cm-sand/46217-06_1_ProductImageMain-4b9ef2345a.jpg?preset=medium&dpr=2', 1),
(28, 9, 'https://www.nordicnest.se/assets/blobs/mateus-oyster-tallrik-20-cm-sand/46217-06_2_ProductImageExtra-2491adfe08.jpg?preset=medium&dpr=2', 0),
(29, 9, 'https://www.nordicnest.se/assets/blobs/mateus-oyster-tallrik-20-cm-sand/46217-06-02-64ecfa82b6.jpg?preset=medium&dpr=2', 0),
(30, 9, 'https://www.nordicnest.se/assets/blobs/mateus-oyster-tallrik-20-cm-sand/46217-06-03-5b7d7dca3f.jpg?preset=medium&dpr=2', 0),
(31, 10, 'https://www.nordicnest.se/assets/blobs/mateus-bubbles-tallrik-28-cm-gra/37161-01_1_ProductImageMain-314bf1333c.jpg?preset=medium&dpr=2', 1),
(32, 10, 'https://www.nordicnest.se/assets/blobs/mateus-bubbles-tallrik-28-cm-gra/37161-01_2_ProductImageExtra-c1c9e17a31.jpg?preset=medium&dpr=2', 0),
(33, 10, 'https://www.nordicnest.se/assets/blobs/mateus-bubbles-tallrik-28-cm-gra/37161-01_3_ProductImageExtra-0dbeb8d42a.jpg?preset=medium&dpr=2', 0),
(34, 11, 'https://www.nordicnest.se/assets/blobs/tradition-flowerpot-portable-bordslampa-vp9-gra-beige/46862-03-01-1bacaba61c.jpg?preset=medium&dpr=2', 1),
(35, 11, 'https://www.nordicnest.se/assets/blobs/tradition-flowerpot-portable-bordslampa-vp9-gra-beige/46862-03_40_Env-275309633f.jpeg?preset=medium&dpr=2', 0),
(36, 11, 'https://www.nordicnest.se/assets/blobs/tradition-flowerpot-portable-bordslampa-vp9-gra-beige/46862-03_41_Env-2459e384f6.jpeg?preset=medium&dpr=2', 0),
(37, 12, 'https://www.nordicnest.se/assets/blobs/tradition-flowerpot-portable-bordslampa-vp9-dark-plum/576168-01_1_ProductImageMain-115358e22c.jpeg?preset=medium&dpr=2', 1),
(38, 12, 'https://www.nordicnest.se/assets/blobs/tradition-flowerpot-portable-bordslampa-vp9-dark-plum/576168-01_40_EnvironmentImage-ce30f8519f.jpeg?preset=medium&dpr=2', 0),
(39, 12, 'https://www.nordicnest.se/assets/blobs/tradition-flowerpot-portable-bordslampa-vp9-dark-plum/576168-01_41_EnvironmentImage-bded02670f.jpeg?preset=medium&dpr=2', 0),
(40, 13, 'https://www.nordicnest.se/assets/blobs/tradition-flowerpot-portable-bordslampa-vp9-matt-ljusgra/46862-06-01-600711649f.jpg?preset=medium&dpr=2', 1),
(41, 13, 'https://www.nordicnest.se/assets/blobs/tradition-flowerpot-portable-bordslampa-vp9-matt-ljusgra/46862-06-03-75da14fc8f.jpg?preset=medium&dpr=2', 0),
(42, 14, 'https://www.nordicnest.se/assets/blobs/tradition-flowerpot-portable-bordslampa-vp9-mustard/46862-08-01-b0b7ebcaa6.jpg?preset=medium&dpr=2', 1),
(43, 14, 'https://www.nordicnest.se/assets/blobs/tradition-flowerpot-portable-bordslampa-vp9-mustard/46862-08-03-259142198d.jpg?preset=medium&dpr=2', 0),
(44, 15, 'https://www.nordicnest.se/assets/blobs/tradition-flowerpot-portable-bordslampa-vp9-signal-green/507514-01_1_ProductImageMain-42f6f2b59c.jpg?preset=medium&dpr=2', 1),
(45, 15, 'https://www.nordicnest.se/assets/blobs/tradition-flowerpot-portable-bordslampa-vp9-signal-green/flowerpot_vp9_signalgreen_miljo-570946a30c.jpeg?preset=medium&dpr=2', 0),
(46, 17, 'https://www.nordicnest.se/assets/blobs/scandi-living-sandstone-ullplad-130x180-cm-beige/45453-02-01-dffe036446.jpg?preset=medium&dpr=2', 1),
(47, 17, 'https://www.nordicnest.se/assets/blobs/scandi-living-sandstone-ullplad-130x180-cm-beige/45453-02_2_ProductImageExtra_2-6fb4c0ec19.jpg?preset=medium&dpr=2', 0),
(48, 17, 'https://www.nordicnest.se/assets/blobs/scandi-living-sandstone-ullplad-130x180-cm-beige/45453-02-03-2ce8ee333c.jpg?preset=medium&dpr=2', 0),
(49, 19, 'https://www.nordicnest.se/assets/blobs/ferm-living-ripple-champagneglas-2-pack-klar/p_29218-01-01-4157a8d80d.jpg?preset=medium&dpr=2', 1),
(50, 18, 'https://www.nordicnest.se/assets/blobs/ferm-living-ripple-long-drink-glas-4-pack-klar/p_31545-01-01-d477c93bdc.jpg?preset=medium&dpr=2', 1),
(51, 18, 'https://www.nordicnest.se/assets/blobs/ferm-living-ripple-long-drink-glas-4-pack-klar/31545-01-02-9518d98a34.jpg?preset=medium&dpr=2', 0),
(52, 18, 'https://www.nordicnest.se/assets/blobs/ferm-living-ripple-long-drink-glas-4-pack-klar/p_31545-01-04-ba179f2238.jpg?preset=medium&dpr=2', 0),
(53, 20, 'https://www.nordicnest.se/assets/blobs/globen-lighting-fungo-bordslampa-special-edition-gron-22-cm-h30-cm/576654-01_1_ProductImageMain-5cb0b7cf7a.jpeg?preset=medium&dpr=2', 1),
(54, 20, 'https://www.nordicnest.se/assets/blobs/globen-lighting-fungo-bordslampa-special-edition-gron-22-cm-h30-cm/576654-01_20_ProductImageExtra-b37d5254ca.jpeg?preset=medium&dpr=2', 0),
(55, 20, 'https://www.nordicnest.se/assets/blobs/globen-lighting-fungo-bordslampa-special-edition-gron-22-cm-h30-cm/576654-01_40_EnvironmentImage-05a5305940.jpeg?preset=medium&dpr=2', 0),
(56, 21, 'https://www.nordicnest.se/assets/blobs/globen-lighting-fungo-bordslampa-special-edition-22-cm-h30-cm/571840-01_1_ProductImageMain-7ffa71a7af.jpeg?preset=medium&dpr=2', 1),
(57, 21, 'https://www.nordicnest.se/assets/blobs/globen-lighting-fungo-bordslampa-special-edition-22-cm-h30-cm/571840-01_4_EnvironmentImage-5d571df957.jpeg?preset=medium&dpr=2', 0),
(58, 22, 'https://www.nordicnest.se/assets/blobs/scandi-living-fair-bordslampa-345-cm-frostat-glas-ask/509283-01_1_ProductImageMain-694b17919b.jpeg?preset=medium&dpr=2', 1),
(59, 22, 'https://www.nordicnest.se/assets/blobs/scandi-living-fair-bordslampa-345-cm-frostat-glas-ask/509283-01_2_EnvironmentImage-982e99a66d.jpeg?preset=medium&dpr=2', 0),
(60, 22, 'https://www.nordicnest.se/assets/blobs/scandi-living-fair-bordslampa-345-cm-frostat-glas-ask/509283-01_4_EnvironmentImage-a861f0ff5c.jpeg?preset=medium&dpr=2', 0),
(61, 23, 'https://www.nordicnest.se/assets/blobs/scandi-living-sandstone-ullplad-130x180-cm-off-white/503137-01_1_ProductImageMain-5027aa3c88.jpg?preset=medium&dpr=2', 1),
(62, 23, 'https://www.nordicnest.se/assets/blobs/scandi-living-sandstone-ullplad-130x180-cm-off-white/503137-01_3_EnvironmentImage-aa07ccb884.jpg?preset=medium&dpr=2', 0),
(63, 24, 'https://www.nordicnest.se/assets/blobs/scandi-living-sandstone-ullplad-130x180-cm-ljusgra/503135-01_1_ProductImageMain-2a6a6f74f8.jpg?preset=medium&dpr=2', 1),
(64, 24, 'https://www.nordicnest.se/assets/blobs/scandi-living-sandstone-ullplad-130x180-cm-ljusgra/503135-01_3_EnvironmentImage-f98976345f.jpg?preset=medium&dpr=2', 0),
(65, 25, 'https://www.nordicnest.se/assets/blobs/scandi-living-calm-kuddfodral-linne-50x50-cm-greige/503266-01_1_ProductImageMain-3302fac020.jpg?preset=medium&dpr=2', 1),
(66, 25, 'https://www.nordicnest.se/assets/blobs/scandi-living-calm-kuddfodral-linne-50x50-cm-greige/503266-01_3_EnvironmentImage-2cde7f17c5.jpg?preset=medium&dpr=2', 0),
(67, 26, 'https://www.nordicnest.se/assets/blobs/scandi-living-calm-kuddfodral-linne-50x50-cm-icy-grey/503281-01_1_ProductImageMain-5ce7005193.jpg?preset=medium&dpr=2', 1),
(68, 26, 'https://www.nordicnest.se/assets/blobs/scandi-living-calm-kuddfodral-linne-50x50-cm-icy-grey/503281-01_2_EnvironmentImage-6c4360ce03.jpg?preset=medium&dpr=2', 0),
(69, 27, 'https://www.nordicnest.se/assets/blobs/fine-little-day-dots-kuddfodral-48x48-cm-beige-svart/43946-03-01-51a586a740.jpg?preset=medium&dpr=2', 1),
(70, 27, 'https://www.nordicnest.se/assets/blobs/fine-little-day-dots-kuddfodral-48x48-cm-beige-svart/43946-03-02-599bcac335.jpg?preset=medium&dpr=2', 0),
(71, 28, 'https://www.nordicnest.se/assets/blobs/scandi-living-freckle-kopp-med-fat-26-cl-beige/503699-01_1_ProductImageMain-777fef32a3.jpg?preset=medium&dpr=2', 1),
(72, 28, 'https://www.nordicnest.se/assets/blobs/scandi-living-freckle-kopp-med-fat-26-cl-beige/503699-01_2_EnvironmentImage-4ecb44f729.jpg?preset=medium&dpr=2', 0),
(73, 29, 'https://www.nordicnest.se/assets/blobs/rorstrand-swedish-grace-skal-60-cl-sno-vit/21156-01_1_ProductImageMain-f18b96cc5d.jpeg?preset=medium&dpr=2', 1),
(74, 29, 'https://www.nordicnest.se/assets/blobs/rorstrand-swedish-grace-skal-60-cl-sno-vit/21156-01-05-dde9805419.jpg?preset=medium&dpr=2', 0),
(75, 29, 'https://www.nordicnest.se/assets/blobs/rorstrand-swedish-grace-skal-60-cl-sno-vit/p_21156-01-03-86344110da.jpg?preset=medium&dpr=2', 0),
(76, 30, 'https://www.nordicnest.se/assets/blobs/mateus-bubbles-tallrik-28-cm-sand/37161-04_1_ProductImageMain-30d19b0fc7.jpg?preset=medium&dpr=2', 1),
(77, 30, 'https://www.nordicnest.se/assets/blobs/mateus-bubbles-tallrik-28-cm-sand/37161-04_2_ProductImageExtra-0f9d0045d1.jpg?preset=medium&dpr=2', 0),
(78, 31, 'https://www.nordicnest.se/assets/blobs/mateus-bubbles-tallrik-28-cm-vit/37161-05_1_ProductImageMain-41ad00fe13.jpg?preset=medium&dpr=2', 1),
(79, 31, 'https://www.nordicnest.se/assets/blobs/mateus-bubbles-tallrik-28-cm-vit/37161-05_2_ProductImageExtra-3098a5a781.jpg?preset=medium&dpr=2', 0),
(80, 32, 'https://www.nordicnest.se/assets/blobs/mateus-bubbles-tallrik-28-cm-gron/507875-01_1_ProductImageMain-b0d858a753.jpg?preset=medium&dpr=2', 1),
(81, 32, 'https://www.nordicnest.se/assets/blobs/mateus-bubbles-tallrik-28-cm-gron/507875-01_11_EnvironmentImage-0dc76ff0e1.jpg?preset=medium&dpr=2', 0),
(82, 33, 'https://www.nordicnest.se/assets/blobs/scandi-living-fallow-matta-dusty-green-200x300cm/51517-01-01_ProductImageMain-63899dd73a.jpeg?preset=medium&dpr=2', 1),
(83, 33, 'https://www.nordicnest.se/assets/blobs/scandi-living-fallow-matta-dusty-green-200x300cm/515717-01_6_EnvironmentImage-0abeb3601e.jpeg?preset=medium&dpr=2', 0),
(84, 34, 'https://www.nordicnest.se/assets/blobs/stoff-stoff-nagel-ljusstake-3-pack-krom/31564-01-01-35d77a25c0.jpg?preset=medium&dpr=2', 1),
(85, 34, 'https://www.nordicnest.se/assets/blobs/stoff-stoff-nagel-ljusstake-3-pack-krom/p_31564-01-02-768a01e232.jpg?preset=medium&dpr=2', 0),
(86, 34, 'https://www.nordicnest.se/assets/blobs/stoff-stoff-nagel-ljusstake-3-pack-krom/p_31564-01-04-ae860d83a4.jpg?preset=medium&dpr=2', 0),
(87, 35, 'https://www.nordicnest.se/assets/blobs/stoff-stoff-nagel-ljusstake-3-pack-svart/31564-03-01-21314fa414.jpg?preset=medium&dpr=2', 1),
(88, 35, 'https://www.nordicnest.se/assets/blobs/stoff-stoff-nagel-ljusstake-3-pack-svart/p_31564-03-05-4c97e9d27d.jpg?preset=medium&dpr=2', 0),
(89, 36, 'https://www.nordicnest.se/assets/blobs/stoff-stoff-nagel-ljusstake-3-pack-massing/31564-02-01-d375dab58e.jpg?preset=medium&dpr=2', 1),
(90, 36, 'https://www.nordicnest.se/assets/blobs/stoff-stoff-nagel-ljusstake-3-pack-massing/p_31564-02-05-1a104cbd95.jpg?preset=medium&dpr=2', 0);

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_brandId` (`fk_brandId`),
  ADD KEY `fk_categoryId` (`fk_categoryId`),
  ADD KEY `fk_subcategoryId` (`fk_subcategoryId`);

--
-- Index för tabell `product_colors`
--
ALTER TABLE `product_colors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_colorId` (`fk_colorId`),
  ADD KEY `fk_productId` (`fk_productId`);

--
-- Index för tabell `product_sizes`
--
ALTER TABLE `product_sizes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_sizeId` (`fk_sizeId`),
  ADD KEY `fk_productId` (`fk_productId`);

--
-- Index för tabell `product_sizes_colors`
--
ALTER TABLE `product_sizes_colors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_colorId` (`fk_colorId`),
  ADD KEY `fk_productId` (`fk_productId`),
  ADD KEY `fk_sizeId` (`fk_sizeId`);

--
-- Index för tabell `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `subcategories`
--
ALTER TABLE `subcategories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_categoryId` (`fk_categoryId`);

--
-- Index för tabell `variant_images`
--
ALTER TABLE `variant_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_product_sizes_colors_id` (`fk_product_sizes_colors_id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT för tabell `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT för tabell `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT för tabell `products`
--
ALTER TABLE `products`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT för tabell `product_colors`
--
ALTER TABLE `product_colors`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT för tabell `product_sizes`
--
ALTER TABLE `product_sizes`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT för tabell `product_sizes_colors`
--
ALTER TABLE `product_sizes_colors`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT för tabell `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT för tabell `subcategories`
--
ALTER TABLE `subcategories`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT för tabell `variant_images`
--
ALTER TABLE `variant_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- Restriktioner för dumpade tabeller
--

--
-- Restriktioner för tabell `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`fk_brandId`) REFERENCES `brands` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`fk_categoryId`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `products_ibfk_3` FOREIGN KEY (`fk_subcategoryId`) REFERENCES `subcategories` (`id`);

--
-- Restriktioner för tabell `product_colors`
--
ALTER TABLE `product_colors`
  ADD CONSTRAINT `product_colors_ibfk_1` FOREIGN KEY (`fk_colorId`) REFERENCES `colors` (`id`),
  ADD CONSTRAINT `product_colors_ibfk_2` FOREIGN KEY (`fk_productId`) REFERENCES `products` (`id`);

--
-- Restriktioner för tabell `product_sizes`
--
ALTER TABLE `product_sizes`
  ADD CONSTRAINT `product_sizes_ibfk_1` FOREIGN KEY (`fk_sizeId`) REFERENCES `sizes` (`id`),
  ADD CONSTRAINT `product_sizes_ibfk_2` FOREIGN KEY (`fk_productId`) REFERENCES `products` (`id`);

--
-- Restriktioner för tabell `product_sizes_colors`
--
ALTER TABLE `product_sizes_colors`
  ADD CONSTRAINT `product_sizes_colors_ibfk_1` FOREIGN KEY (`fk_colorId`) REFERENCES `colors` (`id`),
  ADD CONSTRAINT `product_sizes_colors_ibfk_2` FOREIGN KEY (`fk_productId`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `product_sizes_colors_ibfk_3` FOREIGN KEY (`fk_sizeId`) REFERENCES `sizes` (`id`);

--
-- Restriktioner för tabell `subcategories`
--
ALTER TABLE `subcategories`
  ADD CONSTRAINT `subcategories_ibfk_1` FOREIGN KEY (`fk_categoryId`) REFERENCES `categories` (`id`);

--
-- Restriktioner för tabell `variant_images`
--
ALTER TABLE `variant_images`
  ADD CONSTRAINT `variant_images_ibfk_1` FOREIGN KEY (`fk_product_sizes_colors_id`) REFERENCES `product_sizes_colors` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
