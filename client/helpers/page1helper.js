Template.Page1.helpers({
	images: function() {
        var currentUserId = Meteor.userId();
		return ImageList.find({userID:currentUserId});
    }
})