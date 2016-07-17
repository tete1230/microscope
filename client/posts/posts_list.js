var postsData = [
  {
    title: '百度官网',
    url: 'http://www.baidu.com'
  }, 
  {
    title: '腾讯官网',
    url: 'http://www.qq.com'
  }, 
  {
    title: '电影天堂',
    url: 'http://www.dytt8.net'
  }
];
Template.postsList.helpers({
  posts: postsData
});