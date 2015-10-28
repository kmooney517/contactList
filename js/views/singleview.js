//The data being passed through both functions here is in the form
//of an object.  We can not do a .map on an object - but we need 
//all the information from each contact - so we do what was done
// below.

// function processData(data) {
// 	console.log(data);
// 	return data.map(function (item){
// 		return `
// 			<li> ${ item.Name }</li>
// 			<li> ${ item.Email }</li>
// 			<li> ${ item.PhoneNumber }</li>
// 			<li> ${ item.Location }</li>
// 			<hr>
// 		`;
// 	}).join('');
// };

function singleTemplate(data) {	
	return `
		<h2> Contact List </h2>
		<button class='backBtn'><i class='fa fa-long-arrow-left'></i></button>
		<ul>
			<li> <i class="fa fa-user "></i> <span>Name:</span> ${ data.Name }</li>
			<li> <i class="fa fa-envelope "></i><span>Email:</span> ${ data.Email }</li>
			<li> <i class="fa fa-phone-square "></i><span>Phone Number: </span>${ data.PhoneNumber }</li>
			<li> <i class="fa fa-globe "></i><span>Location:</span> ${ data.Location }</li>
		</ul>

		`
};

export default singleTemplate;