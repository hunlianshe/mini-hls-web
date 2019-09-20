"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const zxList_1 = require("../../public/json/zxList");
Page({
    data: {
        dataIndex: 0,
        me: '',
        he: '',
        fortuneData: {
            title: "白羊座：金牛座",
            grade: "友情：★★爱情：★★★婚姻：★★亲情：★★",
            content: "节奏不同是你们天生的问题，一个冲动，一个慢半拍，要把你们放在同一个世界一起生活，看来大家要非常容忍对方，如果不是，很难看到长远。白羊座的人喜欢用强烈的追求攻势去攻陷金牛座的人的心，但金牛座固执求稳的性格，必然会深思熟虑才肯接受追求，中间拉拉扯扯的时候，可能白羊座已经忍不住转身就走。如果真是可以走在一起，大家不妨用双打网球的原理，一个补、一个攻，也许能够创出光明的前途，大前提当然是已经能理解和接受对方的特性。假如金牛座一方是男性，白羊座的女性就要更主动、加大追求力度。白羊座的人还要学习金牛座深思熟虑的处事态度，明白这点，大家都有好处的。性生活方面，金牛喜欢耳鬓撕磨，白羊则速战速决，有时候要学会迁就对方了。"
        },
        xzList: zxList_1.default.data,
    },
    onLoad: function (options) {
        let me = options.me;
        let he = options.he;
        this.setData({
            me,
            he,
        });
        this.getConstellationMmatchingDetail(me, he);
    },
    myPick: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        this.setData({
            me: zxList_1.default.data[e.detail.value].ch,
        });
    },
    otherPick: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        this.setData({
            he: zxList_1.default.data[e.detail.value].ch,
        });
    },
    getConstellationMmatchingDetail(me, he) {
        me = me.replace(/座/, '');
        he = he.replace(/座/, '');
        Api.getConstellationMmatchingDetail(me, he).then((result) => {
            let fortuneData = result.data;
            this.setData({
                fortuneData,
            });
        });
    },
    submit() {
        let { me, he } = this.data;
        this.getConstellationMmatchingDetail(me, he);
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2hYWlJlc3VsdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hdGNoWFpSZXN1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFDakQscURBQThDO0FBRTlDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFNBQVMsRUFBRSxDQUFDO1FBQ1osRUFBRSxFQUFFLEVBQUU7UUFDTixFQUFFLEVBQUUsRUFBRTtRQUNOLFdBQVcsRUFBRTtZQUNYLEtBQUssRUFBRSxTQUFTO1lBQ2hCLEtBQUssRUFBRSx1QkFBdUI7WUFDOUIsT0FBTyxFQUFFLG1UQUFtVDtTQUM3VDtRQUNELE1BQU0sRUFBRSxnQkFBTSxDQUFDLElBQUk7S0FDcEI7SUFFRCxNQUFNLEVBQUUsVUFBVSxPQUFZO1FBQzVCLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osRUFBRTtZQUNGLEVBQUU7U0FDSCxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsK0JBQStCLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxNQUFNLEVBQUUsVUFBVSxDQUFNO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNoRCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osRUFBRSxFQUFFLGdCQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtTQUNuQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUyxFQUFFLFVBQVUsQ0FBTTtRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLEVBQUUsRUFBRSxnQkFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7U0FDbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELCtCQUErQixDQUFDLEVBQVUsRUFBRSxFQUFVO1FBQ3BELEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QixFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekIsR0FBRyxDQUFDLCtCQUErQixDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUMvRCxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzlCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osV0FBVzthQUNaLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLEVBQ0YsRUFBRSxFQUNGLEVBQUUsRUFDSCxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDZCxJQUFJLENBQUMsK0JBQStCLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELFFBQVEsRUFBRTtJQUVWLENBQUM7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQgeHpMaXN0IGZyb20gJy4uLy4uL3B1YmxpYy9qc29uL3p4TGlzdCc7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgZGF0YUluZGV4OiAwLFxuICAgIG1lOiAnJyxcbiAgICBoZTogJycsXG4gICAgZm9ydHVuZURhdGE6IHtcbiAgICAgIHRpdGxlOiBcIueZvee+iuW6p++8mumHkeeJm+W6p1wiLFxuICAgICAgZ3JhZGU6IFwi5Y+L5oOF77ya4piF4piF54ix5oOF77ya4piF4piF4piF5ama5ae777ya4piF4piF5Lqy5oOF77ya4piF4piFXCIsXG4gICAgICBjb250ZW50OiBcIuiKguWlj+S4jeWQjOaYr+S9oOS7rOWkqeeUn+eahOmXrumimO+8jOS4gOS4quWGsuWKqO+8jOS4gOS4quaFouWNiuaLje+8jOimgeaKiuS9oOS7rOaUvuWcqOWQjOS4gOS4quS4lueVjOS4gOi1t+eUn+a0u++8jOeci+adpeWkp+WutuimgemdnuW4uOWuueW/jeWvueaWue+8jOWmguaenOS4jeaYr++8jOW+iOmavueci+WIsOmVv+i/nOOAgueZvee+iuW6p+eahOS6uuWWnOasoueUqOW8uueDiOeahOi/veaxguaUu+WKv+WOu+aUu+mZt+mHkeeJm+W6p+eahOS6uueahOW/g++8jOS9humHkeeJm+W6p+WbuuaJp+axgueos+eahOaAp+agvO+8jOW/heeEtuS8mua3seaAneeGn+iZkeaJjeiCr+aOpeWPl+i/veaxgu+8jOS4remXtOaLieaLieaJr+aJr+eahOaXtuWAme+8jOWPr+iDveeZvee+iuW6p+W3sue7j+W/jeS4jeS9j+i9rOi6q+Wwsei1sOOAguWmguaenOecn+aYr+WPr+S7pei1sOWcqOS4gOi1t++8jOWkp+WutuS4jeWmqOeUqOWPjOaJk+e9keeQg+eahOWOn+eQhu+8jOS4gOS4quihpeOAgeS4gOS4quaUu++8jOS5n+iuuOiDveWkn+WIm+WHuuWFieaYjueahOWJjemAlO+8jOWkp+WJjeaPkOW9k+eEtuaYr+W3sue7j+iDveeQhuino+WSjOaOpeWPl+WvueaWueeahOeJueaAp+OAguWBh+WmgumHkeeJm+W6p+S4gOaWueaYr+eUt+aAp++8jOeZvee+iuW6p+eahOWls+aAp+WwseimgeabtOS4u+WKqOOAgeWKoOWkp+i/veaxguWKm+W6puOAgueZvee+iuW6p+eahOS6uui/mOimgeWtpuS5oOmHkeeJm+W6p+a3seaAneeGn+iZkeeahOWkhOS6i+aAgeW6pu+8jOaYjueZvei/meeCue+8jOWkp+WutumDveacieWlveWkhOeahOOAguaAp+eUn+a0u+aWuemdou+8jOmHkeeJm+WWnOasouiAs+msk+aSleejqO+8jOeZvee+iuWImemAn+aImOmAn+WGs++8jOacieaXtuWAmeimgeWtpuS8mui/geWwseWvueaWueS6huOAglwiXG4gICAgfSxcbiAgICB4ekxpc3Q6IHh6TGlzdC5kYXRhLFxuICB9LFxuXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xuICAgIGxldCBtZSA9IG9wdGlvbnMubWU7XG4gICAgbGV0IGhlID0gb3B0aW9ucy5oZTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIG1lLFxuICAgICAgaGUsXG4gICAgfSlcbiAgICB0aGlzLmdldENvbnN0ZWxsYXRpb25NbWF0Y2hpbmdEZXRhaWwobWUsIGhlKTtcbiAgfSxcblxuICBteVBpY2s6IGZ1bmN0aW9uIChlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygncGlja2Vy5Y+R6YCB6YCJ5oup5pS55Y+Y77yM5pC65bim5YC85Li6JywgZS5kZXRhaWwudmFsdWUpXG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBtZTogeHpMaXN0LmRhdGFbZS5kZXRhaWwudmFsdWVdLmNoLFxuICAgIH0pO1xuICB9LFxuXG4gIG90aGVyUGljazogZnVuY3Rpb24gKGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdwaWNrZXLlj5HpgIHpgInmi6nmlLnlj5jvvIzmkLrluKblgLzkuLonLCBlLmRldGFpbC52YWx1ZSlcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGhlOiB4ekxpc3QuZGF0YVtlLmRldGFpbC52YWx1ZV0uY2gsXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqIOiOt+WPluaYn+W6p+ivpuinoyAqL1xuICBnZXRDb25zdGVsbGF0aW9uTW1hdGNoaW5nRGV0YWlsKG1lOiBzdHJpbmcsIGhlOiBzdHJpbmcpIHtcbiAgICBtZSA9IG1lLnJlcGxhY2UoL+W6py8sICcnKTtcbiAgICBoZSA9IGhlLnJlcGxhY2UoL+W6py8sICcnKTtcbiAgICBBcGkuZ2V0Q29uc3RlbGxhdGlvbk1tYXRjaGluZ0RldGFpbChtZSwgaGUpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICBsZXQgZm9ydHVuZURhdGEgPSByZXN1bHQuZGF0YTtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBmb3J0dW5lRGF0YSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIHN1Ym1pdCgpIHtcbiAgICBsZXQge1xuICAgICAgbWUsXG4gICAgICBoZVxuICAgIH0gPSB0aGlzLmRhdGE7XG4gICAgdGhpcy5nZXRDb25zdGVsbGF0aW9uTW1hdGNoaW5nRGV0YWlsKG1lLCBoZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxufSkiXX0=