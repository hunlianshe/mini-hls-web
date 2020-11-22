
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
  "180-185":{
      from: 180,
      to: 185,
  },
  "185-190":{
      from: 185,
            to: 190,
        },
        "190以上": {
            to: 190
        },
};

const getAgeMenuList = () => {
    return Object.keys(ageMenuList);
}

const getHeightMenuList = () => {
 return Object.keys(heightMenuList);
}

export { ageMenuList, heightMenuList, getAgeMenuList, getHeightMenuList };