function contacts(data) {
	return data.map(function(item){
		return `
			<li class='contactName' data-contact-id="${item.objectId}"> 
				<i class="fa fa-user-secret fa-3x"></i>
				${item.Name}
			</li>
		`
	}).join('');
}

function homeTemplate(data) {
	return `
			<h2> My Contacts </h2>
			<ul> ${contacts(data)} </ul>
	`;
}

export default homeTemplate;