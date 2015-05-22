Template.Page2.helpers({
	images: function() {
        var currentUserId = Meteor.userId();
		return ImageList.find({userID:currentUserId});
    }
});
Template.Page2.events({
    'click #search':function() {
        var $text = $('#textSearch').val();
        var currentUserId = Meteor.userId();
        images : ImageList.find({userID: currentUserId, name: $text});
    }
})
