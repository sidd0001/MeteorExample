Template.Page1.helpers({
    images: function () {
        var currentUserId = Meteor.userId();
        return ImageList.find({userID: currentUserId});
    },
    name: function () {
        Uploader.finished = function (index, fileInfo, templateContext) {
                name = fileInfo.name;
        }
        return name;
    }
});
