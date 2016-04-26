Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return [Meteor.subscribe('rfids'), Meteor.subscribe('rfids_dup')];  }
});

Router.route('/', {name: 'postsList'});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only: 'postsList'});
Router.onBeforeAction(requireLogin, {only: 'postsList'});