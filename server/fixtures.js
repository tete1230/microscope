// Fixture data 测试数据
if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman 设计大神' }
  });
  var tom = Meteor.users.findOne(tomId);
  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Greif 设计师' }
  });
  var sacha = Meteor.users.findOne(sachaId);

  var telescopeId = Posts.insert({
    title: '百度官网',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://www.baidu.com',
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 2
  });

  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Interesting project Sacha, can I get involved? 有趣的项目评论，我可以参与吗？'
  });

  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'You sure can Tom! 你是汤姆！'
  });

  Posts.insert({
    title: '腾讯官网',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://www.qq.com',
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0
  });

  Posts.insert({
    title: '电影天堂',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://www.dytt8.net',
    submitted: new Date(now - 12 * 3600 * 1000),
    commentsCount: 0
  });

  for (var i = 0; i < 10; i++) {
    Posts.insert({
      title: 'Test post 这帖子 #' + i,
      author: sacha.profile.name,
      userId: sacha._id,
      url: 'http://google.com/?q=test-' + i,
      submitted: new Date(now - i * 3600 * 1000),
      commentsCount: 0
    });
  }
}