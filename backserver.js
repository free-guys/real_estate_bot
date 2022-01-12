/*
* 참고사이트
* api request : https://presentlife-coding.tistory.com/entry/nodejs-%EA%B3%B5%EA%B3%B5%EB%8D%B0%EC%9D%B4%ED%84%B0%ED%8F%AC%ED%84%B8-API-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0
* ERROR => [Cannot GET /] : https://velopert.com/294
* cors : https://chb2005.tistory.com/30
*/

/*
* install module
* npm install express
* npm install cors
* npm install requset
* npm install xml2js
*/

var express = require('express');
var app = express();
var cors = require('cors');
var request = require('request');
let parseString = require('xml2js').parseString;

app.use(cors({					// front 서버인 127.0.0.1:8080 의 요청을 허용하도록 cors 사용
   origin: 'http://localhost:3000',
   credentials:true,
}));

app.use(express.json());				// json 형태의 Request Body를 받기 위해 사용
app.use(express.urlencoded({ extended: true }));	

app.post('/', function(req, res){				// front 서버에서 post 방식으로 전송받음
   console.log('입력받은 숫자는 : ' + req.body.number);	// Request Body의 number값 출력
   return res.status(200).json({				// front 서버에 json 형태로 '잘 받음' message 리턴
      message: '잘 받음',
   });
});

//http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcNrgTrade?LAWD_CD=11110&DEAL_YMD=201512&serviceKey=DTMk0hJB4csVV7MD0JM%2FpLR6ras7k9zWLEfKREEwaQsqKI3nsNBmg%2Fb7yivnArm9kv7KX012st3L5OyklCs%2BOg%3D%3D

app.get('/', function(req, res){
      
   console.log("###############################################");

   console.log('LAWD_CD : ' + req.query.lawdCd);	// Request Body의 값
   console.log('DEAL_YMD : ' + req.query.dealYmd);
   
   const serviceKey = 'DTMk0hJB4csVV7MD0JM%2FpLR6ras7k9zWLEfKREEwaQsqKI3nsNBmg%2Fb7yivnArm9kv7KX012st3L5OyklCs%2BOg%3D%3D';
   const lawdCd = req.query.lawdCd;
   const dealYmd = req.query.dealYmd;

   var url = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcNrgTrade?';
   url += 'serviceKey=' + serviceKey;
   url += '&LAWD_CD=' + lawdCd;
   url += '&DEAL_YMD=' + dealYmd;

   console.log("# URL : " + url + "\n");

   request(url, (err,response,body) => {
      if(err) throw err;
      console.log("# apiData : " + body + "\n");

      parseString(body, (err, result) => {
         if(err) throw err;
         let parseData = result;
         console.log("# apiData(parseXML) : " + body);

         console.log("###############################################\n");
         return res.status(200).json({				// front 서버에 json 형태로 '잘 받음' message 리턴
            message: parseData,
         });
      });
      
   });

});


app.listen(52273, function() {
   console.log('Server Running at http://127.0.0.1:52273');
});