memberList = `
趙禹誠
郭玟妍
李和維
陳姵如
周涵卉
黃奕滔
陳又榛
邱廷翔
吳琦艾
黃柏叡
朱紹瑜
莊海因
吳禹辰
高繹翔
廖郁華
王佩琳
王松億
林俊逸
陳柏儒
李柔萱
黃文鴻
林鼎崴
周若涓
陳亦珊
王辰豪
蕭溥辰
黃思凱
高宗毅
王鼎元
賴柏霖
何昱辰
羅良瑋
陳禹媛
林楷翊
林宏陽
徐薇尹
陳芝妘
王逸庭
陳柏勳
吳謦廷
曾守瑜
陳思伃
陳庭姍
古佳峻
陳智聰
林雨新
林敬傑
楊佩蓉
莊雅嵐
李昱賢
黃之豪
林彥廷
祝國忠
林世昌
陳彥如
林劭軒
劉一凡
潘儒鋒
張博程
李依靜
戴敏育
張淑楨
劉范暉
黃劭安
林軒逸
陳星宇
徐逸然
葉昱呈
謝于屏
陳秋中
陳正乾
林家正
蔡汶成
李柏緯
鍾禮安
楊依璇
朱元均
李信穎
許溥鑫
周祐鈞
Willy Chang張子建
劉啟祥
向仁煊
林柏茵
張晉華
陳品
鄭揚
蘇志文
李航
吳國華
蔡景祥
黃文泰
徐育粮
劉鳳如
孫顯鈞
鄭凱銓
游景麟
謝惠羽
李羽浩
盧慶原
李惟慈
侯宗佑
陳怡蓁
齊安浩
李麗萱
林亭
姜皜
皇甫立翔
林大禾
王心如
華子萱
莊采容
孔令傑
吳玲玲
莊裕澤
陳建錦
陳炳宇
蔡益坤
盧信銘
魏志平
`

var member = memberList.split('\n').filter(Boolean).map(x=>({name:x}))