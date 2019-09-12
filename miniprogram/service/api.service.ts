
// import config from '../config';
import httpServer from './httpServer';

import User from '../interface/user';

/**
 * 从微信获取openid
 * @param {code: wx.login().code}
 */
const getOpenid = (code: string) => httpServer.get({ url: `/users/openidfromwx/${code}` });

// const getOpenid = (code: string) => httpServer.get({ url: '/mini/getOpenid?code=' + code });

/**
 * 创建用户
 * @param {user: User }
 */
const register = (user: User) => httpServer.post({ url: '/users/register', data: user });

/**
 * 获取用户信息
 * @param {}
 */
const getUserInfo = (id: string) => httpServer.get({ url: `/users/getUserInfo/${id}` });

/**
 * 更新用户信息
 * @param {}
 */
const updateUser = (user: User) => httpServer.post({ url: `/users/updateUserInfo`, data: user });

/**
 * 关注(收藏)接口
 */
const putUsersLike = (openid: string) => httpServer.put({ url: `/users/like/${openid}` });

/**
 * 获取喜欢的类别和数量
 */
const getUsersLikeCount = () => httpServer.get({ url: `/users/like/count` });

/**
 * 获取对应喜欢类别的用户列表
 */
const getUsersListLikes = () => httpServer.post({ url: `/users/listLikes` });

/**
 * 获取心里测试的题目列表
 */
const getPsyList = () => httpServer.get({ url: `/psychological-test/list` });

/**
 * 获取心里测试的题目列表
 */
const getPsyTest = (id: string) => httpServer.get({ url: `/psychological-test/${id}` });

/**
 * 获取星座详解
 */
const getFortune = (fortuneName: string) => httpServer.get({ url: `/fortune/${fortuneName}` });

/**
 * 星座运势详解
 */
const getHoroscopet = (consName: string, type: string) => httpServer.get({ url: `/horoscope/realtime?consName=${consName}&type=${type}` });



/****************************************************************************************/

const getAccessToken = () => httpServer.get({ url: '/mini/getAccessToken' });


// const register = (user: any) => httpServer.post({ url: '/user/insertUser', data: user });

/**
 * 获取用户信息
 * @param {}
 */
const getUserDetail = (id: any) => httpServer.get({ url: `/user/getUserInfo?id=${id}` });
/**
 * 获取城市列表
 * @param {}
 */
const getCityList = (params: any) => httpServer.post({ url: `/user/district`, data: params });

/**
 * 获取城市列表
 * @param {}
 */
const getAllDistrict = (params: any) => httpServer.post({ url: `/user/allDistrict`, data: params });

/**
 * 创建店铺
 * @param {}
 */
const createShop = (params: any) => httpServer.post({ url: `/shop/createShop`, data: params });

/**
 * 更新店铺
 * @param {}
 */
const updateShop = (params: any) => httpServer.post({ url: `/shop/updateShop`, data: params });


export {
  getOpenid,
  register,
  updateUser,
  getUserInfo,
  putUsersLike,
  getUsersLikeCount, 
  getUsersListLikes,
  getPsyList,
  getPsyTest,
  getFortune,
  getHoroscopet,

  getAccessToken,
  getCityList,
  getAllDistrict,
  createShop,
  updateShop,
  getUserDetail,
  // register,
}

