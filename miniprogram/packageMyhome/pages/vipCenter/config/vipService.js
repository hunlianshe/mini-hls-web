"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BAIJIN = {
    name: "白金会员",
    priceList: [
        {
            name: "year",
            nameStr: "年付",
            value: "240",
            avgStr: "20元/月"
        }, {
            name: "quarter",
            nameStr: "季付",
            value: "60",
            avgStr: "20元/月"
        }, {
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
            name: "year",
            nameStr: "年付",
            value: "120",
            avgStr: "10元/月"
        }, {
            name: "quarter",
            nameStr: "季付",
            value: "30",
            avgStr: "10元/月"
        }, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlwU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpcFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBYyxRQUFBLE1BQU0sR0FBRTtJQUNwQixJQUFJLEVBQUUsTUFBTTtJQUNaLFNBQVMsRUFBRTtRQUNUO1lBQ0UsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUUsSUFBSTtZQUNiLEtBQUssRUFBRSxLQUFLO1lBQ1osTUFBTSxFQUFFLE9BQU87U0FDaEIsRUFBRTtZQUNELElBQUksRUFBRSxTQUFTO1lBQ2YsT0FBTyxFQUFFLElBQUk7WUFDYixLQUFLLEVBQUUsSUFBSTtZQUNYLE1BQU0sRUFBRSxPQUFPO1NBQ2hCLEVBQUU7WUFDRCxJQUFJLEVBQUUsT0FBTztZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsS0FBSyxFQUFFLElBQUk7WUFDWCxNQUFNLEVBQUUsT0FBTztTQUNoQjtLQUNGO0NBQ0YsQ0FBQTtBQUVZLFFBQUEsU0FBUyxHQUFHO0lBQ3ZCLElBQUksRUFBRSxNQUFNO0lBQ1osU0FBUyxFQUFFO1FBQ1Q7WUFDRSxJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxJQUFJO1lBQ2IsS0FBSyxFQUFFLEtBQUs7WUFDWixNQUFNLEVBQUUsT0FBTztTQUNoQixFQUFFO1lBQ0QsSUFBSSxFQUFFLFNBQVM7WUFDZixPQUFPLEVBQUUsSUFBSTtZQUNiLEtBQUssRUFBRSxJQUFJO1lBQ1gsTUFBTSxFQUFFLE9BQU87U0FDaEIsRUFBRTtZQUNELElBQUksRUFBRSxPQUFPO1lBQ2IsT0FBTyxFQUFFLElBQUk7WUFDYixLQUFLLEVBQUUsSUFBSTtZQUNYLE1BQU0sRUFBRSxPQUFPO1NBQ2hCO0tBQ0Y7Q0FDRixDQUFBO0FBRVksUUFBQSxTQUFTLEdBQUc7SUFDdkI7UUFDRSxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO1FBQ2QsU0FBUyxFQUFFLElBQUk7UUFDZixNQUFNLEVBQUUsSUFBSTtRQUNaLElBQUksRUFBRSxFQUFFO0tBQ1QsRUFBRTtRQUNELElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7UUFDZCxTQUFTLEVBQUUsSUFBSTtRQUNmLE1BQU0sRUFBRSxJQUFJO1FBQ1osSUFBSSxFQUFFLEVBQUU7S0FDVCxFQUFFO1FBQ0QsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtRQUNkLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO1FBQ2IsSUFBSSxFQUFFLFFBQVE7S0FDZixFQUFFO1FBQ0QsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsS0FBSztRQUNmLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO1FBQ2IsSUFBSSxFQUFFLFFBQVE7S0FDZixFQUFFO1FBQ0QsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtRQUNkLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO1FBQ2IsSUFBSSxFQUFFLFFBQVE7S0FDZixFQUFFO1FBQ0QsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsS0FBSztRQUNmLFNBQVMsRUFBRSxJQUFJO1FBQ2YsTUFBTSxFQUFFLElBQUk7UUFDWixJQUFJLEVBQUUsRUFBRTtLQUNULEVBQUU7UUFDRCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxLQUFLO1FBQ2YsU0FBUyxFQUFFLElBQUk7UUFDZixNQUFNLEVBQUUsSUFBSTtRQUNaLElBQUksRUFBRSxFQUFFO0tBQ1Q7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0ICBCQUlKSU49IHtcbiAgbmFtZTogXCLnmb3ph5HkvJrlkZhcIixcbiAgcHJpY2VMaXN0OiBbXG4gICAge1xuICAgICAgbmFtZTogXCJ5ZWFyXCIsIC8vIOW5tFxuICAgICAgbmFtZVN0cjogXCLlubTku5hcIixcbiAgICAgIHZhbHVlOiBcIjI0MFwiLFxuICAgICAgYXZnU3RyOiBcIjIw5YWDL+aciFwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJxdWFydGVyXCIsIC8vIOWto1xuICAgICAgbmFtZVN0cjogXCLlraPku5hcIixcbiAgICAgIHZhbHVlOiBcIjYwXCIsXG4gICAgICBhdmdTdHI6IFwiMjDlhYMv5pyIXCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcIm1vbnRoXCIsIC8vIOaciFxuICAgICAgbmFtZVN0cjogXCLmnIjku5hcIixcbiAgICAgIHZhbHVlOiBcIjIwXCIsXG4gICAgICBhdmdTdHI6IFwiMjDlhYMv5pyIXCJcbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IEhVQU5HVE9ORyA9IHtcbiAgbmFtZTogXCLpu4Tpk5zkvJrlkZhcIixcbiAgcHJpY2VMaXN0OiBbXG4gICAge1xuICAgICAgbmFtZTogXCJ5ZWFyXCIsIC8vIOW5tFxuICAgICAgbmFtZVN0cjogXCLlubTku5hcIixcbiAgICAgIHZhbHVlOiBcIjEyMFwiLFxuICAgICAgYXZnU3RyOiBcIjEw5YWDL+aciFwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJxdWFydGVyXCIsIC8vIOWto1xuICAgICAgbmFtZVN0cjogXCLlraPku5hcIixcbiAgICAgIHZhbHVlOiBcIjMwXCIsXG4gICAgICBhdmdTdHI6IFwiMTDlhYMv5pyIXCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcIm1vbnRoXCIsIC8vIOaciFxuICAgICAgbmFtZVN0cjogXCLmnIjku5hcIixcbiAgICAgIHZhbHVlOiBcIjMwXCIsXG4gICAgICBhdmdTdHI6IFwiMTDlhYMv5pyIXCJcbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IFJJR0hUTElTVCA9IFtcbiAge1xuICAgIG5hbWU6IFwi5pif5bqn6L+Q5Yq/XCIsXG4gICAgb3JkaW5hcnk6IHRydWUsXG4gICAgaHVhbmdUb25nOiB0cnVlLFxuICAgIGJhaUppbjogdHJ1ZSxcbiAgICB0eXBlOiBcIlwiXG4gIH0sIHtcbiAgICBuYW1lOiBcIuW/g+eQhua1i+ivlVwiLFxuICAgIG9yZGluYXJ5OiB0cnVlLFxuICAgIGh1YW5nVG9uZzogdHJ1ZSxcbiAgICBiYWlKaW46IHRydWUsXG4gICAgdHlwZTogXCJcIlxuICB9LCB7XG4gICAgbmFtZTogXCLmmJ/luqfphY3lr7lcIixcbiAgICBvcmRpbmFyeTogXCIz5qyhXCIsXG4gICAgaHVhbmdUb25nOiBcIuaXoOmZkOasoVwiLFxuICAgIGJhaUppbjogXCLml6DpmZDmrKFcIixcbiAgICB0eXBlOiBcInN0cmluZ1wiXG4gIH0sIHtcbiAgICBuYW1lOiBcIue8mOWIhuafpeeci1wiLFxuICAgIG9yZGluYXJ5OiBcIjIw5Lq6XCIsXG4gICAgaHVhbmdUb25nOiBcIuaXoOmZkOasoVwiLFxuICAgIGJhaUppbjogXCLml6DpmZDmrKFcIixcbiAgICB0eXBlOiBcInN0cmluZ1wiXG4gIH0sIHtcbiAgICBuYW1lOiBcIue8mOWIhuiBiuWkqVwiLFxuICAgIG9yZGluYXJ5OiBcIjPmrKFcIixcbiAgICBodWFuZ1Rvbmc6IFwi5peg6ZmQ5qyhXCIsXG4gICAgYmFpSmluOiBcIuaXoOmZkOasoVwiLFxuICAgIHR5cGU6IFwic3RyaW5nXCJcbiAgfSwge1xuICAgIG5hbWU6IFwi6LCB5Zac5qyi5oiRXCIsXG4gICAgb3JkaW5hcnk6IGZhbHNlLFxuICAgIGh1YW5nVG9uZzogdHJ1ZSxcbiAgICBiYWlKaW46IHRydWUsXG4gICAgdHlwZTogXCJcIlxuICB9LCB7XG4gICAgbmFtZTogXCLnm7jkupLllpzmrKJcIixcbiAgICBvcmRpbmFyeTogZmFsc2UsXG4gICAgaHVhbmdUb25nOiB0cnVlLFxuICAgIGJhaUppbjogdHJ1ZSxcbiAgICB0eXBlOiBcIlwiXG4gIH1cbl0iXX0=