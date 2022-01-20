
/**
 * 세팅한 정보로 부동산 매매 정보를 가져온다.
 * 
 * reference data 
 * api url : http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcNrgTrade?LAWD_CD=11110&DEAL_YMD=201512
 * serviceKey : DTMk0hJB4csVV7MD0JM%2FpLR6ras7k9zWLEfKREEwaQsqKI3nsNBmg%2Fb7yivnArm9kv7KX012st3L5OyklCs%2BOg%3D%3D
 */

// backendserver url
const besUrl = 'http://127.0.0.1:52273';

// api 종류
const svcNrgTrad = 'svcNrgTrad';            // param : {LAWD_CD, DEAL_YMD} json
const molitLawdCD = 'molitLawdCD';          // param : {page, perPage} xml
const svcAptTradeDev = 'svcAptTradeDev';    // param : {LAWD_CD, DEAL_YMD} json

let kindApi = '';
getMolitLawdCDData()
function getMolitLawdCDData(){
  axios.get(besUrl, {
    params : {
      kindApi : molitLawdCD
      , page : 1
      , perPage : 1000
    }
  })
  .then(function (response) {
    // handle success
    /*
    * selectbox data [{'CHGB_ORGN_CD':'1100', 'CHGB_ORGN_NM' : '서울특별시', children : [{'CHGB_ORGN_CD' : , 'CHGB_ORGN_NM' : },{'CHGB_ORGN_CD' : , 'CHGB_ORGN_NM' : }]},....]
    */
    
    if(response['data'] != null && response['data']['message']['data'].length > 0){
      let data = response['data']['message']['data'];
      console.log(data)

      let sidoTemp = 0;
      let orgnCodeJsonArrIdx = -1;
      let orgnCodeJsonArr = [];
      for(let dataIdx=0; dataIdx<data.length; dataIdx++){
        let sido = data[dataIdx]['시도코드'];
        let chgbOrgnCd = data[dataIdx]['등록번호용기관코드'];
        let chgborgnNm = data[dataIdx]['기관명칭'];
        
        let orgnCodeJson = {
          'CHGB_ORGN_CD' : chgbOrgnCd
          , 'CHGB_ORGN_NM' : chgborgnNm
        }

        if(sidoTemp != sido || orgnCodeJsonArr.length == 0){
          orgnCodeJson['children'] = new Array();
          orgnCodeJsonArr.push(orgnCodeJson);
          orgnCodeJsonArrIdx++;
          sidoTemp = sido;
        } else {
          orgnCodeJsonArr[orgnCodeJsonArrIdx]['children'].push(orgnCodeJson);
        }
      }
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

function getRTMSDataSvcNrgTrade(){
  axios.get(besUrl, {
    params : {
      kindApi : svcNrgTrad
      , lawdCd : 11110
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
getRTMSDataSvcAptTradeDev()
function getRTMSDataSvcAptTradeDev(){
  axios.get(besUrl, {
    params : {
      kindApi : svcAptTradeDev
      , lawdCd : 11110
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