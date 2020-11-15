import * as Api from "./api.service";

const startSingleChatSession = (
  openid: string,
  success = () => {},
  fail = () => {}
) => {
  Api.startChatSession({
    userIds: [openid],
  }).then((result: any) => {
    if (result.code == 200) {
      console.log(`start chat session result`, result.data);
      success();
      wx.navigateTo({
        url: `../chat/chat?openid=${openid}&cid=${result.data._id}`,
      });
    } else {
      fail();
    }
  });
};

export { startSingleChatSession };
