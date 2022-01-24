module.exports = {
    getUrl: function (req) {
        let url = '';
        let kindApi = req.query.kindApi;
        let apiUrl = '';
        let apiServiceKey = '';
        let apiParamJson = {};
        switch(kindApi) {

            case svcNrgTrad:  
               apiUrl = svcNrgTradUrl;
               apiServiceKey = svcNrgTradServiceKey;
               apiParamJson = { 'LAWD_CD' : req.query.lawdCd, 'DEAL_YMD' : req.query.dealYmd }
               break;
            case svcAptTradeDev:  
               apiUrl = svcAptTradeDevUrl;
               apiServiceKey = svcAptTradeDevServiceKey;
               apiParamJson = { 'LAWD_CD' : req.query.lawdCd, 'DEAL_YMD' : req.query.dealYmd }
               break;
            case molitLawdCD:  
               apiUrl = molitLawdCDUrl;
               apiServiceKey = molitLawdCDServiceKey;
               apiParamJson = { 'page' : req.query.page, 'perPage' : req.query.perPage }
               break;
            default:
               break;
               
         }

         url = urlSetting(apiUrl, apiServiceKey, apiParamJson);

         return url
    }
};

function urlSetting(url, serviceKey, jsonParam){
   let retUrl = url + '?serviceKey=' + serviceKey;
   if(jsonParam != null) for(key in jsonParam){retUrl += '&' + key + '=' + encodeURIComponent(jsonParam[key])}
   return retUrl;
}

/*
* 국토교통부_상업업무용 부동산 매매 신고 자료 API
* param : {LAWD_CD, DEAL_YMD} xml
*/ 
const svcNrgTrad = 'svcNrgTrad';
const svcNrgTradUrl = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcNrgTrade';
const svcNrgTradServiceKey = 'DTMk0hJB4csVV7MD0JM%2FpLR6ras7k9zWLEfKREEwaQsqKI3nsNBmg%2Fb7yivnArm9kv7KX012st3L5OyklCs%2BOg%3D%3D';

/*
* 국토교통부_등록번호용 지역코드_20201231
* param : {page, perPage} json
*/ 
const molitLawdCD = 'molitLawdCD';
const molitLawdCDUrl = 'https://api.odcloud.kr/api/15063993/v1/uddi:e6b4e89e-5524-47ef-9db7-eedabf41ed29';
const molitLawdCDServiceKey = 'DTMk0hJB4csVV7MD0JM%2FpLR6ras7k9zWLEfKREEwaQsqKI3nsNBmg%2Fb7yivnArm9kv7KX012st3L5OyklCs%2BOg%3D%3D';

 /*
 * 국토교통부_아파트매매 실거래 상세 자료
 * param : {LAWD_CD, DEAL_YMD} xml
 */
const svcAptTradeDev = 'svcAptTradeDev';
const svcAptTradeDevUrl = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev';
const svcAptTradeDevServiceKey = '%2FWi59SrBVyo4exN0W02ibQiDuxLExBwGr7zxFDsjvtYOG1lLnGFGeI5OibY0O8IwS5COck%2FSAhbdU%2BN6hxewTA%3D%3D';

/*
*  국토교통부_아파트 전월세 자료
*  
*/
const svcAptRent = 'svcAptRent';
const svcAptRentUrl = 'http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptRent';
const svcAptRentServiceKey = '%2FWi59SrBVyo4exN0W02ibQiDuxLExBwGr7zxFDsjvtYOG1lLnGFGeI5OibY0O8IwS5COck%2FSAhbdU%2BN6hxewTA%3D%3D';

/*
*  국토교통부_오피스텔 매매 신고 조회 서비스
*/
const svcOffiTrade = 'svcOffiTrade';
const svcOffiTradeUrl = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcOffiTrade';
const svcOffiTradeServiceKey = '%2FWi59SrBVyo4exN0W02ibQiDuxLExBwGr7zxFDsjvtYOG1lLnGFGeI5OibY0O8IwS5COck%2FSAhbdU%2BN6hxewTA%3D%3D';

/*
*  국토교통부_오피스텔 전월세 신고 조회 서비스
*/
const svcOffiRent = 'svcOffiRent';
const svcOffiRentUrl = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcOffiRent';
const svcOffiRentServiceKey = '%2FWi59SrBVyo4exN0W02ibQiDuxLExBwGr7zxFDsjvtYOG1lLnGFGeI5OibY0O8IwS5COck%2FSAhbdU%2BN6hxewTA%3D%3D';

/*
*  국토교통부_단독/다가구 매매 실거래 자료
*/
const svcSHTrade = 'svcSHTrade';
const svcSHTradeUrl = 'http://openapi.molit.gokr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcSHTrade';
const svcSHTradeService = '%2FWi59SrBVyo4exN0W02ibQiDuxLExBwGr7zxFDsjvtYOG1lLnGFGeI5OibY0O8IwS5COck%2FSAhbdU%2BN6hxewTA%3D%3D';

/*
*  국토교통부_단독/다가구 전월세 자료
*/
const svcSHRent = 'svcSHRent';
const svcSHRentUrl = 'http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcSHRent';
const svcSHRentServiceKey= '%2FWi59SrBVyo4exN0W02ibQiDuxLExBwGr7zxFDsjvtYOG1lLnGFGeI5OibY0O8IwS5COck%2FSAhbdU%2BN6hxewTA%3D%3D';

/*
*  국토교통부_연립다세대 매매 실거래자료
*/
const svcRHTrade = 'svcRHTrade';
const svcRHTradeUrl = 'http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcRHTrade';
const svcRHTradeServiceKey = '%2FWi59SrBVyo4exN0W02ibQiDuxLExBwGr7zxFDsjvtYOG1lLnGFGeI5OibY0O8IwS5COck%2FSAhbdU%2BN6hxewTA%3D%3D';

/*
*  국토교통부_연립다세대 전월세 자료
*/
const svcRHRent = 'svcRHRent';
const svcRHRentUrl = 'http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcRHRent';
const svcRHRentServiceKey = '%2FWi59SrBVyo4exN0W02ibQiDuxLExBwGr7zxFDsjvtYOG1lLnGFGeI5OibY0O8IwS5COck%2FSAhbdU%2BN6hxewTA%3D%3D';







