module.exports = {
    getUrl: function (req) {
        let url = '';
        let kindApi = req.query.kindApi;
        let apiUrl = '';
        let apiServiceKey = '';
        let apiParamJson = {};
        switch(kindApi) {

            case restRTMS:  
               apiUrl = restRTMSUrl;
               apiServiceKey = restRTMSServiceKey;
               apiParamJson = { 'LAWD_CD' : req.query.lawdCd, 'DEAL_YMD' : req.query.dealYmd}
               break;
            case molitLawdCD:  
               apiUrl = molitLawdCDUrl;
               apiServiceKey = molitLawdCDServiceKey;
               apiParamJson = { 'page' : req.query.page, 'perPage' : req.query.perPage}
               break;
            default:
               break;
               
         }

         url = urlSetting(apiUrl, apiServiceKey, apiParamJson);

         return url
    }
};

/*
* 국토교통부_상업업무용 부동산 매매 신고 자료 API
* param : {LAWD_CD, DEAL_YMD} xml
*/ 
const restRTMS = 'restRTMS';
const restRTMSUrl = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcNrgTrade';
const restRTMSServiceKey = 'DTMk0hJB4csVV7MD0JM%2FpLR6ras7k9zWLEfKREEwaQsqKI3nsNBmg%2Fb7yivnArm9kv7KX012st3L5OyklCs%2BOg%3D%3D';

/*
* 국토교통부_등록번호용 지역코드_20201231
* param : {page, perPage} json
*/ 
const molitLawdCD = 'molitLawdCD';
const molitLawdCDUrl = 'https://api.odcloud.kr/api/15063993/v1/uddi:e6b4e89e-5524-47ef-9db7-eedabf41ed29';  //
const molitLawdCDServiceKey = 'DTMk0hJB4csVV7MD0JM%2FpLR6ras7k9zWLEfKREEwaQsqKI3nsNBmg%2Fb7yivnArm9kv7KX012st3L5OyklCs%2BOg%3D%3D';

function urlSetting(url, serviceKey, jsonParam){
    let retUrl = url + '?serviceKey=' + serviceKey;
    if(jsonParam != null) for(key in jsonParam){retUrl += '&' + key + '=' + jsonParam[key]}
    return retUrl;
 }