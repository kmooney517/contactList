function newContact(data){
	return `
		<form>
			<input>${data.Name.put()}</input>
			<input>${data.Email.put()}</input>
			<input>${data.PhoneNumber.put()}</input>
			<input>${data.Location.put()}</input>
		</form>

	`;

}
 export default newContact;