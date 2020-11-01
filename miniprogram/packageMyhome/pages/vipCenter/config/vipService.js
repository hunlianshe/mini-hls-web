"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BAIJIN = {
    name: "白金会员",
    priceList: [
        {
            select: false,
            name: "year",
            nameStr: "年付",
            value: "240",
            avgStr: "20元/月",
        }, {
            select: false,
            name: "quarter",
            nameStr: "季付",
            value: "60",
            avgStr: "20元/月"
        }, {
            select: false,
            name: "month",
            nameStr: "月付",
            value: "20",
            avgStr: "20元/月"
        }
    ]
};
exports.HUANGTONG = {
    name: "黄铜会员",
    priceList: [
        {
            select: false,
            name: "year",
            nameStr: "年付",
            value: "120",
            avgStr: "10元/月"
        }, {
            select: false,
            name: "quarter",
            nameStr: "季付",
            value: "30",
            avgStr: "10元/月"
        }, {
            select: false,
            name: "month",
            nameStr: "月付",
            value: "30",
            avgStr: "10元/月"
        }
    ]
};
exports.RIGHTLIST = [
    {
        name: "星座运势",
        ordinary: true,
        huangTong: true,
        baiJin: true,
        type: ""
    }, {
        name: "心理测试",
        ordinary: true,
        huangTong: true,
        baiJin: true,
        type: ""
    }, {
        name: "星座配对",
        ordinary: "3次",
        huangTong: "无限次",
        baiJin: "无限次",
        type: "string"
    }, {
        name: "缘分查看",
        ordinary: "20人",
        huangTong: "无限次",
        baiJin: "无限次",
        type: "string"
    }, {
        name: "缘分聊天",
        ordinary: "3次",
        huangTong: "无限次",
        baiJin: "无限次",
        type: "string"
    }, {
        name: "谁喜欢我",
        ordinary: false,
        huangTong: true,
        baiJin: true,
        type: ""
    }, {
        name: "相互喜欢",
        ordinary: false,
        huangTong: true,
        baiJin: true,
        type: ""
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlwU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpcFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBYyxRQUFBLE1BQU0sR0FBRTtJQUNwQixJQUFJLEVBQUUsTUFBTTtJQUNaLFNBQVMsRUFBRTtRQUNUO1lBQ0UsTUFBTSxFQUFFLEtBQUs7WUFDYixJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxJQUFJO1lBQ2IsS0FBSyxFQUFFLEtBQUs7WUFDWixNQUFNLEVBQUUsT0FBTztTQUNoQixFQUFFO1lBQ0QsTUFBTSxFQUFFLEtBQUs7WUFDYixJQUFJLEVBQUUsU0FBUztZQUNmLE9BQU8sRUFBRSxJQUFJO1lBQ2IsS0FBSyxFQUFFLElBQUk7WUFDWCxNQUFNLEVBQUUsT0FBTztTQUNoQixFQUFFO1lBQ0QsTUFBTSxFQUFFLEtBQUs7WUFDYixJQUFJLEVBQUUsT0FBTztZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsS0FBSyxFQUFFLElBQUk7WUFDWCxNQUFNLEVBQUUsT0FBTztTQUNoQjtLQUNGO0NBQ0YsQ0FBQTtBQUVZLFFBQUEsU0FBUyxHQUFHO0lBQ3ZCLElBQUksRUFBRSxNQUFNO0lBQ1osU0FBUyxFQUFFO1FBQ1Q7WUFDRSxNQUFNLEVBQUUsS0FBSztZQUNiLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLElBQUk7WUFDYixLQUFLLEVBQUUsS0FBSztZQUNaLE1BQU0sRUFBRSxPQUFPO1NBQ2hCLEVBQUU7WUFDRCxNQUFNLEVBQUUsS0FBSztZQUNiLElBQUksRUFBRSxTQUFTO1lBQ2YsT0FBTyxFQUFFLElBQUk7WUFDYixLQUFLLEVBQUUsSUFBSTtZQUNYLE1BQU0sRUFBRSxPQUFPO1NBQ2hCLEVBQUU7WUFDRCxNQUFNLEVBQUUsS0FBSztZQUNiLElBQUksRUFBRSxPQUFPO1lBQ2IsT0FBTyxFQUFFLElBQUk7WUFDYixLQUFLLEVBQUUsSUFBSTtZQUNYLE1BQU0sRUFBRSxPQUFPO1NBQ2hCO0tBQ0Y7Q0FDRixDQUFBO0FBRVksUUFBQSxTQUFTLEdBQUc7SUFDdkI7UUFDRSxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO1FBQ2QsU0FBUyxFQUFFLElBQUk7UUFDZixNQUFNLEVBQUUsSUFBSTtRQUNaLElBQUksRUFBRSxFQUFFO0tBQ1QsRUFBRTtRQUNELElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7UUFDZCxTQUFTLEVBQUUsSUFBSTtRQUNmLE1BQU0sRUFBRSxJQUFJO1FBQ1osSUFBSSxFQUFFLEVBQUU7S0FDVCxFQUFFO1FBQ0QsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtRQUNkLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO1FBQ2IsSUFBSSxFQUFFLFFBQVE7S0FDZixFQUFFO1FBQ0QsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsS0FBSztRQUNmLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO1FBQ2IsSUFBSSxFQUFFLFFBQVE7S0FDZixFQUFFO1FBQ0QsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtRQUNkLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO1FBQ2IsSUFBSSxFQUFFLFFBQVE7S0FDZixFQUFFO1FBQ0QsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsS0FBSztRQUNmLFNBQVMsRUFBRSxJQUFJO1FBQ2YsTUFBTSxFQUFFLElBQUk7UUFDWixJQUFJLEVBQUUsRUFBRTtLQUNULEVBQUU7UUFDRCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxLQUFLO1FBQ2YsU0FBUyxFQUFFLElBQUk7UUFDZixNQUFNLEVBQUUsSUFBSTtRQUNaLElBQUksRUFBRSxFQUFFO0tBQ1Q7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0ICBCQUlKSU49IHtcbiAgbmFtZTogXCLnmb3ph5HkvJrlkZhcIixcbiAgcHJpY2VMaXN0OiBbXG4gICAge1xuICAgICAgc2VsZWN0OiBmYWxzZSxcbiAgICAgIG5hbWU6IFwieWVhclwiLCAvLyDlubRcbiAgICAgIG5hbWVTdHI6IFwi5bm05LuYXCIsXG4gICAgICB2YWx1ZTogXCIyNDBcIixcbiAgICAgIGF2Z1N0cjogXCIyMOWFgy/mnIhcIixcbiAgICB9LCB7XG4gICAgICBzZWxlY3Q6IGZhbHNlLFxuICAgICAgbmFtZTogXCJxdWFydGVyXCIsIC8vIOWto1xuICAgICAgbmFtZVN0cjogXCLlraPku5hcIixcbiAgICAgIHZhbHVlOiBcIjYwXCIsXG4gICAgICBhdmdTdHI6IFwiMjDlhYMv5pyIXCJcbiAgICB9LCB7XG4gICAgICBzZWxlY3Q6IGZhbHNlLFxuICAgICAgbmFtZTogXCJtb250aFwiLCAvLyDmnIhcbiAgICAgIG5hbWVTdHI6IFwi5pyI5LuYXCIsXG4gICAgICB2YWx1ZTogXCIyMFwiLFxuICAgICAgYXZnU3RyOiBcIjIw5YWDL+aciFwiXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBIVUFOR1RPTkcgPSB7XG4gIG5hbWU6IFwi6buE6ZOc5Lya5ZGYXCIsXG4gIHByaWNlTGlzdDogW1xuICAgIHtcbiAgICAgIHNlbGVjdDogZmFsc2UsXG4gICAgICBuYW1lOiBcInllYXJcIiwgLy8g5bm0XG4gICAgICBuYW1lU3RyOiBcIuW5tOS7mFwiLFxuICAgICAgdmFsdWU6IFwiMTIwXCIsXG4gICAgICBhdmdTdHI6IFwiMTDlhYMv5pyIXCJcbiAgICB9LCB7XG4gICAgICBzZWxlY3Q6IGZhbHNlLFxuICAgICAgbmFtZTogXCJxdWFydGVyXCIsIC8vIOWto1xuICAgICAgbmFtZVN0cjogXCLlraPku5hcIixcbiAgICAgIHZhbHVlOiBcIjMwXCIsXG4gICAgICBhdmdTdHI6IFwiMTDlhYMv5pyIXCJcbiAgICB9LCB7XG4gICAgICBzZWxlY3Q6IGZhbHNlLFxuICAgICAgbmFtZTogXCJtb250aFwiLCAvLyDmnIhcbiAgICAgIG5hbWVTdHI6IFwi5pyI5LuYXCIsXG4gICAgICB2YWx1ZTogXCIzMFwiLFxuICAgICAgYXZnU3RyOiBcIjEw5YWDL+aciFwiXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBSSUdIVExJU1QgPSBbXG4gIHtcbiAgICBuYW1lOiBcIuaYn+W6p+i/kOWKv1wiLFxuICAgIG9yZGluYXJ5OiB0cnVlLFxuICAgIGh1YW5nVG9uZzogdHJ1ZSxcbiAgICBiYWlKaW46IHRydWUsXG4gICAgdHlwZTogXCJcIlxuICB9LCB7XG4gICAgbmFtZTogXCLlv4PnkIbmtYvor5VcIixcbiAgICBvcmRpbmFyeTogdHJ1ZSxcbiAgICBodWFuZ1Rvbmc6IHRydWUsXG4gICAgYmFpSmluOiB0cnVlLFxuICAgIHR5cGU6IFwiXCJcbiAgfSwge1xuICAgIG5hbWU6IFwi5pif5bqn6YWN5a+5XCIsXG4gICAgb3JkaW5hcnk6IFwiM+asoVwiLFxuICAgIGh1YW5nVG9uZzogXCLml6DpmZDmrKFcIixcbiAgICBiYWlKaW46IFwi5peg6ZmQ5qyhXCIsXG4gICAgdHlwZTogXCJzdHJpbmdcIlxuICB9LCB7XG4gICAgbmFtZTogXCLnvJjliIbmn6XnnItcIixcbiAgICBvcmRpbmFyeTogXCIyMOS6ulwiLFxuICAgIGh1YW5nVG9uZzogXCLml6DpmZDmrKFcIixcbiAgICBiYWlKaW46IFwi5peg6ZmQ5qyhXCIsXG4gICAgdHlwZTogXCJzdHJpbmdcIlxuICB9LCB7XG4gICAgbmFtZTogXCLnvJjliIbogYrlpKlcIixcbiAgICBvcmRpbmFyeTogXCIz5qyhXCIsXG4gICAgaHVhbmdUb25nOiBcIuaXoOmZkOasoVwiLFxuICAgIGJhaUppbjogXCLml6DpmZDmrKFcIixcbiAgICB0eXBlOiBcInN0cmluZ1wiXG4gIH0sIHtcbiAgICBuYW1lOiBcIuiwgeWWnOasouaIkVwiLFxuICAgIG9yZGluYXJ5OiBmYWxzZSxcbiAgICBodWFuZ1Rvbmc6IHRydWUsXG4gICAgYmFpSmluOiB0cnVlLFxuICAgIHR5cGU6IFwiXCJcbiAgfSwge1xuICAgIG5hbWU6IFwi55u45LqS5Zac5qyiXCIsXG4gICAgb3JkaW5hcnk6IGZhbHNlLFxuICAgIGh1YW5nVG9uZzogdHJ1ZSxcbiAgICBiYWlKaW46IHRydWUsXG4gICAgdHlwZTogXCJcIlxuICB9XG5dIl19