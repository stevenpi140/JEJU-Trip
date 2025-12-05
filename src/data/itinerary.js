
export const itinerary = [
    {
        day: 1,
        date: "2025-12-24",
        title: "抵達濟州島",
        hotel: "Bukchon Re:Member (北村 Re:Member)",
        hotelAddress: "Bukchon Buk-gil 58-7, Jocheon-eup, Jeju",
        mapFocus: "Jeju International Airport",
        routeUrl: "https://www.google.com/maps/dir/Jeju+International+Airport/Sisters+Noodles/Bukchon+Re:Member/Odeurang+Bakery",
        activities: [
            {
                time: "14:25",
                name: "台北出發 (TPE)",
                description: "德威航空 TW688 | 經濟艙",
                type: "flight",
                icon: "✈️"
            },
            {
                time: "17:25",
                name: "抵達濟州機場 (CJU)",
                description: "領取租車",
                address: "Jeju International Airport",
                mapLink: "https://goo.gl/maps/JejuAirport",
                type: "flight",
                icon: "🛬"
            },
            {
                time: "18:30",
                name: "姐妹麵條 (자매국수)",
                description: "機場附近的知名豬肉湯麵，完美的抵達第一餐。",
                address: "67 Tapdong-ro, Jeju-si",
                mapLink: "https://goo.gl/maps/JamaeGuksu",
                type: "food",
                icon: "🍜"
            },
            {
                time: "20:00",
                name: "辦理入住: Bukchon Re:Member",
                description: "位於朝天邑的舒適住宿。",
                address: "Bukchon Buk-gil 58-7, Jocheon-eup, Jeju",
                mapLink: "https://goo.gl/maps/BukchonMcMember",
                type: "hotel",
                icon: "🏨"
            },
            {
                time: "21:00",
                name: "Odeurang Bakery (오드랑베이커리)",
                description: "位於咸德海水浴場的深夜麵包店，必吃大蒜長棍麵包。",
                address: "Hamdeok-ri 270-1",
                mapLink: "https://goo.gl/maps/Odeurang",
                type: "cafe",
                icon: "🥖"
            }
        ]
    },
    {
        day: 2,
        date: "2025-12-25",
        title: "東部探索: 自然與史努比",
        hotel: "Bukchon Re:Member",
        hotelAddress: "Bukchon Buk-gil 58-7, Jocheon-eup, Jeju",
        mapFocus: "Snoopy Garden",
        routeUrl: "https://www.google.com/maps/dir/Bukchon+Re:Member/London+Bagel+Museum+Jeju/Snoopy+Garden/Jongdal+Sudatteul/Seongsan+Ilchulbong/Moalboal/Bukchon+Re:Member",
        activities: [
            {
                time: "08:00",
                name: "London Bagel Museum",
                description: "超人氣貝果名店，建議早起排隊！",
                address: "Dongbok-ri, Gujwa-eup",
                mapLink: "https://goo.gl/maps/LondonBagel",
                type: "cafe",
                icon: "🥯"
            },
            {
                time: "10:30",
                name: "史努比庭園 (Snoopy Garden)",
                description: "擁有室內與室外廣大園區的史努比主題公園，拍照聖地。",
                address: "Geumbaekjo-ro 930, Gujwa-eup",
                mapLink: "https://goo.gl/maps/SnoopyGarden",
                type: "spot",
                icon: "🐶"
            },
            {
                time: "13:00",
                name: "Jongdal Sudatteul (종달수다뜰)",
                description: "舊左邑著名的鮑魚飯與烤魚料理。",
                address: "Jongdal-ri, Gujwa-eup",
                mapLink: "https://goo.gl/maps/Jongdal",
                type: "food",
                icon: "🍱"
            },
            {
                time: "15:00",
                name: "城山日出峰 & 涉地可支",
                description: "世界自然遺產與美麗的海岸散步路。",
                address: "Seongsan-eup",
                mapLink: "https://goo.gl/maps/Seongsan",
                type: "spot",
                icon: "⛰️"
            },
            {
                time: "17:30",
                name: "Moalboal Cafe (모알보알)",
                description: "波西米亞風格的海景Lounge咖啡廳。",
                address: "Gujwa-eup",
                mapLink: "https://goo.gl/maps/Moalboal",
                type: "cafe",
                icon: "☕"
            },
            {
                time: "19:30",
                name: "晚餐: 當地生魚片或黑豬肉",
                description: "在舊左邑附近享用新鮮海鮮或烤肉。",
                address: "Gujwa-eup area",
                type: "food",
                icon: "🐟"
            }
        ]
    },
    {
        day: 3,
        date: "2025-12-26",
        title: "往南移動: 山茶花與橘子",
        hotel: "金菊西歸浦海洋飯店 (GoldOne Hotel)",
        hotelAddress: "7 Donghong-ro, Seogwipo-si",
        mapFocus: "Camellia Hill",
        routeUrl: "https://www.google.com/maps/dir/Bukchon+Re:Member/Jeju-e-in+Gamgyulbat/Camellia+Hill/GoldOne+Hotel+Jeju/Seogwipo+Olle+Market",
        activities: [
            {
                time: "10:00",
                name: "退房 & 往南開車",
                description: "離開朝天邑，前往西歸浦。",
                type: "drive",
                icon: "🚗"
            },
            {
                time: "11:00",
                name: "Jejue in Farm (제주에인 감귤밭)",
                description: "在農場體驗採摘橘子並在拍照區留念。",
                address: "Hogeunseoho-ro 20-14, Seogwipo",
                mapLink: "https://goo.gl/maps/Gamgyulbat",
                type: "spot",
                icon: "🍊"
            },
            {
                time: "13:00",
                name: "午餐: 山茶花之丘附近",
                description: "前往下個景點途中享用午餐。",
                type: "food",
                icon: "🍽️"
            },
            {
                time: "14:30",
                name: "山茶花之丘 (Camellia Hill)",
                description: "12月必訪的紅色山茶花庭園。",
                address: "Byeongak-ro 166, Andeok-myeon",
                mapLink: "https://goo.gl/maps/CamelliaHill",
                type: "spot",
                icon: "🌺"
            },
            {
                time: "17:00",
                name: "辦理入住: GoldOne Hotel",
                description: "西歸浦海景飯店。",
                address: "7 Donghong-ro, Seogwipo-si",
                mapLink: "https://goo.gl/maps/GoldOne",
                type: "hotel",
                icon: "🏨"
            },
            {
                time: "18:30",
                name: "每日偶來市場",
                description: "西歸浦最大的傳統市場，必吃漢拿橘果汁與黑豬肉卷。",
                address: "Seogwi-dong",
                mapLink: "https://goo.gl/maps/OlleMarket",
                type: "spot",
                icon: "🍢"
            }
        ]
    },
    {
        day: 4,
        date: "2025-12-27",
        title: "極南與西部: 馬羅島與新住宿",
        hotel: "濟州 Glad Maison 飯店",
        hotelAddress: "80 Noyeon-ro, Jeju-si",
        mapFocus: "Marado",
        routeUrl: "https://www.google.com/maps/dir/GoldOne+Hotel+Jeju/Jeongbang+Waterfall/Unjin+Port/Marado/S+BLEND/Gangchon+Heukdwaeji/Maison+Glad+Jeju",
        activities: [
            {
                time: "09:00",
                name: "正房瀑布",
                description: "亞洲唯一直接落入海中的瀑布。",
                address: "Chilsimni-ro 214beon-gil, Seogwipo",
                mapLink: "https://goo.gl/maps/Jeongbang",
                type: "spot",
                icon: "🌊"
            },
            {
                time: "11:00",
                name: "馬羅島渡輪 (Unjin Port)",
                description: "搭船前往韓國最南端的島嶼。",
                address: "Daejeong-eup",
                mapLink: "https://goo.gl/maps/MaradoFerry",
                type: "spot",
                icon: "⛴️"
            },
            {
                time: "12:30",
                name: "元祖馬羅島海鮮炸醬麵店",
                description: "在馬羅島上吃炸醬麵是傳統！",
                address: "Maragwangwang-gil 47",
                type: "food",
                icon: "🍜"
            },
            {
                time: "15:00",
                name: "S BLEND 動物牧場",
                description: "餵食動物與放鬆的牧場體驗。",
                address: "Andeok-myeon area",
                type: "spot",
                icon: "🐑"
            },
            {
                time: "17:00",
                name: "江村黑豬肉 (Gangchon Heukdwaeji)",
                description: "享用濟州島著名的黑豬肉燒烤。",
                address: "Andeok/Seogwipo area",
                type: "food",
                icon: "🥓"
            },
            {
                time: "20:00",
                name: "辦理入住: Maison Glad Jeju",
                description: "位於濟州市中心的豪華飯店，交通便利。",
                address: "80 Noyeon-ro, Jeju-si",
                mapLink: "https://goo.gl/maps/MaisonGlad",
                type: "hotel",
                icon: "🏨"
            }
        ]
    },
    {
        day: 5,
        date: "2025-12-28",
        title: "西部海岸: 樂園與咖啡",
        hotel: "濟州 Glad Maison 飯店",
        hotelAddress: "80 Noyeon-ro, Jeju-si",
        mapFocus: "9.81 Park",
        routeUrl: "https://www.google.com/maps/dir/Maison+Glad+Jeju/9.81+Park/Noraba/Haribo+Happy+World/Umu/Sammuguksu/Maison+Glad+Jeju",
        activities: [
            {
                time: "10:00",
                name: "9.81 Park",
                description: "重力賽車與室內運動主題公園。",
                address: "Cheondeok-ro 880-24, Aewol-eup",
                mapLink: "https://goo.gl/maps/981Park",
                type: "spot",
                icon: "🏎️"
            },
            {
                time: "13:00",
                name: "Noraba (노라바)",
                description: "涯月海邊的海鮮拉麵。",
                address: "Gubom-gil 100, Aewol-eup",
                mapLink: "https://goo.gl/maps/Noraba",
                type: "food",
                icon: "🍜"
            },
            {
                time: "15:00",
                name: "小熊軟糖歡樂世界 (Haribo)",
                description: "最新開幕的小熊軟糖主題體驗館。",
                address: "Aewol-eup",
                type: "spot",
                icon: "🧸"
            },
            {
                time: "17:00",
                name: "Umu (우무) / Slow Boat",
                description: "著名的布丁或欣賞夕陽的咖啡廳。",
                address: "Hallim / Aewol",
                type: "cafe",
                icon: "🍮"
            },
            {
                time: "19:00",
                name: "三無麵條 (SamMoo)",
                description: "由於住在市區，晚餐享用溫暖的麵條 (或選擇附近餐廳)。",
                address: "Sammu-ro, Jeju-si",
                type: "food",
                icon: "🍜"
            }
        ]
    },
    {
        day: 6,
        date: "2025-12-29",
        title: "市區購物 & 賦歸",
        hotel: "搭機返家",
        mapFocus: "Jeju City",
        routeUrl: "https://www.google.com/maps/dir/Maison+Glad+Jeju/Abebe+Bakery/Chilseong-ro/Jejudang/Shilla+Duty+Free/Jeju+International+Airport",
        activities: [
            {
                time: "10:00",
                name: "Abebe Bakery",
                description: "東門市場附近的知名鮮奶油甜甜圈。",
                address: "Dongmun-ro 6-1",
                type: "food",
                icon: "🍩"
            },
            {
                time: "13:00",
                name: "購物: 七星街 / Classic Stationery",
                description: "購買伴手禮與文具。",
                address: "Chilseong-ro",
                type: "spot",
                icon: "🛍️"
            },
            {
                time: "15:00",
                name: "Jejudang (제주당)",
                description: "大型烘焙咖啡廳，適合最後放鬆。",
                address: "Aewol/City border",
                type: "cafe",
                icon: "☕"
            },
            {
                time: "16:30",
                name: "新羅/樂天免稅店",
                description: "飯店附近的免稅店購物。",
                address: "Noyeon-ro",
                type: "spot",
                icon: "💄"
            },
            {
                time: "20:00",
                name: "抵達機場 (CJU)",
                description: "還車並辦理登機手續。",
                type: "flight",
                icon: "🛫"
            },
            {
                time: "22:15",
                name: "離開濟州",
                description: "真航空 LJ763 前往台北",
                type: "flight",
                icon: "✈️"
            }
        ]
    }
];
