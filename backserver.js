var express = require('express');
var app = express();
var cors = require('cors');
var request = require('request');
let parseString = require('xml2js').parseString;

/*
* 국토교통부_상업업무용 부동산 매매 신고 자료 API
* param : {LAWD_CD, DEAL_YMD}
*/ 
const restRTMS = 'restRTMS';
const restRTMSUrl = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcNrgTrade';
const restRTMSServiceKey = 'DTMk0hJB4csVV7MD0JM%2FpLR6ras7k9zWLEfKREEwaQsqKI3nsNBmg%2Fb7yivnArm9kv7KX012st3L5OyklCs%2BOg%3D%3D';

/*
* 국토교통부_등록번호용 지역코드_20201231
* param : {page, perPage}
*/ 
const molitLawdCD = 'molitLawdCD';
const molitLawdCDUrl = 'https://api.odcloud.kr/api/15063993/v1/uddi:e6b4e89e-5524-47ef-9db7-eedabf41ed29';  //
const molitLawdCDServiceKey = 'DTMk0hJB4csVV7MD0JM%2FpLR6ras7k9zWLEfKREEwaQsqKI3nsNBmg%2Fb7yivnArm9kv7KX012st3L5OyklCs%2BOg%3D%3D';


// front 서버인 127.0.0.1:8080 의 요청을 허용하도록 cors 사용
app.use(cors({					
   origin: 'http://localhost:3000',
   credentials:true,
}));

// json 형태의 Request Body를 받기 위해 사용
app.use(express.json());				
app.use(express.urlencoded({ extended: true }));	

// POST
app.post('/', function(req, res){				// front 서버에서 post 방식으로 전송받음
   console.log('입력받은 숫자는 : ' + req.body.number);	// Request Body의 number값 출력
   return res.status(200).json({				// front 서버에 json 형태로 '잘 받음' message 리턴
      message: '잘 받음',
   });
});

// GET
app.get('/', function(req, res){
      
   console.log("###############################################");

   const kindApi = req.query.kindApi;

   let apiUrl = '';
   let apiServiceKey = '';
   let apiParamJson = {};

   switch(kindApi) {

      case restRTMS:  
         apiUrl = restRTMSUrl;
         apiServiceKey = restRTMSServiceKey;
         apiParamJson = { 'LAWD_CD' : req.query.lawdCd, 'DEAL_YMD' : req.query.dealYmd}

      case molitLawdCD:  
         apiUrl = restRTMSUrl;
         apiServiceKey = restRTMSServiceKey;
         apiParamJson = { 'page' : req.query.page, 'perPage' : req.query.perPage}

      default:
         
   }

   let url = urlSetting(apiUrl, apiServiceKey, apiParamJson);
   console.log("# URL : " + url + "\n");

   request(url, (err,response,body) => {
      if(err) throw err;
      console.log("# apiData : " + body + "\n");

      parseString(body, (err, result) => {
         if(err) throw err;
         let parseData = result;
         console.log("# apiData(parseXML) : " + body);

         console.log("###############################################\n");
         return res.status(200).json({       // front Server로 리턴				
            message: parseData,
         });
      });
      
   });

});


function urlSetting(url, serviceKey, jsonParam){
   let retUrl = url + '?serviceKey=' + serviceKey;
   if(jsonParam != null) for(key in jsonParam){retUrl += '&' + key + '=' + jsonParam[key]}
   return retUrl;
}


app.listen(52273, function() {
   console.log('Server Running at http://127.0.0.1:52273');
});