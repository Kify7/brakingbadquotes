
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"344",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"UD.me.id"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.amount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.amount"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],";return parseFloat(a\/100).toFixed(2)})();"]
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.getAttribute(\"data-clp-course-id\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"clp\"===document.body.getAttribute(\"data-hotjar-page\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(document.querySelector('div[data-purpose\\x3d\"introduction-video\"]')){var a=document.querySelector(\".current-price\");return a?a.textContent.replace(\"$\",\"\").trim():\"\"}})();"]
    },{
      "function":"__c",
      "vtp_value":"UA-12366301-1"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){channelType=document.body.getAttribute(\"data-hotjar-channel-type\");hotjarPage=document.body.getAttribute(\"data-hotjar-page\");return\"featured\"===channelType||\"logged-in-homepage\"===hotjarPage})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.getAttribute(\"data-hotjar-channel-type\")||void 0})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-purpose"
    },{
      "function":"__r"
    },{
      "function":"__j",
      "vtp_name":"UD.request.locale"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"ja_JP\"==",["escape",["macro",19],8,16],"||\"ja-JP\"==",["escape",["macro",19],8,16],"||\"jp-JP\"==",["escape",["macro",19],8,16],"||\"jp_JP\"==",["escape",["macro",19],8,16],"})();"]
    },{
      "function":"__j",
      "vtp_name":"UD.visiting.visitor_uuid"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"blisspoint_fpc"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"is_first_paid_purchase"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_language"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_language"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_location"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"has_made_paid_purchase"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"US\"==UD.Config.marketplace_country.id})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_avg_rating"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_instructor_name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_length_minutes"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_locale"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_num_enrollments"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_subcategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_topic"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_locale"
    },{
      "function":"__v",
      "vtp_name":"isMember",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchases"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseId"
    },{
      "function":"__j",
      "vtp_name":"UD.me.encrypted_affiliate_uid"
    },{
      "function":"__j",
      "vtp_name":"UD.me.encrypted_affiliate_email"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.code"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseAmount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseSku"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.isMarketingBoostAgreed"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.affiliateType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.buyableId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],";return parseFloat(a\/100).toFixed(2)})();"]
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.getAttribute(\"data-course-labels-experiment-hotjar\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"peclp\"===document.body.getAttribute(\"data-hotjar-page\")})();"]
    }],
  "tags":[{
      "function":"__html",
      "priority":99,
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction create_UUID(){var a=(new Date).getTime(),d=\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(\/[xy]\/g,function(b){var c=(a+16*Math.random())%16|0;a=Math.floor(a\/16);return(\"x\"==b?c:c\u00263|8).toString(16)});return d}function createCookie(a,d,b){var c=new Date;c.setTime(c.getTime()+36E5*b);b=\"; expires\\x3d\"+c.toGMTString();document.cookie=d\u0026\u0026\"undefined\"!==d?a+\"\\x3d\"+d+b+\"; path\\x3d\/\":a+\"\\x3d\"+create_UUID()+b+\"; path\\x3d\/\"}createCookie(\"blisspoint_fpc\",",["escape",["macro",22],8,16],",168);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":428
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E\"undefined\"===typeof fbq\u0026\u0026(!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\"),",["escape",["macro",28],8,16],"||fbq(\"init\",\"1457291081167286\"),fbq(\"init\",\"399727027340013\"),",["escape",["macro",28],8,16],"||fbq(\"trackSingle\",\n\"1457291081167286\",\"PageView\"),fbq(\"trackSingle\",\"399727027340013\",\"PageView\"));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":13
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003E(function(a,e,f,g,b,c,d){a[b]=a[b]||function(){(a[b].a=a[b].a||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"https:\/\/mc.yandex.ru\/metrika\/tag.js\",\"ym\");ym(53931514,\"init\",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cdiv\u003E\u003Cimg src=\"https:\/\/mc.yandex.ru\/watch\/53931514\" style=\"position:absolute; left:-9999px;\" alt=\"\"\u003E\u003C\/div\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":217
    },{
      "function":"__cl",
      "tag_id":28
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"973941651",
      "vtp_conversionLabel":"PKv-COL4z1wQk9e00AM",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":38
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":80
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"courseview",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",8],
      "vtp_dimension":["list",["map","index","5","dimension",["macro",8]],["map","index","6","dimension","offerdetail"],["map","index","8","dimension",["macro",10]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",11],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":122
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"send",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"15_seconds",
      "vtp_eventLabel":"read",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",11],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":123
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":124
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"purchase",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"course",
      "vtp_eventLabel":"transaction_purchase",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_eventValue":["macro",6],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",11],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":133
    },{
      "function":"__img",
      "metadata":["map"],
      "setup_tags":["list",["tag",91,1]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/1fab027e63e94ad4b34e2e8d70e972d9\/pixel?tag=Purchase",
      "tag_id":145
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"business.udemy.com",
      "vtp_decorateFormsAutoLink":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","True"],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackerName":"ufbonly",
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-47",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":146
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"linkshare",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"signup",
      "vtp_eventLabel":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":163
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":180
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"877556973",
      "vtp_conversionLabel":"j88uCJmGiXkQ7em5ogM",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":181
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":186
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":196
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":197
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":201
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_tagId":"21002562",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":205
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"973941651",
      "vtp_conversionLabel":"HsE0CKDW8pABEJPXtNAD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":206
    },{
      "function":"__paused",
      "vtp_originalTagType":"bzi",
      "tag_id":207
    },{
      "function":"__paused",
      "vtp_originalTagType":"bzi",
      "tag_id":208
    },{
      "function":"__paused",
      "vtp_originalTagType":"bzi",
      "tag_id":209
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"828847995",
      "vtp_conversionLabel":"mqA6CMD-5ZIBEPvunIsD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":210
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"828847995",
      "vtp_conversionLabel":"E_BECNaa5pIBEPvunIsD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":211
    },{
      "function":"__paused",
      "vtp_originalTagType":"awct",
      "tag_id":212
    },{
      "function":"__bzi",
      "once_per_event":true,
      "vtp_id":"374972",
      "tag_id":213
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":214
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":215
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=2542116;type=gwg;cat=udemy000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1;num=1?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":216
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":221
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":222
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":223
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":224
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"715649091",
      "vtp_conversionLabel":"Bc8dCNaqmagBEMPgn9UC",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":228
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"715649091",
      "vtp_conversionLabel":"OR8bCLmumagBEMPgn9UC",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":229
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":374
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":375
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"880479204",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",7],
      "vtp_enableRdpCheckbox":true,
      "tag_id":376
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"880479204",
      "vtp_conversionLabel":"GiYPCISDssMBEOSX7KMD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":377
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"880479204",
      "vtp_conversionLabel":"9fRMCPq2oWcQ5JfsowM",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":378
    },{
      "function":"__img",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/pixel.pointmediatracker.com\/kpi?c=udemy\u0026tag_id=288\u0026user_id=",["escape",["macro",21],12],"\u0026kpi=visit\u0026fpc=",["escape",["macro",22],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":387
    },{
      "function":"__img",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/pixel.pointmediatracker.com\/kpi?c=udemy\u0026tag_id=288\u0026user_id=",["escape",["macro",21],12],"\u0026kpi=purchase-success\u0026order_value=",["escape",["macro",6],12],"\u0026new=",["escape",["macro",23],12],"\u0026fpc=",["escape",["macro",22],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":388
    },{
      "function":"__img",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/pixel.pointmediatracker.com\/kpi?c=udemy\u0026tag_id=288\u0026user_id=",["escape",["macro",21],12],"\u0026kpi=signup-success\u0026fpc=",["escape",["macro",22],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":389
    },{
      "function":"__cl",
      "tag_id":429
    },{
      "function":"__cl",
      "tag_id":430
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"15000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_139",
      "tag_id":431
    },{
      "function":"__cl",
      "tag_id":432
    },{
      "function":"__cl",
      "tag_id":433
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_344_340","164179_344_392","164179_344_46"],
      "vtp_uniqueTriggerId":"164179_344",
      "tag_id":434
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_344_340",
      "tag_id":435
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_344_392",
      "tag_id":437
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_344_46",
      "tag_id":439
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_386_385","164179_386_320"],
      "vtp_uniqueTriggerId":"164179_386",
      "tag_id":440
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_386_385",
      "tag_id":441
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_386_320",
      "tag_id":443
    },{
      "function":"__cl",
      "tag_id":444
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_415_340","164179_415_392","164179_415_46"],
      "vtp_uniqueTriggerId":"164179_415",
      "tag_id":445
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_415_340",
      "tag_id":446
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_415_392",
      "tag_id":448
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_415_46",
      "tag_id":450
    },{
      "function":"__cl",
      "tag_id":451
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_424_92","164179_424_425"],
      "vtp_uniqueTriggerId":"164179_424",
      "tag_id":452
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_424_92",
      "tag_id":453
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_424_425",
      "tag_id":455
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_426_425","164179_426_1"],
      "vtp_uniqueTriggerId":"164179_426",
      "tag_id":456
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_426_425",
      "tag_id":457
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_426_1",
      "tag_id":459
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _kiq=_kiq||[];(function(){setTimeout(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/cl.qualaroo.com\/ki.js\/34436\/6GL.js\";b.parentNode.insertBefore(a,b)},1)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a=document.body.getAttribute(\"data-clp-course-id\");a\u0026\u0026!",["escape",["macro",28],8,16],"\u0026\u0026fbq(\"track\",\"ViewContent\",{content_ids:a,content_type:\"product\",course_avg_rating:",["escape",["macro",29],8,16],",course_category:",["escape",["macro",30],8,16],",course_instructor_name:",["escape",["macro",31],8,16],",course_language:",["escape",["macro",24],8,16],",course_length_minutes:",["escape",["macro",32],8,16],",course_locale:",["escape",["macro",33],8,16],",course_num_enrollments:",["escape",["macro",34],8,16],",course_subcategory:",["escape",["macro",35],8,16],",course_topic:",["escape",["macro",36],8,16],",\nuser_language:",["escape",["macro",25],8,16],",user_locale:",["escape",["macro",37],8,16],",user_location:",["escape",["macro",26],8,16],",has_made_paid_purchase:",["escape",["macro",27],8,16],"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":40
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003EUD.GoogleAnalytics.setValue(\"dimension7\",\"true\");UD.GoogleAnalytics.trackEvent(\"ismember\",\"ismember\",\"ismember\",void 0,void 0,{nonInteraction:1});",["escape",["macro",28],8,16],"||fbq(\"trackCustom\",\"isMember\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":42
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var b=document.body.getAttribute(\"data-clp-course-id\")||\"NA\",a=document.querySelector('[data-purpose\\x3d\"course-price-text\"]');a=a?a.textContent.replace(\"$\",\"\").trim().match(\/\\d+(?:\\.\\d+)?\/):null;void 0!==UD.GoogleAnalytics\u0026\u0026(UD.GoogleAnalytics.setValue(\"dimension5\",b),UD.GoogleAnalytics.setValue(\"dimension6\",\"conversionintent\"),UD.GoogleAnalytics.setValue(\"dimension8\",a[0]),UD.GoogleAnalytics.trackEvent(\"addtocartclick\",b,a[0],{nonInteraction:1}));",["escape",["macro",28],8,16],"||fbq(\"track\",\"AddToCart\",\n{content_name:\"Shopping Cart\",content_ids:b,content_type:\"product\"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":60
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var b=",["escape",["macro",39],8,16],".map(function(a){return a.buyableId}),c=",["escape",["macro",39],8,16],".map(function(a){course=a.courseAnalytics;return{id:a.buyableId,quantity:1,course_avg_rating:course.course_avg_rating,course_category:course.course_category,course_instructor_name:course.course_instructor_name,course_language:course.course_language,course_length_minutes:course.course_length_minutes,course_locale:course.course_locale,course_num_enrollments:course.course_num_enrollments,course_subcategory:course.course_subcategory,\ncourse_topic:course.course_topic}});",["escape",["macro",28],8,16],"\u0026\u0026fbq(\"init\",\"1457291081167286\");fbq(\"track\",\"Purchase\",{content_ids:b,content_type:\"product\",contents:c,order_id:",["escape",["macro",40],8,16],",value:",["escape",["macro",6],8,16],",currency:\"USD\",user_language:",["escape",["macro",25],8,16],",user_locale:",["escape",["macro",37],8,16],",user_location:",["escape",["macro",26],8,16],",has_made_paid_purchase:",["escape",["macro",27],8,16],",is_first_paid_purchase:",["escape",["macro",23],8,16],"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/www.dwin1.com\/6554.js\" type=\"text\/gtmscript\" defer\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E",["escape",["macro",28],8,16],"||fbq(\"trackCustom\",\"SignupSuccess\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":128
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E",["escape",["macro",28],8,16],"\u0026\u0026fbq(\"init\",\"1457291081167286\");fbq(\"trackCustom\",\"NewUserPurchase\",{value:",["escape",["macro",6],8,16],",currency:\"USD\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":156
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(\"273-CKQ-053\"))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":157
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E",["escape",["macro",28],8,16],"||fbq(\"trackCustom\",\"LinkshareSignupClick\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":164
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(g,e,a,f,b,c,d){b.ire_o=a;b[a]=b[a]||function(){(b[a].a=b[a].a||[]).push(arguments)};c=f.createElement(e);d=f.getElementsByTagName(e)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(\"\/\/d.impactradius-event.com\/A380319-1bcf-4b7b-9299-22e85825ceea1.js\",\"script\",\"ire\",document,window);ire(\"identify\",{customerId:",["escape",["macro",42],8,16],",customerEmail:",["escape",["macro",43],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":171
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv12m\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":175
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript src=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/javascript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\"\u003Etwttr.conversion.trackPid(\"ny0dy\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=ny0dy\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=ny0dy\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":176
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv12m\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":177
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=new XMLHttpRequest;a.open(\"POST\",\"\/api-2.0\/growth-analytics\/gtm-verifier\",!0);a.setRequestHeader(\"Content-Type\",\"application\/json; charset\\x3dUTF-8\");a.setRequestHeader(\"X-Requested-With\",\"XMLHttpRequest\");a.send(JSON.stringify({type:\"aff\"}))})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":184
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=new XMLHttpRequest;a.open(\"POST\",\"\/api-2.0\/growth-analytics\/gtm-verifier\",!0);a.setRequestHeader(\"Content-Type\",\"application\/json; charset\\x3dUTF-8\");a.setRequestHeader(\"X-Requested-With\",\"XMLHttpRequest\");a.send(JSON.stringify({type:\"paid_acq\"}))})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":185
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){try{var b={id:\"88dg1\",event:\"\"},a=document.createElement(\"script\");a.src=\"\/\/api.smartnews-ads.com\/assets\/conv.js?\"+(new Date).getTime();a.type=\"text\/javascript\";a.id=\"_smartnews_ads_conversion_script_\"+b.id;a.setAttribute(\"data-smartnews-ads\",JSON.stringify(b));(document.body||document.head).appendChild(a)}catch(c){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":188
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n  \u003Cscript type=\"text\/javascript\"\u003E(function(a){window.DataLayer||(window.DataLayer={});DataLayer.events||(DataLayer.events={});DataLayer.events.SPIVersion=DataLayer.events.SPIVersion||\"3.2\";DataLayer.events.SiteSection=\"1\";var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(document.location.protocol+\"\/\/intljs.rmtag.com\/111655.ct.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":203
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var Q={affiliateConfig:{ranMID:\"39197\",discountType:\"item\",includeStatus:\"false\",tagType:\"mop\",allowCommission:(\"linkshare\"===",["escape",["macro",50],8,16],").toString()},displayConfig:{rdMID:\"8712\"},orderid:",["escape",["macro",41],8,16],",currency:\"USD\",customerStatus:\"CUSTOMER_STATUS\",conversionType:\"Sale\",customerID:",["escape",["macro",42],8,16],",discountCode:",["escape",["macro",44],8,16],",taxAmount:0,optionalData:{},lineitems:[{quantity:1,unitPrice:",["escape",["macro",45],8,16],"\/100,unitPriceLessTax:",["escape",["macro",45],8,16],"\/100,SKU:",["escape",["macro",51],8,16],",\nproductName:",["escape",["macro",51],8,16],"}]};!function(e,m,y){var f=e.rakutenDataLayerName||\"DataLayer\";e[f]=e[f]||{};e[f].events=e[f].events||{};e[f].events.SPIVersion=\"3.4.1\";e[f].Sale=e[f].Sale||{};e[f].Sale.Basket=e[f].Sale.Basket||{};y.Ready=e[f].Sale.Basket.Ready\u0026\u0026e[f].Sale.Basket.Ready+1||1;e[f].Sale.Basket=y;var J=function(a){for(var b=a+\"\\x3d\",c=m.cookie.split(\";\"),d=0;d\u003Cc.length;d++){for(a=c[d];\" \"==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return\"\"};\ny=function(a){var b=a||\"\",c={};if(a||(b=J(\"rmStore\")),b){for(;b!==decodeURIComponent(b);)b=decodeURIComponent(b);a=b.split(\"|\");for(b=0;b\u003Ca.length;b++)c[a[b].split(\":\")[0]]=a[b].split(\":\")[1]}return c};var I={};I=y();var g=function(a,b,c,d){c=c||\"\";d=d||{};a=I[a||\"\"];b=d[b||\"\"];c=(a=(d=d.ignoreCookie||!1)?0:a)||b||c;return c=(\"string\"!=typeof c||\"false\"!==c.toLowerCase())\u0026\u0026c,c},K=function(a,b,c,d,e){var f=m.createElement(a),g=-1\u003Cm.location.protocol.indexOf(\"s\")?\"https:\":\"http:\",q;for(q in b=b.replace(\"https:\",\ng),f.src=b,d=d||{},\"script\"==a?d.type=d.type||\"text\/javascript\":(d.style=\"display:none;\",\"img\"==a\u0026\u0026(d.alt=\"\",d.height=\"1\",d.width=\"1\")),d)d.hasOwnProperty(q)\u0026\u0026f.setAttribute(q,d[q]);a=m.getElementsByTagName(c);a=a.length?a[0]:m.getElementsByTagName(\"script\")[0].parentElement;e\u0026\u0026(f.onload=e,f.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||e()});a.appendChild(f)},L=function(a){var b=new Date;b=b.getUTCFullYear()+(\"0\"+(b.getUTCMonth()+1)).slice(-2)+(\"0\"+b.getUTCDate()).slice(-2)+\n(\"0\"+b.getUTCHours()).slice(-2)+(\"0\"+b.getUTCMinutes()).slice(-2);return\"NoOID_\"+(a?a+\"_\":\"\")+Math.round(1E5*Math.random())+\"_\"+b},N=function(){var a=e[f]\u0026\u0026e[f].Sale\u0026\u0026e[f].Sale.Basket?e[f].Sale.Basket:{},b=b||a.affiliateConfig||{},c=g(\"amid\",\"ranMID\",\"\",b)||a.ranMID;if(!c)return!1;var d=\"undefined\"==typeof b.allowCommission||\"false\"!==b.allowCommission;if(!d||!(a.orderid||a.lineitems\u0026\u0026a.lineitems.length))return!1;var R=g(\"adn\",\"domain\",\"track.linksynergy.com\",b),n=g(\"atm\",\"tagType\",\"pixel\",b);d=g(\"adr\",\n\"discountType\",\"order\",b);var k=g(\"acs\",\"includeStatus\",\"false\",b),q=g(\"arto\",\"removeOrderTax\",\"false\",b),A=g(\"artp\",\"removeTaxFromProducts\",\"false\",b),u=g(\"artd\",\"removeTaxFromDiscount\",\"false\",b),p=g(\"atr\",\"taxRate\",a.taxRate||0,b),z=g(\"ald\",\"land\",!1,{})||(b.land\u0026\u0026!0===b.land?J(\"ranLandDateTime\"):b.land)||!1,M=g(\"atrv\",\"tr\",!1,{})||(b.tr\u0026\u0026!0===b.tr?J(\"ranSiteID\"):b.tr)||!1,G=g(\"acv\",\"centValues\",\"true\",b),v=g(\"ancc\",\"nonCentCurrencies\",\"JPY\",b);p=Math.abs(+p);var r=(100+p)\/100;b=a.orderid||L(c);\nb=encodeURIComponent(b);var w=a.currency||\"\";w=encodeURIComponent(w.toUpperCase());var B=!1;if(w\u0026\u0026v){v=(v+\"\").split(\",\");for(var l=0;l\u003Cv.length;l++)v[l]==w\u0026\u0026(B=!0)}var m=function(a){return B\u0026\u0026(a=Math.round(a)),G\u0026\u0026\"false\"!==G?(a*=100,a=Math.round(a)):a=Math.round(100*a)\/100,a+\"\"};v=a.taxAmount?Math.abs(+a.taxAmount):0;var C=a.discountAmount?Math.abs(+a.discountAmount):0;l=a.discountAmountLessTax?Math.abs(+a.discountAmountLessTax):0;!l\u0026\u0026C\u0026\u0026u\u0026\u0026p\u0026\u0026(l=C\/r);l=l||C;u=\"ep\";\"mop\"===n\u0026\u0026(u=\"eventnvppixel\");\nC=(a.customerStatus||\"\")+\"\";n=\"\";C\u0026\u0026(k\u0026\u0026\"EXISTING\"==C.toUpperCase()||k\u0026\u0026\"RETURNING\"==C.toUpperCase())\u0026\u0026(n=\"R_\");k=[];for(var E=C=0;E\u003C(a.lineitems?a.lineitems.length:0);E++)if(a.lineitems[E]){var F=!1,h=e.JSON?JSON.parse(JSON.stringify(a.lineitems[E])):a.lineitems[E],y=+h.quantity||0,D=+h.unitPrice||0,t=+h.unitPriceLessTax;D=t||D||0;A\u0026\u0026p\u0026\u0026!t\u0026\u0026(D\/=r);D*=y;for(var H=0;H\u003Ck.length;H++)t=k[H],t.SKU===h.SKU\u0026\u0026(F=!0,t.quantity+=y,t.totalValue+=D);F||(h.quantity=y,h.totalValue=D,k.push(h));C+=D}F=r=p=A=\"\";\nt={};for(E=0;E\u003Ck.length;E++){h=k[E];D=encodeURIComponent(h.SKU);H=h.totalValue;y=h.quantity;var I=encodeURIComponent(h.productName)||\"\";\"item\"===d.toLowerCase()\u0026\u0026l\u0026\u0026(H-=l*H\/C);h=h.optionalData;for(var x in h)h.hasOwnProperty(x)\u0026\u0026(t[x]=t[x]||\"\",t[x]+=encodeURIComponent(h[x])+\"|\");A+=n+D+\"|\";p+=y+\"|\";r+=m(H)+\"|\";F+=n+I+\"|\"}A=A.slice(0,-1);p=p.slice(0,-1);r=r.slice(0,-1);F=F.slice(0,-1);l\u0026\u0026(l=m(l));v\u0026\u0026(v=m(v));l\u0026\u0026\"order\"===d.toLowerCase()\u0026\u0026(A+=\"|\"+n+\"DISCOUNT\",F+=\"|\"+n+\"DISCOUNT\",p+=\"|0\",r+=\"|-\"+l);\nq\u0026\u0026v\u0026\u0026(A+=\"|\"+n+\"ORDERTAX\",p+=\"|0\",r+=\"|-\"+v,F+=\"|\"+n+\"ORDERTAX\");c=\"https:\/\/\"+R+\"\/\"+u+\"?mid\\x3d\"+c;c+=\"\\x26ord\\x3d\"+b;c+=z?\"\\x26land\\x3d\"+z:\"\";c+=M?\"\\x26tr\\x3d\"+M:\"\";c+=\"\\x26cur\\x3d\"+w;c+=\"\\x26skulist\\x3d\"+A;c+=\"\\x26qlist\\x3d\"+p;c+=\"\\x26amtlist\\x3d\"+r;c+=\"\\x26img\\x3d1\";c+=\"\\x26spi\\x3d\"+e[f].events.SPIVersion;l\u0026\u0026\"item\"===d.toLowerCase()\u0026\u0026(c+=\"\\x26discount\\x3d\"+l);h=a.optionalData||{};for(x in a.discountCode\u0026\u0026(h.coupon=a.discountCode),a.customerStatus\u0026\u0026(h.custstatus=a.customerStatus),a.customerID\u0026\u0026\n(h.custid=a.customerID),l\u0026\u0026(h.disamt=l),h)h.hasOwnProperty(x)\u0026\u0026(c+=\"\\x26\"+encodeURIComponent(x)+\"\\x3d\"+encodeURIComponent(h[x]));for(x in t)t.hasOwnProperty(x)\u0026\u0026(c+=\"\\x26\"+encodeURIComponent(x)+\"list\\x3d\"+t[x].slice(0,-1),l\u0026\u0026\"order\"===d.toLowerCase()\u0026\u0026(c+=\"|\"),v\u0026\u0026q\u0026\u0026(c+=\"|\"));c+=\"\\x26namelist\\x3d\"+F;if(8E3\u003Cc.length){for(a=8E3;0\u003Ca;)if(\"\\x26\"==c.charAt(a)){c=c.slice(0,a);break}else a--;c+=\"\\x26trunc\\x3dtrue\"}K(\"img\",c,\"body\")},O=function(){var a=e[f]\u0026\u0026e[f].Sale\u0026\u0026e[f].Sale.Basket?e[f].Sale.Basket:{},\nb=b||a.displayConfig||{},c=g(\"dmid\",\"rdMID\",\"\",b);if(!c||!a.orderid\u0026\u0026!a.conversionType)return!1;var d=g(\"dtm\",\"tagType\",\"js\",b),y=g(\"ddn\",\"domain\",\"tags.rd.linksynergy.com\",b),n=g(\"dis\",\"includeStatus\",\"false\",b),k=g(\"dcomm\",\"allowCommission\",\"notset\",b),q=g(\"duup\",\"useUnitPrice\",\"false\",b),A=g(\"drtp\",\"removeTaxFromProducts\",\"false\",b),u=g(\"drtd\",\"removeTaxFromDiscount\",\"false\",b),p=g(\"dtr\",\"taxRate\",a.taxRate||0,b);b=\"\";\"true\"===k||!0===k||\"1\"===k||1===k?b=\"1\":(\"false\"===k||!1===k||\"0\"===k||0===\nk)\u0026\u0026(b=\"0\");d=\"js\"===d||\"if\"===d||\"img\"===d?d:\"js\";k=\"script\";\"if\"===d?k=\"iframe\":\"img\"===d\u0026\u0026(k=\"img\");\"true\"!==q\u0026\u0026!0!==q\u0026\u0026\"1\"!==q\u0026\u00261!==q||(q=!0);var z=(a.customerStatus||\"\")+\"\",m=\"\";z\u0026\u0026n\u0026\u0026(\"EXISTING\"==z.toUpperCase()||\"RETURNING\"==z.toUpperCase())\u0026\u0026(m=\"R_\");(n=a.orderid)||(n=L((a.conversionType+\"\").toLowerCase()+\"_\"+c));n=encodeURIComponent(m+n);m=encodeURIComponent(a.currency||\"\");z=0;var G=\"\";p=Math.abs(+p);var v=(100+p)\/100,r=a.discountAmount?Math.abs(+a.discountAmount):0,w=a.discountAmountLessTax?\nMath.abs(+a.discountAmountLessTax):0;!w\u0026\u0026r\u0026\u0026u\u0026\u0026p\u0026\u0026(w=r\/v);w=w||r;w=isNaN(w)?0:w;for(u=0;u\u003C(a.lineitems?a.lineitems.length:0);u++)if(a.lineitems[u]){r=+a.lineitems[u].quantity;var B=+a.lineitems[u].unitPriceLessTax*r;(!B||q)\u0026\u0026(A\u0026\u0026p?B=+a.lineitems[u].unitPrice\/v*r:B=+a.lineitems[u].unitPrice*r);B=isNaN(B)?0:B;z+=B;G+=encodeURIComponent(a.lineitems[u].SKU)+\",\"}z=Math.round(100*(z-w))\/100;G=G.slice(0,-1);a=\"https:\/\/\"+y+\"\/\"+d+\"\/\"+c;a+=\"\/?pt\\x3dconv\";a+=\"\\x26orderNumber\\x3d\"+n;a+=\"\\x26spi\\x3d\"+e[f].events.SPIVersion;\nz\u0026\u0026(a+=\"\\x26price\\x3d\"+z);m\u0026\u0026(a+=\"\\x26cur\\x3d\"+m);b\u0026\u0026(a+=\"\\x26tvalid\\x3d\"+b);G\u0026\u0026(a+=\"\\x26prodID\\x3d\"+G);K(k,a,\"body\")},P=function(){var a=e[f]\u0026\u0026e[f].Sale\u0026\u0026e[f].Sale.Basket?e[f].Sale.Basket:{},b=a.searchConfig||{},c=1024,d=encodeURIComponent(\"...TRUNCATED\"),m=g(\"smid\",\"rsMID\",\"\",b);if(!m)return!1;var n=g(\"said\",\"accountID\",\"113\",b),k=g(\"sclid\",\"clickID\",\"\",b),q=encodeURIComponent(g(\"sct\",\"conversionType\",a.conversionType\u0026\u0026\"sale\"!==(a.conversionType+\"\").toLowerCase()?a.conversionType:\"conv\",b));K(\"script\",\n\"https:\/\/services.xg4ken.com\/js\/kenshoo.js?cid\\x3d\"+m,\"body\",null,function(){var b={};if(b.conversionType=q,b.revenue=0,b.currency=encodeURIComponent(a.currency||\"USD\"),b.orderId=encodeURIComponent(a.orderid||L(q)),b.promoCode=encodeURIComponent(a.discountCode||\"\"),k\u0026\u0026(b.ken_gclid=encodeURIComponent(k)),b.discountAmount=+(a.discountAmount||0),b.discountAmount=isNaN(b.discountAmount)?0:Math.abs(b.discountAmount),b.customerStatus=encodeURIComponent(a.customerStatus||\"\"),b.productIDList=\"\",b.productNameList=\n\"\",a.lineitems\u0026\u0026a.lineitems.length){for(var e=0;e\u003Ca.lineitems.length;e++)a.lineitems[e]\u0026\u0026(b.revenue+=+(a.lineitems[e].unitPrice||0)*+a.lineitems[e].quantity,b.productIDList+=(a.lineitems[e].SKU||\"NA\")+\",\",b.productNameList+=(a.lineitems[e].productName||\"NA\")+\",\");b.revenue=Math.round(100*(b.revenue-b.discountAmount))\/100;b.productIDList=encodeURIComponent(b.productIDList.slice(0,-1));b.productNameList=encodeURIComponent(b.productNameList.slice(0,-1));b.productIDList.length\u003Ec\u0026\u0026(b.productIDList=b.productIDList.substring(0,\nc-d.length)+d);b.productNameList.length\u003Ec\u0026\u0026(b.productNameList=b.productNameList.substring(0,c-d.length)+d)}kenshoo.trackConversion(n,m,b)})};e[f].SPI={readRMCookie:J,processRMStoreCookie:y,readRMStoreValue:g,sRAN:N,sDisplay:O,sSearch:P,addElement:K,rmStore:I};N();O();P()}(window,document,Q)})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":204
    },{
      "function":"__html",
      "setup_tags":["list",["tag",2,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow.ym(53931514,\"reachGoal\",\"SIGNUP\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":218
    },{
      "function":"__html",
      "setup_tags":["list",["tag",2,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow.ym(53931514,\"reachGoal\",\"ADD_TO_CART\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":219
    },{
      "function":"__html",
      "setup_tags":["list",["tag",2,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.ym(53931514,\"reachGoal\",\"PURCHASE\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":220
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"1fab027e63e94ad4b34e2e8d70e972d9\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/1fab027e63e94ad4b34e2e8d70e972d9\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":225
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar adb_head=document.getElementsByTagName(\"head\")[0],adb_tag=document.createElement(\"script\");adb_tag.src=\"https:\/\/udemy.benesse.co.jp\/js_udemy\/AppMeasurement_js.js\";adb_tag.defer=!0;adb_head.appendChild(adb_tag);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":231
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,d,a,e){b[a]=b[a]||[];b[a].push({t:(new Date).getTime(),event:\"snippetRun\"});b=c.getElementsByTagName(d)[0];c=c.createElement(d);a=\"paypalDDL\"!==a?\"\\x26m\\x3d\"+a:\"\";c.async=!0;c.src=\"https:\/\/www.paypal.com\/tagmanager\/pptm.js?t\\x3dxo\\x26id\\x3d\"+e+a;b.parentNode.insertBefore(c,b)})(window,document,\"script\",\"paypalDDL\",\"udemy.com\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":379
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",93,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.paypalDDL=window.paypalDDL||[];paypalDDL.push({event:\"txnSuccess\",txn_id:",["escape",["macro",40],8,16],",tpv:",["escape",["macro",6],8,16],",curr:\"USD\",prcd:",["escape",["macro",44],8,16],",srce:\"other\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":380
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"https:\/\/s.yimg.jp\/images\/listing\/tool\/cv\/ytag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.yjDataLayer=window.yjDataLayer||[];function ytag(){yjDataLayer.push(arguments)}ytag({type:\"ycl_cookie\"});ytag({type:\"yjad_retargeting\",config:{yahoo_retargeting_id:\"L7W82OXY21\",yahoo_retargeting_label:\"\"}});ytag({type:\"yss_retargeting\",config:{yahoo_ss_retargeting_id:\"1001117028\",yahoo_sstag_custom_params:{}}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":381
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",95,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async type=\"text\/gtmscript\"\u003Eytag({type:\"yss_conversion\",config:{yahoo_conversion_id:\"1001117028\",yahoo_conversion_label:\"N7oaCJGWlccBEJ3bq7wC\",yahoo_conversion_value:\"0\"}});ytag({type:\"yjad_conversion\",config:{yahoo_ydn_conv_io:\"dSxK7VIOLDUlhexqraaE\",yahoo_ydn_conv_label:\"VJAD6LZA35U102W9UT6686135\",yahoo_ydn_conv_transaction_id:\"\",yahoo_ydn_conv_value:\"0\"}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":382
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",95,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async type=\"text\/gtmscript\"\u003Eytag({type:\"yss_conversion\",config:{yahoo_conversion_id:\"1001117028\",yahoo_conversion_label:\"BCAiCKantscBEJ3bq7wC\",yahoo_conversion_value:\"0\"}});ytag({type:\"yjad_conversion\",config:{yahoo_ydn_conv_io:\"dSxK7VIOLDUlhexqraaE\",yahoo_ydn_conv_label:\"A1D9GUOZCCX1QBPLQ7K686506\",yahoo_ydn_conv_transaction_id:\"\",yahoo_ydn_conv_value:\"0\"}});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":383
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript\u003E!function(a,b){if(!a.rdt){var c=a.rdt=function(){c.sendEvent?c.sendEvent.apply(c,arguments):c.callQueue.push(arguments)};c.callQueue=[];a=b.createElement(\"script\");a.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";a.async=!0;b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(window,document);rdt(\"init\",\"t2_65f22gux\");rdt(\"track\",\"PageVisit\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":395
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",98,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Erdt(\"track\",\"SignUp\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":397
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",98,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Erdt(\"track\",\"Purchase\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":398
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"o0f51\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":400
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",101,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Etwq(\"track\",\"Signup\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":401
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",101,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Etwq(\"track\",\"Purchase\",{value:",["escape",["macro",52],8,16],",currency:\"USD\",num_items:\"1\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":402
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,d,f,b,c,e){a.mejord||(b=a.mejord=function(){b.tq.push(arguments)},a._mejord||(a._mejord=b),b.tq=[],b.version=\"2.0.14-1\",a=\"script\",(c=d.createElement(a)).async=!0,c.src=f,(e=d.getElementsByTagName(a)[0]).parentNode.insertBefore(c,e))}(window,document,\"\/\/tag.measured.com\/10031\/x474bb8\/mejord-gear.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":405
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",104,0]],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Emejord(\"init\",\"10031\/x474bb8\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":406
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",105,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function c(){var a=[];",["escape",["macro",39],8,16],"\u0026\u0026(a=",["escape",["macro",39],8,16],".map(function(b){return{id:b.buyableId}}));return a}_mejord.helper={adaptProductsArray:function(a){if(a)return a.map(function(b){return{id:b}})},getEventParams:function(){return{products:c()||[],product:c()[0]||{},orderId:",["escape",["macro",40],8,16],"||\"\",revenue:isNaN(",["escape",["macro",6],8,16],")?0:",["escape",["macro",6],8,16],",value:isNaN(",["escape",["macro",6],8,16],")?0:",["escape",["macro",6],8,16],",shippingValue:0,tax:0,discount:0,currency:\"USD\",customerId:",["escape",["macro",2],8,16],"||\n\"\",custom:{adwords:{dimensionCohortIndex:21}}}}}})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function d(a){a=c[a]?c[a]():[];for(var b=0;b\u003Ca.length;b++){var e=a[b];window.dataLayer=window.dataLayer||[];var f=_mejord.helper.getEventParams();mejord(\"track\",e,f)}}var c={\"gtm.js\":function(){var a=[\"pageview\"];return a},transaction_purchase:function(){var a=[\"checkout\"];return a}};d(",["escape",["macro",48],8,16],")})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":408
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",105,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Emejord(\"ready\",\"facebook\",function(a){fbq(\"trackCustom\",\"isMember\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":412
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",105,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar courseId=document.body.getAttribute(\"data-clp-course-id\")||\"NA\";mejord.instance.state.context.dataLayer=[];mejord(\"ready\",\"facebook\",function(){fbq(\"track\",\"AddToCart\",{content_name:\"Shopping Cart\",content_ids:courseId,content_type:\"product\"})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":414
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",105,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a=document.body.getAttribute(\"data-clp-course-id\");a\u0026\u0026mejord(\"ready\",\"facebook\",function(b){fbq(\"track\",\"ViewContent\",{content_ids:a,content_type:\"product\",course_avg_rating:",["escape",["macro",29],8,16],",course_category:",["escape",["macro",30],8,16],",course_instructor_name:",["escape",["macro",31],8,16],",course_language:",["escape",["macro",24],8,16],",course_length_minutes:",["escape",["macro",32],8,16],",course_locale:",["escape",["macro",33],8,16],",course_num_enrollments:",["escape",["macro",34],8,16],",course_subcategory:",["escape",["macro",35],8,16],",course_topic:",["escape",["macro",36],8,16],",\nuser_language:",["escape",["macro",25],8,16],",user_locale:",["escape",["macro",37],8,16],",user_location:",["escape",["macro",26],8,16],",has_made_paid_purchase:",["escape",["macro",27],8,16],"})})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":416
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",105,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Emejord.instance.state.context.dataLayer=[];mejord(\"ready\",\"facebook\",function(a){fbq(\"trackCustom\",\"LinkshareSignupClick\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":418
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",105,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Emejord(\"ready\",\"facebook\",function(a){fbq(\"trackCustom\",\"SignupSuccess\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":420
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/create-learning-portal\/"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/tapen\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.js"
    },{
      "function":"_gt",
      "arg0":["macro",4],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"transaction_purchase"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_139($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/www.udemy.com\/create-learning-portal\/"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"btn btn-primary btn-huge btn-shadowed btn-lg join-btn"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/affiliate\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/home\/teaching\/onboarding\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"\/"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/?courses\/search\/.*$"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/learn\/v4\/"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"category"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"subcategory"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/success"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/mobile\/"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":".*\\.dev\\.udemy\\.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"127.0.0.1"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":".*\\.devs\\.dev-ud\\.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"localhost"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"add-to-cart"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"signup"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/teaching\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"instructor_analytics"
    },{
      "function":"_ew",
      "arg0":["macro",0],
      "arg1":"signupsuccess=1"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe\/course\/2307940\/"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe\/course\/2306314\/"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe\/course\/2306248\/"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/?organization\/.*$"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"udemy.com"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"course-data-ready"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"KZ|RU|BY"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"2u.udemy.com|360E.udemy.com|abtasty.udemy.com|ABD.udemy.com|accesscapital.udemy.com|acemotor.udemy.com|adnatcongsco.udemy.com|adroll.udemy.com|akqa.udemy.com|akhbar.udemy.com|amaysim.udemy.com|Ampush.udemy.com|angelcitydata.udemy.com|anudip.udemy.com|apiheattransfer.udemy.com|aucklandcouncil.udemy.com|avascent.udemy.com|avg.udemy.com|iclas.udemy.com|azumo.udemy.com|bandwidth.udemy.com|bayt.udemy.com|beepi.udemy.com|bethyl.udemy.com|bulletproof.udemy.com|campusexplorer.udemy.com|caribbeanideas.udemy.com|carsguide.udemy.com|cchscarelink.udemy.com|cnu.udemy.com|ciazumano.udemy.com|cision.udemy.com|cloudreach.udemy.com|cacfp.udemy.com|collegespring.udemy.com|chs.udemy.com|continental.udemy.com|dcmservices.udemy.com|delivery.udemy.com|kyna.udemy.com|develappme.udemy.com|dichter-neira.udemy.com|duouniversity.udemy.com|teradyne-std-learning.udemy.com|eastwest.udemy.com|eastexcrude.udemy.com|echo3.udemy.com|edm.udemy.com|esa-ift.udemy.com|crunchyroll.udemy.com|ei.udemy.com|esa.udemy.com|examsoft.udemy.com|fleetmaticsacademy.udemy.com|http:\/\/fullscreen.udemy.com\/|fundamentallabor.udemy.com|fundingcircle.udemy.com|globalstrategies.udemy.com|cdp.udemy.com|glm.udemy.com|companybypeople.udemy.com|harbingergroup.udemy.com|hawaiisnacks.udemy.com|hbconstruction.udemy.com|hostpapa.udemy.com|huddle.udemy.com|ibm.udemy.com|geotecnologies.udemy.com|ignyte.udemy.com|imagineteam.udemy.com|inkblot.udemy.com|insite.udemy.com|instacart.udemy.com|jimenezconsulting.udemy.com|kimble-chase.udemy.com|kookmin.udemy.com|laneconstruct.udemy.com|lightsailenergy.udemy.com|lmuec.udemy.com|lpsoftware.udemy.com|lyft.udemy.com|cmsteam.udemy.com|mareku.udemy.com|MTC.udemy.com|mattex.udemy.com|mb3.udemy.com|melanoma.udemy.com|mmc.udemy.com|meridian.udemy.com|mixpanel.udemy.com|moboom.udemy.com|mre-consulting.udemy.com|michiganlottery.udemy.com|nike.udemy.com|nrtwebservices.udemy.com|ornl.udemy.com|ohiogt.udemy.com|on24.udemy.com|optimizely.udemy.com|optis.udemy.com|odc.udemy.com|oidtraining.udemy.com|pacificwoodtech.udemy.com|pagerduty.udemy.com|pwconsulting.udemy.com|pitneybowes.udemy.com|pjdick.udemy.com|platinum.udemy.com|powertech.udemy.com|powerteq.udemy.com|pretlist.udemy.com|proofpoint.udemy.com|prophet.udemy.com|quemetco.udemy.com|rslempdev.udemy.com|realnet.udemy.com|rottapharm.udemy.com|SLCC.udemy.com|thesentergroup.udemy.com|signaturehealthinc.udemy.com|step.udemy.com|stonehambank.udemy.com|cpfl.udemy.com|sweetwater.udemy.com|syndicatesales.udemy.com|tamkeentech.udemy.com|tegile.udemy.com|tamu.udemy.com|chernin.udemy.com|sideout.udemy.com|wistar.udemy.com|thoughtspot.udemy.com|toptal.udemy.com|tomo.udemy.com|tpipr.udemy.com|trginternational.udemy.com|tricerat.udemy.com|tpl.udemy.com|type1team.udemy.com|redal.udemy.com|unifiedtcg.udemy.com|Valin.udemy.com|viki.udemy.com|walmart.udemy.com|wanhaisg.udemy.com|webair.udemy.com|webanywhere.udemy.com|wedbush.udemy.com|egs.udemy.com|wipro.udemy.com|wolfram.udemy.com|worldpac.udemy.com|xoomworks.udemy.com|xtremeconsulting.udemy.com|yemeksepeti.udemy.com|zeeto.udemy.com|zensar.udemy.com|learning.udemy.com|paulatest.udemy.com"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"organization-manage"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^(va2site|aws-dr|www).udemy.com.*$"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/?payment\/^success"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^(aws-dr|www).udemy.com.*$"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/apps\/admin"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.triggerGroup"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_344($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",38],
      "arg1":"true"
    },{
      "function":"_gt",
      "arg0":["macro",5],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"full_transaction"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"new_user_transaction_purchase"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/teach\/?$"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/home\/my-courses\/"
    },{
      "function":"_eq",
      "arg0":["macro",48],
      "arg1":"affiliate_purchase_data"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",50],
      "arg1":"impact_radius"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"affiliate_purchase_data"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_386($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_426($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_424($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"US"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_415($|,)))"
    }],
  "rules":[
    [["if",0,3],["unless",1,2],["add",3,68]],
    [["if",6,7],["add",4,8,9,10,14,19,20,24,27,28,29,31,34,35,38,41,43,64,84,85,90,91,97,100,103]],
    [["if",4,5],["add",5],["block",3,7,16,37,39,42,69,1,74,79,82,86,2,92,93,95,98,101]],
    [["if",5],["add",5,16,74,98,101,45,46,48,49,50,54,57,58,62,63,66]],
    [["if",5,9],["unless",8],["add",6,15]],
    [["if",10,11],["add",7]],
    [["if",5,12],["add",11,77]],
    [["if",13,14,15],["add",12,78]],
    [["if",5,16],["add",13,23,26]],
    [["if",5,17],["add",15]],
    [["if",5,18],["add",15]],
    [["if",5,19],["add",15],["block",79]],
    [["if",5,17,20],["add",15]],
    [["if",5,21],["add",15]],
    [["if",5,22],["add",15]],
    [["if",5,23],["add",15]],
    [["if",5,24],["add",15]],
    [["if",5,25],["add",15]],
    [["if",15,30],["add",17,31,33,72,89]],
    [["if",15,31],["add",18]],
    [["if",5,32],["add",21]],
    [["if",33],["add",22]],
    [["if",5,34],["add",25,31,32,36,38,40,44,75,88,96,99,102]],
    [["if",5,35],["add",30]],
    [["if",5,36],["add",30]],
    [["if",5,37],["add",30]],
    [["if",0,5,38],["add",37,39,82,92,95]],
    [["if",0,5],["unless",1,39],["add",42,56,79,86,0]],
    [["if",5,40],["add",47]],
    [["if",42],["unless",41],["add",51,59]],
    [["if",3],["unless",43],["add",52,60]],
    [["if",3],["add",53,61]],
    [["if",3,44],["add",55]],
    [["if",3,45],["add",65,67]],
    [["if",5,26],["add",69],["block",16,79,87,94,98,101]],
    [["if",5,46],["unless",47],["add",69]],
    [["if",48,49],["add",69]],
    [["if",5,51],["add",1]],
    [["if",53,54],["add",70]],
    [["if",3,55],["add",71]],
    [["if",56,57],["add",73]],
    [["if",6,58],["add",76]],
    [["if",6,7,38],["add",80,81]],
    [["if",61,62,63,64],["add",83]],
    [["if",62,64],["add",87]],
    [["if",53,65],["add",2]],
    [["if",53,66],["add",93]],
    [["if",53,67],["add",94]],
    [["if",5,68],["add",104,105,106]],
    [["if",6,7,69],["add",106]],
    [["if",3,55,68],["add",107]],
    [["if",15,30,68],["add",108]],
    [["if",53,68,70],["add",109]],
    [["if",13,14,15,68],["add",110]],
    [["if",5,34,68],["add",111]],
    [["if",5,27],["block",16,79,87,94,98,101]],
    [["if",5,28],["block",16,79,87,94,98,101]],
    [["if",5,29],["block",16,79,87,94,98,101]],
    [["if",5,39],["block",69,1]],
    [["if",5,50],["block",69]],
    [["if",5,52],["block",1]],
    [["if",5,59],["block",79]],
    [["if",5,60],["block",79]]]
},
"runtime":[[50,"__bzi",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","setInWindow"]],["c","_linkedin_data_partner_id",[17,[15,"a"],"id"]],["b","https://snap.licdn.com/li.lms-analytics/insight.min.js",[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]]]
,"permissions":{"__bzi":{"access_globals":{"keys":[{"key":"_linkedin_data_partner_id","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__bzi"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ca="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var fa;a:{var ha={Vf:!0},ia={};try{ia.__proto__=ha;fa=ia.Vf;break a}catch(a){}fa=!1}da=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ja=da,la=function(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]},ma=this||self,na=/^[\w+/_-]+[=]{0,2}$/,pa=null,qa=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a},ra=function(a){return a};var ta=function(a,b){this.a=a;this.i=b};var ua=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},va=function(){this.s={};this.m=!1;this.F={}};va.prototype.get=function(a){return this.s["dust."+a]};va.prototype.set=function(a,b){this.m||(a="dust."+a,this.F.hasOwnProperty(a)||(this.s[a]=b))};va.prototype.has=function(a){return this.s.hasOwnProperty("dust."+a)};var wa=function(a){var b=[],c;for(c in a.s)a.s.hasOwnProperty(c)&&b.push(c.substr(5));return b};var k=function(a){this.i=new va;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ua(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};aa=k.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"==a){if(!ua(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else ua(a)?this.a[Number(a)]=b:this.i.set(a,b)};aa.get=function(a){return"length"==a?this.length():ua(a)?this.a[Number(a)]:this.i.get(a)};aa.length=function(){return this.a.length};aa.oc=function(){for(var a=wa(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new k(a)};
var ya=function(a,b){if(ua(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.F.hasOwnProperty(d)||delete c.s[d]}};aa=k.prototype;aa.pop=function(){return this.a.pop()};aa.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.a.shift()};aa.splice=function(a,b,c){return new k(this.a.splice.apply(this.a,arguments))};aa.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
aa.has=function(a){return ua(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var Aa=function(){function a(f,g){if(b[f]){if(b[f].cc+g>b[f].max)throw Error("Quota exceeded");b[f].cc+=g}}var b={},c=void 0,d=void 0,e={xh:function(f){c=f},pe:function(){c&&a(c,1)},zh:function(f){d=f},Ia:function(f){d&&a(d,f)},Uh:function(f,g){b[f]=b[f]||{cc:0};b[f].max=g},Qg:function(f){return b[f]&&b[f].cc||0},reset:function(){b={}},xg:a};e.onFnConsume=e.xh;e.consumeFn=e.pe;e.onStorageConsume=e.zh;e.consumeStorage=e.Ia;e.setMax=e.Uh;e.getConsumed=e.Qg;e.reset=e.reset;e.consume=e.xg;return e};var Ba=function(a,b){this.F=a;this.S=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new va;this.a=this.s=void 0};Ba.prototype.add=function(a,b){Ca(this,a,b,!1)};var Ca=function(a,b,c,d){if(!a.i.m)if(a.F.Ia(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.F["dust."+b]=!0}else a.i.set(b,c)};
Ba.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.Ia(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};Ba.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};Ba.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var Da=function(a){var b=new Ba(a.F,a);a.s&&(b.s=a.s);b.S=a.S;b.a=a.a;return b};var Ea=function(){},Fa=function(a){return"function"==typeof a},p=function(a){return"string"==typeof a},Ga=function(a){return"number"==typeof a&&!isNaN(a)},Ha=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Ia=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ja=function(a,b){if(a&&Ha(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ka=function(a,b){if(!Ga(a)||
!Ga(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ma=function(a,b){for(var c=new La,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Na=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Oa=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Qa=function(a){return Math.round(Number(a))||0},Ra=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Sa=function(a){var b=[];if(Ha(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ta=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ua=function(){return(new Date).getTime()},La=function(){this.prefix="gtm.";this.values={}};La.prototype.set=function(a,b){this.values[this.prefix+a]=b};La.prototype.get=function(a){return this.values[this.prefix+a]};
var Va=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Wa=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Xa=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ya=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Za=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},$a=function(a){for(var b=A,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},ab=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},bb=function(a){var b=[];Na(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var cb=function(a,b){va.call(this);this.a=a;this.S=b};la(cb,va);cb.prototype.toString=function(){return this.a};cb.prototype.oc=function(){return new k(wa(this))};cb.prototype.i=function(a,b){a.F.pe();return this.S.apply(eb(this,a),Array.prototype.slice.call(arguments,1))};var eb=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return Ha(d)?fb(e,d):d};c.prototype.F=function(d){return gb(this.m,d)};c.prototype.s=function(){return b.F};return new c(a,b)};
cb.prototype.La=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var gb=function(a,b){for(var c,d=0;d<b.length&&!(c=fb(a,b[d]),c instanceof ta);d++);return c},fb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof cb))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.s;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var hb=function(){va.call(this)};la(hb,va);hb.prototype.oc=function(){return new k(wa(this))};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var ib=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,jb=function(a){if(null==a)return String(a);var b=ib.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},kb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},lb=function(a){if(!a||"object"!=jb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!kb(a,"constructor")&&!kb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||kb(a,b)},E=function(a,b){var c=b||("array"==jb(a)?[]:{}),d;for(d in a)if(kb(a,d)){var e=a[d];"array"==jb(e)?("array"!=jb(c[d])&&(c[d]=[]),c[d]=E(e,c[d])):lb(e)?(lb(c[d])||(c[d]={}),c[d]=E(e,c[d])):c[d]=e}return c};var nb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var n=wa(h),m=0;m<n.length;m++)l[n[m]]=g(h.get(n[m]))},g=function(h){var l=Ia(d,h);if(-1<l)return e[l];if(h instanceof k){var n=[];d.push(h);e.push(n);for(var m=h.oc(),r=0;r<m.length();r++)n[m.get(r)]=g(h.get(m.get(r)));return n}if(h instanceof hb){var t={};d.push(h);e.push(t);f(h,t);return t}if(h instanceof cb){var q=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=mb(u[v],b);var w=b?b.F:Aa(),y=new Ba(w);
b&&(y.a=b.a);return g(h.i.apply(h,[y].concat(u)))};d.push(h);e.push(q);f(h,q);return q}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null;default:if(c)return c(h,b)}};return g(a)},mb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var n in h)h.hasOwnProperty(n)&&l.set(n,g(h[n]))},g=function(h){var l=Ia(d,h);if(-1<l)return e[l];if(Ha(h)||Oa(h)){var n=new k([]);d.push(h);e.push(n);for(var m in h)h.hasOwnProperty(m)&&n.set(m,
g(h[m]));return n}if(lb(h)){var r=new hb;d.push(h);e.push(r);f(h,r);return r}if("function"===typeof h){var t=new cb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),w=0;w<v.length;w++)v[w]=nb(this.a(v[w]),b);return g((0,this.m.S)(h,h,v))});d.push(h);e.push(t);f(h,t);return t}var q=typeof h;if(null===h||"string"===q||"number"===q||"boolean"===q)return h;if(void 0!==h&&c)return c(h,b)};return g(a)};var ob={control:function(a,b){return new ta(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.s().Ia(a.length+f.length);return new cb(a,function(){return function(g){var h=Da(d);void 0===h.a&&(h.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),n=0;n<l.length;n++)if(l[n]=this.a(l[n]),l[n]instanceof ta)return l[n];for(var m=e.get("length"),r=
0;r<m;r++)r<l.length?h.add(e.get(r),l[r]):h.add(e.get(r),void 0);h.add("arguments",new k(l));var t=gb(h,f);if(t instanceof ta)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.s();b.Ia(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ia(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.s(),c=new hb,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ia(g);c.set(e,f)}return c},undefined:function(){}};var pb=function(){this.m=Aa();this.a=new Ba(this.m)},qb=function(a,b,c){var d=new cb(b,c);d.m=!0;a.a.set(b,d)};pb.prototype.kc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};pb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=fb(this.a,arguments[c]);return b};pb.prototype.s=function(a,b){var c=Da(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=d=fb(c,arguments[e]);return d};var sb=function(a){if(a instanceof sb)return a;this.oa=a};sb.prototype.toString=function(){return String(this.oa)};var tb=function(a,b){return nb(a,b,function(c){})},ub=function(a,b){var c=void 0;return mb(a,b,c)};var vb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},wb=function(a){if(void 0==a||Ha(a)||lb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var xb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g==d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=vb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):ya(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=vb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):ya(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var yb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),zb=new ta("break"),Ab=new ta("continue"),Db=function(a,b){return this.a(a)+this.a(b)},Eb=function(a,b){return this.a(a)&&this.a(b)},Fb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=Ia(yb,b))return ub(a[b].apply(a,vb(c)),this.m);throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var d=a.get(b);if(d instanceof cb){var e=vb(c);e.unshift(this.m);return d.i.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=Ia(xb.supportedMethods,b)){var f=vb(c);f.unshift(this.m);
return xb[b].apply(a,f)}}if(a instanceof cb||a instanceof hb){if(a.has(b)){var g=a.get(b);if(g instanceof cb){var h=vb(c);h.unshift(this.m);return g.i.apply(g,h)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof cb?a.a:a.toString();if("hasOwnProperty"==b)return a.has.apply(a,vb(c))}if(a instanceof sb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Gb=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");
var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Hb=function(a){var b=Da(this.m),c=gb(b,Array.prototype.slice.apply(arguments));if(c instanceof ta)return c},Ib=function(){return zb},Jb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof ta)return d}},Kb=function(a){for(var b=this.m,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);Ca(b,d,e,
!0)}}},Lb=function(){return Ab},Mb=function(a,b,c){var d=new k;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.add(a,this.a(f))},Nb=function(a,b){return this.a(a)/this.a(b)},Ob=function(a,b){a=this.a(a);b=this.a(b);var c=a instanceof sb,d=b instanceof sb;return c||d?c&&d?a.oa==b.oa:!1:a==b},Pb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Qb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=gb(e,c);if(f instanceof ta){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof hb||b instanceof k||b instanceof cb)for(var g=b.oc(),h=g.length(),l=0;l<h;l++){var n=a(g.get(l)),m=gb(n,c);if(m instanceof ta){if("break"==m.a)break;if("return"==m.a)return m}}}
var Rb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Qb(function(e){d.set(a,e);return d},b,c)},Ub=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Qb(function(e){var f=Da(d);Ca(f,a,e,!0);return f},b,c)},Vb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Qb(function(e){var f=Da(d);f.add(a,e);return f},b,c)},Wb=function(a,b,c,d){function e(m,r){for(var t=0;t<f.length();t++){var q=f.get(t);r.add(q,m.get(q))}}var f=this.a(a);if(!(f instanceof
k))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.m;d=this.a(d);var h=Da(g);for(e(g,h);fb(h,b);){var l=gb(h,d);if(l instanceof ta){if("break"===l.a)break;if("return"===l.a)return l}var n=Da(g);e(h,n);fb(n,c);h=n}},Xb=function(a){return this.m.get(this.a(a))},Yb=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof hb||a instanceof k||a instanceof cb)c=a.get(b);else if("string"==
typeof a)"length"==b?c=a.length:ua(b)&&(c=a[b]);else if(a instanceof sb)return;return c},Zb=function(a,b){return this.a(a)>this.a(b)},$b=function(a,b){return this.a(a)>=this.a(b)},ac=function(a,b){a=this.a(a);b=this.a(b);a instanceof sb&&(a=a.oa);b instanceof sb&&(b=b.oa);return a===b},bc=function(a,b){return!ac.call(this,a,b)},cc=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.F(d);if(e instanceof ta)return e},dc=function(a,b){return this.a(a)<this.a(b)},ec=function(a,
b){return this.a(a)<=this.a(b)},hc=function(a,b){return this.a(a)%this.a(b)},ic=function(a,b){return this.a(a)*this.a(b)},jc=function(a){return-this.a(a)},kc=function(a){return!this.a(a)},lc=function(a,b){return!Ob.call(this,a,b)},mc=function(){return null},nc=function(a,b){return this.a(a)||this.a(b)},oc=function(a,b){var c=this.a(a);this.a(b);return c},pc=function(a){return this.a(a)},qc=function(a){return Array.prototype.slice.apply(arguments)},rc=function(a){return new ta("return",this.a(a))},
sc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof cb||a instanceof k||a instanceof hb)&&a.set(b,c);return c},tc=function(a,b){return this.a(a)-this.a(b)},uc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Ha(d)||!Ha(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===this.a(d[h]))if(f=this.a(e[h]),f instanceof ta){var l=f.a;if("break"==
l)return;if("return"==l||"continue"==l)return f}else g=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof ta&&("return"==f.a||"continue"==f.a)))return f},vc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},wc=function(a){a=this.a(a);return a instanceof cb?"function":typeof a},xc=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},yc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&(e=this.F(f),e instanceof ta)){if("break"==
e.a)return;if("return"==e.a)return e}for(;this.a(a);){e=this.F(f);if(e instanceof ta){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},zc=function(a){return~Number(this.a(a))},Ac=function(a,b){return Number(this.a(a))<<Number(this.a(b))},Bc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},Cc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},Dc=function(a,b){return Number(this.a(a))&Number(this.a(b))},Gc=function(a,b){return Number(this.a(a))^Number(this.a(b))},Hc=function(a,
b){return Number(this.a(a))|Number(this.a(b))};var Jc=function(){this.a=new pb;Ic(this)};Jc.prototype.kc=function(a){return Kc(this.a.i(a))};
var Mc=function(a,b){return Kc(Lc.a.s(a,b))},Ic=function(a){var b=function(d,e){var f=a.a,g=String(e);ob.hasOwnProperty(d)&&qb(f,g||d,ob[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){qb(a.a,String(d),e)};c(0,Db);c(1,Eb);c(2,Fb);c(3,Gb);c(53,Hb);c(4,Ib);c(5,Jb);c(52,Kb);c(6,Lb);c(9,Jb);c(50,Mb);c(10,Nb);c(12,Ob);c(13,Pb);c(47,Rb);c(54,Ub);c(55,Vb);c(63,Wb);c(15,Xb);c(16,Yb);c(17,Yb);c(18,Zb);c(19,$b);c(20,ac);c(21,bc);c(22,cc);c(23,dc);c(24,ec);c(25,hc);
c(26,ic);c(27,jc);c(28,kc);c(29,lc);c(45,mc);c(30,nc);c(32,oc);c(33,oc);c(34,pc);c(35,pc);c(46,qc);c(36,rc);c(43,sc);c(37,tc);c(38,uc);c(39,vc);c(40,wc);c(41,xc);c(42,yc);c(58,zc);c(57,Ac);c(60,Bc);c(61,Cc);c(56,Dc);c(62,Gc);c(59,Hc)},Oc=function(){var a=Lc,b=Nc();qb(a.a,"require",b)},Pc=function(a,b){a.a.a.S=b};function Kc(a){if(a instanceof ta||a instanceof cb||a instanceof k||a instanceof hb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};
var Qc=[],Rc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Sc=function(a){return Rc[a]},Tc=/[\x00\x22\x26\x27\x3c\x3e]/g;var Xc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Yc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Zc=function(a){return Yc[a]};
Qc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Xc,Zc)+"'"}};var ed=/['()]/g,fd=function(a){return"%"+a.charCodeAt(0).toString(16)};Qc[12]=function(a){var b=
encodeURIComponent(String(a));ed.lastIndex=0;return ed.test(b)?b.replace(ed,fd):b};var gd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,hd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},id=function(a){return hd[a]};Qc[16]=function(a){return a};var ld;
var md=[],nd=[],od=[],pd=[],qd=[],rd={},sd,td,ud,vd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},wd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=rd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(d&&b&&b.me&&b.me(a[f]),e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):ld(c,e,b)},yd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&
(d[e]=xd(a[e],b,c));return d},zd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=rd[b];return c?c.priorityOverride||0:0},xd=function(a,b,c){if(Ha(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(xd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=md[f];if(!g||b.qd(g))return;c[f]=!0;try{var h=yd(g,b,c);h.vtp_gtmEventId=b.id;d=wd(h,b);ud&&(d=ud.zg(d,h))}catch(y){b.Ie&&b.Ie(y,Number(f)),
d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[xd(a[l],b,c)]=xd(a[l+1],b,c);return d;case "template":d=[];for(var n=!1,m=1;m<a.length;m++){var r=xd(a[m],b,c);td&&(n=n||r===td.Wb);d.push(r)}return td&&n?td.Cg(d):d.join("");case "escape":d=xd(a[1],b,c);if(td&&Ha(a[1])&&"macro"===a[1][0]&&td.fh(a))return td.Eh(d);d=String(d);for(var t=2;t<a.length;t++)Qc[a[t]]&&(d=Qc[a[t]](d));return d;case "tag":var q=a[1];if(!pd[q])throw Error("Unable to resolve tag reference "+q+".");return d=
{ve:a[2],index:q};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Ad(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Ad=function(a,b,c){try{return sd(yd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Bd=function(){var a=function(b){return{toString:function(){return b}}};return{nf:a("consent"),Qd:a("convert_case_to"),Rd:a("convert_false_to"),Sd:a("convert_null_to"),Td:a("convert_true_to"),Ud:a("convert_undefined_to"),fi:a("debug_mode_metadata"),sa:a("function"),vf:a("instance_name"),zf:a("live_only"),Bf:a("malware_disabled"),Cf:a("metadata"),hi:a("original_vendor_template_id"),Gf:a("once_per_event"),Wd:a("once_per_load"),$d:a("setup_tags"),ae:a("tag_id"),be:a("teardown_tags")}}();var Cd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};la(Cd,Error);function Dd(a,b){if(Ha(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)Dd(a[c],b[c])}};var Ed=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};la(Ed,Error);var Fd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var Hd=function(){return function(a,b){a instanceof Ed||(a=new Ed(a,Gd));b&&a.a.push(b);throw a;}};function Gd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ga(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var Id=null,Ld=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];Id=Jd(a);for(var e=0;e<nd.length;e++){var f=nd[e],g=Kd(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var n=[],m=0;m<pd.length;m++)c[m]&&!d[m]&&(n[m]=!0);return n},Kd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Id(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=Id(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},Jd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Ad(od[c],a));return b[c]}};var Md={zg:function(a,b){b[Bd.Qd]&&"string"===typeof a&&(a=1==b[Bd.Qd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Bd.Sd)&&null===a&&(a=b[Bd.Sd]);b.hasOwnProperty(Bd.Ud)&&void 0===a&&(a=b[Bd.Ud]);b.hasOwnProperty(Bd.Td)&&!0===a&&(a=b[Bd.Td]);b.hasOwnProperty(Bd.Rd)&&!1===a&&(a=b[Bd.Rd]);return a}};var Nd=function(){this.a={}};function Od(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Cd(c,d,g);}}function Pd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Od(e,b,d,g);Od(f,b,d,g)}}}};var Td=function(a){var b=Qd.C,c=this;this.i=new Nd;this.a={};var d={},e=Pd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Na(a,function(f,g){var h={};Na(g,function(l,n){var m=Rd(l,n);h[l]=m.assert;d[l]||(d[l]=m.K)});c.a[f]=function(l,n){var m=h[l];if(!m)throw Sd(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);m.apply(void 0,r);e.apply(void 0,r)}})},Vd=function(a){return Ud.a[a]||
function(){}};function Rd(a,b){var c=vd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Sd;try{return wd(c)}catch(d){return{assert:function(e){throw new Cd(e,{},"Permission "+e+" is unknown.");},K:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Sd(a,b,c){return new Cd(a,b,c)};var Wd=!1;var Xd={};Xd.ai=Ra('');Xd.Ig=Ra('');var Yd=Wd,Zd=Xd.Ig,$d=Xd.ai;
var pe=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},qe=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;pe(b,"/*")&&(b=b.slice(0,-2));pe(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},re=/^[a-z0-9-]+$/i,se=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
ue=function(a,b){var c;if(!(c=!te(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!re.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,n=b[g];if(!se.exec(n))throw Error("Invalid Wildcard");var m=n.slice(8),r=m.slice(0,m.indexOf("/")),t;var q=l.hostname,u=r;if(0!==u.indexOf("*."))t=q.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=q.toLowerCase().indexOf(u.toLowerCase());t=-1===v?!1:q.length===u.length?
!0:q.length!==u.length+v?!1:"."===q[v-1]}if(t){var w=m.slice(m.indexOf("/"));h=qe(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},te=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var ve,we=function(){};(function(){function a(h,l){h=h||"";l=l||{};for(var n in b)b.hasOwnProperty(n)&&(l.jg&&(l["fix_"+n]=!0),l.xe=l.xe||l["fix_"+n]);var m={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},r={comment:function(){var q=h.indexOf("--\x3e");if(0<=q)return{content:h.substr(4,q),length:q+3}},endTag:function(){var q=h.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=r.startTag();
if(q){var u=h.slice(q.length);if(u.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var v=u.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(v)return{tagName:q.tagName,U:q.U,content:v[1],length:v[0].length+q.length}}}},startTag:function(){var q=h.match(c);if(q){var u={};q[2].replace(e,function(v,w,y,x,B){var C=y||x||B||f.test(w)&&w||null,z=document.createElement("div");z.innerHTML=C;u[w]=z.textContent||z.innerText||C});return{tagName:q[1],U:u,Lb:!!q[3],length:q[0].length}}},chars:function(){var q=
h.indexOf("<");return{length:0<=q?q:h.length}}},t=function(){for(var q in m)if(m[q].test(h)){var u=r[q]();return u?(u.type=u.type||q,u.text=h.substr(0,u.length),h=h.slice(u.length),u):null}};l.xe&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,u=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.Ge=function(){return this[this.length-1]};v.sd=function(z){var D=this.Ge();return D&&D.tagName&&D.tagName.toUpperCase()===z.toUpperCase()};v.yg=
function(z){for(var D=0,G;G=this[D];D++)if(G.tagName===z)return!0;return!1};var w=function(z){z&&"startTag"===z.type&&(z.Lb=q.test(z.tagName)||z.Lb);return z},y=t,x=function(){h="</"+v.pop().tagName+">"+h},B={startTag:function(z){var D=z.tagName;"TR"===D.toUpperCase()&&v.sd("TABLE")?(h="<TBODY>"+h,C()):l.si&&u.test(D)&&v.yg(D)?v.sd(D)?x():(h="</"+z.tagName+">"+h,C()):z.Lb||v.push(z)},endTag:function(z){v.Ge()?l.Lg&&!v.sd(z.tagName)?x():v.pop():l.Lg&&(y(),C())}},C=function(){var z=h,D=w(y());h=z;if(D&&
B[D.type])B[D.type](D)};t=function(){C();return w(y())}}();return{append:function(q){h+=q},Kh:t,zi:function(q){for(var u;(u=t())&&(!q[u.type]||!1!==q[u.type](u)););},clear:function(){var q=h;h="";return q},Ai:function(){return h},stack:[]}}var b=function(){var h={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";h.Ci="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";h.Bi=2===l.childNodes.length;return h}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.m=b;a.s=function(h){var l={comment:function(n){return"<--"+n.content+"--\x3e"},endTag:function(n){return"</"+n.tagName+">"},atomicTag:function(n){return l.startTag(n)+n.content+l.endTag(n)},startTag:function(n){var m="<"+n.tagName,r;for(r in n.U){var t=n.U[r];m+=
" "+r+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return m+(n.Lb?"/>":">")},chars:function(n){return n.text}};return l[h.type](h)};a.i=function(h){var l={},n;for(n in h){var m=h[n];l[n]=m&&m.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var g in b)a.a=a.a||!b[g]&&g;ve=a})();(function(){function a(){}function b(r){return void 0!==r&&null!==r}function c(r,t,q){var u,v=r&&r.length||0;for(u=0;u<v;u++)t.call(q,r[u],u)}function d(r,t,q){for(var u in r)r.hasOwnProperty(u)&&t.call(q,u,r[u])}function e(r,
t){d(t,function(q,u){r[q]=u});return r}function f(r,t){r=r||{};d(t,function(q,u){b(r[q])||(r[q]=u)});return r}function g(r){try{return n.call(r)}catch(q){var t=[];c(r,function(u){t.push(u)});return t}}var h={$f:a,ag:a,bg:a,cg:a,lg:a,mg:function(r){return r},done:a,error:function(r){throw r;},Nh:!1},l=this;if(!l.postscribe){var n=Array.prototype.slice,m=function(){function r(q,u,v){var w="data-ps-"+u;if(2===arguments.length){var y=q.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?q.setAttribute(w,
v):q.removeAttribute(w)}function t(q,u){var v=q.ownerDocument;e(this,{root:q,options:u,Mb:v.defaultView||v.parentWindow,Wa:v,uc:ve("",{jg:!0}),dd:[q],Cd:"",Dd:v.createElement(q.nodeName),Ib:[],Oa:[]});r(this.Dd,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.Oa,arguments);for(var q;!this.hc&&this.Oa.length;)q=this.Oa.shift(),"function"===typeof q?this.rg(q):this.Md(q)};t.prototype.rg=function(q){var u={type:"function",value:q.name||q.toString()};this.yd(u);q.call(this.Mb,this.Wa);this.Me(u)};
t.prototype.Md=function(q){this.uc.append(q);for(var u,v=[],w,y;(u=this.uc.Kh())&&!(w=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("script"):!1)&&!(y=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("style"):!1);)v.push(u);this.di(v);w&&this.Wg(u);y&&this.Xg(u)};t.prototype.di=function(q){var u=this.og(q);u.ie&&(u.od=this.Cd+u.ie,this.Cd+=u.Ih,this.Dd.innerHTML=u.od,this.bi())};t.prototype.og=function(q){var u=this.dd.length,v=[],w=[],y=[];c(q,function(x){v.push(x.text);if(x.U){if(!/^noscript$/i.test(x.tagName)){var B=
u++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+B+" $1"));"ps-script"!==x.U.id&&"ps-style"!==x.U.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+B+(x.Lb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{Di:q,raw:v.join(""),ie:w.join(""),Ih:y.join("")}};t.prototype.bi=function(){for(var q,u=[this.Dd];b(q=u.shift());){var v=1===q.nodeType;if(!v||!r(q,"proxyof")){v&&(this.dd[r(q,"id")]=q,r(q,"id",null));var w=q.parentNode&&r(q.parentNode,"proxyof");
w&&this.dd[w].appendChild(q)}u.unshift.apply(u,g(q.childNodes))}};t.prototype.Wg=function(q){var u=this.uc.clear();u&&this.Oa.unshift(u);q.src=q.U.src||q.U.ji;q.src&&this.Ib.length?this.hc=q:this.yd(q);var v=this;this.ci(q,function(){v.Me(q)})};t.prototype.Xg=function(q){var u=this.uc.clear();u&&this.Oa.unshift(u);q.type=q.U.type||q.U.TYPE||"text/css";this.ei(q);u&&this.write()};t.prototype.ei=function(q){var u=this.qg(q);this.bh(u);q.content&&(u.styleSheet&&!u.sheet?u.styleSheet.cssText=q.content:
u.appendChild(this.Wa.createTextNode(q.content)))};t.prototype.qg=function(q){var u=this.Wa.createElement(q.tagName);u.setAttribute("type",q.type);d(q.U,function(v,w){u.setAttribute(v,w)});return u};t.prototype.bh=function(q){this.Md('<span id="ps-style"/>');var u=this.Wa.getElementById("ps-style");u.parentNode.replaceChild(q,u)};t.prototype.yd=function(q){q.Ah=this.Oa;this.Oa=[];this.Ib.unshift(q)};t.prototype.Me=function(q){q!==this.Ib[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Ib.shift(),this.write.apply(this,q.Ah),!this.Ib.length&&this.hc&&(this.yd(this.hc),this.hc=null))};t.prototype.ci=function(q,u){var v=this.pg(q),w=this.Wh(v),y=this.options.$f;q.src&&(v.src=q.src,this.Rh(v,w?y:function(){u();y()}));try{this.ah(v),q.src&&!w||u()}catch(x){this.options.error(x),u()}};t.prototype.pg=function(q){var u=this.Wa.createElement(q.tagName);d(q.U,function(v,w){u.setAttribute(v,w)});q.content&&(u.text=q.content);return u};t.prototype.ah=function(q){this.Md('<span id="ps-script"/>');
var u=this.Wa.getElementById("ps-script");u.parentNode.replaceChild(q,u)};t.prototype.Rh=function(q,u){function v(){q=q.onload=q.onreadystatechange=q.onerror=null}var w=this.options.error;e(q,{onload:function(){v();u()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(v(),u())},onerror:function(){var y={message:"remote script failed "+q.src};v();w(y);u()}})};t.prototype.Wh=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.Nh&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function r(){var w=u.shift(),y;w&&(y=w[w.length-1],y.ag(),w.stream=t.apply(null,w),y.bg())}function t(w,y,x){function B(G){G=x.mg(G);v.write(G);x.cg(G)}v=new m(w,x);v.id=q++;v.name=x.name||v.id;var C=w.ownerDocument,z={close:C.close,open:C.open,write:C.write,writeln:C.writeln};e(C,{close:a,open:a,write:function(){return B(g(arguments).join(""))},writeln:function(){return B(g(arguments).join("")+"\n")}});var D=v.Mb.onerror||a;v.Mb.onerror=function(G,J,Q){x.error({wi:G+
" - "+J+":"+Q});D.apply(v.Mb,arguments)};v.write(y,function(){e(C,z);v.Mb.onerror=D;x.done();v=null;r()});return v}var q=0,u=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=f(x,h);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.vi?w[0]:w;var B=[w,y,x];w.Dh={cancel:function(){B.stream?B.stream.abort():B[1]=a}};x.lg(B);u.push(B);v||r();return w.Dh},{streams:{},yi:u,li:m})}();we=l.postscribe}})();var xe=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,ye={Fn:"function",DustMap:"Object",List:"Array"},F=function(a,b,c){for(var d=0;d<b.length;d++){var e=xe.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],n=typeof l;if(null===l||"undefined"===n){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var m=typeof l;l instanceof cb?m="Fn":l instanceof k?m="List":l instanceof hb?m="DustMap":
l instanceof sb&&(m="OpaqueValue");if(m!=h)throw Error("Error in "+a+". Argument "+f+" has type "+m+", which does not match required type "+(ye[h]||h)+".");}}};function ze(a){return""+a}
function Ae(a,b){var c=[];return c};var Be=function(a,b){var c=new cb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},Ce=function(a,b){var c=new hb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Fa(e)?c.set(d,Be(a+"_"+d,e)):(Ga(e)||p(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var De=function(a,b){F(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new hb;return d=Ce("AssertApiSubject",c)};var Ee=function(a,b){F(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new hb;return d=Ce("AssertThatSubject",c)};function Fe(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(tb(arguments[d],c));return ub(a.apply(null,b))}}var He=function(){for(var a=Math,b=Ge,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Fe(a[e].bind(a)))}return c};var Ie=function(a){var b;return b};var Je=function(a){var b;return b};var Ke=function(a){F(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var Le=function(a){F(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var Me=function(a){F(this.i.a,["message:?string"],arguments);};var Ne=function(a,b){F(this.i.a,["min:!number","max:!number"],arguments);return Ka(a,b)};var Oe=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.ig.apply(null,Array.prototype.slice.call(arguments,1))};var Pe=function(){Oe(this,"read_container_data");var a=new hb;a.set("containerId",'GTM-7BF3X');a.set("version",'344');a.set("environmentName",'');a.set("debugMode",Yd);a.set("previewMode",$d);a.set("environmentMode",Zd);a.m=!0;return a};var Qe=function(){return(new Date).getTime()};var Re=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof cb)return"function";if(a instanceof sb){a=a.oa;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var Se=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Yd||$d)&&a.call(this,e.message)}}}return{parse:b(function(c){return ub(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(tb(c))})}};var Te=function(a){return Qa(tb(a,this.m))};var Ue=function(a){return Number(tb(a,this.m))};var Ve=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var We=function(a,b,c){var d=null,e=!1;return e?d:null};var Ge="floor ceil round max min abs pow sqrt".split(" ");var Xe=function(){var a={};return{Rg:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Vh:function(b,c){a[b]=c},reset:function(){a={}}}},Ye=function(a,b){F(this.i.a,["apiName:!string","mock:?*"],arguments);};var Ze=function(){this.a={};this.i={}};Ze.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};
Ze.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.i.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.a[a]=c?void 0:Fa(b)?Be(a,b):Ce(a,b)};
var af=function(a){var b=$e;if(a.i.hasOwnProperty("getUserAgent"))throw"Attempting to add a private function which already exists: getUserAgent.";if(a.a.hasOwnProperty("getUserAgent"))throw"Attempting to add a private function with an existing API name: getUserAgent.";a.i.getUserAgent=Fa(b)?Be("getUserAgent",b):Ce("getUserAgent",b)};function bf(){var a={};return a};var H={cb:"_ee",$c:"_syn",ki:"_uei",ii:"_pci",Jc:"event_callback",Ub:"event_timeout",ka:"gtag.config"};H.fa="allow_ad_personalization_signals";H.Yc="restricted_data_processing";H.jb="allow_google_signals";H.ia="cookie_expires";H.Rb="cookie_update";H.Bb="session_duration";H.na="user_properties";H.Ha="transport_url";H.O="ads_data_redaction";H.o="ad_storage";
H.M="analytics_storage";H.lf="region";H.pf="wait_for_update";H.bf=[H.fa,H.jb,H.Rb];H.cf=[H.ia,H.Ub,H.Bb];var cf={},df=function(a,b){cf[a]=cf[a]||[];cf[a][b]=!0},ef=function(a){for(var b=[],c=cf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var I=function(a){df("GTM",a)};var ff=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,ff);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};qa(ff,Error);ff.prototype.name="CustomError";var gf=function(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");ff.call(this,d+c[e])};qa(gf,ff);gf.prototype.name="AssertionError";var hf=function(a,b){throw new gf("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var jf=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var kf;var lf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var mf;a:{var nf=ma.navigator;if(nf){var of=nf.userAgent;if(of){mf=of;break a}}mf=""}var pf=function(a){return-1!=mf.indexOf(a)};var rf=function(a,b,c){this.a=c===qf?a:""};rf.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var sf=function(a){if(a instanceof rf&&a.constructor===rf)return a.a;var b=typeof a;hf("expected object of type SafeHtml, got '"+a+"' of type "+("object"!=b?b:a?Array.isArray(a)?"array":b:"null"));return"type_error:SafeHtml"},qf={},tf=new rf(ma.trustedTypes&&ma.trustedTypes.emptyHTML||"",0,qf);var uf={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},vf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;var c=a.firstChild.firstChild;a.innerHTML=sf(tf);return!c.parentElement}),wf=function(a,b){if(a.tagName&&uf[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+
a.tagName+".");if(vf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=sf(b)};var xf=function(a){var b;if(void 0===kf){var c=null,d=ma.trustedTypes;if(d&&d.createPolicy){try{c=d.createPolicy("goog#html",{createHTML:ra,createScript:ra,createScriptURL:ra})}catch(f){ma.console&&ma.console.error(f.message)}kf=c}else kf=c}var e=(b=kf)?b.createHTML(a):a;return new rf(e,null,qf)};var A=window,L=document,yf=navigator,zf=L.currentScript&&L.currentScript.src,Af=function(a,b){var c=A[a];A[a]=void 0===c?b:c;return A[a]},Bf=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Cf=function(a,b,c){var d=L.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Bf(d,b);c&&(d.onerror=c);var e;if(null===pa)b:{var f=ma.document,g=f.querySelector&&f.querySelector("script[nonce]");
if(g){var h=g.nonce||g.getAttribute("nonce");if(h&&na.test(h)){pa=h;break b}}pa=""}e=pa;e&&d.setAttribute("nonce",e);var l=L.getElementsByTagName("script")[0]||L.body||L.head;l.parentNode.insertBefore(d,l);return d},Df=function(){if(zf){var a=zf.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Ef=function(a,b){var c=L.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=L.body&&L.body.lastChild||
L.body||L.head;d.parentNode.insertBefore(c,d);Bf(c,b);void 0!==a&&(c.src=a);return c},Ff=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Gf=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Hf=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},M=function(a){A.setTimeout(a,0)},If=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Jf=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Kf=function(a){var b=L.createElement("div");wf(b,xf("A<div>"+a+"</div>"));b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Lf=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},Mf=function(a){yf.sendBeacon&&yf.sendBeacon(a)||Ff(a)},Nf=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Of={},Pf=function(a){return void 0==Of[a]?!1:Of[a]};var Qf=[];function Rf(){var a=Af("google_tag_data",{});a.ics||(a.ics={entries:{},set:Sf,update:Tf,addListener:Uf,notifyListeners:Vf,active:!1});return a.ics}
function Sf(a,b,c,d,e,f){var g=Rf();g.active=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},n=l.region,m=c&&p(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(m===e||(m===d?n!==e:!m&&!n)){var r=!!(f&&0<f&&void 0===l.update),t={region:m,initial:"granted"===b,update:l.update,quiet:r};h[a]=t;r&&A.setTimeout(function(){h[a]===t&&t.quiet&&(t.quiet=!1,Wf(a),Vf(),df("TAGGING",2))},f)}}}
function Tf(a,b){var c=Rf();c.active=!0;if(void 0!=b){var d=Xf(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=Xf(a);f.quiet?(f.quiet=!1,Wf(a)):g!==d&&Wf(a)}}function Uf(a,b){Qf.push({oe:a,Mg:b})}function Wf(a){for(var b=0;b<Qf.length;++b){var c=Qf[b];Ha(c.oe)&&-1!==c.oe.indexOf(a)&&(c.Qe=!0)}}function Vf(a){for(var b=0;b<Qf.length;++b){var c=Qf[b];if(c.Qe){c.Qe=!1;try{c.Mg({ne:a})}catch(d){}}}}
var Xf=function(a){var b=Rf().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},Yf=function(a){return!(Rf().entries[a]||{}).quiet},Zf=function(){return Pf("gtag_cs_api")?Rf().active:!1},$f=function(a,b){Rf().addListener(a,b)},ag=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Yf(b[e]))return!0;return!1}if(c()){var d=!1;$f(b,function(e){d||c()||(d=!0,a(e))})}else a({})},bg=function(a,b){if(!1===Xf(b)){var c=!1;$f([b],function(d){!c&&Xf(b)&&(a(d),c=!0)})}};var cg=[H.o,H.M],dg=function(a){var b=a[H.lf];b&&I(40);var c=a[H.pf];c&&I(41);for(var d=Ha(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<cg.length;f++){var g=cg[f],h=a[cg[f]],l=d[e];Rf().set(g,h,l,"MX","MX-CMX",c)}},eg=function(a,b){for(var c=0;c<cg.length;c++){var d=cg[c],e=a[cg[c]];Rf().update(d,e)}Rf().notifyListeners(b)},fg=function(a){var b=Xf(a);return void 0!=b?b:!0},gg=function(){for(var a=[],b=0;b<cg.length;b++){var c=Xf(cg[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},hg=function(a,b){ag(a,b)};var jg=function(a){return ig?L.querySelectorAll(a):null},kg=function(a,b){if(!ig)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!L.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},lg=!1;if(L.querySelectorAll)try{var mg=L.querySelectorAll(":root");mg&&1==mg.length&&mg[0]==L.documentElement&&(lg=!0)}catch(a){}var ig=lg;var Qd={},R=null,Ag=Math.random();Qd.C="GTM-7BF3X";Qd.$b="990";Qd.gi="";var Bg={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Cg={__paused:!0,__tg:!0},Dg;for(Dg in Bg)Bg.hasOwnProperty(Dg)&&(Cg[Dg]=!0);var Eg="www.googletagmanager.com/gtm.js";
var Fg=Eg,Gg=null,Hg=null,Ig="//www.googletagmanager.com/a?id="+Qd.C+"&cv=344",Jg={},Kg={},Lg=function(){var a=R.sequence||1;R.sequence=a+1;return a};
var Mg=function(){return"&tc="+pd.filter(function(a){return a}).length},Pg=function(){2022<=Ng().length&&Og()},Rg=function(){Qg||(Qg=A.setTimeout(Og,500))},Og=function(){Qg&&(A.clearTimeout(Qg),Qg=void 0);void 0===Sg||Tg[Sg]&&!Ug&&!Vg||(Wg[Sg]||Xg.hh()||0>=Yg--?(I(1),Wg[Sg]=!0):(Xg.Lh(),Ff(Ng()),Tg[Sg]=!0,Zg=$g=ah=Vg=Ug=""))},Ng=function(){var a=Sg;if(void 0===a)return"";var b=ef("GTM"),c=ef("TAGGING");return[bh,Tg[a]?"":"&es=1",ch[a],b?"&u="+b:"",c?"&ut="+c:"",Mg(),Ug,Vg,ah?ah:"",$g,Zg,"&z=0"].join("")},
dh=function(){return[Ig,"&v=3&t=t","&pid="+Ka(),"&rv="+Qd.$b].join("")},eh="0.005000">Math.random(),bh=dh(),fh=function(){bh=dh()},Tg={},Ug="",Vg="",Zg="",$g="",ah="",Sg=void 0,ch={},Wg={},Qg=void 0,Xg=function(a,b){var c=0,d=0;return{hh:function(){if(c<a)return!1;Ua()-d>=b&&(c=0);return c>=a},Lh:function(){Ua()-d>=b&&(c=0);c++;d=Ua()}}}(2,1E3),Yg=1E3,gh=function(a,b){if(eh&&!Wg[a]&&Sg!==a){Og();Sg=a;Zg=Ug="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";ch[a]="&e="+c+"&eid="+
a;Rg()}},hh=function(a,b,c){if(eh&&!Wg[a]&&b){a!==Sg&&(Og(),Sg=a);var d,e=String(b[Bd.sa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;Ug=Ug?Ug+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(rd[g]?"1":"2")+d;Zg=Zg?Zg+"."+h:"&ti="+h;Rg();Pg()}},ih=function(a,b,c){if(eh&&!Wg[a]){a!==Sg&&(Og(),Sg=
a);var d=c+b;Vg=Vg?Vg+"."+d:"&epr="+d;Rg();Pg()}},jh=function(a,b,c){if(eh&&!Wg[a]){a!==Sg&&(Og(),Sg=a);var d={aev:"1",c:"2",jsm:"3",v:"4",j:"5",smm:"6",rmm:"7",input:"8"}[b]||"0",e;e=c instanceof A.Element?"1":c instanceof A.Event?"2":c instanceof A.RegExp?"3":c===A?"4":c===L?"5":c instanceof A.Promise?"6":c instanceof A.Storage?"7":c instanceof A.Date?"8":c instanceof A.History?"9":c instanceof A.Performance?"a":c instanceof A.Crypto?"b":c instanceof A.Location?"c":c instanceof A.Navigator?"d":
"object"!==typeof c||lb(c)?"0":"e";ah=ah?ah+"."+d+e:"&pcr="+d+e;Rg();Pg()}};var kh={},lh=new La,mh={},nh={},qh={name:"dataLayer",set:function(a,b){E(ab(a,b),mh);oh()},get:function(a){return ph(a,2)},reset:function(){lh=new La;mh={};oh()}},ph=function(a,b){if(2!=b){var c=lh.get(a);eh&&c!==rh(a.split("."))&&I(5);return c}return rh(a.split("."))},rh=function(a){for(var b=mh,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b},sh=function(a,b){nh.hasOwnProperty(a)||(lh.set(a,b),E(ab(a,b),mh),oh())},oh=function(a){Na(nh,function(b,c){lh.set(b,c);
E(ab(b,void 0),mh);E(ab(b,c),mh);a&&delete nh[b]})},th=function(a,b,c){kh[a]=kh[a]||{};var d=1!==c?rh(b.split(".")):lh.get(b);"array"===jb(d)||"object"===jb(d)?kh[a][b]=E(d):kh[a][b]=d},uh=function(a,b){if(kh[a])return kh[a][b]},vh=function(a,b){kh[a]&&delete kh[a][b]};var yh=/:[0-9]+$/,zh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Ch=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ah(a.protocol)||Ah(A.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
A.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||A.location.hostname).replace(yh,"").toLowerCase());return Bh(a,b,c,d,e)},Bh=function(a,b,c,d,e){var f,g=Ah(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Dh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(yh,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||df("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Ia(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=zh(f,e,!1,void 0));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Ah=function(a){return a?a.replace(":",
"").toLowerCase():""},Dh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Eh=function(a){var b=L.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||df("TAGGING",1),c="/"+c);var d=b.hostname.replace(yh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Fh=function(a){function b(n){var m=n.split("=")[0];return 0>d.indexOf(m)?n:m+"=0"}function c(n){return n.split("&").map(b).filter(function(m){return void 0!=
m}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=Eh(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function Gh(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Ih=function(a,b,c,d){return Hh(d)?Gh(a,String(b||document.cookie),c):[]},Mh=function(a,b,c,d,e){if(Hh(e)){var f=Jh(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Kh(f,function(g){return g.ic},b);if(1===f.length)return f[0].id;f=Kh(f,function(g){return g.Db},c);return f[0]?f[0].id:void 0}}};function Nh(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Ih(b,f,!1,d).indexOf(c)}
var Rh=function(a,b,c,d){function e(w,y,x){if(null==x)return delete h[y],w;h[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete h[y],w;h[y]=!0;return w+"; "+y}if(!Hh(c.Ka))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Oh(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.sh);g=e(g,"samesite",
c.Ph);c.Sh&&(g=f(g,"secure"));var n=c.domain;if("auto"===n){for(var m=Ph(),r=void 0,t=!1,q=0;q<m.length;++q){var u="none"!==m[q]?m[q]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(w){r=w;continue}t=!0;if(!Qh(u,c.path)&&Nh(v,a,b,c.Ka))return 0}if(r&&!t)throw r;return 1}n&&"none"!==n&&(g=e(g,"domain",n));g=f(g,c.flags);d&&d(a,h);return Qh(n,c.path)?1:Nh(g,a,b,c.Ka)?0:1},Sh=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Rh(a,b,c)};
function Kh(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function Jh(a,b,c){for(var d=[],e=Ih(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),ic:1*l[0]||1,Db:1*l[1]||1}))}}return d}
var Oh=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Th=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Uh=/(^|\.)doubleclick\.net$/i,Qh=function(a,b){return Uh.test(document.location.hostname)||"/"===b&&Th.test(a)},Ph=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Uh.test(e)||Th.test(e)||a.push("none");
return a},Hh=function(a){if(!Pf("gtag_cs_api")||!a||!Zf())return!0;if(!Yf(a))return!1;var b=Xf(a);return null==b?!0:!!b};var Vh=function(){for(var a=yf.userAgent+(L.cookie||"")+(L.referrer||""),b=a.length,c=A.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ua()/1E3)].join(".")},Yh=function(a,b,c,d,e){var f=Wh(b);return Mh(a,f,Xh(c),d,e)},Zh=function(a,b,c,d){var e=""+Wh(c),f=Xh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Wh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Xh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function $h(a,b,c){var d,e=a.Ab;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ua())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var ai=["1"],bi={},fi=function(a){var b=ci(a.prefix);bi[b]||di(b,a.path,a.domain)||(ei(b,Vh(),a),di(b,a.path,a.domain))};function ei(a,b,c){var d=Zh(b,"1",c.domain,c.path),e=$h(c);e.Ka="ad_storage";Sh(a,d,e)}function di(a,b,c){var d=Yh(a,b,c,ai,"ad_storage");d&&(bi[a]=d);return d}function ci(a){return(a||"_gcl")+"_au"};function gi(){for(var a=hi,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function ii(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var hi,ji;function ki(a){hi=hi||ii();ji=ji||gi();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,h=e?a.charCodeAt(c+2):0,l=f>>2,n=(f&3)<<4|g>>4,m=(g&15)<<2|h>>6,r=h&63;e||(r=64,d||(m=64));b.push(hi[l],hi[n],hi[m],hi[r])}return b.join("")}
function li(a){function b(l){for(;d<a.length;){var n=a.charAt(d++),m=ji[n];if(null!=m)return m;if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n);}return l}hi=hi||ii();ji=ji||gi();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var mi;var qi=function(){var a=ni,b=oi,c=pi(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Gf(L,"mousedown",d);Gf(L,"keyup",d);Gf(L,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},ri=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};pi().decorators.push(f)},si=function(a,b,c){for(var d=pi().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,n=a,m=!!g.sameHost;if(l&&(m||n!==L.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(n)){h=!0;break a}}else if(0<=n.indexOf(l[r])||m&&0<=l[r].indexOf(n)){h=!0;break a}h=!1}if(h){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&Xa(e,g.callback())}}return e},pi=function(){var a=Af("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var ti=/(.*?)\*(.*?)\*(.*)/,ui=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,vi=/^(?:www\.|m\.|amp\.)+/,wi=/([^?#]+)(\?[^#]*)?(#.*)?/;function xi(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var zi=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(ki(String(d))))}var e=b.join("*");return["1",yi(e),e].join("*")},yi=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=mi)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}mi=d;for(var l=4294967295,n=0;n<c.length;n++)l=l>>>8^mi[(l^c.charCodeAt(n))&255];return((l^-1)>>>0).toString(36)},Bi=function(){return function(a){var b=Eh(A.location.href),c=b.search.replace("?",""),d=zh(c,"_gl",!1,!0)||"";a.query=Ai(d)||{};var e=Ch(b,"fragment").match(xi("_gl"));a.fragment=Ai(e&&e[3]||"")||{}}},Ci=function(a){var b=Bi(),c=pi();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Xa(d,e.query),a&&Xa(d,e.fragment));return d},
Ai=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=ti.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var n=g[2],m=0;m<b;++m)if(n===yi(h,m)){l=!0;break a}l=!1}if(l){for(var r={},t=h?h.split("*"):[],q=0;q<t.length;q+=2)r[t[q]]=li(t[q+1]);return r}}}}catch(u){}};
function Di(a,b,c,d){function e(m){var r=m,t=xi(a).exec(r),q=r;if(t){var u=t[2],v=t[4];q=t[1];v&&(q=q+u+v)}m=q;var w=m.charAt(m.length-1);m&&"&"!==w&&(m+="&");return m+n}d=void 0===d?!1:d;var f=wi.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",n=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function Ei(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=si(b,1,c),e=si(b,2,c),f=si(b,3,c);if(Ya(d)){var g=zi(d);c?Fi("_gl",g,a):Gi("_gl",g,a,!1)}if(!c&&Ya(e)){var h=zi(e);Gi("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var n=l,m=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){Gi(n,m,r,void 0);break a}if("form"===r.tagName.toLowerCase()){Fi(n,m,r);break a}}"string"==typeof r&&Di(n,m,r,void 0)}}
function Gi(a,b,c,d){if(c.href){var e=Di(a,b,c.href,void 0===d?!1:d);lf.test(e)&&(c.href=e)}}
function Fi(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=L.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var n=Di(a,b,c.action);lf.test(n)&&(c.action=n)}}}
var ni=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Ei(e,e.hostname)}}catch(g){}},oi=function(a){try{if(a.action){var b=Ch(Eh(a.action),"host");Ei(a,b)}}catch(c){}},Hi=function(a,b,c,d){qi();ri(a,b,"fragment"===c?2:1,!!d,!1)},Ii=function(a,b){qi();ri(a,[Bh(A.location,"host",!0)],b,!0,!0)},Ji=function(){var a=L.location.hostname,b=ui.exec(L.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(vi,""),l=e.replace(vi,""),n;if(!(n=h===l)){var m="."+l;n=h.substring(h.length-m.length,h.length)===m}return n},Ki=function(a,b){return!1===a?!1:a||b||Ji()};var Li=/^\w+$/,Mi=/^[\w-]+$/,Ni=/^~?[\w-]+$/,Oi={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Pi=function(){if(!Pf("gtag_cs_api")||!Zf())return!0;var a=Xf("ad_storage");return null==a?!0:!!a},Qi=function(a,b){Yf("ad_storage")?Pi()?a():bg(a,"ad_storage"):b?df("TAGGING",3):ag(function(){Qi(a,!0)},["ad_storage"])},Ti=function(a){var b=[];if(!L.cookie)return b;var c=Ih(a,L.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=Ri(c[d]);e&&-1===Ia(b,e)&&b.push(e)}return Si(b)};
function Ui(a){return a&&"string"==typeof a&&a.match(Li)?a:"_gcl"}
var Wi=function(){var a=Eh(A.location.href),b=Ch(a,"query",!1,void 0,"gclid"),c=Ch(a,"query",!1,void 0,"gclsrc"),d=Ch(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||zh(e,"gclid",!1,void 0);c=c||zh(e,"gclsrc",!1,void 0)}return Vi(b,c,d)},Vi=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Mi))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Pf("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Yi=function(a){var b=Wi();Qi(function(){Xi(b,a)})};
function Xi(a,b,c){function d(l,n){var m=Zi(l,e);m&&Sh(m,n,f)}b=b||{};var e=Ui(b.prefix);c=c||Ua();var f=$h(b,c,!0);f.Ka="ad_storage";var g=Math.round(c/1E3),h=function(l){return["GCL",g,l].join(".")};a.aw&&(!0===b.Ei?d("aw",h("~"+a.aw[0])):d("aw",h(a.aw[0])));a.dc&&d("dc",h(a.dc[0]));a.gf&&d("gf",h(a.gf[0]));a.ha&&d("ha",h(a.ha[0]));a.gp&&d("gp",h(a.gp[0]))}
var aj=function(a,b){var c=Ci(!0);Qi(function(){for(var d=Ui(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Oi[f]){var g=Zi(f,d),h=c[g];if(h){var l=Math.min($i(h),Ua()),n;b:{for(var m=l,r=Ih(g,L.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if($i(r[t])>m){n=!0;break b}n=!1}if(!n){var q=$h(b,l,!0);q.Ka="ad_storage";Sh(g,h,q)}}}}Xi(Vi(c.gclid,c.gclsrc),b)})},Zi=function(a,b){var c=Oi[a];if(void 0!==c)return b+c},$i=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Ri(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var bj=function(a,b,c,d,e){if(Ha(b)){var f=Ui(e),g=function(){for(var h={},l=0;l<a.length;++l){var n=Zi(a[l],f);if(n){var m=Ih(n,L.cookie,void 0,"ad_storage");m.length&&(h[n]=m.sort()[m.length-1])}}return h};Qi(function(){Hi(g,b,c,d)})}},Si=function(a){return a.filter(function(b){return Ni.test(b)})},cj=function(a,b){for(var c=Ui(b.prefix),d={},e=0;e<a.length;e++)Oi[a[e]]&&(d[a[e]]=Oi[a[e]]);Qi(function(){Na(d,function(f,g){var h=Ih(c+g,L.cookie,void 0,"ad_storage");if(h.length){var l=h[0],n=$i(l),
m={};m[f]=[Ri(l)];Xi(m,b,n)}})})};function dj(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var ej=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(Zf()){var c=Wi();if(dj(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);Ii(function(){return d},3);Ii(function(){var e={};return e._up="1",e},1)}}},fj=function(){var a;if(Pi()){for(var b=[],c=L.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Jd:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].Jd]||(g[b[h].Jd]=[]),g[b[h].Jd].push({timestamp:l[1],Og:l[2]}))}a=g}else a={};return a};var gj=/^\d+\.fls\.doubleclick\.net$/;function hj(a,b){Yf(H.o)?fg(H.o)?a():bg(a,H.o):b?I(42):hg(function(){hj(a,!0)},[H.o])}function ij(a){var b=Eh(A.location.href),c=Ch(b,"host",!1);if(c&&c.match(gj)){var d=Ch(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function jj(a,b,c){if("aw"==a||"dc"==a){var d=ij("gcl"+a);if(d)return d.split(".")}var e=Ui(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!fg(H.o)&&c,g;g=Wi()[a]||[];if(0<g.length)return f?["0"]:g}var h=Zi(a,e);return h?Ti(h):[]}
var kj=function(a){var b=ij("gac");if(b)return!fg(H.o)&&a?"0":decodeURIComponent(b);var c=fj(),d=[];Na(c,function(e,f){for(var g=[],h=0;h<f.length;h++)g.push(f[h].Og);g=Si(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},lj=function(a,b){var c=Wi().dc||[];hj(function(){fi(b);var d=bi[ci(b.prefix)],e=!1;if(d&&0<c.length){var f=R.joined_au=R.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+d;Mf(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var n=ci(b.prefix),m=bi[n];m&&ei(n,m,b)}})};var mj=/[A-Z]+/,nj=/\s/,oj=function(a){if(p(a)&&(a=Ta(a),!nj.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(mj.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],D:d}}}}},qj=function(a){for(var b={},c=0;c<a.length;++c){var d=oj(a[c]);d&&(b[d.id]=d)}pj(b);var e=[];Na(b,function(f,g){e.push(g)});return e};
function pj(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.D[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var rj=function(){var a=!1;return a};var tj=function(a,b,c,d){return(2===sj()||d||"http:"!=A.location.protocol?a:b)+c},sj=function(){var a=Df(),b;if(1===a)a:{var c=Fg;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=L.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Hj=function(a){return fg(H.o)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=Fh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})};var Ij=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Jj={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Kj={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Lj="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Nj=function(a){var b;b||(b=ph("gtm.whitelist"));b&&I(9);
var c=b&&Za(Sa(b),Jj),d;d||(d=ph("gtm.blacklist"));d||(d=ph("tagTypeBlacklist"))&&I(3);d?I(8):d=[];Mj()&&(d=Sa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Ia(Sa(d),"google")&&I(2);var e=d&&Za(Sa(d),Kj),f={};return function(g){var h=
g&&g[Bd.sa];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Kg[h]||[],n=a(h,l);if(b){var m;if(m=n)a:{if(0>Ia(c,h))if(l&&0<l.length)for(var r=0;r<l.length;r++){if(0>Ia(c,l[r])){I(11);m=!1;break a}}else{m=!1;break a}m=!0}n=m}var t=!1;if(d){var q=0<=Ia(e,h);if(q)t=q;else{var u=Ma(e,l||[]);u&&I(10);t=u}}var v=!n||t;v||!(0<=Ia(l,"sandboxedScripts"))||c&&-1!==Ia(c,"sandboxedScripts")||(v=Ma(e,Lj));return f[h]=v}},Mj=function(){return Ij.test(A.location&&A.location.hostname)};var Oj={active:!0,isAllowed:function(){return!0}},Pj=function(a){var b=R.zones;return b?b.checkState(Qd.C,a):Oj},Qj=function(a){var b=R.zones;!b&&a&&(b=R.zones=a());return b};var Rj=function(){};var Sj=!1,Tj=0,Uj=[];function Vj(a){if(!Sj){var b=L.createEventObject,c="complete"==L.readyState,d="interactive"==L.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Sj=!0;for(var e=0;e<Uj.length;e++)M(Uj[e])}Uj.push=function(){for(var f=0;f<arguments.length;f++)M(arguments[f]);return 0}}}function Wj(){if(!Sj&&140>Tj){Tj++;try{L.documentElement.doScroll("left"),Vj()}catch(a){A.setTimeout(Wj,50)}}}var Xj=function(a){Sj?a():Uj.push(a)};var Yj={},Zj={},ak=function(a,b,c,d){if(!Zj[a]||Cg[b]||"__zone"===b)return-1;var e={};lb(d)&&(e=E(d,e));e.id=c;e.status="timeout";return Zj[a].tags.push(e)-1},bk=function(a,b,c,d){if(Zj[a]){var e=Zj[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function ck(a){for(var b=Yj[a]||[],c=0;c<b.length;c++)b[c]();Yj[a]={push:function(d){d(Qd.C,Zj[a])}}}
var fk=function(a,b,c){Zj[a]={tags:[]};Fa(b)&&dk(a,b);c&&A.setTimeout(function(){return ck(a)},Number(c));return ek(a)},dk=function(a,b){Yj[a]=Yj[a]||[];Yj[a].push(Wa(function(){return M(function(){b(Qd.C,Zj[a])})}))};function ek(a){var b=0,c=0,d=!1;return{add:function(){c++;return Wa(function(){b++;d&&b>=c&&ck(a)})},hg:function(){d=!0;b>=c&&ck(a)}}};var gk=function(){function a(d){return!Ga(d)||0>d?0:d}if(!R._li&&A.performance&&A.performance.timing){var b=A.performance.timing.navigationStart,c=Ga(qh.get("gtm.start"))?qh.get("gtm.start"):0;R._li={cst:a(c-b),cbt:a(Hg-b)}}};var kk={},lk=function(){return A.GoogleAnalyticsObject&&A[A.GoogleAnalyticsObject]},mk=!1;
var nk=function(a){A.GoogleAnalyticsObject||(A.GoogleAnalyticsObject=a||"ga");var b=A.GoogleAnalyticsObject;if(A[b])A.hasOwnProperty(b)||I(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);A[b]=c}gk();return A[b]},ok=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=lk();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var qk=function(a){},pk=function(){return A.GoogleAnalyticsObject||"ga"},rk=function(a,b){return function(){var c=lk(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};var wk=function(){return!1},xk=function(){var a={};return function(b,c,d){}};function yk(a,b,c,d){var e=pd[a],f=zk(a,b,c,d);if(!f)return null;var g=xd(e[Bd.$d],c,[]);if(g&&g.length){var h=g[0];f=yk(h.index,{J:f,I:1===h.ve?b.terminate:f,terminate:b.terminate},c,d)}return f}
function zk(a,b,c,d){function e(){if(f[Bd.Bf])h();else{var w=yd(f,c,[]);var B=ak(c.id,String(f[Bd.sa]),Number(f[Bd.ae]),w[Bd.Cf]),C=!1;w.vtp_gtmOnSuccess=function(){if(!C){C=!0;var G=Ua()-D;hh(c.id,pd[a],"5");bk(c.id,B,"success",
G);g()}};w.vtp_gtmOnFailure=function(){if(!C){C=!0;var G=Ua()-D;hh(c.id,pd[a],"6");bk(c.id,B,"failure",G);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;hh(c.id,f,"1");var z=function(){var G=Ua()-D;hh(c.id,f,"7");bk(c.id,B,"exception",G);C||(C=!0,h())};var D=Ua();try{wd(w,c)}catch(G){z(G)}}}var f=pd[a],g=b.J,h=b.I,l=b.terminate;if(c.qd(f))return null;var n=xd(f[Bd.be],c,[]);if(n&&n.length){var m=n[0],r=yk(m.index,{J:g,I:h,terminate:l},c,d);if(!r)return null;g=r;h=2===m.ve?l:r}if(f[Bd.Wd]||f[Bd.Gf]){var t=f[Bd.Wd]?qd:c.Xh,q=g,u=h;if(!t[a]){e=Wa(e);
var v=Ak(a,t,e);g=v.J;h=v.I}return function(){t[a](q,u)}}return e}function Ak(a,b,c){var d=[],e=[];b[a]=Bk(d,e,c);return{J:function(){b[a]=Ck;for(var f=0;f<d.length;f++)d[f]()},I:function(){b[a]=Dk;for(var f=0;f<e.length;f++)e[f]()}}}function Bk(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ck(a){a()}function Dk(a,b){b()};var Gk=function(a,b){for(var c=[],d=0;d<pd.length;d++)if(a.Aa[d]){var e=pd[d];var f=b.add();try{var g=yk(d,{J:f,I:f,terminate:f},a,d);g?c.push({Ze:d,Re:zd(e),kc:g}):(Ek(d,a),f())}catch(l){f()}}b.hg();c.sort(Fk);for(var h=0;h<c.length;h++)c[h].kc();return 0<c.length};function Fk(a,b){var c,d=b.Re,e=a.Re;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.Ze,h=b.Ze;f=g>h?1:g<h?-1:0}return f}
function Ek(a,b){if(!eh)return;var c=function(d){var e=b.qd(pd[d])?"3":"4",f=xd(pd[d][Bd.$d],b,[]);f&&f.length&&c(f[0].index);hh(b.id,pd[d],e);var g=xd(pd[d][Bd.be],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Hk=!1,Ik=function(a,b,c,d){if("gtm.js"==b){if(Hk)return!1;Hk=!0}var e=Pj(a),f=!1;if(!e.active){var g=!0;if("gtm.js"===b){for(var h=0;h<pd.length;h++)if(Bg[String(pd[h][String(Bd.sa)])]){I(50);break}}if(g)return!1}gh(a,b);var l=fk(a,c,d);th(a,"event",
1);th(a,"ecommerce",1);th(a,"gtm");var n={id:a,name:b,qd:Nj(e.isAllowed),Aa:[],Xh:[],Ie:function(){I(6)},me:function(u){eh&&(wb(u)||jh(a,"input",u))}};n.Aa=Ld(n);var t=Gk(n,l);"gtm.js"!==b&&"gtm.sync"!==b||qk(Qd.C);if(!t)return t;for(var q=0;q<n.Aa.length;q++)if(n.Aa[q]&&pd[q]&&!Cg[String(pd[q][Bd.sa])])return!0;return!1};function Jk(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return Eh(""+c+b).href}}function Kk(a,b){return Lk()?Jk(a,b):void 0}function Lk(){var a=!1;return a};var Mk=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.J=function(){};this.I=function(){};this.eventId=void 0},Nk=function(a){var b=new Mk;b.eventModel=a;return b},Ok=function(a,b){a.targetConfig=b;return a},Pk=function(a,b){a.containerConfig=b;return a},Qk=function(a,b){a.a=b;return a},Rk=function(a,b){a.globalConfig=b;return a},Sk=function(a,b){a.J=b;return a},Tk=function(a,b){a.I=b;return a};
Mk.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Uk=function(a){function b(e){Na(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Na(c,function(e){d.push(e)});return d};var Vk;if(3===Qd.$b.length)Vk="g";else{var Wk="G";Vk=Wk}
var Xk={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Vk,OPT:"o"},Yk=function(a){var b=Qd.C.split("-"),c=b[0].toUpperCase(),d=Xk[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Qd.$b.length){var g="w";f="2"+g}else f="";return f+d+Qd.$b+e};var Zk=function(a,b){a.addEventListener&&a.addEventListener("message",b,!1)};var $k=function(){return pf("iPhone")&&!pf("iPod")&&!pf("iPad")};pf("Opera");pf("Trident")||pf("MSIE");pf("Edge");!pf("Gecko")||-1!=mf.toLowerCase().indexOf("webkit")&&!pf("Edge")||pf("Trident")||pf("MSIE")||pf("Edge");-1!=mf.toLowerCase().indexOf("webkit")&&!pf("Edge")&&pf("Mobile");pf("Macintosh");pf("Windows");pf("Linux")||pf("CrOS");var al=ma.navigator||null;al&&(al.appVersion||"").indexOf("X11");pf("Android");$k();pf("iPad");pf("iPod");$k()||pf("iPad")||pf("iPod");mf.toLowerCase().indexOf("kaios");var bl=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var cl=function(){};var dl=function(a){this.i=a;this.a=null;this.s={};this.F=0;this.m=null};la(dl,cl);var fl=function(a){return"function"===typeof a.i.__tcfapi||null!=el(a)};
dl.prototype.addEventListener=function(a){gl(this,"addEventListener",function(b,c){var d=c?b:{};d.internalErrorState=void 0!==d.tcString&&"string"!==typeof d.tcString||void 0!==d.gdprApplies&&"boolean"!==typeof d.gdprApplies||void 0!==d.listenerId&&"number"!==typeof d.listenerId||void 0!==d.addtlConsent&&"string"!==typeof d.addtlConsent?2:d.cmpStatus&&"error"!==d.cmpStatus?0:3;0!==d.internalErrorState&&(d.tcString="tcunavailable");a(d)})};
dl.prototype.removeEventListener=function(a){a&&a.listenerId&&gl(this,"removeEventListener",null,a.listenerId)};
var il=function(a,b,c){if(!a.purpose||!a.vendor)return!1;var d=hl(a.vendor.consents,void 0===c?"755":c);return d&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:d&&hl(a.purpose.consents,b)},jl=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));return 0===h?il(a,b,d):1===h?
a.purpose&&a.vendor?hl(a.purpose.legitimateInterests,b)&&hl(a.vendor.legitimateInterests,void 0===d?"755":d):!1:!0},hl=function(a,b){return!(!a||!a[b])},gl=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.i.__tcfapi){var e=a.i.__tcfapi;e(b,2,c,d)}else if(el(a)){kl(a);var f=++a.F;a.s[f]=c;if(a.a){var g={};a.a.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},el=function(a){if(a.a)return a.a;a.a=bl(a.i,"__tcfapiLocator");return a.a},kl=function(a){a.m||
(a.m=function(b){try{var c,d;"string"===typeof b.data?d=JSON.parse(b.data):d=b.data;c=d.__tcfapiReturn;a.s[c.callId](c.returnValue,c.success)}catch(e){}},Zk(a.i,a.m))};var ll={1:0,3:0,4:0,7:3,9:3,10:3};function ml(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var nl=ml("",550),ol=ml("",500);function pl(){var a=R.tcf||{};return R.tcf=a}
var ql=function(a,b){this.m=a;this.a=b;this.i=Ua();},rl=function(a){},sl=function(a){},yl=function(){var a=pl(),b=new dl(A,3E3),c=new ql(b,a);if((tl()?!0===A.gtag_enable_tcf_support:!1!==A.gtag_enable_tcf_support)&&!a.active&&("function"===typeof A.__tcfapi||fl(b))){a.active=!0;a.Eb={};ul();var d=setTimeout(function(){vl(a);wl(a);d=null},ol);try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)vl(a),wl(a),rl(c);else{var f;if(!1===e.gdprApplies)f=xl(),b.removeEventListener(e);
else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in ll)ll.hasOwnProperty(h)&&("1"===h?g["1"]=!1===e.gdprApplies||"error"===e.cmpStatus||0!==e.internalErrorState||"loaded"===e.cmpStatus&&("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus)?!1===e.gdprApplies||"tcunavailable"===e.tcString?!0:Pf("tcf_restrictions")?jl(e,"1",0):il(e,"1"):!1:g[h]=jl(e,h,ll[h]));f=g}f&&(a.tcString=e.tcString||"tcempty",a.Eb=f,wl(a),rl(c))}}),
sl(c)}catch(e){d&&(clearTimeout(d),d=null),vl(a),wl(a)}}};function vl(a){a.type="e";a.tcString="tcunavailable";a.Eb=xl()}function ul(){var a={};dg((a.ad_storage="denied",a.wait_for_update=nl,a))}var tl=function(){var a=!1;a=!0;return a};function xl(){var a={},b;for(b in ll)ll.hasOwnProperty(b)&&(a[b]=!0);return a}function wl(a){var b={};eg((b.ad_storage=a.Eb["1"]?"granted":"denied",b))}
var zl=function(){var a=pl();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Al=function(){var a=pl();return a.active?a.tcString||"":""},Bl=function(a){if(!ll.hasOwnProperty(String(a)))return!0;var b=pl();return b.active&&b.Eb?!!b.Eb[String(a)]:!0};function Cl(a,b,c){function d(r){var t;R.reported_gclid||(R.reported_gclid={});t=R.reported_gclid;var q=f+(r?"gcu":"gcs");if(!t[q]){t[q]=!0;var u=[],v=function(C,z){z&&u.push(C+"="+encodeURIComponent(z))},w="https://www.google.com";if(Zf()){var y=fg(H.o);v("gcs",gg());r&&v("gcu","1");v("rnd",m);if((!f||g&&"aw.ds"!==g)&&fg(H.o)){var x=Ti("_gcl_aw");v("gclaw",x.join("."))}v("url",String(A.location).split(/[?#]/)[0]);v("dclid",Dl(b,h));!y&&b&&(w="https://pagead2.googlesyndication.com")}
v("gdpr_consent",Al());"1"===Ci(!1)._up&&v("gtm_up","1");v("gclid",Dl(b,f));v("gclsrc",g);v("gtm",Yk(!c));var B=w+"/pagead/landing?"+u.join("&");Mf(B)}}var e=Wi(),f=e.gclid||"",g=e.gclsrc,h=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),n=Zf();if(l||n){var m=""+Vh();n?hg(function(){d();fg(H.o)||bg(function(r){return d(!0,r.ne)},H.o)},[H.o]):d()}}function Dl(a,b){var c=a&&!fg(H.o);return b&&c?"0":b}var mm=function(){var a=!0;Bl(7)&&Bl(9)&&Bl(10)||(a=!1);var b=!0;b&&!lm()&&(a=!1);return a},lm=function(){var a=!0;Bl(3)&&Bl(4)||(a=!1);return a};function Gm(){var a=R;return a.gcq=a.gcq||new Hm}
var Im=function(a,b,c){Gm().register(a,b,c)},Jm=function(a,b,c,d){Gm().push("event",[b,a],c,d)},Km=function(a,b){Gm().push("config",[a],b)},Lm=function(a,b,c){Gm().push("get",[a,b],c)},Mm={},Nm=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},Om=function(a,b,c,d,e){this.type=a;this.m=b;this.ca=c||"";this.a=d;this.i=e},Hm=function(){this.m={};this.i={};this.a=[]},Pm=function(a,b){var c=oj(b);return a.m[c.containerId]=a.m[c.containerId]||new Nm},
Qm=function(a,b,c){if(b){var d=oj(b);if(d&&1===Pm(a,b).status){Pm(a,b).status=2;var e={};eh&&(e.timeoutId=A.setTimeout(function(){I(38);Rg()},3E3));a.push("require",[e],d.containerId);Mm[d.containerId]=Ua();if(rj()){}else{var g="/gtag/js?id="+
encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=A.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=Kk(c,g)||h;Cf(l)}}}},Rm=function(a,b,c,d){if(d.ca){var e=Pm(a,d.ca),f=e.m;if(f){var g=E(c),h=E(e.targetConfig[d.ca]),l=E(e.containerConfig),n=E(e.i),m=E(a.i),r=ph("gtm.uniqueEventId"),t=oj(d.ca).prefix,q=Tk(Sk(Rk(Qk(Pk(Ok(Nk(g),h),l),n),m),function(){ih(r,t,"2");}),function(){
ih(r,t,"3");});try{ih(r,t,"1");f(d.ca,b,d.m,q)}catch(u){ih(r,t,"4");}}}};
Hm.prototype.register=function(a,b,c){if(3!==Pm(this,a).status){Pm(this,a).m=b;Pm(this,a).status=3;c&&(Pm(this,a).i=c);var d=oj(a),e=Mm[d.containerId];if(void 0!==e){var f=R[d.containerId].bootstrap,g=d.prefix.toUpperCase();R[d.containerId]._spx&&(g=g.toLowerCase());var h=ph("gtm.uniqueEventId"),l=g,n=Ua()-f;if(eh&&!Wg[h]){h!==Sg&&(Og(),Sg=h);var m=l+"."+Math.floor(f-e)+"."+Math.floor(n);$g=$g?$g+","+m:"&cl="+m}delete Mm[d.containerId]}this.flush()}};
Hm.prototype.push=function(a,b,c,d){var e=Math.floor(Ua()/1E3);Qm(this,c,b[0][H.Ha]||this.i[H.Ha]);this.a.push(new Om(a,e,c,b,d));d||this.flush()};
Hm.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==Pm(this,c.ca).status&&!a)return;eh&&A.clearTimeout(c.a[0].timeoutId);break;case "set":Na(c.a[0],function(m,r){E(ab(m,r),b.i)});break;case "config":var d=c.a[0],e=!!d[H.Vb];delete d[H.Vb];var f=Pm(this,c.ca),g=oj(c.ca),h=g.containerId===g.id;e||(h?f.containerConfig={}:f.targetConfig[c.ca]={});f.a&&e||Rm(this,H.ka,d,c);f.a=!0;delete d[H.cb];h?E(d,f.containerConfig):
E(d,f.targetConfig[c.ca]);break;case "event":Rm(this,c.a[1],c.a[0],c);break;case "get":}this.a.shift()}};var Sm=function(a,b,c){};var Tm=function(a,b,c,d){};var Um=function(a){};var Vm=function(a,b,c){};var Wm=function(a,b){return!0};var Xm=function(a,b){var c;return c};var Ym=function(a){};var Zm=!1,$m=[];function an(){if(!Zm){Zm=!0;for(var a=0;a<$m.length;a++)M($m[a])}}var bn=function(a){Zm?M(a):$m.push(a)};var cn=function(a){F(this.i.a,["listener:!Fn"],arguments);Oe(this,"process_dom_events","window","load");bn(nb(a))};var dn=function(a,b){var c;var d=ub(c,this.m);void 0===d&&void 0!==c&&I(45);return d};var en=function(a){var b;var h=ub(b,this.m);void 0===h&&void 0!==b&&I(45);return h};var fn=function(a,b){var c=null;return ub(c,this.m)};var gn=function(a){var b;return ub(b,this.m)};var hn=function(a){var b;return b};var jn=function(a,b){b=void 0===b?!0:b;var c;return c};var kn=function(a){var b=null;return b};var ln=function(a,b){var c;return c};var mn=function(a,b){var c;return c};var nn=function(a){var b="";return b};var on=function(a){var b="";return b};var $e=function(){Oe(this,"get_user_agent");return A.navigator.userAgent};var pn=function(a,b){};var qn={},rn=function(a,b,c,d){F(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Oe(this,"inject_script",a);var e=this.m,f=function(){b instanceof cb&&b.La(e)},g=function(){c instanceof cb&&c.La(e)};if(!d){Cf(a,f,g);return}var h=d;qn[h]?(qn[h].onSuccess.push(f),qn[h].onFailure.push(g)):(qn[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=qn[h].onSuccess,n=0;n<l.length;n++)M(l[n]);l.push=function(m){M(m);
return 0}},g=function(){for(var l=qn[h].onFailure,n=0;n<l.length;n++)M(l[n]);qn[h]=null},Cf(a,f,g));};var sn=function(){return!1},tn={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var un=function(){};var vn=function(a,b){var c=!1;return c};var wn=function(){var a="";return a};var xn=function(){var a="";return a};var yn=function(a,b,c){};var zn=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var An=function(a,b,c){F(this.i.a,["path:!string","value:?*","overrideExisting:?boolean"],arguments);Oe(this,"access_globals","readwrite",a);var d=a.split("."),e=A,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;if(void 0===e[d[f]]||c)return e[d[f]]=tb(b,this.m),!0;return!1};var Bn=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var Cn=function(a,b,c){var d=this;};var Dn={},En={};Dn.getItem=function(a){var b=null;return b};
Dn.setItem=function(a,b){};
Dn.removeItem=function(a){};Dn.clear=function(){};var Fn=function(a){var b;return b};var Nc=function(){var a=new Ze;rj()?(a.add("injectHiddenIframe",Ea),a.add("injectScript",Ea)):(a.add("injectHiddenIframe",pn),a.add("injectScript",rn));var b=yn;a.add("Math",He());a.add("TestHelper",bf());a.add("addEventCallback",Um);a.add("aliasInWindow",Wm);a.add("assertApi",De);a.add("assertThat",Ee);a.add("callInWindow",
Xm);a.add("callLater",Ym);a.add("copyFromDataLayer",dn);a.add("copyFromWindow",en);a.add("createArgumentsQueue",fn);a.add("createQueue",gn);a.add("decodeUri",Ie);a.add("decodeUriComponent",Je);a.add("encodeUri",Ke);a.add("encodeUriComponent",Le);a.add("fail",Me);a.add("fromBase64",hn,!("atob"in A));a.add("generateRandom",Ne);a.add("getContainerVersion",Pe);a.add("getCookieValues",jn);a.add("getQueryParameters",ln);a.add("getReferrerQueryParameters",mn);a.add("getReferrerUrl",nn);a.add("getTimestamp",
Qe);a.add("getTimestampMillis",Qe);a.add("getType",Re);a.add("getUrl",on);a.add("localStorage",tn,!sn());a.add("logToConsole",un);a.add("makeInteger",Te);a.add("makeNumber",Ue);a.add("makeString",Ve);a.add("makeTableMap",We);a.add("mock",Ye);a.add("queryPermission",vn);a.add("readCharacterSet",wn);a.add("readTitle",xn);a.add("sendPixel",b);a.add("setCookie",zn);a.add("setInWindow",An);a.add("sha256",Cn);a.add("templateStorage",Dn);a.add("toBase64",Fn,!("btoa"in A));a.add("JSON",Se(function(c){var d=this.m.a;d&&d.log.call(this,"error",c)}));
return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.i.hasOwnProperty(c))b:{var f=this.m.a;if(f){var g=f.rb();if(g&&0!==g.indexOf("__cvt_")){e=!0;break b}}e=!1}if(e)d=a.i.hasOwnProperty(c)?a.i[c]:void 0;else throw Error(c+" is not a valid API name.");}return d}};var Lc,Ud;
function Gn(){var a=data.runtime||[],b=data.runtime_lines;Lc=new Jc;Hn();ld=function(e,f,g){In(f);var h=new hb;Na(f,function(q,u){var v=ub(u);void 0===v&&void 0!==u&&I(44);h.set(q,v)});Lc.a.a.s=Hd();var l={ig:Vd(e),eventId:void 0!==g?g.id:void 0,rb:function(){return e},log:function(){}};if(wk()){var n=xk(),m=void 0,r=void 0;l.da={i:{},a:function(q,u,v){1===u&&(m=q);7===u&&(r=v);n(q,u,v)},m:Xe()};l.log=function(q,u){if(m){var v=Array.prototype.slice.call(arguments,1);n(m,4,{level:q,source:r,message:v})}}}var t=
Mc(l,[e,h]);Lc.a.a.s=void 0;t instanceof ta&&"return"===t.a&&(t=t.i);return tb(t)};Oc();for(var c=0;c<a.length;c++){var d=a[c];if(!Ha(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&Dd(d,b[c]);Lc.kc(d)}}function In(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Fa(b)&&(a.gtmOnSuccess=function(){M(b)});Fa(c)&&(a.gtmOnFailure=function(){M(c)})}
function Hn(){var a=Lc;R.SANDBOXED_JS_SEMAPHORE=R.SANDBOXED_JS_SEMAPHORE||0;Pc(a,function(b,c,d){R.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{R.SANDBOXED_JS_SEMAPHORE--}})}function Jn(a){void 0!==a&&Na(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Kg[e]=Kg[e]||[];Kg[e].push(b)}})};var Kn="HA GF G UA AW DC".split(" "),Ln=!1,Mn={},Nn=!1;function On(a,b){var c={event:a};b&&(c.eventModel=E(b),b[H.Jc]&&(c.eventCallback=b[H.Jc]),b[H.Ub]&&(c.eventTimeout=b[H.Ub]));return c}function Pn(){return Ln}
var Sn={config:function(a){},event:function(a){var b=a[1];if(p(b)&&!(3<a.length)){var c;if(2<a.length){if(!lb(a[2])&&
void 0!=a[2])return;c=a[2]}var d=On(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return Nn=!0,Pn(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Ud.i;d.a[b]?d.a[b].push(c):d.a[b]=[c]}},set:function(a){var b;2==a.length&&lb(a[1])?b=E(a[1]):3==a.length&&p(a[1])&&(b={},lb(a[2])||Ha(a[2])?b[a[1]]=E(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}},consent:function(a){function b(){Pn()&&E(a[2],{subcommand:a[1]})}if(3===a.length){I(39);var c=Lg(),d=a[1];"default"===d?(b(),dg(a[2])):"update"===d&&(b(),eg(a[2],c))}}};var Tn={policy:!0};var Un=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Wn=function(a){var b=Vn(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var no=function(a){if(mo(a))return a;this.a=a};no.prototype.Vg=function(){return this.a};var mo=function(a){return!a||"object"!==jb(a)||lb(a)?!1:"getUntrustedUpdateValue"in a};no.prototype.getUntrustedUpdateValue=no.prototype.Vg;var oo=[],po=!1,qo=function(a){return A["dataLayer"].push(a)},ro=function(a){var b=R["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function so(a){var b=a._clear;Na(a,function(f,g){"_clear"!==f&&(b&&sh(f,void 0),sh(f,g))});Gg||(Gg=a["gtm.start"]);var c=a.event,d=a["gtm.uniqueEventId"];if(!c)return!1;d||(d=Lg(),a["gtm.uniqueEventId"]=d,sh("gtm.uniqueEventId",d));var e=Ik(a["gtm.uniqueEventId"],a.event,a.eventCallback,a.eventTimeout)?!0:!1;switch(c){case "gtm.init":I(19),e&&I(20)}return e}
function to(){for(var a=!1;!po&&0<oo.length;){po=!0;delete mh.eventModel;oh();var b=oo.shift();if(null!=b){var c=mo(b);if(c){var d=b;b=mo(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],h=ph(g,1);if(Ha(h)||lb(h))h=E(h);nh[g]=h}}try{if(Fa(b))try{b.call(qh)}catch(v){}else if(Ha(b)){var l=
b;if(p(l[0])){var n=l[0].split("."),m=n.pop(),r=l.slice(1),t=ph(n.join("."),2);if(void 0!==t&&null!==t)try{t[m].apply(t,r)}catch(v){}}}else{if(Oa(b)){a:{var q=b;if(q.length&&p(q[0])){var u=Sn[q[0]];if(u&&(!c||!Tn[q[0]])){b=u(q);break a}}b=void 0}if(!b){po=!1;continue}}a=so(b)||a}}finally{c&&oh(!0)}}po=!1}return!a}
function uo(){var a=to();try{Un(A["dataLayer"],Qd.C)}catch(b){}return a}
var wo=function(){var a=Af("dataLayer",[]),b=Af("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Xj(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});bn(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<R.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new no(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);oo.push.apply(oo,e);if(300<
this.length)for(I(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return to()&&h};var d=a.slice(0);oo.push.apply(oo,d);vo()&&M(uo)},vo=function(){var a=!0;return a};var xo={};xo.Wb=new String("undefined");
var yo=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===xo.Wb?b:a[d]);return c.join("")}};yo.prototype.toString=function(){return this.a("undefined")};yo.prototype.valueOf=yo.prototype.toString;xo.Of=yo;xo.Xc={};xo.Cg=function(a){return new yo(a)};var zo={};xo.Mh=function(a,b){var c=Lg();zo[c]=[a,b];return c};xo.qe=function(a){var b=a?0:1;return function(c){var d=zo[c];if(d&&"function"===typeof d[b])d[b]();zo[c]=void 0}};xo.fh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};xo.Eh=function(a){if(a===xo.Wb)return a;var b=Lg();xo.Xc[b]=a;return'google_tag_manager["'+Qd.C+'"].macro('+b+")"};xo.th=function(a,b,c){a instanceof xo.Of&&(a=a.a(xo.Mh(b,c)),b=Ea);return{od:a,J:b}};var Ao=function(a,b,c){function d(f,g){var h=f[g];return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||If(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Bo=function(a){R.hasOwnProperty("autoEventsSettings")||(R.autoEventsSettings={});var b=R.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Co=function(a,b,c){Bo(a)[b]=c},Do=function(a,b,c,d){var e=Bo(a),f=Va(e,b,d);e[b]=c(f)},Eo=function(a,b,c){var d=Bo(a);return Va(d,b,c)};var Fo=["input","select","textarea"],Go=["button","hidden","image","reset","submit"],Ho=function(a){var b=a.tagName.toLowerCase();return!Ja(Fo,function(c){return c===b})||"input"===b&&Ja(Go,function(c){return c===a.type.toLowerCase()})?!1:!0},Io=function(a){return a.form?a.form.tagName?a.form:L.getElementById(a.form):Lf(a,["form"],100)},Jo=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(Ho(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var Ko=!!A.MutationObserver,Lo=void 0,Mo=function(a){if(!Lo){var b=function(){var c=L.body;if(c)if(Ko)(new MutationObserver(function(){for(var e=0;e<Lo.length;e++)M(Lo[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Gf(c,"DOMNodeInserted",function(){d||(d=!0,M(function(){d=!1;for(var e=0;e<Lo.length;e++)M(Lo[e])}))})}};Lo=[];L.body?b():M(b)}Lo.push(a)};var gp=A.clearTimeout,hp=A.setTimeout,U=function(a,b,c){if(rj()){b&&M(b)}else return Cf(a,b,c)},ip=function(){return new Date},jp=function(){return A.location.href},kp=function(a){return Ch(Eh(a),"fragment")},lp=function(a){return Dh(Eh(a))},mp=function(a,b){return ph(a,b||2)},np=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=qo(a)):d=qo(a);return d},op=function(a,b){A[a]=b},W=function(a,b,c){b&&
(void 0===A[a]||c&&!A[a])&&(A[a]=b);return A[a]},pp=function(a,b,c){return Ih(a,b,void 0===c?!0:!!c)},qp=function(a,b,c){return 0===Sh(a,b,c)},rp=function(a,b){if(rj()){b&&M(b)}else Ef(a,b)},sp=function(a){return!!Eo(a,"init",!1)},tp=function(a){Co(a,"init",!0)},up=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Fg;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";U(tj("https://","http://",c))},vp=function(a,
b){var c=a[b];return c},wp=function(a,b,c){eh&&(wb(a)||jh(c,b,a))};
var xp=xo.th;function Up(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Vp=new La;function Wp(a,b){function c(g){var h=Eh(g),l=Ch(h,"protocol"),n=Ch(h,"host",!0),m=Ch(h,"port"),r=Ch(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==m||"https"==l&&"443"==m)l="web",m="default";return[l,n,m,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Xp(a){return Yp(a)?1:0}
function Yp(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ha(c)){for(var d=0;d<c.length;d++){var e=E(a,{});E({arg1:c[d],any_of:void 0},e);if(Xp(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(q){}}f=!1}return f;case "_ew":return Up(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Ia(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var m=a.ignore_case?"i":void 0;try{var r=String(c)+m,t=Vp.get(r);t||(t=new RegExp(c,m),Vp.set(r,t));n=t.test(b)}catch(q){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Wp(b,c)}return!1};var Zp={},$p=encodeURI,Y=encodeURIComponent,aq=Ff;var bq=function(a,b){if(!a)return!1;var c=Ch(Eh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var cq=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Zp.gh=function(){var a=!1;return a};function Br(){return A.gaGlobal=A.gaGlobal||{}}var Cr=function(){var a=Br();a.hid=a.hid||Ka();return a.hid},Dr=function(a,b){var c=Br();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var Mr=window,Nr=document,Or=function(a){var b=Mr._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Mr["ga-disable-"+a])return!0;try{var c=Mr.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Gh("AMP_TOKEN",String(Nr.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Nr.getElementById("__gaOptOutExtension")?!0:!1};function Rr(a){delete a.eventModel[H.cb];Tr(a.eventModel)}var Tr=function(a){Na(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.na]||{};Na(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Wr=function(a,b,c){Jm(b,c,a)},Xr=function(a,b,c){Jm(b,c,a,!0)},Zr=function(a,b){};
function Yr(a,b){}var Z={b:{}};

Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");var d=c&&c.e&&c.e(b);wp(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();

Z.b.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.g="sp";Z.__sp.h=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure,d=function(){var f=W("google_trackConversion");if(Fa(f)){var g={};"DATA_LAYER"==a.vtp_customParamsFormat?g=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(g=cq(a.vtp_customParams,
"key","value"));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:g,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:Yk()};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(g.event=a.vtp_eventName),a.vtp_eventValue&&(h.google_conversion_value=a.vtp_eventValue),a.vtp_eventItems&&(h.google_gtag_event_data={items:a.vtp_eventItems}));a.vtp_rdp&&(h.google_restricted_data_processing=!0);a.vtp_userId&&(h.google_user_id=
a.vtp_userId);var l=Al();(h.google_additional_params=h.google_additional_params||{}).gdpr_consent=l;f(h)||c()}else c()},e=function(){U(b,d,c)};Zf()?hg(function(){fg(H.o)?e():bg(e,H.o)},[H.o]):(gk(),e())})}();Z.b.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.priorityOverride=0})(function(a){wp(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(uh(a.vtp_gtmEventId,"event"))})}();
Z.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Ao(c,"gtm.click");np(d)}}(function(b){Z.__cl=b;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.priorityOverride=0})(function(b){if(!sp("cl")){var c=W("document");Gf(c,"click",a,!0);tp("cl")}M(b.vtp_gtmOnSuccess)})}();
Z.b.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];wp(c,"j",a.vtp_gtmEventId);return c})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return pp(a.vtp_name,mp("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],n=l.key;l.read&&e.push(n);l.write&&f.push(n);l.execute&&g.push(n)}return{assert:function(m,r,t){if(!p(t))throw d(m,{},"Key must be a string.");if("read"===r){if(-1<Ia(e,t))return}else if("write"===r){if(-1<Ia(f,t))return}else if("readwrite"===r){if(-1<Ia(f,t)&&-1<Ia(e,t))return}else if("execute"===r){if(-1<Ia(g,t))return}else throw d(m,{},"Operation must be either 'read', 'write', or 'execute', was "+r);throw d(m,{},"Prohibited "+r+" on global variable: "+
t+".");},K:a}})}();Z.b.r=["google"],function(){(function(a){Z.__r=a;Z.__r.g="r";Z.__r.h=!0;Z.__r.priorityOverride=0})(function(a){return Ka(a.vtp_min,a.vtp_max)})}();
Z.b.tg=["google"],function(){function a(h){g.push(h);1<g.length||M(function(){var l=g.join(",");g=[];np({event:"gtm.triggerGroup","gtm.triggers":l})})}function b(h,l){var n=d[l],m=n.indexOf(h);-1!==m&&(n.splice(m,1),n.length||a(l))}function c(h){M(h.vtp_gtmOnSuccess);var l=h.vtp_uniqueTriggerId,n=h.vtp_triggerIds,m=h.vtp_firingId;if(h.vtp_isListeningTag){var r=e[m];r?b(m,r):f.push(m)}else{d[l]=n;for(var t=0,q;q=n[t];t++)e[q]=l;for(var u=0;u<f.length;u++)b(f[u],l)}}var d={},e={},f=[],g=[];Z.__tg=c;Z.__tg.g="tg";Z.__tg.h=!0;Z.__tg.priorityOverride=0}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=mp("gtm.url",1);c=c||jp();var d=b[a("vtp_component")];if(!d||"URL"==d)return lp(String(c));var e=Eh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],n;g?Ha(h)?n=h:n=String(h).replace(/\s+/g,
"").split(","):n=[String(h)];for(var m=0;m<n.length;m++){var r=Ch(e,"QUERY",void 0,void 0,n[m]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Ch(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=mp(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;wp(d,"v",a.vtp_gtmEventId);return d})}();
Z.b.tl=["google"],function(){function a(b){return function(){if(b.td&&b.vd>=b.td)b.pd&&W("self").clearInterval(b.pd);else{b.vd++;var c=ip().getTime();np({event:b.R,"gtm.timerId":b.pd,"gtm.timerEventNumber":b.vd,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.td,"gtm.timerStartTime":b.Ye,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Ye,"gtm.triggers":b.$h})}}}(function(b){Z.__tl=b;Z.__tl.g="tl";Z.__tl.h=!0;Z.__tl.priorityOverride=0})(function(b){M(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{R:b.vtp_eventName,vd:0,interval:Number(b.vtp_interval),td:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),$h:String(b.vtp_uniqueTriggerId||"0"),Ye:ip().getTime()};c.pd=W("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.b.ua=["google"],function(){function a(m,r){if(Zf()&&!d[m]){var t=function(){var q=lk(),u="gtm"+Lg(),v=l(r),w={name:u};h(v,w,!0);q("create",m,w);q(function(){q.remove(u)})};bg(t,H.M);bg(t,H.o);d[m]=!0}}var b,c={},d={},e=function(m){hg(function(){n(m)},[H.M,H.o])},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,
storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h=function(m,r,t){var q=0;if(m)for(var u in m)if(m.hasOwnProperty(u)&&(t&&f[u]||!t&&void 0===f[u])){var v=g[u]?Ra(m[u]):m[u];"anonymizeIp"!=u||v||(v=void 0);r[u]=v;q++}return q},l=
function(m){var r={};m.vtp_gaSettings&&E(cq(m.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),r);E(cq(m.vtp_fieldsToSet,"fieldName","value"),r);fg(H.M)||(r.storage="none");fg(H.o)||(r.allowAdFeatures=!1,r.storeGac=!1);mm()||(r.allowAdFeatures=!1);lm()||(r.allowAdPersonalizationSignals=!1);m.vtp_transportUrl&&(r._x_19=m.vtp_transportUrl);return r},n=function(m){function r(sa,
T){void 0!==T&&D("set",sa,T)}var t={},q={},u={},v={};if(m.vtp_gaSettings){var w=m.vtp_gaSettings;E(cq(w.vtp_contentGroup,"index","group"),q);E(cq(w.vtp_dimension,"index","dimension"),u);E(cq(w.vtp_metric,"index","metric"),v);var y=E(w);y.vtp_fieldsToSet=void 0;y.vtp_contentGroup=void 0;y.vtp_dimension=void 0;y.vtp_metric=void 0;m=E(m,y)}E(cq(m.vtp_contentGroup,"index","group"),q);E(cq(m.vtp_dimension,"index","dimension"),u);E(cq(m.vtp_metric,"index","metric"),v);var x=l(m),B=nk(m.vtp_functionName);
if(Fa(B)){var C="",z="";m.vtp_setTrackerName&&"string"==typeof m.vtp_trackerName?""!==m.vtp_trackerName&&(z=m.vtp_trackerName,C=z+"."):(z="gtm"+Lg(),C=z+".");var D=function(sa){var T=[].slice.call(arguments,0);T[0]=C+T[0];B.apply(window,T)},G=function(sa,T){return void 0===T?T:sa(T)},J=function(sa,T){if(T)for(var db in T)T.hasOwnProperty(db)&&D("set",sa+db,T[db])},Q=function(){},V={name:z};h(x,V,!0);var ba=m.vtp_trackingId||t.trackingId;B("create",ba,V);D("set","&gtm",Yk(!0));Zf()&&(D("set","&gcs",gg()),a(ba,m));x._x_19&&(null==zf&&delete x._x_19,x._x_20&&!c[z]&&(c[z]=!0,B(rk(z,String(x._x_20)))));m.vtp_enableRecaptcha&&
D("require","recaptcha","recaptcha.js");(function(sa,T){void 0!==m[T]&&D("set",sa,m[T])})("nonInteraction","vtp_nonInteraction");J("contentGroup",q);J("dimension",u);J("metric",v);var P={};h(x,P,!1)&&D("set",P);var ea;m.vtp_enableLinkId&&D("require","linkid","linkid.js");D("set","hitCallback",function(){var sa=x&&x.hitCallback;Fa(sa)&&
sa();m.vtp_gtmOnSuccess()});if("TRACK_EVENT"==m.vtp_trackType){m.vtp_enableEcommerce&&(D("require","ec","ec.js"),Q());var N={hitType:"event",eventCategory:String(m.vtp_eventCategory||t.category),eventAction:String(m.vtp_eventAction||t.action),eventLabel:G(String,m.vtp_eventLabel||t.label),eventValue:G(Qa,m.vtp_eventValue||t.value)};h(ea,N,!1);D("send",N);}else if("TRACK_SOCIAL"==
m.vtp_trackType){}else if("TRACK_TRANSACTION"==m.vtp_trackType){}else if("TRACK_TIMING"==m.vtp_trackType){}else if("DECORATE_LINK"==m.vtp_trackType){}else if("DECORATE_FORM"==m.vtp_trackType){}else if("TRACK_DATA"==m.vtp_trackType){}else{m.vtp_enableEcommerce&&(D("require","ec","ec.js"),Q());if(m.vtp_doubleClick||"DISPLAY_FEATURES"==m.vtp_advertisingFeaturesType){var za="_dc_gtm_"+String(m.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");D("require","displayfeatures",void 0,{cookieName:za})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==m.vtp_advertisingFeaturesType){var Ec="_dc_gtm_"+String(m.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","adfeatures",{cookieName:Ec})}ea?D("send","pageview",ea):D("send","pageview");m.vtp_autoLinkDomains&&ok(C,m.vtp_autoLinkDomains,!!m.vtp_useHashAutoLink,!!m.vtp_decorateFormsAutoLink);}if(!b){var Sb=
m.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";m.vtp_useInternalVersion&&!m.vtp_useDebugVersion&&(Sb="internal/"+Sb);b=!0;var ee=Kk(x._x_19,"/analytics.js"),Bb=tj("https:","http:","//www.google-analytics.com/"+Sb,x&&!!x.forceSSL);U("analytics.js"===Sb&&ee?ee:Bb,function(){var sa=lk();sa&&sa.loaded||m.vtp_gtmOnFailure();},m.vtp_gtmOnFailure)}}else M(m.vtp_gtmOnFailure)};Z.__ua=e;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0}();

Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!p(f))throw d(e,{},"Script URL must be a string.");try{if(ue(Eh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},K:a}})}();





Z.b.aev=["google"],function(){function a(q,u){var v=uh(q,"gtm");if(v)return v[u]}function b(q,u,v,w){w||(w="element");var y=q+"."+u,x;if(m.hasOwnProperty(y))x=m[y];else{var B=a(q,w);if(B&&(x=v(B),m[y]=x,r.push(y),35<r.length)){var C=r.shift();delete m[C]}}return x}function c(q,u,v){var w=a(q,t[u]);return void 0!==w?w:v}function d(q,u){if(!q)return!1;var v=e(jp());Ha(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++)if(u[y]instanceof RegExp){if(u[y].test(q))return!1}else{var x=
u[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!bq(q,w)}function e(q){n.test(q)||(q="http://"+q);return Ch(Eh(q),"HOST",!0)}function f(q,u,v){switch(q){case "SUBMIT_TEXT":return b(u,"FORM."+q,g,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+q,h);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function g(q){switch(q.tagName.toLowerCase()){case "input":return If(q,"value");case "button":return Jf(q);default:return null}}function h(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var u=0,v=0;v<q.elements.length;v++)Ho(q.elements[v])&&u++;return u}}function l(q,u,v){var w=a(q,"interactedFormField");return w&&If(w,u)||v}var n=/^https?:\/\//i,m={},r=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=0})(function(q){var u=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||
v;case "TEXT":return b(u,w,Jf)||v;case "URL":var x;a:{var B=String(a(u,"elementUrl")||v||""),C=Eh(B),z=String(q.vtp_component||"URL");switch(z){case "URL":x=B;break a;case "IS_OUTBOUND":x=d(B,q.vtp_affiliatedDomains);break a;default:x=Ch(C,z,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var D;if(void 0===q.vtp_attribute)D=c(u,w,v);else{var G=q.vtp_attribute,J=a(u,"element");D=J&&If(J,G)||v||""}return D;case "MD":var Q=q.vtp_mdValue,V=b(u,"MD",To);return Q&&V?Wo(V,Q)||
v:V||v;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),u,v);default:var ba=c(u,w,v);wp(ba,"aev",q.vtp_gtmEventId);return ba}})}();

Z.b.awct=["google"],function(){var a=!1,b=[],c=function(h){var l=W("google_trackConversion"),n=h.gtm_onFailure;"function"==typeof l?l(h)||n():n()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},g=function(h){function l(){
q("gdpr_consent",Al());}function n(w){var y=!0;y&&b.push(m)}gk();var m={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:h.vtp_conversionId,google_conversion_label:h.vtp_conversionLabel,
google_conversion_value:h.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:h.vtp_gtmOnSuccess,gtm_onFailure:h.vtp_gtmOnFailure,google_gtm:Yk()};h.vtp_rdp&&(m.google_restricted_data_processing=!0);void 0!=mp(H.O)&&!1!==mp(H.O)&&(m.google_gtm_url_processor=function(w){return w=Hj(w)});var r=function(w){return function(y,x,B){var C="DATA_LAYER"==w?mp(B):h[x];C&&(m[y]=C)}},t=r("JSON");t("google_conversion_currency","vtp_currencyCode");t("google_conversion_order_id","vtp_orderId");h.vtp_enableProductReporting&&
(t=r(h.vtp_productReportingDataSource),t("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),t("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),t("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),t("google_basket_discount","vtp_discount","discount"),t("google_conversion_items","vtp_items","items"),m.google_conversion_items&&m.google_conversion_items.map&&(m.google_conversion_items=m.google_conversion_items.map(function(w){return{value:w.price,
quantity:w.quantity,item_id:w.id}})));var q=function(w,y){void 0!==y&&((m.google_additional_conversion_params=m.google_additional_conversion_params||{})[w]=y)},u=function(w){return function(y,x,B,C){var z="DATA_LAYER"==w?mp(B):h[x];C(z)&&q(y,z)}};h.vtp_transportUrl&&(m.google_transport_url=h.vtp_transportUrl);var v=Kk(h.vtp_transportUrl,"/pagead/conversion_async.js");v||(v=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");
h.vtp_enableNewCustomerReporting&&(t=u(h.vtp_newCustomerReportingDataSource),t("vdnc","vtp_awNewCustomer","new_customer",function(w){return void 0!=w&&""!==w}),t("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(w){return void 0!=w&&""!==w}));!h.hasOwnProperty("vtp_enableConversionLinker")||h.vtp_enableConversionLinker?(h.vtp_conversionCookiePrefix&&(m.google_gcl_cookie_prefix=h.vtp_conversionCookiePrefix),m.google_read_gcl_cookie_opt_out=!1):m.google_read_gcl_cookie_opt_out=!0;"1"===
Ci(!1)._up&&q("gtm_up","1");l();(function(){Zf()?hg(function(){l();var w=fg(H.o),y=!w&&void 0!=mp(H.O)&&!1!==mp(H.O);!h.vtp_transportUrl&&y&&(m.google_transport_url="https://pagead2.googlesyndication.com/");q("gcs",gg());n(w);w||bg(function(){l();m=E(m);!h.vtp_transportUrl&&m.google_transport_url&&delete m.google_transport_url;q("gcs",gg());q("gcu","1");n(!0)},H.o)},[H.o]):n(!0)})();a||(a=!0,U(v,f(),e(v)))};
Z.__awct=g;Z.__awct.g="awct";Z.__awct.h=!0;Z.__awct.priorityOverride=0}();
Z.b.baut=["nonGoogleScripts"],function(){var a=!1,b=function(c){var d=c.vtp_uetqName||"uetq",e=W(d,[],!0);if("VARIABLE_REVENUE"==c.vtp_eventType)e.push({gv:c.vtp_goalValue}),c.vtp_gtmOnSuccess();else if("CUSTOM"==c.vtp_eventType){var f={},g=function(h,l){void 0!==c[h]&&(f[l]=c[h])};g("vtp_goalValue","gv");g("vtp_eventCategory","ec");g("vtp_eventAction","ea");g("vtp_eventLabel","el");g("vtp_eventValue","ev");e.push(f);c.vtp_gtmOnSuccess()}else if(a)c.vtp_gtmOnSuccess();else try{U("//bat.bing.com/bat.js",
function(){var h=jf(W("UET"),{ti:c.vtp_tagId,q:e});A[d]=h;h.push("pageLoad");c.vtp_gtmOnSuccess()},c.vtp_gtmOnFailure),a=!0}catch(h){M(c.vtp_gtmOnFailure)}};Z.__baut=b;Z.__baut.g="baut";Z.__baut.h=!0;Z.__baut.priorityOverride=0}();



Z.b.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.g="paused";Z.__paused.h=!0;Z.__paused.priorityOverride=0})(function(a){M(a.vtp_gtmOnFailure)})}();

Z.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var n=L.createElement("script");n.async=!1;n.type="text/javascript";n.id=h.id;n.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(n.charset=h.charset);var m=h.getAttribute("data-gtmsrc");m&&(n.src=m,Bf(n,l));d.insertBefore(n,null);m||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];h.firstChild;)r.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,r,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(t){M(g)}}}var b=function(d,e,f){Xj(function(){var g,h=R;h.postscribe||(h.postscribe=we);g=h.postscribe;var l={done:e},n=L.createElement("div");n.style.display="none";n.style.visibility="hidden";L.body.appendChild(n);try{g(n,d,l)}catch(m){M(f)}})};var c=function(d){if(L.body){var e=
d.vtp_gtmOnFailure,f=xp(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.od,h=f.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(L.body,Kf(g),h,e)()}else hp(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.priorityOverride=0}();




Z.b.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.g="img";Z.__img.h=!0;Z.__img.priorityOverride=0})(function(a){var b=Kf('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}aq(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();




var $r={};$r.macro=function(a){if(xo.Xc.hasOwnProperty(a))return xo.Xc[a]},$r.onHtmlSuccess=xo.qe(!0),$r.onHtmlFailure=xo.qe(!1);$r.dataLayer=qh;$r.callback=function(a){Jg.hasOwnProperty(a)&&Fa(Jg[a])&&Jg[a]();delete Jg[a]};function as(){R[Qd.C]=$r;Xa(Kg,Z.b);td=td||xo;ud=Md}
function bs(){Of.gtm_3pds=!0;Of.gtag_cs_api=!0;R=A.google_tag_manager=A.google_tag_manager||{};yl();if(R[Qd.C]){var a=R.zones;a&&a.unregisterChild(Qd.C);}else{for(var b=data.resource||{},c=b.macros||[],d=
0;d<c.length;d++)md.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)pd.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)od.push(g[h]);for(var l=b.rules||[],n=0;n<l.length;n++){for(var m=l[n],r={},t=0;t<m.length;t++)r[m[t][0]]=Array.prototype.slice.call(m[t],1);nd.push(r)}rd=Z;sd=Xp;var q=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;Gn();Ud=new Td(q);if(void 0!==u)for(var w=["sandboxedScripts"],y=0;y<u.length;y++){var x=u[y].replace(/^_*/,"");Kg[x]=w}Jn(v);as();wo();
Sj=!1;Tj=0;if("interactive"==L.readyState&&!L.createEventObject||"complete"==L.readyState)Vj();else{Gf(L,"DOMContentLoaded",Vj);Gf(L,"readystatechange",Vj);if(L.createEventObject&&L.documentElement.doScroll){var B=!0;try{B=!A.frameElement}catch(G){}B&&Wj()}Gf(A,"load",Vj)}Zm=!1;"complete"===L.readyState?an():Gf(A,"load",an);
a:{if(!eh)break a;A.setInterval(fh,864E5);}Hg=(new Date).getTime();}}
(function(a){a()})(bs);

})()
