"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BAIJIN = {
    name: "白金会员",
    priceList: [
        {
            select: false,
            name: "year",
            nameStr: "年付",
            value: 240,
            avgStr: "20元/月",
        },
        {
            select: false,
            name: "quarter",
            nameStr: "季付",
            value: 60,
            avgStr: "20元/月",
        },
        {
            select: false,
            name: "month",
            nameStr: "月付",
            value: 20,
            avgStr: "20元/月",
        },
    ],
};
exports.HUANGTONG = {
    name: "黄铜会员",
    priceList: [
        {
            select: false,
            name: "year",
            nameStr: "年付",
            value: 120,
            avgStr: "10元/月",
        },
        {
            select: false,
            name: "quarter",
            nameStr: "季付",
            value: 30,
            avgStr: "10元/月",
        },
        {
            select: false,
            name: "month",
            nameStr: "月付",
            value: 10,
            avgStr: "10元/月",
        },
    ],
};
exports.RIGHTLIST = [
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
        ordinary: "3次",
        huangTong: "无限次",
        baiJin: "无限次",
        type: "string",
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
        huangTong: "无限次",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlwU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpcFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBYSxRQUFBLE1BQU0sR0FBRztJQUNwQixJQUFJLEVBQUUsTUFBTTtJQUNaLFNBQVMsRUFBRTtRQUNUO1lBQ0UsTUFBTSxFQUFFLEtBQUs7WUFDYixJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxJQUFJO1lBQ2IsS0FBSyxFQUFFLEdBQUc7WUFDVixNQUFNLEVBQUUsT0FBTztTQUNoQjtRQUNEO1lBQ0UsTUFBTSxFQUFFLEtBQUs7WUFDYixJQUFJLEVBQUUsU0FBUztZQUNmLE9BQU8sRUFBRSxJQUFJO1lBQ2IsS0FBSyxFQUFFLEVBQUU7WUFDVCxNQUFNLEVBQUUsT0FBTztTQUNoQjtRQUNEO1lBQ0UsTUFBTSxFQUFFLEtBQUs7WUFDYixJQUFJLEVBQUUsT0FBTztZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsS0FBSyxFQUFFLEVBQUU7WUFDVCxNQUFNLEVBQUUsT0FBTztTQUNoQjtLQUNGO0NBQ0YsQ0FBQztBQUVXLFFBQUEsU0FBUyxHQUFHO0lBQ3ZCLElBQUksRUFBRSxNQUFNO0lBQ1osU0FBUyxFQUFFO1FBQ1Q7WUFDRSxNQUFNLEVBQUUsS0FBSztZQUNiLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLElBQUk7WUFDYixLQUFLLEVBQUUsR0FBRztZQUNWLE1BQU0sRUFBRSxPQUFPO1NBQ2hCO1FBQ0Q7WUFDRSxNQUFNLEVBQUUsS0FBSztZQUNiLElBQUksRUFBRSxTQUFTO1lBQ2YsT0FBTyxFQUFFLElBQUk7WUFDYixLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxPQUFPO1NBQ2hCO1FBQ0Q7WUFDRSxNQUFNLEVBQUUsS0FBSztZQUNiLElBQUksRUFBRSxPQUFPO1lBQ2IsT0FBTyxFQUFFLElBQUk7WUFDYixLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxPQUFPO1NBQ2hCO0tBQ0Y7Q0FDRixDQUFDO0FBRVcsUUFBQSxTQUFTLEdBQUc7SUFDdkI7UUFDRSxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO1FBQ2QsU0FBUyxFQUFFLElBQUk7UUFDZixNQUFNLEVBQUUsSUFBSTtRQUNaLElBQUksRUFBRSxFQUFFO0tBQ1Q7SUFDRDtRQUNFLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7UUFDZCxTQUFTLEVBQUUsSUFBSTtRQUNmLE1BQU0sRUFBRSxJQUFJO1FBQ1osSUFBSSxFQUFFLEVBQUU7S0FDVDtJQUNEO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtRQUNkLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO1FBQ2IsSUFBSSxFQUFFLFFBQVE7S0FDZjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsS0FBSztRQUNmLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO1FBQ2IsSUFBSSxFQUFFLFFBQVE7S0FDZjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtRQUNkLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO1FBQ2IsSUFBSSxFQUFFLFFBQVE7S0FDZjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsS0FBSztRQUNmLFNBQVMsRUFBRSxJQUFJO1FBQ2YsTUFBTSxFQUFFLElBQUk7UUFDWixJQUFJLEVBQUUsRUFBRTtLQUNUO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxLQUFLO1FBQ2YsU0FBUyxFQUFFLElBQUk7UUFDZixNQUFNLEVBQUUsSUFBSTtRQUNaLElBQUksRUFBRSxFQUFFO0tBQ1Q7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEJBSUpJTiA9IHtcbiAgbmFtZTogXCLnmb3ph5HkvJrlkZhcIixcbiAgcHJpY2VMaXN0OiBbXG4gICAge1xuICAgICAgc2VsZWN0OiBmYWxzZSxcbiAgICAgIG5hbWU6IFwieWVhclwiLCAvLyDlubRcbiAgICAgIG5hbWVTdHI6IFwi5bm05LuYXCIsXG4gICAgICB2YWx1ZTogMjQwLFxuICAgICAgYXZnU3RyOiBcIjIw5YWDL+aciFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0OiBmYWxzZSxcbiAgICAgIG5hbWU6IFwicXVhcnRlclwiLCAvLyDlraNcbiAgICAgIG5hbWVTdHI6IFwi5a2j5LuYXCIsXG4gICAgICB2YWx1ZTogNjAsXG4gICAgICBhdmdTdHI6IFwiMjDlhYMv5pyIXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3Q6IGZhbHNlLFxuICAgICAgbmFtZTogXCJtb250aFwiLCAvLyDmnIhcbiAgICAgIG5hbWVTdHI6IFwi5pyI5LuYXCIsXG4gICAgICB2YWx1ZTogMjAsXG4gICAgICBhdmdTdHI6IFwiMjDlhYMv5pyIXCIsXG4gICAgfSxcbiAgXSxcbn07XG5cbmV4cG9ydCBjb25zdCBIVUFOR1RPTkcgPSB7XG4gIG5hbWU6IFwi6buE6ZOc5Lya5ZGYXCIsXG4gIHByaWNlTGlzdDogW1xuICAgIHtcbiAgICAgIHNlbGVjdDogZmFsc2UsXG4gICAgICBuYW1lOiBcInllYXJcIiwgLy8g5bm0XG4gICAgICBuYW1lU3RyOiBcIuW5tOS7mFwiLFxuICAgICAgdmFsdWU6IDEyMCxcbiAgICAgIGF2Z1N0cjogXCIxMOWFgy/mnIhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdDogZmFsc2UsXG4gICAgICBuYW1lOiBcInF1YXJ0ZXJcIiwgLy8g5a2jXG4gICAgICBuYW1lU3RyOiBcIuWto+S7mFwiLFxuICAgICAgdmFsdWU6IDMwLFxuICAgICAgYXZnU3RyOiBcIjEw5YWDL+aciFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0OiBmYWxzZSxcbiAgICAgIG5hbWU6IFwibW9udGhcIiwgLy8g5pyIXG4gICAgICBuYW1lU3RyOiBcIuaciOS7mFwiLFxuICAgICAgdmFsdWU6IDEwLFxuICAgICAgYXZnU3RyOiBcIjEw5YWDL+aciFwiLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgY29uc3QgUklHSFRMSVNUID0gW1xuICB7XG4gICAgbmFtZTogXCLmmJ/luqfov5Dlir9cIixcbiAgICBvcmRpbmFyeTogdHJ1ZSxcbiAgICBodWFuZ1Rvbmc6IHRydWUsXG4gICAgYmFpSmluOiB0cnVlLFxuICAgIHR5cGU6IFwiXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIuW/g+eQhua1i+ivlVwiLFxuICAgIG9yZGluYXJ5OiB0cnVlLFxuICAgIGh1YW5nVG9uZzogdHJ1ZSxcbiAgICBiYWlKaW46IHRydWUsXG4gICAgdHlwZTogXCJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi5pif5bqn6YWN5a+5XCIsXG4gICAgb3JkaW5hcnk6IFwiM+asoVwiLFxuICAgIGh1YW5nVG9uZzogXCLml6DpmZDmrKFcIixcbiAgICBiYWlKaW46IFwi5peg6ZmQ5qyhXCIsXG4gICAgdHlwZTogXCJzdHJpbmdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi57yY5YiG5p+l55yLXCIsXG4gICAgb3JkaW5hcnk6IFwiMjDkurpcIixcbiAgICBodWFuZ1Rvbmc6IFwi5peg6ZmQ5qyhXCIsXG4gICAgYmFpSmluOiBcIuaXoOmZkOasoVwiLFxuICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIue8mOWIhuiBiuWkqVwiLFxuICAgIG9yZGluYXJ5OiBcIjPmrKFcIixcbiAgICBodWFuZ1Rvbmc6IFwi5peg6ZmQ5qyhXCIsXG4gICAgYmFpSmluOiBcIuaXoOmZkOasoVwiLFxuICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIuiwgeWWnOasouaIkVwiLFxuICAgIG9yZGluYXJ5OiBmYWxzZSxcbiAgICBodWFuZ1Rvbmc6IHRydWUsXG4gICAgYmFpSmluOiB0cnVlLFxuICAgIHR5cGU6IFwiXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIuebuOS6kuWWnOasolwiLFxuICAgIG9yZGluYXJ5OiBmYWxzZSxcbiAgICBodWFuZ1Rvbmc6IHRydWUsXG4gICAgYmFpSmluOiB0cnVlLFxuICAgIHR5cGU6IFwiXCIsXG4gIH0sXG5dO1xuIl19