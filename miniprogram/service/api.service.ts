
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
const insertUser = (user: User) => httpServer.post({ url: '/user/insertUser', data: user });

/**
 * 获取星座详解
 */
const getFortune = (fortuneName: string) => httpServer.get({ url: `/fortune/${fortuneName}` });


/**
 * 获取心里测试的题目列表
 */
const getPsyTest = () => httpServer.get({ url: `/psychological-test/getPsyTest` });


/****************************************************************************************/

const getAccessToken = () => httpServer.get({ url: '/mini/getAccessToken' });


/**
 * 更新用户信息
 * @param {}
 */
const updateUser = (params: any) => httpServer.post({ url: `/user/updateUser`, data: params });

const register = (user: any) => httpServer.post({ url: '/user/insertUser', data: user });
/**
 * 获取用户信息
 * @param {}
 */
const getUserInfo = () => httpServer.get({ url: `/user/userInfo` });

/**
 * 获取用户信息
 * @param {}
 */
const getUserDetail = (id: any) => httpServer.get({ url: `/user/userInfo?id=${id}` });
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
  insertUser,
  getFortune,
  getPsyTest,

  getAccessToken,
  updateUser,
  getUserInfo,
  getCityList,
  getAllDistrict,
  createShop,
  updateShop,
  getUserDetail,
  register,
}

