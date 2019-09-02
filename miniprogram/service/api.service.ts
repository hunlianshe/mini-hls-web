
// import config from '../config';
import httpServer from './httpServer';

/**
 * 获取openid
 */
const getOpenid = (code: string) => httpServer.get({ url: '/mini/getOpenid?code=' + code });

const getAccessToken = () => httpServer.get({ url: '/mini/getAccessToken' });

/**
 * 创建用户
 * @param {}
 */
const insertUser = (user: any) => httpServer.post({ url: '/user/insertUser', data: user });

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
  getAccessToken,
  insertUser,
  updateUser,
  getUserInfo,
  getCityList,
  getAllDistrict,
  createShop,
  updateShop,
  getUserDetail,
  register,
}

