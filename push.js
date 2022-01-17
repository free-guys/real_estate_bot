//사용자하고자 하는 서버 API에 설치한 모듈을 Require를 통해 모듈을 불러온다.
const nodemailer = require('nodemailer');

process.env.NODEMAILER_USER = 'testyunmail@gmail.com';
process.env.NODEMAILER_PASS = 'bot!@gh#$';
const main = async () => {
    let transporter = nodemailer.createTransport({
      service: 'gmail',//사용하자고 하는 서비스
      host: 'smtp.gmail.com',//host를 gmail로 설정
      port: 587,
      secure: false,
      auth: {
        user: process.env.NODEMAILER_USER,//gmail 주소
        pass: process.env.NODEMAILER_PASS,//gmail 패스워드
      },
    });
  
    // send mail with defined transport object
    const email = 'ybj3975@naver.com';
    const generatedAuthNumber = 'TESTtest';
    let info = await transporter.sendMail({
      from: `"WDMA Team" <${process.env.NODEMAILER_USER}>`,//보내는 곳의 이름과, 메일 주소를 입력
      to: email,//받는 곳의 메일 주소를 입력
      subject: 'WDMA Auth Number',//보내는 메일의 제목을 입력

      //보내는 메일의 내용을 입력
      text: generatedAuthNumber,//일반 text로 작성된 내용
      html: `<b>${generatedAuthNumber}</b>`,//html로 작성된 내용
    });
  
    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  };
  
  main().catch(console.error);