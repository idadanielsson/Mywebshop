import './About.scss';

export const About = () => {
	return (
		<>
			<div className='title'>
				<h3>Om oss</h3>
			</div>
			<div className='about'>
				<div className='content'>
					<p className='content__text'>
						Välkommen till Skandinavisk Design, din destination för heminredning
						i äkta skandinavisk stil. Vår passion för minimalistisk design och
						kvalitet har varit vår drivkraft sedan starten. Vi tror att hemmet
						är en personlig plats som ska spegla de som bor där. Därför har vi
						noggrant valt ut varje artikel i vår kollektion för att erbjuda dig
						det bästa inom skandinavisk design – rena linjer, funktionell
						skönhet och högkvalitativa material.
					</p>
					<p className='content__text'>
						Vår resa började under 2023. Sedan dess har vi växt och utvecklats
						till den e-handelsplattform vi är idag. Vi är stolta över att
						erbjuda ett brett sortiment av inredningsartiklar, från klassiska
						möbler till moderna dekorativa detaljer, alla utformade med
						skandinavisk enkelhet och elegans.
					</p>
				</div>
				<div className='img-wrapper'></div>
			</div>

			<div className='about'>
				<div className='img-wrapper-2'></div>
				<div className='content'>
					<p className='content__text'>
						Vi på Skandinavisk design förstår värdet av hållbarhet. Vårt
						engagemang för miljön återspeglas i våra produktval och vårt arbete
						för att ständigt minska vår miljöpåverkan. Varje köp du gör är ett
						steg mot ett mer hållbart och stilfullt hem.
					</p>
					<p className='content__text'>
						Våra kunder är vår största tillgång och vi strävar alltid efter att
						överträffa era förväntningar med exceptionell service och kvalitet.
						Vare sig du söker inspiration för ditt nästa projekt eller letar
						efter det perfekta tillägget till ditt hem, är vi här för att hjälpa
						dig.
					</p>
				</div>
			</div>
		</>
	);
};
