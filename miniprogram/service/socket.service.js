let socket
const host = require('../config').socket
// import config from '../config';
const  io = require('../lib/weapp.socket.io.js');
let token = wx.getStorageSync('user').token;
socket = io(host, {
  path:'',
  query: {
    token,
  }
})
socket.on('connect', function() {
  console.log('connect....')
});


exports.sendMessage = (msg) => {
  console.log('send message',msg);
  if (msg.content.trim() !== '') {
    socket.emit('miniMessage', msg);
  }
}
 
exports.getSocket = () => {
  return socket
}