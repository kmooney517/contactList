import $ from 'jquery';

const APP_ID = 'ARxR2a8JJDiWXa0mhX4988s4FmB94N2L8a4QVpco';
const API_KEY = 'HxtA5WyFyekwmYdZ4lCiizKaTXtIlceHpILqT9Ti';

$.ajaxSetup({
	headers: {
		'X-Parse-Application-Id': APP_ID,
		'X-Parse-REST-API-KEY': API_KEY,
	}
});
