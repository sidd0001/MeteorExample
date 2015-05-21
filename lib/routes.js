Router.route('/', function () {
  // render some data on root page
  this.render('Root', {data: {title: 'MeteorExampleApp'}});
});

// create route named /page1 that renders the template page1
Router.route('/page1');

// create route named /page2 that renders the template page2
Router.route('/page2');
