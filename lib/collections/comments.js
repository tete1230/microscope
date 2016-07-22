Comments = new Mongo.Collection('comments');

Meteor.methods({
  commentInsert: function(commentAttributes) {
    check(this.userId, String);
    check(commentAttributes, {
      postId: String,
      body: String
    });

    var user = Meteor.user();
    var post = Posts.findOne(commentAttributes.postId);

    if (!post)
      throw new Meteor.Error('invalid-comment', 'You must comment on a post');
    
    comment = _.extend(commentAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    // 更新帖子的评论数
    Posts.update(comment.postId, {$inc: {commentsCount: 1}});

    // 创建评论对象
    comment._id = Comments.insert(comment);

    // 创建通知用户查看评论
    createCommentNotification(comment);
    
    return comment._id;
  }
});