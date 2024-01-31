import './Terms.scss';

export const Terms = () => {
	return (
		<div className='terms'>
			<h3 className='terms__title'>Villkor</h3>
			<p className='terms__intro'>
				Välkommen till Skandinavisk Designs e-handel! Dessa villkor reglerar din
				användning av vår webbplats och de tjänster vi erbjuder. Läs noggrant
				igenom följande villkor innan du använder vår webbplats. Genom att
				använda vår webbplats accepterar du och samtycker till dessa villkor. Om
				du inte samtycker till något av villkoren, vänligen avstå från att
				använda vår webbplats.
			</p>
			<div className='terms__wrapper'>
				<h6 className='terms__title-2'>Användarinformation</h6>
				<p className='terms__text'>
					För att använda vissa tjänster på vår webbplats kan du bli ombedd att
					tillhandahålla viss personlig information. Du samtycker till att all
					information du tillhandahåller är korrekt, aktuell och fullständig. Du
					ansvarar för att skydda ditt användarnamn och lösenord och för alla
					aktiviteter som sker under ditt konto. Exempel: När du skapar ett
					konto hos oss, kommer vi att be dig om din namn, adress och
					e-postadress för att kunna behandla din beställning.
				</p>
			</div>

			<div className='terms__wrapper'>
				<h6 className='terms__title-2'>Beställningar och Betalning</h6>
				<p className='terms__text'>
					När du placerar en beställning på vår webbplats, ansvarar du för att
					alla uppgifter som du tillhandahåller är korrekta och fullständiga.
					Priser och tillgänglighet på produkter kan ändras utan föregående
					meddelande. Vi förbehåller oss rätten att neka eller avbryta
					beställningar när som helst.<br></br>
					<br></br>
					När du genomför en beställning kommer du att bli ombedd att ange dina
					betalningsuppgifter och leveransadress. Var vänlig och verifiera att
					all information är korrekt innan du slutför din beställning.
				</p>
			</div>

			<div className='terms__wrapper'>
				<h6 className='terms__title-2'>Leverans och Returer</h6>
				<p className='terms__text'>
					Vi strävar efter att leverera dina beställningar så snart som möjligt.
					Läs vår [Leveransinformation] och [Returpolicy] för detaljerad
					information om leveransvillkor och returprocess.
					<br></br>
					<br></br>
					Vi erbjuder standardleverans inom 3-5 arbetsdagar. Om du vill
					returnera en produkt, vänligen kontakta vår kundtjänst inom 30 dagar
					från leveransdatumet.
				</p>
			</div>
		</div>
	);
};
