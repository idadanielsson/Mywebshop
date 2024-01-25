import './Contact.scss';

export const Contact = () => {
	return (
		<div className='contact-form'>
			<form className='contact-form__form'>
				<h2 className='contact-form__title'>Kontakta oss</h2>
				<p>
					På Skandinavisk Design är vi alltid här för att hjälpa dig. Oavsett om
					du har frågor om våra produkter, behöver assistans med en beställning
					eller bara vill dela med dig av feedback, ser vi fram emot att höra
					från dig.
				</p>
				<div className='contact-form__field'>
					<label htmlFor='name' className='contact-form__label'>
						Namn
					</label>
					<input
						type='text'
						id='name'
						name='name'
						required
						className='contact-form__input'
					/>
				</div>
				<div className='contact-form__field'>
					<label htmlFor='email' className='contact-form__label'>
						Email
					</label>
					<input
						type='email'
						id='email'
						name='email'
						required
						className='contact-form__input'
					/>
				</div>
				<div className='contact-form__field'>
					<label htmlFor='subject' className='contact-form__label'>
						Ämne
					</label>
					<select
						id='subject'
						name='subject'
						required
						className='contact-form__select'
					>
						<option value=''>Välj ämne</option>
						<option value='order-inquiry'>Order Inquiry</option>
						<option value='product-feedback'>Product Feedback</option>
						<option value='return-request'>Return Request</option>
						<option value='shipping-information'>Shipping Information</option>
						<option value='other'>Other</option>
					</select>
				</div>
				<div className='contact-form__field'>
					<label htmlFor='message' className='contact-form__label'>
						Meddelande
					</label>
					<textarea
						id='message'
						name='message'
						required
						className='contact-form__textarea'
					></textarea>
				</div>
				<button type='submit' className='contact-form__submit-btn'>
					Skicka
				</button>
			</form>
		</div>
	);
};
