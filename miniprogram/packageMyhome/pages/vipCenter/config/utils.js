"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RightList;
(function (RightList) {
    RightList[RightList["NOLIMIT"] = 99999] = "NOLIMIT";
    RightList[RightList["NOACESS"] = 0] = "NOACESS";
})(RightList = exports.RightList || (exports.RightList = {}));
exports.dealWithVipPriceInfo = (data) => {
    const result = {};
    data.forEach((vipInfo) => {
        const temp = {
            name: vipInfo.name,
            priceList: [
                {
                    select: false,
                    name: "year",
                    nameStr: "年付",
                    value: vipInfo.yearPrice,
                    avgStr: `${vipInfo.monthPrice}元/月`,
                },
                {
                    select: false,
                    name: "season",
                    nameStr: "季付",
                    value: vipInfo.seasonPrice,
                    avgStr: `${vipInfo.monthPrice}元/月`,
                },
                {
                    select: false,
                    name: "month",
                    nameStr: "月付",
                    value: vipInfo.monthPrice,
                    avgStr: `${vipInfo.monthPrice}/月`,
                },
            ],
        };
        if (vipInfo.name === "白金会员") {
            result.BAIJIN = temp;
        }
        else if (vipInfo.name === "黄铜会员") {
            result.HUANGTONG = temp;
        }
    });
    return result;
};
exports.dealWithVipRightList = (data) => {
    const result = [
        {
            name: "星座运势",
            ordinary: true,
            huangTong: true,
            baiJin: true,
            type: "",
        },
        {
            name: "心理测试",
            ordinary: true,
            huangTong: true,
            baiJin: true,
            type: "",
        },
        {
            name: "星座配对",
            ordinary: true,
            huangTong: true,
            baiJin: true,
            type: "",
        },
        {
            name: "缘分查看",
            ordinary: "20人",
            huangTong: "无限次",
            baiJin: "无限次",
            type: "string",
        },
        {
            name: "缘分聊天",
            ordinary: "3次",
            huangTong: "20次",
            baiJin: "无限次",
            type: "string",
        },
        {
            name: "谁喜欢我",
            ordinary: false,
            huangTong: true,
            baiJin: true,
            type: "",
        },
        {
            name: "相互喜欢",
            ordinary: false,
            huangTong: true,
            baiJin: true,
            type: "",
        },
    ];
    data.forEach((vipInfo) => {
        let key = "";
        switch (vipInfo.name) {
            case "无会员":
                key = "ordinary";
                break;
            case "黄铜会员":
                key = "huangTong";
                break;
            case "白金会员":
                key = "baiJin";
                break;
            default:
                break;
        }
        result[0][key] =
            vipInfo.psychologicalTest === RightList.NOLIMIT ? true : false;
        result[1][key] =
            vipInfo.constellationMatching === RightList.NOLIMIT ? true : false;
        result[2][key] = vipInfo.fateMatch === RightList.NOLIMIT ? true : false;
        result[3][key] =
            vipInfo.fateWatch === RightList.NOLIMIT
                ? "无限次"
                : `${vipInfo.fateWatch}人`;
        result[4][key] =
            vipInfo.fateChat === RightList.NOLIMIT
                ? "无限次"
                : `${vipInfo.fateChat}次`;
        result[5][key] = vipInfo.whoLikeMe === RightList.NOLIMIT ? true : false;
        result[6][key] = vipInfo.likeEach === RightList.NOLIMIT ? true : false;
    });
    return result;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQixtREFBZSxDQUFBO0lBQ2YsK0NBQVcsQ0FBQTtBQUNiLENBQUMsRUFIVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUdwQjtBQUVZLFFBQUEsb0JBQW9CLEdBQUcsQ0FBQyxJQUFTLEVBQUUsRUFBRTtJQUNoRCxNQUFNLE1BQU0sR0FBUSxFQUFFLENBQUM7SUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQVksRUFBRSxFQUFFO1FBQzVCLE1BQU0sSUFBSSxHQUFHO1lBQ1gsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ2xCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxNQUFNLEVBQUUsS0FBSztvQkFDYixJQUFJLEVBQUUsTUFBTTtvQkFDWixPQUFPLEVBQUUsSUFBSTtvQkFDYixLQUFLLEVBQUUsT0FBTyxDQUFDLFNBQVM7b0JBQ3hCLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEtBQUs7aUJBQ25DO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxLQUFLO29CQUNiLElBQUksRUFBRSxRQUFRO29CQUNkLE9BQU8sRUFBRSxJQUFJO29CQUNiLEtBQUssRUFBRSxPQUFPLENBQUMsV0FBVztvQkFDMUIsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLFVBQVUsS0FBSztpQkFDbkM7Z0JBQ0Q7b0JBQ0UsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsSUFBSSxFQUFFLE9BQU87b0JBQ2IsT0FBTyxFQUFFLElBQUk7b0JBQ2IsS0FBSyxFQUFFLE9BQU8sQ0FBQyxVQUFVO29CQUN6QixNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsVUFBVSxJQUFJO2lCQUNsQzthQUNGO1NBQ0YsQ0FBQztRQUNGLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDM0Is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LENBQUMsR0FBRyxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUM7UUFFOUIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNaLE9BQU8sQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLE9BQU87Z0JBQ3BDLENBQUMsQ0FBQyxLQUFLO2dCQUNQLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQztRQUU3QixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUV4RSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUN6RSxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIFJpZ2h0TGlzdCB7XG4gIE5PTElNSVQgPSA5OTk5OSxcbiAgTk9BQ0VTUyA9IDAsXG59XG5cbmV4cG9ydCBjb25zdCBkZWFsV2l0aFZpcFByaWNlSW5mbyA9IChkYXRhOiBhbnkpID0+IHtcbiAgY29uc3QgcmVzdWx0OiBhbnkgPSB7fTtcbiAgZGF0YS5mb3JFYWNoKCh2aXBJbmZvOiBhbnkpID0+IHtcbiAgICBjb25zdCB0ZW1wID0ge1xuICAgICAgbmFtZTogdmlwSW5mby5uYW1lLFxuICAgICAgcHJpY2VMaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3Q6IGZhbHNlLFxuICAgICAgICAgIG5hbWU6IFwieWVhclwiLCAvLyDlubRcbiAgICAgICAgICBuYW1lU3RyOiBcIuW5tOS7mFwiLFxuICAgICAgICAgIHZhbHVlOiB2aXBJbmZvLnllYXJQcmljZSxcbiAgICAgICAgICBhdmdTdHI6IGAke3ZpcEluZm8ubW9udGhQcmljZX3lhYMv5pyIYCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdDogZmFsc2UsXG4gICAgICAgICAgbmFtZTogXCJzZWFzb25cIiwgLy8g5a2jXG4gICAgICAgICAgbmFtZVN0cjogXCLlraPku5hcIixcbiAgICAgICAgICB2YWx1ZTogdmlwSW5mby5zZWFzb25QcmljZSxcbiAgICAgICAgICBhdmdTdHI6IGAke3ZpcEluZm8ubW9udGhQcmljZX3lhYMv5pyIYCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdDogZmFsc2UsXG4gICAgICAgICAgbmFtZTogXCJtb250aFwiLCAvLyDmnIhcbiAgICAgICAgICBuYW1lU3RyOiBcIuaciOS7mFwiLFxuICAgICAgICAgIHZhbHVlOiB2aXBJbmZvLm1vbnRoUHJpY2UsXG4gICAgICAgICAgYXZnU3RyOiBgJHt2aXBJbmZvLm1vbnRoUHJpY2V9L+aciGAsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gICAgaWYgKHZpcEluZm8ubmFtZSA9PT0gXCLnmb3ph5HkvJrlkZhcIikge1xuICAgICAgcmVzdWx0LkJBSUpJTiA9IHRlbXA7XG4gICAgfSBlbHNlIGlmICh2aXBJbmZvLm5hbWUgPT09IFwi6buE6ZOc5Lya5ZGYXCIpIHtcbiAgICAgIHJlc3VsdC5IVUFOR1RPTkcgPSB0ZW1wO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgY29uc3QgZGVhbFdpdGhWaXBSaWdodExpc3QgPSAoZGF0YTogYW55KSA9PiB7XG4gIGNvbnN0IHJlc3VsdDogYW55ID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwi5pif5bqn6L+Q5Yq/XCIsXG4gICAgICBvcmRpbmFyeTogdHJ1ZSxcbiAgICAgIGh1YW5nVG9uZzogdHJ1ZSxcbiAgICAgIGJhaUppbjogdHJ1ZSxcbiAgICAgIHR5cGU6IFwiXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuW/g+eQhua1i+ivlVwiLFxuICAgICAgb3JkaW5hcnk6IHRydWUsXG4gICAgICBodWFuZ1Rvbmc6IHRydWUsXG4gICAgICBiYWlKaW46IHRydWUsXG4gICAgICB0eXBlOiBcIlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLmmJ/luqfphY3lr7lcIixcbiAgICAgIG9yZGluYXJ5OiB0cnVlLFxuICAgICAgaHVhbmdUb25nOiB0cnVlLFxuICAgICAgYmFpSmluOiB0cnVlLFxuICAgICAgdHlwZTogXCJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi57yY5YiG5p+l55yLXCIsXG4gICAgICBvcmRpbmFyeTogXCIyMOS6ulwiLFxuICAgICAgaHVhbmdUb25nOiBcIuaXoOmZkOasoVwiLFxuICAgICAgYmFpSmluOiBcIuaXoOmZkOasoVwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi57yY5YiG6IGK5aSpXCIsXG4gICAgICBvcmRpbmFyeTogXCIz5qyhXCIsXG4gICAgICBodWFuZ1Rvbmc6IFwiMjDmrKFcIixcbiAgICAgIGJhaUppbjogXCLml6DpmZDmrKFcIixcbiAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuiwgeWWnOasouaIkVwiLFxuICAgICAgb3JkaW5hcnk6IGZhbHNlLFxuICAgICAgaHVhbmdUb25nOiB0cnVlLFxuICAgICAgYmFpSmluOiB0cnVlLFxuICAgICAgdHlwZTogXCJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi55u45LqS5Zac5qyiXCIsXG4gICAgICBvcmRpbmFyeTogZmFsc2UsXG4gICAgICBodWFuZ1Rvbmc6IHRydWUsXG4gICAgICBiYWlKaW46IHRydWUsXG4gICAgICB0eXBlOiBcIlwiLFxuICAgIH0sXG4gIF07XG4gIGRhdGEuZm9yRWFjaCgodmlwSW5mbzogYW55KSA9PiB7XG4gICAgbGV0IGtleSA9IFwiXCI7XG4gICAgc3dpdGNoICh2aXBJbmZvLm5hbWUpIHtcbiAgICAgIGNhc2UgXCLml6DkvJrlkZhcIjpcbiAgICAgICAga2V5ID0gXCJvcmRpbmFyeVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCLpu4Tpk5zkvJrlkZhcIjpcbiAgICAgICAga2V5ID0gXCJodWFuZ1RvbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwi55m96YeR5Lya5ZGYXCI6XG4gICAgICAgIGtleSA9IFwiYmFpSmluXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8v5pif5bqn6L+Q5Yq/XG4gICAgcmVzdWx0WzBdW2tleV0gPVxuICAgICAgdmlwSW5mby5wc3ljaG9sb2dpY2FsVGVzdCA9PT0gUmlnaHRMaXN0Lk5PTElNSVQgPyB0cnVlIDogZmFsc2U7XG4gICAgLy/lv4PnkIbmtYvor5VcbiAgICByZXN1bHRbMV1ba2V5XSA9XG4gICAgICB2aXBJbmZvLmNvbnN0ZWxsYXRpb25NYXRjaGluZyA9PT0gUmlnaHRMaXN0Lk5PTElNSVQgPyB0cnVlIDogZmFsc2U7XG4gICAgLy/mmJ/luqfphY3lr7lcbiAgICByZXN1bHRbMl1ba2V5XSA9IHZpcEluZm8uZmF0ZU1hdGNoID09PSBSaWdodExpc3QuTk9MSU1JVCA/IHRydWUgOiBmYWxzZTtcbiAgICAvL+e8mOWIhuafpeeci1xuICAgIHJlc3VsdFszXVtrZXldID1cbiAgICAgIHZpcEluZm8uZmF0ZVdhdGNoID09PSBSaWdodExpc3QuTk9MSU1JVFxuICAgICAgICA/IFwi5peg6ZmQ5qyhXCJcbiAgICAgICAgOiBgJHt2aXBJbmZvLmZhdGVXYXRjaH3kurpgO1xuICAgIC8v57yY5YiG6IGK5aSpXG4gICAgcmVzdWx0WzRdW2tleV0gPVxuICAgICAgdmlwSW5mby5mYXRlQ2hhdCA9PT0gUmlnaHRMaXN0Lk5PTElNSVRcbiAgICAgICAgPyBcIuaXoOmZkOasoVwiXG4gICAgICAgIDogYCR7dmlwSW5mby5mYXRlQ2hhdH3mrKFgO1xuICAgIC8v6LCB5Zac5qyi5oiRXG4gICAgcmVzdWx0WzVdW2tleV0gPSB2aXBJbmZvLndob0xpa2VNZSA9PT0gUmlnaHRMaXN0Lk5PTElNSVQgPyB0cnVlIDogZmFsc2U7XG4gICAgLy/nm7jkupLllpzmrKJcbiAgICByZXN1bHRbNl1ba2V5XSA9IHZpcEluZm8ubGlrZUVhY2ggPT09IFJpZ2h0TGlzdC5OT0xJTUlUID8gdHJ1ZSA6IGZhbHNlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iXX0=