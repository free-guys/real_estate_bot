
/**
 * 세팅한 정보로 부동산 매매 정보를 가져온다.
 * 
 * reference data 
 * api url : http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcNrgTrade?LAWD_CD=11110&DEAL_YMD=201512
 * serviceKey : DTMk0hJB4csVV7MD0JM%2FpLR6ras7k9zWLEfKREEwaQsqKI3nsNBmg%2Fb7yivnArm9kv7KX012st3L5OyklCs%2BOg%3D%3D
 */

 test()
function test(){
  axios.get('http://127.0.0.1:52273', {
    params : {
      lawdCd : 11110
      , dealYmd : 202012
    }
  })
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
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