"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ageMenuList = {
    "25岁以下": {
        to: 25,
    },
    "25-30岁": {
        from: 25,
        to: 30,
    },
    "30-35岁": {
        from: 30,
        to: 35,
    },
    "35-45岁": {
        from: 35,
        to: 45,
    },
    "45-55岁": {
        from: 45,
        to: 55,
    },
    "55岁以上": {
        from: 55,
    },
};
exports.ageMenuList = ageMenuList;
const heightMenuList = {
    "150以下": {
        to: 150,
    },
    "150-155": {
        from: 150,
        to: 155,
    },
    "155-160": {
        from: 155,
        to: 160,
    },
    "160-165": {
        from: 160,
        to: 165,
    },
    "165-170": {
        from: 165,
        to: 170,
    },
    "170-175": {
        from: 170,
        to: 175,
    },
    "175-180": {
        from: 175,
        to: 180,
    },
    "180-185": {
        from: 180,
        to: 185,
    },
    "185-190": {
        from: 185,
        to: 190,
    },
    "190以上": {
        to: 190
    },
};
exports.heightMenuList = heightMenuList;
const getAgeMenuList = () => {
    return Object.keys(ageMenuList);
};
exports.getAgeMenuList = getAgeMenuList;
const getHeightMenuList = () => {
    return Object.keys(heightMenuList);
};
exports.getHeightMenuList = getHeightMenuList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wTWVudUxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b3BNZW51TGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE1BQU0sV0FBVyxHQUFHO0lBQ2xCLE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFO0tBQ1A7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsRUFBRTtRQUNSLEVBQUUsRUFBRSxFQUFFO0tBQ1A7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsRUFBRTtRQUNSLEVBQUUsRUFBRSxFQUFFO0tBQ1A7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsRUFBRTtRQUNSLEVBQUUsRUFBRSxFQUFFO0tBQ1A7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsRUFBRTtRQUNSLEVBQUUsRUFBRSxFQUFFO0tBQ1A7SUFDRCxPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUsRUFBRTtLQUNUO0NBQ0YsQ0FBQztBQW9ETyxrQ0FBVztBQWpEcEIsTUFBTSxjQUFjLEdBQUc7SUFDckIsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7S0FDUjtJQUNELFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxHQUFHO1FBQ1QsRUFBRSxFQUFFLEdBQUc7S0FDUjtJQUNELFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxHQUFHO1FBQ1QsRUFBRSxFQUFFLEdBQUc7S0FDUjtJQUNELFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxHQUFHO1FBQ1QsRUFBRSxFQUFFLEdBQUc7S0FDUjtJQUNELFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxHQUFHO1FBQ1QsRUFBRSxFQUFFLEdBQUc7S0FDUjtJQUNELFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxHQUFHO1FBQ1QsRUFBRSxFQUFFLEdBQUc7S0FDUjtJQUNELFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxHQUFHO1FBQ1QsRUFBRSxFQUFFLEdBQUc7S0FDUjtJQUNELFNBQVMsRUFBQztRQUNSLElBQUksRUFBRSxHQUFHO1FBQ1QsRUFBRSxFQUFFLEdBQUc7S0FDUjtJQUNELFNBQVMsRUFBQztRQUNSLElBQUksRUFBRSxHQUFHO1FBQ1QsRUFBRSxFQUFFLEdBQUc7S0FDUjtJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO0tBQ1I7Q0FDRixDQUFDO0FBVW9CLHdDQUFjO0FBUnBDLE1BQU0sY0FBYyxHQUFHLEdBQUcsRUFBRTtJQUMxQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFBO0FBTXFDLHdDQUFjO0FBSnBELE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFO0lBQzdCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUE7QUFFcUQsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBhZ2VNZW51TGlzdCA9IHtcbiAgXCIyNeWygeS7peS4i1wiOiB7XG4gICAgdG86IDI1LFxuICB9LFxuICBcIjI1LTMw5bKBXCI6IHtcbiAgICBmcm9tOiAyNSxcbiAgICB0bzogMzAsXG4gIH0sXG4gIFwiMzAtMzXlsoFcIjoge1xuICAgIGZyb206IDMwLFxuICAgIHRvOiAzNSxcbiAgfSxcbiAgXCIzNS00NeWygVwiOiB7XG4gICAgZnJvbTogMzUsXG4gICAgdG86IDQ1LFxuICB9LFxuICBcIjQ1LTU15bKBXCI6IHtcbiAgICBmcm9tOiA0NSxcbiAgICB0bzogNTUsXG4gIH0sXG4gIFwiNTXlsoHku6XkuIpcIjoge1xuICAgIGZyb206IDU1LFxuICB9LFxufTtcblxuXG5jb25zdCBoZWlnaHRNZW51TGlzdCA9IHtcbiAgXCIxNTDku6XkuItcIjoge1xuICAgIHRvOiAxNTAsXG4gIH0sXG4gIFwiMTUwLTE1NVwiOiB7XG4gICAgZnJvbTogMTUwLFxuICAgIHRvOiAxNTUsXG4gIH0sXG4gIFwiMTU1LTE2MFwiOiB7XG4gICAgZnJvbTogMTU1LFxuICAgIHRvOiAxNjAsXG4gIH0sXG4gIFwiMTYwLTE2NVwiOiB7XG4gICAgZnJvbTogMTYwLFxuICAgIHRvOiAxNjUsXG4gIH0sXG4gIFwiMTY1LTE3MFwiOiB7XG4gICAgZnJvbTogMTY1LFxuICAgIHRvOiAxNzAsXG4gIH0sXG4gIFwiMTcwLTE3NVwiOiB7XG4gICAgZnJvbTogMTcwLFxuICAgIHRvOiAxNzUsXG4gIH0sXG4gIFwiMTc1LTE4MFwiOiB7XG4gICAgZnJvbTogMTc1LFxuICAgIHRvOiAxODAsXG4gIH0sXG4gIFwiMTgwLTE4NVwiOntcbiAgICBmcm9tOiAxODAsXG4gICAgdG86IDE4NSxcbiAgfSxcbiAgXCIxODUtMTkwXCI6e1xuICAgIGZyb206IDE4NSxcbiAgICB0bzogMTkwLFxuICB9LFxuICBcIjE5MOS7peS4ilwiOiB7XG4gICAgdG86IDE5MFxuICB9LFxufTtcblxuY29uc3QgZ2V0QWdlTWVudUxpc3QgPSAoKSA9PiB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhhZ2VNZW51TGlzdCk7XG59XG5cbmNvbnN0IGdldEhlaWdodE1lbnVMaXN0ID0gKCkgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMoaGVpZ2h0TWVudUxpc3QpO1xufVxuXG5leHBvcnQgeyBhZ2VNZW51TGlzdCwgaGVpZ2h0TWVudUxpc3QsIGdldEFnZU1lbnVMaXN0LCBnZXRIZWlnaHRNZW51TGlzdCB9OyJdfQ==