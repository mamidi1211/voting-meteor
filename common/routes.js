Router.route('/register');
Router.route('/voteForm');
Router.route('/login');
Router.route('/view');

Router.route('/', {
	name: 'home',
    template: 'home'
});

Router.configure({
    layoutTemplate: 'main'
});
