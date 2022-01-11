
/**
 * 세팅한 정보로 부동산 매매 정보를 가져온다.
 * 
 * reference data 
 * api url : http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcNrgTrade?LAWD_CD=11110&DEAL_YMD=201512
 * serviceKey : DTMk0hJB4csVV7MD0JM%2FpLR6ras7k9zWLEfKREEwaQsqKI3nsNBmg%2Fb7yivnArm9kv7KX012st3L5OyklCs%2BOg%3D%3D
 */



 getInfo()
function getInfo(){
    const serviceKey = 'DTMk0hJB4csVV7MD0JM%2FpLR6ras7k9zWLEfKREEwaQsqKI3nsNBmg%2Fb7yivnArm9kv7KX012st3L5OyklCs%2BOg%3D%3D';
    const lawdCd = '11110';
    const dealYmd = '202012';

    /* Javascript 샘플 코드 */
    const xhr = new XMLHttpRequest();
    const url = 'https://cors-anywhere.herokuapp.com/http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcNrgTrade'; /* URL */
    const queryParams = '?serviceKey=' + serviceKey   /* Service Key */
                      + '&LAWD_CD=' + lawdCd       /* 지역코드 */
                      + '&DEAL_YMD=' + dealYmd;     /* 해당연월 */
    xhr.open('GET', url + queryParams);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
        }
    };

    xhr.send('');
}


/**
 * 세팅한 정보를 초기화한다.
 */
function clear(){

}


/**
 * 부동산 매매 정보에 설정한 정보가 존재시
 * 알림메세지를 전송한다.
 */
function push(){

}