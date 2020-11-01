// const io = require('../../typings/weapp.socket.io.js')
// import io from '';
const  io = require('../lib/weapp.socket.io.js');
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
      console.log("消息发送出去了吗")
      socket.emit('privateChat', msg);
    }
};


const getSocket = () => {
    return socket
};

socket.on("privateChat",(result:any) => {
  console.log("tim received msg ",result)
})

export {
    sendMessage,
    getSocket
}