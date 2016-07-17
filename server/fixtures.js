if (Posts.find().count() === 0) {
  Posts.insert({
    title: '百度官网',
    url: 'http://www.baidu.com'
  });

  Posts.insert({
    title: '腾讯官网',
    url: 'http://www.qq.com'
  });

  Posts.insert({
    title: '电影天堂',
    url: 'http://www.dytt8.net'
  });
}