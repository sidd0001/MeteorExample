Meteor.publish('Images', function(){
    var currentUserId = this.userId;
    return ImagesList.find({createdBy: currentUserId})
});