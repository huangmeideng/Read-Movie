// pages/posts/posts-detail/posts-detail.js
let testData = require("../../../data/testData.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let postsData = testData.postsData;
    let postId = options.id;
    let currentPost = postsData[postId-1];

    //获取收藏状态
    let isCollected = wx.getStorageSync("post-"+postId)?true:false;
    this.setData({
      postId: postId,
      postData: currentPost,
      isCollected
    });
  },

  /**
   * 收藏事件
   */
  onCollectPost: function (options) {
    let postId = options.currentTarget.dataset.postid;
    let collectKey = "post-"+postId;
    let isCollected = wx.getStorageSync("post-"+postId);
    isCollected = isCollected?false:true;
    wx.showToast({
      title: isCollected?"收藏成功":"取消成功"
    })
    wx.setStorageSync(collectKey, isCollected);
    this.setData({
      isCollected
    })
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
   * 用户点击右分享
   */
  onShareAppMessage: function () {
    //获取要转发的数据
    let postData = testData.postsData[this.data.postId-1];
    return {
      title: postData.postTitle,
      imageUrl: postData.postImage
    }
  }
})