import { useState } from 'react';
import './Faq.scss';

const Faq = () => {
	const [openFAQ, setOpenFAQ] = useState(null);

	const toggleFAQ = (index: any) => {
		setOpenFAQ(openFAQ === index ? null : index);
	};

	const faqData = [
		{
			question: 'Hur lång är leveranstiden?',
			answer:
				'Normal leveranstid är 3-5 arbetsdagar. Vid hög belastning kan det dock ta längre tid.',
		},
		{
			question: 'Kan jag välja expressfrakt?',
			answer:
				'Tack vare våra snabba leveranser erbjuder vi enbart standardleverans inom Sverige.',
		},
		{
			question: 'Kan jag ändra min beställning efter att den lagts?',
			answer:
				'Tyvärr kan beställningar inte ändras efter att de har lagts. Du kan dock avboka din beställning och göra en ny.',
		},
		{
			question: 'Vilka betalningsmetoder accepterar ni?',
			answer: 'Vi accepterar kreditkort, PayPal och direktbanköverföring.',
		},
		{
			question: 'Hur fungerar er returpolicy?',
			answer:
				'Vi erbjuder 30 dagars returrätt på oanvända produkter i originalförpackning.',
		},
		{
			question: 'Jag behöver reklamera en produkt. Hur gör jag?',
			answer:
				'Vi försöker alltid lösa alla reklamationer på smidigast sätt. Återkom till oss på info@skandinaviskdesign.com med ditt ordernummer samt bilder på den varan du önskar reklamera.',
		},
		{
			question: 'Kan jag köpa presentkort hos er?',
			answer:
				'Tyvärr är det inte möjligt att köpa presentkort i vår webbshop för tillfället men vi hoppas att vi kan erbjuda detta i framtiden.',
		},
	];

	return (
		<>
			<div className='faq'>
				<div className='faq-title'>
					<h3>FAQ</h3>
				</div>
				{faqData.map((faq, index) => (
					<div key={index} className='faq__item'>
						<button className='faq__question' onClick={() => toggleFAQ(index)}>
							{faq.question}
						</button>
						{openFAQ === index && <p className='faq__answer'>{faq.answer}</p>}
					</div>
				))}
			</div>
		</>
	);
};

export default Faq;
