import Backbone from 'backbone';

let ContactsModel = Backbone.Model.extend({

	urlRoot: 'https://api.parse.com/1/classes/contacts',

	idAttribute: 'objectId'

});

export default ContactsModel;