var express = require('express');
var app = express();
var cors = require('cors');
var request = require('request');
let parseString = require('xml2js').parseString;
var apiInfo = require('./apiInfo');

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

   let url = apiInfo.getUrl(req);
   
   console.log("# URL : " + url + "\n");

   // data parse 작업을 back으로 할지 font단에서 할지 정해야할듯함

   request(url, (err,response,body) => {
      if(err) throw err;
      console.log("# apiData : " + body + "\n");

      if(body.indexOf('<?xml') != -1){
         parseString(body.replace("\ufeff", ""), (err, result) => {
            if(err) throw err;
            let parseData = result;
            console.log("# apiData(parseXML) : " + body);
   
            console.log("###############################################\n");
            return res.status(200).json({       // front Server로 리턴				
               message: parseData,
            });
         });
      } else {
         // json
         return res.status(200).json({       // front Server로 리턴				
            message: JSON.parse(body),
         });
      }

   });

});

app.listen(52273, function() {
   console.log('Server Running at http://127.0.0.1:52273');
});