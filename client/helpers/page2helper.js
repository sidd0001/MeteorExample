Meteor.subscribe("images");
Template.Page2.helpers({
	images: function() {
        var currentUserId = Meteor.userId();
        if (Session.get("text")) {
            return ImageList.find({userID: currentUserId , hashTag : Session.get("text") });
        } else {
            return ImageList.find({userID: currentUserId});
        }

    }
});
Template.Page2.events({
    'click #search':function() {
        var $text = $('#textSearch').val();
        Session.set('text' , $text);
    }
})
