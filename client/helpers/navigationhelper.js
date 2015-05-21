Template.Navigation.helpers({
  page1: function() {
	if (Router.current().route.path() === '/page1') {
	  return true;
	}
  },
  page2: function() {
	if (Router.current().route.path() === '/page2') {
	  return true;
	}
  }
});