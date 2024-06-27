
(function () {
var scripts = [{"deps":{"./i18n-plugin/polyglot.min":2,"./i18n-plugin/SpriteFrameSet":5,"./i18n-plugin/LocalizedSprite":3,"./i18n-plugin/LanguageData":4,"./assets/common-plugin/Scripts/Encrypt/CryptoJS":7,"./assets/scripts/Framework/Constant":27,"./assets/common-plugin/Scripts/AdSDK":33,"./assets/common-plugin/Scripts/ListItem":34,"./assets/common-plugin/Scripts/YZ_Constant":42,"./assets/common-plugin/Scripts/md5":56,"./assets/res/effects/BgScroll":58,"./assets/resources/i18n/en":60,"./assets/scripts/Game/gameDate":62,"./assets/scripts/Framework/TweenEffect":63,"./assets/common-plugin/Scripts/CompatibleTool":88,"./assets/common-plugin/Scripts/GameSDK":91,"./assets/common-plugin/Scripts/HandAction":96,"./assets/common-plugin/Scripts/YZ_ActionScale":115,"./assets/common-plugin/Scripts/YZ_LocalStorage":121,"./assets/common-plugin/Scripts/YZ_ShakeNode":125,"./assets/common-plugin/Scripts/AdAgent":134,"./assets/common-plugin/Scripts/YouWanSDK/EventAdInfo":135,"./assets/resources/i18n/zh":139,"./assets/scripts/Framework/QEasing":143,"./assets/scripts/Framework/QTween":144,"./assets/scripts/Framework/ShowDate":147,"./assets/scripts/Framework/StartScene":148,"./assets/scripts/UI/GuideLayer":157,"./assets/scripts/Game/testPoint":158,"./assets/common-plugin/Scripts/UMengSDK/quickGame/uma.min":170,"./i18n-plugin/LocalizedLabel":1,"./assets/common-plugin/Scripts/LuckBoxPannel":6,"./assets/scripts/Framework/DataMgr":8,"./assets/scripts/Game/player":9,"./assets/scripts/UI/UIGamePage":10,"./assets/common-plugin/Scripts/YZ_NativeInsert":11,"./assets/common-plugin/Scripts/YZ_Tool_IOS":12,"./assets/common-plugin/Scripts/YZ_Turntable":13,"./assets/common-plugin/Scripts/YZ_Tool_Xiaomi":14,"./assets/scripts/UI/UIOverPage":15,"./assets/scripts/UI/UITurntablePage":16,"./assets/scripts/UI/UIUpgradePanel":17,"./assets/common-plugin/Scripts/AdAgentKwai":18,"./assets/common-plugin/Scripts/YZ_Tool_Baidu":19,"./assets/common-plugin/Scripts/YZ_Tool_Kwai":20,"./assets/common-plugin/Scripts/YZ_Tool_Native":21,"./assets/common-plugin/Scripts/YZ_Tool_QQ":22,"./assets/common-plugin/Scripts/YZ_Tool_QTT":23,"./assets/common-plugin/Scripts/YZ_Tool_Vivo":24,"./assets/scripts/Framework/CocosZ":28,"./assets/common-plugin/Scripts/AdAgentQQ":29,"./assets/common-plugin/Scripts/AdAgentNative":30,"./assets/common-plugin/Scripts/AdAgentQTT":31,"./assets/common-plugin/Scripts/AdAgentWiFi":32,"./assets/common-plugin/Scripts/OpenRedBagPanel":35,"./assets/common-plugin/Scripts/PlatUtils":36,"./assets/common-plugin/Scripts/RewardBoxPanel":37,"./assets/common-plugin/Scripts/RewardShortCutPanel":38,"./assets/common-plugin/Scripts/WechatTool":39,"./assets/common-plugin/Scripts/ShareRecordPanel":40,"./assets/common-plugin/Scripts/YZ_NativeBanner":41,"./assets/common-plugin/Scripts/YZ_ListView":43,"./assets/common-plugin/Scripts/YZ_NativeItem":44,"./assets/common-plugin/Scripts/YZ_NativeSplashView":45,"./assets/common-plugin/Scripts/YZ_Tool_Douyin":46,"./assets/common-plugin/Scripts/YZ_Tool_Broswer":47,"./assets/common-plugin/Scripts/YZ_Tool_HuaWei":48,"./assets/common-plugin/Scripts/YZ_Tool_Cocosplay":49,"./assets/common-plugin/Scripts/YZ_Tool_FaceBook":50,"./assets/common-plugin/Scripts/YZ_Tool_Hago":51,"./assets/common-plugin/Scripts/YZ_Tool_UC":52,"./assets/common-plugin/Scripts/YZ_Tool_Wifi":53,"./assets/common-plugin/Scripts/YzRealNameAuthPanel":54,"./assets/common-plugin/Scripts/YzUserPrivacyPanel":55,"./assets/common-plugin/Scripts/FaceBookSdk/FBAdManager":25,"./assets/common-plugin/Scripts/YouWanSDK/YouWanAnalytics":26,"./assets/scripts/Framework/GameMgr":57,"./assets/scripts/Framework/ResMgr":59,"./assets/scripts/Game/ZombieBase":61,"./assets/scripts/Game/person":64,"./assets/scripts/Game/ani":65,"./assets/scripts/Game/bullet":66,"./assets/scripts/Game/weapon":67,"./assets/scripts/UI/UIPausePanel":68,"./assets/scripts/UI/UIRevivePanel":69,"./assets/scripts/UI/UISignPage":70,"./assets/scripts/UI/UITimePage":71,"./assets/scripts/UI/UITrySkinPanel":72,"./assets/scripts/UI/UIWeaponLevelPanel":73,"./assets/common-plugin/Scripts/AdAgentBaidu":74,"./assets/common-plugin/Scripts/AdAgentDouyin":75,"./assets/common-plugin/Scripts/AdAgentBroser":76,"./assets/common-plugin/Scripts/AdAgentXiaomi":77,"./assets/scripts/Game/gameMgr":78,"./assets/common-plugin/Scripts/AdManager":79,"./assets/common-plugin/Scripts/AdAgentWechat":80,"./assets/common-plugin/Scripts/AdAgentGoogleWeb":81,"./assets/common-plugin/Scripts/AdAgentHago":82,"./assets/common-plugin/Scripts/AdAgentIOS":83,"./assets/common-plugin/Scripts/AdAgentUC":84,"./assets/common-plugin/Scripts/BeforGameOverRecGamesPanel":85,"./assets/common-plugin/Scripts/AldUtils":86,"./assets/common-plugin/Scripts/CheckIsShowIcon":87,"./assets/common-plugin/Scripts/GameBox":89,"./assets/common-plugin/Scripts/GameBoxListItem":90,"./assets/common-plugin/Scripts/GameBoxListGameItem":92,"./assets/common-plugin/Scripts/GameItem":93,"./assets/common-plugin/Scripts/GameBoxSlideItem":94,"./assets/common-plugin/Scripts/GamePage":95,"./assets/common-plugin/Scripts/LogOutView":97,"./assets/common-plugin/Scripts/MoreGamesPanel":98,"./assets/common-plugin/Scripts/MoreGamesPanel1":99,"./assets/common-plugin/Scripts/MoreGamesWidget":100,"./assets/common-plugin/Scripts/NativeTryGamesWidget":101,"./assets/common-plugin/Scripts/NativeTryGameNode":102,"./assets/common-plugin/Scripts/QCrossWidget6":103,"./assets/common-plugin/Scripts/QCrossWidgetItem":104,"./assets/common-plugin/Scripts/RecommendGamesNode":105,"./assets/common-plugin/Scripts/RecommendGamesWidget":106,"./assets/common-plugin/Scripts/RedBagProgressNode":107,"./assets/common-plugin/Scripts/RedBagProgressWidget":108,"./assets/common-plugin/Scripts/RewardInsert":109,"./assets/common-plugin/Scripts/RewardRedBagPanel":110,"./assets/common-plugin/Scripts/TryGameNode":111,"./assets/common-plugin/Scripts/VerticalRecommentPanel":112,"./assets/common-plugin/Scripts/TryGamesWidget":113,"./assets/common-plugin/Scripts/WithdrawalNode":114,"./assets/common-plugin/Scripts/WithdrawalPanel":116,"./assets/common-plugin/Scripts/YZ_BaiduRecommendWidget":117,"./assets/common-plugin/Scripts/WithdrawalWidget":118,"./assets/common-plugin/Scripts/YZ_EventManager":119,"./assets/common-plugin/Scripts/YZ_GameExitDialog":120,"./assets/common-plugin/Scripts/YZ_NativeAdObject":122,"./assets/common-plugin/Scripts/YZ_RecommendGamesBanner":123,"./assets/common-plugin/Scripts/YZ_RecordWidget":124,"./assets/common-plugin/Scripts/YZ_StatementRecommentAd":126,"./assets/common-plugin/Scripts/YZ_ShortcutWidget":127,"./assets/common-plugin/Scripts/YZ_Tool_Bili":128,"./assets/common-plugin/Scripts/YZ_Tool_4399":129,"./assets/common-plugin/Scripts/YZ_Tool_GoogleWeb":130,"./assets/common-plugin/Scripts/YzCustomAdPanel":131,"./assets/common-plugin/Scripts/YzLoginPanel":132,"./assets/common-plugin/Scripts/AdAgent4399":136,"./assets/scripts/Framework/FlyCoin":137,"./assets/scripts/Framework/GameCtr":138,"./assets/scripts/Framework/Msg":140,"./assets/scripts/Framework/QMoveAction":141,"./assets/scripts/Framework/QRotation":142,"./assets/scripts/Framework/QScaleAction":146,"./assets/scripts/Framework/SceneMgr":145,"./assets/scripts/Framework/UIMgr":149,"./assets/scripts/Framework/UIPage":150,"./assets/scripts/Framework/AudioMgr":151,"./assets/scripts/Game/UpgradeMgr":152,"./assets/scripts/Game/jingyan":153,"./assets/scripts/Game/mb":154,"./assets/scripts/Game/setMap":155,"./assets/scripts/Game/showEffect":156,"./assets/scripts/UI/ShareOrVideo":159,"./assets/scripts/UI/UIGameLoadingPage":160,"./assets/scripts/UI/UIADPanel":161,"./assets/scripts/UI/UILoadingPage":162,"./assets/scripts/UI/redPoint":163,"./assets/common-plugin/Scripts/AdAgentBili":164,"./assets/scripts/UI/CoinBord":165,"./assets/common-plugin/Scripts/AdAgentCocosplay":166,"./assets/common-plugin/Scripts/AdAgentFaceBook":167,"./assets/common-plugin/Scripts/YZ_Tool_Oppo":168,"./assets/common-plugin/Scripts/FaceBookSdk/FBSdk":133,"./assets/scripts/UI/UIHomePage":169,"./assets/common-plugin/Scripts/AdAgentVIVO":171,"./assets/common-plugin/Scripts/List":172,"./assets/common-plugin/Scripts/AdAgentHuaWei":173,"./assets/common-plugin/Scripts/CommonConfig":174,"./assets/common-plugin/Scripts/AdAgentOPPO":175,"./assets/common-plugin/Scripts/Utils":176},"path":"preview-scripts/__qc_index__.js"},{"deps":{"LanguageData":4},"path":"preview-scripts/i18n-plugin/LocalizedLabel.js"},{"deps":{},"path":"preview-scripts/i18n-plugin/polyglot.min.js"},{"deps":{"SpriteFrameSet":5},"path":"preview-scripts/i18n-plugin/LocalizedSprite.js"},{"deps":{"polyglot.min":2},"path":"preview-scripts/i18n-plugin/LanguageData.js"},{"deps":{},"path":"preview-scripts/i18n-plugin/SpriteFrameSet.js"},{"deps":{"./Utils":176,"./YZ_Constant":42,"./AldUtils":86,"./PlatUtils":36},"path":"preview-scripts/assets/common-plugin/Scripts/LuckBoxPannel.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/Encrypt/CryptoJS.js"},{"deps":{"../Game/weapon":67,"./Constant":27},"path":"preview-scripts/assets/scripts/Framework/DataMgr.js"},{"deps":{"LanguageData":4,"../Framework/CocosZ":28,"../Framework/Constant":27,"./bullet":66,"./gameDate":62,"./gameMgr":78,"./UpgradeMgr":152,"./person":64,"./weapon":67},"path":"preview-scripts/assets/scripts/Game/player.js"},{"deps":{"LanguageData":4,"../Framework/UIPage":150,"../Framework/Constant":27,"../Framework/CocosZ":28,"../../common-plugin/Scripts/PlatUtils":36,"../../common-plugin/Scripts/Utils":176,"../../common-plugin/Scripts/YZ_Constant":42,"../Game/gameMgr":78},"path":"preview-scripts/assets/scripts/UI/UIGamePage.js"},{"deps":{"./PlatUtils":36,"./Utils":176,"./CompatibleTool":88,"./YZ_Constant":42,"./YouWanSDK/EventAdInfo":135,"./YouWanSDK/YouWanAnalytics":26},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_NativeInsert.js"},{"deps":{"./PlatUtils":36,"./Utils":176,"./YZ_Constant":42,"./YZ_LocalStorage":121},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_IOS.js"},{"deps":{"./Utils":176,"./YZ_Constant":42,"./CompatibleTool":88,"./YZ_LocalStorage":121},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Turntable.js"},{"deps":{"./PlatUtils":36,"./Utils":176,"./YZ_Constant":42,"./YZ_LocalStorage":121},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Xiaomi.js"},{"deps":{"LanguageData":4,"../Framework/UIPage":150,"../Framework/Constant":27,"../Framework/CocosZ":28,"../../common-plugin/Scripts/PlatUtils":36,"../../common-plugin/Scripts/Utils":176,"../../common-plugin/Scripts/YZ_Constant":42,"../Game/gameMgr":78,"../Game/UpgradeMgr":152},"path":"preview-scripts/assets/scripts/UI/UIOverPage.js"},{"deps":{"LanguageData":4,"../../common-plugin/Scripts/Utils":176,"../Framework/CocosZ":28,"../Framework/Constant":27,"../Framework/Msg":140,"../Framework/UIPage":150,"../Game/gameDate":62,"../Game/weapon":67},"path":"preview-scripts/assets/scripts/UI/UITurntablePage.js"},{"deps":{"../Framework/UIPage":150,"../Framework/Constant":27,"../Framework/CocosZ":28,"../../common-plugin/Scripts/Utils":176,"../Framework/TweenEffect":63,"../Game/UpgradeMgr":152,"../../common-plugin/Scripts/PlatUtils":36,"../Game/gameMgr":78},"path":"preview-scripts/assets/scripts/UI/UIUpgradePanel.js"},{"deps":{"./AdAgent":134,"./YZ_Constant":42,"./PlatUtils":36,"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentKwai.js"},{"deps":{"./PlatUtils":36,"./Utils":176,"./YZ_Constant":42,"./YZ_LocalStorage":121},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Baidu.js"},{"deps":{"./PlatUtils":36,"./Utils":176,"./YZ_Constant":42,"./YZ_LocalStorage":121},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Kwai.js"},{"deps":{"./PlatUtils":36,"./Utils":176,"./YZ_Constant":42,"./YZ_LocalStorage":121},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Native.js"},{"deps":{"./PlatUtils":36,"./Utils":176,"./YZ_Constant":42,"./YZ_LocalStorage":121},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_QQ.js"},{"deps":{"./md5.js":56,"./PlatUtils":36,"./Utils":176,"./YZ_Constant":42,"./YZ_LocalStorage":121},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_QTT.js"},{"deps":{"./UMengSDK/quickGame/uma.min.js":170,"./PlatUtils":36,"./Utils":176,"./YZ_Constant":42,"./YZ_LocalStorage":121},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Vivo.js"},{"deps":{"../Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/FaceBookSdk/FBAdManager.js"},{"deps":{"../PlatUtils":36,"../Utils":176,"../YZ_Constant":42,"../YZ_LocalStorage":121,"./EventAdInfo":135},"path":"preview-scripts/assets/common-plugin/Scripts/YouWanSDK/YouWanAnalytics.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/Constant.js"},{"deps":{"LanguageData":4,"./GameMgr":57,"./DataMgr":8,"./UIMgr":149,"./ResMgr":59,"./Constant":27,"./SceneMgr":145,"./AudioMgr":151,"../../common-plugin/Scripts/Utils":176,"./Msg":140,"../../common-plugin/Scripts/PlatUtils":36},"path":"preview-scripts/assets/scripts/Framework/CocosZ.js"},{"deps":{"./AdAgent":134,"./YZ_Constant":42,"./PlatUtils":36,"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentQQ.js"},{"deps":{"./AdAgent":134,"./YZ_Constant":42,"./PlatUtils":36,"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentNative.js"},{"deps":{"./AdAgent":134,"./YZ_Constant":42,"./PlatUtils":36,"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentQTT.js"},{"deps":{"./AdAgent":134,"./YZ_Constant":42,"./PlatUtils":36,"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentWiFi.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/AdSDK.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/ListItem.js"},{"deps":{"./Utils":176,"./YZ_Constant":42,"./PlatUtils":36},"path":"preview-scripts/assets/common-plugin/Scripts/OpenRedBagPanel.js"},{"deps":{"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/PlatUtils.js"},{"deps":{"./Utils":176,"./YZ_Constant":42,"./AldUtils":86,"./PlatUtils":36,"./YZ_LocalStorage":121},"path":"preview-scripts/assets/common-plugin/Scripts/RewardBoxPanel.js"},{"deps":{"./Utils":176,"./YZ_Constant":42,"./PlatUtils":36},"path":"preview-scripts/assets/common-plugin/Scripts/RewardShortCutPanel.js"},{"deps":{"./PlatUtils":36,"./Utils":176,"./YZ_Constant":42,"./YZ_LocalStorage":121},"path":"preview-scripts/assets/common-plugin/Scripts/WechatTool.js"},{"deps":{"./Utils":176,"./YZ_Constant":42,"./PlatUtils":36,"./CompatibleTool":88},"path":"preview-scripts/assets/common-plugin/Scripts/ShareRecordPanel.js"},{"deps":{"./PlatUtils":36,"./Utils":176,"./YZ_Constant":42,"./CompatibleTool":88,"./YouWanSDK/EventAdInfo":135,"./YouWanSDK/YouWanAnalytics":26},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_NativeBanner.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Constant.js"},{"deps":{"./YZ_Constant":42,"./CompatibleTool":88},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_ListView.js"},{"deps":{"./PlatUtils":36,"./Utils":176,"./YZ_Constant":42,"./CompatibleTool":88},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_NativeItem.js"},{"deps":{"./CompatibleTool":88,"./PlatUtils":36,"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_NativeSplashView.js"},{"deps":{"./PlatUtils":36,"./Utils":176,"./YZ_Constant":42,"./YZ_LocalStorage":121},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Douyin.js"},{"deps":{"./PlatUtils":36,"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Broswer.js"},{"deps":{"./UMengSDK/quickGame/uma.min.js":170,"./PlatUtils":36,"./Utils":176,"./YZ_Constant":42,"./YZ_LocalStorage":121},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_HuaWei.js"},{"deps":{"./PlatUtils":36,"./Utils":176,"./YZ_Constant":42,"./YZ_LocalStorage":121},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Cocosplay.js"},{"deps":{"./PlatUtils":36,"./Utils":176,"./YZ_Constant":42,"./YZ_LocalStorage":121},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_FaceBook.js"},{"deps":{"./PlatUtils":36,"./Utils":176,"./YZ_Constant":42,"./YZ_LocalStorage":121},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Hago.js"},{"deps":{"./PlatUtils":36,"./Utils":176,"./YZ_Constant":42,"./YZ_LocalStorage":121},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_UC.js"},{"deps":{"./PlatUtils":36,"./Utils":176,"./YZ_Constant":42,"./YZ_LocalStorage":121},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Wifi.js"},{"deps":{"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/YzRealNameAuthPanel.js"},{"deps":{"./CompatibleTool":88,"./PlatUtils":36,"./Utils":176,"./YZ_Constant":42,"./YZ_LocalStorage":121},"path":"preview-scripts/assets/common-plugin/Scripts/YzUserPrivacyPanel.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/md5.js"},{"deps":{"LanguageData":4,"./GameCtr":138,"./CocosZ":28,"./Constant":27,"./Msg":140,"../../common-plugin/Scripts/Utils":176,"../../common-plugin/Scripts/YZ_Constant":42,"../../common-plugin/Scripts/YZ_LocalStorage":121},"path":"preview-scripts/assets/scripts/Framework/GameMgr.js"},{"deps":{},"path":"preview-scripts/assets/res/effects/BgScroll.js"},{"deps":{"./CocosZ":28},"path":"preview-scripts/assets/scripts/Framework/ResMgr.js"},{"deps":{},"path":"preview-scripts/assets/resources/i18n/en.js"},{"deps":{"../../common-plugin/Scripts/PlatUtils":36,"../Framework/CocosZ":28,"../Framework/Constant":27,"../Game/gameDate":62,"../Game/gameMgr":78,"../Game/person":64,"../Game/UpgradeMgr":152,"./bullet":66},"path":"preview-scripts/assets/scripts/Game/ZombieBase.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Game/gameDate.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/TweenEffect.js"},{"deps":{"LanguageData":4,"../../common-plugin/Scripts/PlatUtils":36,"../Framework/CocosZ":28,"../Framework/Constant":27,"./gameDate":62,"./gameMgr":78,"./weapon":67},"path":"preview-scripts/assets/scripts/Game/person.js"},{"deps":{"../Framework/CocosZ":28,"./gameDate":62,"./weapon":67},"path":"preview-scripts/assets/scripts/Game/ani.js"},{"deps":{"../Framework/CocosZ":28,"../Framework/Constant":27,"./gameMgr":78,"./person":64},"path":"preview-scripts/assets/scripts/Game/bullet.js"},{"deps":{"LanguageData":4,"../Framework/CocosZ":28,"../Framework/Constant":27,"../Framework/Msg":140,"./gameDate":62,"./gameMgr":78},"path":"preview-scripts/assets/scripts/Game/weapon.js"},{"deps":{"../../common-plugin/Scripts/PlatUtils":36,"../../common-plugin/Scripts/Utils":176,"../../common-plugin/Scripts/YZ_Constant":42,"../Framework/CocosZ":28,"../Framework/Constant":27,"../Framework/TweenEffect":63,"../Framework/UIPage":150,"../Game/gameMgr":78,"../Game/UpgradeMgr":152},"path":"preview-scripts/assets/scripts/UI/UIPausePanel.js"},{"deps":{"LanguageData":4,"../Framework/UIPage":150,"../Framework/Msg":140,"../Framework/Constant":27,"../Framework/CocosZ":28,"../../common-plugin/Scripts/Utils":176,"../Game/gameMgr":78},"path":"preview-scripts/assets/scripts/UI/UIRevivePanel.js"},{"deps":{"LanguageData":4,"../Framework/UIPage":150,"../Framework/Constant":27,"../Framework/CocosZ":28,"../../common-plugin/Scripts/Utils":176,"../Framework/TweenEffect":63,"../Framework/Msg":140},"path":"preview-scripts/assets/scripts/UI/UISignPage.js"},{"deps":{"../Framework/UIPage":150,"../Framework/Constant":27,"../Framework/CocosZ":28,"../../common-plugin/Scripts/Utils":176,"../Framework/TweenEffect":63,"../Game/gameDate":62},"path":"preview-scripts/assets/scripts/UI/UITimePage.js"},{"deps":{"../../common-plugin/Scripts/Utils":176,"../Framework/CocosZ":28,"../Framework/Constant":27,"../Framework/UIPage":150,"../Game/ani":65},"path":"preview-scripts/assets/scripts/UI/UITrySkinPanel.js"},{"deps":{"LanguageData":4,"../../common-plugin/Scripts/Utils":176,"../Framework/CocosZ":28,"../Framework/Constant":27,"../Framework/Msg":140,"../Framework/UIPage":150,"../Game/gameDate":62,"../Game/weapon":67},"path":"preview-scripts/assets/scripts/UI/UIWeaponLevelPanel.js"},{"deps":{"./AdAgent":134,"./YZ_Constant":42,"./PlatUtils":36,"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentBaidu.js"},{"deps":{"./AdAgent":134,"./YZ_Constant":42,"./PlatUtils":36,"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentDouyin.js"},{"deps":{"./AdAgent":134,"./YZ_NativeBanner":41,"./YZ_NativeInsert":11,"./YZ_Constant":42,"./CommonConfig":174,"./Utils":176,"./YZ_NativeAdObject":122},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentBroser.js"},{"deps":{"./AdAgent":134,"./YZ_Constant":42,"./PlatUtils":36,"./Utils":176,"./CompatibleTool":88},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentXiaomi.js"},{"deps":{"../Framework/CocosZ":28,"../../common-plugin/Scripts/Utils":176,"../Framework/Constant":27,"./UpgradeMgr":152,"../../common-plugin/Scripts/YZ_Constant":42,"./ZombieBase":61},"path":"preview-scripts/assets/scripts/Game/gameMgr.js"},{"deps":{"./PlatUtils":36,"./AdAgentNative":30,"./AdAgentWechat":80,"./AdAgentOPPO":175,"./AdAgentVIVO":171,"./AdAgentBaidu":74,"./AdAgentDouyin":75,"./YZ_Constant":42,"./AdAgentQQ":29,"./AdAgentQTT":31,"./Utils":176,"./AdAgentXiaomi":77,"./AdAgent4399":136,"./AdAgentIOS":83,"./AdAgentCocosplay":166,"./AdAgentUC":84,"./AdAgentBili":164,"./AdAgentKwai":18,"./AdAgentBroser":76,"./BeforGameOverRecGamesPanel":85,"./AdAgentWiFi":32,"./AdAgentHago":82,"./AdAgentHuaWei":173,"./AdAgentFaceBook":167,"./YzCustomAdPanel":131,"./AdAgentGoogleWeb":81},"path":"preview-scripts/assets/common-plugin/Scripts/AdManager.js"},{"deps":{"./AdAgent":134,"./YZ_Constant":42,"./PlatUtils":36,"./Utils":176,"./CompatibleTool":88},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentWechat.js"},{"deps":{"./AdAgent":134},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentGoogleWeb.js"},{"deps":{"./AdAgent":134,"./YZ_Constant":42,"./PlatUtils":36,"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentHago.js"},{"deps":{"./AdAgent":134,"./YZ_Constant":42,"./PlatUtils":36,"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentIOS.js"},{"deps":{"./AdAgent":134,"./PlatUtils":36,"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentUC.js"},{"deps":{"./Utils":176,"./YZ_Constant":42,"./PlatUtils":36},"path":"preview-scripts/assets/common-plugin/Scripts/BeforGameOverRecGamesPanel.js"},{"deps":{"./YZ_Constant":42,"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/AldUtils.js"},{"deps":{"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/CheckIsShowIcon.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/CompatibleTool.js"},{"deps":{"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/GameBox.js"},{"deps":{"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/GameBoxListItem.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/GameSDK.js"},{"deps":{"./Utils":176,"./PlatUtils":36,"./CompatibleTool":88},"path":"preview-scripts/assets/common-plugin/Scripts/GameBoxListGameItem.js"},{"deps":{"./Utils":176,"./PlatUtils":36,"./YZ_Constant":42,"./CompatibleTool":88},"path":"preview-scripts/assets/common-plugin/Scripts/GameItem.js"},{"deps":{"./Utils":176,"./PlatUtils":36,"./CompatibleTool":88},"path":"preview-scripts/assets/common-plugin/Scripts/GameBoxSlideItem.js"},{"deps":{"./YZ_Constant":42},"path":"preview-scripts/assets/common-plugin/Scripts/GamePage.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/HandAction.js"},{"deps":{"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/LogOutView.js"},{"deps":{"./Utils":176,"./YZ_Constant":42,"./PlatUtils":36},"path":"preview-scripts/assets/common-plugin/Scripts/MoreGamesPanel.js"},{"deps":{"./GameItem":93,"./YZ_Constant":42,"./Utils":176,"./List":172},"path":"preview-scripts/assets/common-plugin/Scripts/MoreGamesPanel1.js"},{"deps":{"./Utils":176,"./PlatUtils":36,"./AldUtils":86,"./CompatibleTool":88,"./YZ_Constant":42},"path":"preview-scripts/assets/common-plugin/Scripts/MoreGamesWidget.js"},{"deps":{"./Utils":176,"./PlatUtils":36},"path":"preview-scripts/assets/common-plugin/Scripts/NativeTryGamesWidget.js"},{"deps":{"./Utils":176,"./PlatUtils":36,"./NativeTryGamesWidget":101,"./CompatibleTool":88},"path":"preview-scripts/assets/common-plugin/Scripts/NativeTryGameNode.js"},{"deps":{"./Utils":176,"./AldUtils":86,"./YZ_Constant":42},"path":"preview-scripts/assets/common-plugin/Scripts/QCrossWidget6.js"},{"deps":{"./Utils":176,"./PlatUtils":36,"./YZ_Constant":42,"./CompatibleTool":88},"path":"preview-scripts/assets/common-plugin/Scripts/QCrossWidgetItem.js"},{"deps":{"./Utils":176,"./YZ_Constant":42,"./PlatUtils":36},"path":"preview-scripts/assets/common-plugin/Scripts/RecommendGamesNode.js"},{"deps":{"./Utils":176,"./PlatUtils":36},"path":"preview-scripts/assets/common-plugin/Scripts/RecommendGamesWidget.js"},{"deps":{"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/RedBagProgressNode.js"},{"deps":{"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/RedBagProgressWidget.js"},{"deps":{"./Utils":176,"./AldUtils":86,"./YZ_Constant":42},"path":"preview-scripts/assets/common-plugin/Scripts/RewardInsert.js"},{"deps":{"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/RewardRedBagPanel.js"},{"deps":{"./Utils":176,"./YZ_Constant":42,"./PlatUtils":36,"./CompatibleTool":88},"path":"preview-scripts/assets/common-plugin/Scripts/TryGameNode.js"},{"deps":{"./Utils":176,"./YZ_Constant":42,"./PlatUtils":36,"./CompatibleTool":88},"path":"preview-scripts/assets/common-plugin/Scripts/VerticalRecommentPanel.js"},{"deps":{"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/TryGamesWidget.js"},{"deps":{"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/WithdrawalNode.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_ActionScale.js"},{"deps":{"./Utils":176,"./YZ_Constant":42},"path":"preview-scripts/assets/common-plugin/Scripts/WithdrawalPanel.js"},{"deps":{"./PlatUtils":36,"./Utils":176,"./CompatibleTool":88},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_BaiduRecommendWidget.js"},{"deps":{"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/WithdrawalWidget.js"},{"deps":{"./YZ_Constant":42},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_EventManager.js"},{"deps":{"./Utils":176,"./YZ_Constant":42},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_GameExitDialog.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_LocalStorage.js"},{"deps":{"./PlatUtils":36,"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_NativeAdObject.js"},{"deps":{"./Utils":176,"./PlatUtils":36,"./YZ_Constant":42},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_RecommendGamesBanner.js"},{"deps":{"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_RecordWidget.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_ShakeNode.js"},{"deps":{"./Utils":176,"./AldUtils":86,"./YZ_Constant":42,"./List":172},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_StatementRecommentAd.js"},{"deps":{"./Utils":176,"./CompatibleTool":88},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_ShortcutWidget.js"},{"deps":{"./PlatUtils":36,"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Bili.js"},{"deps":{"./PlatUtils":36,"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_4399.js"},{"deps":{"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_GoogleWeb.js"},{"deps":{"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/YzCustomAdPanel.js"},{"deps":{"./Utils":176,"./YZ_Constant":42},"path":"preview-scripts/assets/common-plugin/Scripts/YzLoginPanel.js"},{"deps":{"./FBAdManager":25},"path":"preview-scripts/assets/common-plugin/Scripts/FaceBookSdk/FBSdk.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgent.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/YouWanSDK/EventAdInfo.js"},{"deps":{"./AdAgent":134,"./PlatUtils":36,"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgent4399.js"},{"deps":{"./CocosZ":28},"path":"preview-scripts/assets/scripts/Framework/FlyCoin.js"},{"deps":{"./Constant":27,"./CocosZ":28,"../Game/gameMgr":78},"path":"preview-scripts/assets/scripts/Framework/GameCtr.js"},{"deps":{},"path":"preview-scripts/assets/resources/i18n/zh.js"},{"deps":{"./CocosZ":28},"path":"preview-scripts/assets/scripts/Framework/Msg.js"},{"deps":{"./QEasing":143},"path":"preview-scripts/assets/scripts/Framework/QMoveAction.js"},{"deps":{"./QEasing":143},"path":"preview-scripts/assets/scripts/Framework/QRotation.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/QEasing.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/QTween.js"},{"deps":{"../Game/gameMgr":78,"../UI/GuideLayer":157,"./CocosZ":28,"../Game/setMap":155},"path":"preview-scripts/assets/scripts/Framework/SceneMgr.js"},{"deps":{"./QEasing":143},"path":"preview-scripts/assets/scripts/Framework/QScaleAction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/ShowDate.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/StartScene.js"},{"deps":{"./Constant":27,"../UI/UILoadingPage":162,"../UI/UIHomePage":169,"../UI/UIGamePage":10,"../UI/UIRevivePanel":69,"../UI/UIGameLoadingPage":160,"../UI/UIPausePanel":68,"../UI/UITurntablePage":16,"../UI/UITrySkinPanel":72,"../UI/UIWeaponLevelPanel":73,"../UI/UIUpgradePanel":17,"../UI/UIOverPage":15,"../UI/UISignPage":70,"../UI/UITimePage":71},"path":"preview-scripts/assets/scripts/Framework/UIMgr.js"},{"deps":{"../../common-plugin/Scripts/Utils":176,"./CocosZ":28,"./UIMgr":149},"path":"preview-scripts/assets/scripts/Framework/UIPage.js"},{"deps":{"./CocosZ":28},"path":"preview-scripts/assets/scripts/Framework/AudioMgr.js"},{"deps":{"../Framework/CocosZ":28,"../Framework/Constant":27,"./bullet":66,"./gameMgr":78,"./jingyan":153,"./ZombieBase":61},"path":"preview-scripts/assets/scripts/Game/UpgradeMgr.js"},{"deps":{"../../common-plugin/Scripts/YZ_Constant":42,"../Framework/CocosZ":28,"../Framework/Constant":27,"./gameMgr":78,"./UpgradeMgr":152},"path":"preview-scripts/assets/scripts/Game/jingyan.js"},{"deps":{"../Framework/CocosZ":28,"../Framework/Constant":27,"./gameMgr":78},"path":"preview-scripts/assets/scripts/Game/mb.js"},{"deps":{"../Framework/CocosZ":28,"./gameMgr":78},"path":"preview-scripts/assets/scripts/Game/setMap.js"},{"deps":{"./gameMgr":78},"path":"preview-scripts/assets/scripts/Game/showEffect.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UI/GuideLayer.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Game/testPoint.js"},{"deps":{"../Framework/CocosZ":28,"../Framework/Constant":27},"path":"preview-scripts/assets/scripts/UI/ShareOrVideo.js"},{"deps":{"../Framework/UIPage":150,"../Framework/Constant":27,"../Framework/CocosZ":28,"./GuideLayer":157},"path":"preview-scripts/assets/scripts/UI/UIGameLoadingPage.js"},{"deps":{"LanguageData":4,"../../common-plugin/Scripts/Utils":176,"../Framework/CocosZ":28,"../Framework/Msg":140},"path":"preview-scripts/assets/scripts/UI/UIADPanel.js"},{"deps":{"../Framework/UIPage":150,"../Framework/Constant":27,"../Framework/CocosZ":28,"../../common-plugin/Scripts/PlatUtils":36},"path":"preview-scripts/assets/scripts/UI/UILoadingPage.js"},{"deps":{"../Framework/CocosZ":28,"../Framework/Constant":27,"../Game/gameDate":62},"path":"preview-scripts/assets/scripts/UI/redPoint.js"},{"deps":{"./AdAgent":134,"./YZ_Constant":42,"./PlatUtils":36,"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentBili.js"},{"deps":{"LanguageData":4,"../Framework/Constant":27,"../Framework/CocosZ":28,"../Framework/Msg":140},"path":"preview-scripts/assets/scripts/UI/CoinBord.js"},{"deps":{"./AdAgent":134,"./Utils":176},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentCocosplay.js"},{"deps":{"./AdAgent":134,"./YZ_Constant":42,"./PlatUtils":36,"./Utils":176,"./FaceBookSdk/FBAdManager":25},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentFaceBook.js"},{"deps":{"./UMengSDK/quickGame/uma.min.js":170,"./PlatUtils":36,"./Utils":176,"./YouWanSDK/YouWanAnalytics":26,"./YZ_Constant":42,"./YZ_LocalStorage":121},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Oppo.js"},{"deps":{"LanguageData":4,"../Framework/UIPage":150,"../Framework/Constant":27,"../Framework/CocosZ":28,"../../common-plugin/Scripts/Utils":176,"../../common-plugin/Scripts/YZ_Constant":42,"../Game/ani":65,"../../common-plugin/Scripts/PlatUtils":36,"../Framework/FlyCoin":137,"../Game/gameDate":62,"../Game/weapon":67,"../Framework/Msg":140},"path":"preview-scripts/assets/scripts/UI/UIHomePage.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/UMengSDK/quickGame/uma.min.js"},{"deps":{"./AdAgent":134,"./YZ_Constant":42,"./PlatUtils":36,"./Utils":176,"./NativeTryGamesWidget":101,"./CompatibleTool":88,"./YZ_NativeAdObject":122},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentVIVO.js"},{"deps":{"./ListItem":34,"./CompatibleTool":88},"path":"preview-scripts/assets/common-plugin/Scripts/List.js"},{"deps":{"./AdAgent":134,"./YZ_Constant":42,"./PlatUtils":36,"./Utils":176,"./YZ_NativeAdObject":122,"./NativeTryGamesWidget":101,"./CompatibleTool":88},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentHuaWei.js"},{"deps":{"./YZ_Constant":42,"./PlatUtils":36,"./Utils":176,"./YZ_LocalStorage":121},"path":"preview-scripts/assets/common-plugin/Scripts/CommonConfig.js"},{"deps":{"./AdAgent":134,"./YZ_Constant":42,"./PlatUtils":36,"./Utils":176,"./YZ_NativeAdObject":122,"./NativeTryGamesWidget":101,"./CompatibleTool":88,"./YouWanSDK/YouWanAnalytics":26,"./YouWanSDK/EventAdInfo":135},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentOPPO.js"},{"deps":{"./AdManager":79,"./CommonConfig":174,"./WechatTool":39,"./PlatUtils":36,"./YZ_Tool_Oppo":168,"./YZ_Tool_Baidu":19,"./YZ_Tool_Native":21,"./YZ_Tool_Vivo":24,"./YZ_Tool_Douyin":46,"./YZ_Constant":42,"./YZ_Tool_QQ":22,"./YZ_Tool_QTT":23,"./YZ_Tool_Xiaomi":14,"./AldUtils":86,"./YZ_Tool_UC":52,"./YZ_Tool_Cocosplay":49,"./YZ_Tool_4399":129,"./YZ_Tool_IOS":12,"./YZ_Tool_Bili":128,"./YZ_Tool_Kwai":20,"./YZ_Tool_Broswer":47,"./YZ_Tool_Wifi":53,"./YZ_Tool_Hago":51,"./RedBagProgressWidget":108,"./CompatibleTool":88,"./YZ_Tool_HuaWei":48,"./OpenRedBagPanel":35,"./YZ_Tool_FaceBook":50,"./YzRealNameAuthPanel":54,"./YzUserPrivacyPanel":55,"./YZ_LocalStorage":121,"./YZ_Tool_GoogleWeb":130,"./Encrypt/CryptoJS":7},"path":"preview-scripts/assets/common-plugin/Scripts/Utils.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    