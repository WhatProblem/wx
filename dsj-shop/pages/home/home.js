// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerInfo: {
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
      circular: true,
    },
    bannerList: [
      {picUrl: 'https://download.dmallcdn.com/5f9e8f256f7f4b17ae143807e1369c48.jpeg', id: 1},
      {picUrl: 'https://download.dmallcdn.com/d201b39bbfa54dbba53230588a3cf3e4.jpg', id: 2},
      {picUrl: 'https://download.dmallcdn.com/00a0db656c054168a7ff159ea2d755e4.jpg', id: 3},
    ],
    categoryList: [
      {picUrl: 'https://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png', title: '水果蔬菜', id: 1},
      {picUrl: 'https://p0.meituan.net/jungle/45ff2f098a20a77122bff8385192f0ec10547.png', title: '肉弹水产', id: 2},
      {picUrl: 'https://p1.meituan.net/jungle/12a9834827909fa55f54bce96e67470711250.png', title: '乳饮烘培', id: 3},
      {picUrl: 'https://p1.meituan.net/jungle/da9181f93dd2e11c5d74cf685470408f10016.png', title: '粮油休食', id: 4},
      {picUrl: 'https://p1.meituan.net/jungle/8b635825ef28dd85f3d3f070de4e64ed9366.png', title: '9.9包邮', id: 5},
      {picUrl: 'https://p1.meituan.net/jungle/e54f1fe77b0588d2dfe82a12e424108a9450.png', title: '我的庄园', id: 6},
      {picUrl: 'https://p0.meituan.net/jungle/2ec76f8f4f21a4ec163adc7fccfa1a399428.png', title: '直播好物', id: 7},
      {picUrl: 'https://p0.meituan.net/jungle/2eee7747fd143249b100b9fa5ee5e31d9873.png', title: '领券中心', id: 8},
      {picUrl: 'https://p1.meituan.net/jungle/dfd03fd91f640682c16179ba85837f739679.png', title: '美通卡', id: 9},
      {picUrl: 'https://p1.meituan.net/jungle/99fb0a3687a7ad570d015ec081ff396a9989.png', title: '洗衣2折', id: 10},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})