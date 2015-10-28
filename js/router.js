import Backbone from 'backbone';
import $ from 'jQuery';
import ContactsCollection from './contacts_collection';
import homeTemplate from './views/home';
import singleTemplate from './views/singleview';
import newContact from './views/newContact';


let Router = Backbone.Router.extend({
	

	routes: {
		''               : 'home',
		'singleView/:id' : 'showSingleContact',

	},

	initialize: function(x) {
		this.$el = x;

		this.contacts = new ContactsCollection();
		this.$btn = ('.backBtn');

		let router = this;

		this.$el.on('click', '.contactName', function(event){
			let $li = $(event.currentTarget);
			var contactId = $li.data('contact-id');
			router.navigate(`singleView/${contactId}`);
			router.showSingleContact(contactId);
		});
	},

	home: function() {
		this.contacts.fetch().then(function(){
			this.$el.html( homeTemplate(this.contacts.toJSON()) );
		}.bind(this));
	},

	showSingleContact: function(contactId) {
		
		let contact = this.contacts.get(contactId);
		let router = this;

		if (contact) {
			this.$el.html(singleTemplate(contact.toJSON()) );
		} else {
			let router = this;
			contact = this.contacts.add({objectId: contactId});
			contact.fetch().then(function() {
				router.$el.html( singleTemplate(contact.toJSON()) );
			});
		}

		this.back = $('.backBtn');
		this.back.on('click', function (){
			router.navigate('', {trigger: true});
		});
	},


	start: function() {
		Backbone.history.start();
	}

});

export default Router;



// Shows entire list of all contact information

	// singleView: function() {
	// 	this.contacts.fetch().then(function(){
	// 		this.$el.html( singleTemplate(this.contacts.toJSON()) );
	// 	}.bind(this));
	// },
