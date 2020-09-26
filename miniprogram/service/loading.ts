let timer: any = null
let count = 0

function show() {
  count++
  if (timer) {
    return
  }
  // 对于很快完成的请求就不显示loading了
  timer = setTimeout(() => {
    wx.showLoading({
      title: '',
      mask: true
    })
  }, 400)
}

function hide() {
  count--
  if (timer && count == 0) {
    clearTimeout(timer)
    timer = null
    wx.hideLoading()
  }

}

function error(content: any) {
  if (content == null || content == undefined) {
    content = ''
  } else if (content !== null && typeof content === 'object') {
    try {
      content = JSON.stringify(content)
    } catch (e) {
      content = typeof (content)
    }
  }

  content = content + ''

  // 太长的话，显示框会超出屏幕，截掉多余的
  content = content.substring(0, 499)
  wx.showModal({
    title: '提示',
    content,
    showCancel: false,
    success: () => { }
  })
}

export default {
  show,
  hide,
  error,
}