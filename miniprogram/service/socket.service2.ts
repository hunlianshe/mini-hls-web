// const io = require('../../typings/weapp.socket.io.js')
// import io from '';
import config from '../config';
let token = wx.getStorageSync('user').token;

const socket = io(config.socket, {
    path:'',
    query: {
      token,
    }
  })

socket.on('connect', function() {
    console.log('connect....')
  });
  

const sendMessage = (msg: {
    cid: string
    type: number
    msg: string
}) => {
    console.log('send message',msg);
    if (msg.msg.trim() !== '') {
      socket.emit('privateChat', msg);
    }
};

const getSocket = (socket:any) => {
    return socket
};

export {
    sendMessage,
    getSocket
}