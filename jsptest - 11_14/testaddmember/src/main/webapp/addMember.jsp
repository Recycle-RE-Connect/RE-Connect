<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>가입 결과</title>
</head>
<body>

<%
    // 폼 데이터 검색
    String userId = request.getParameter("user_id");
    String userPw = request.getParameter("user_pw");
    String userName = request.getParameter("user_name");
    String gender = request.getParameter("MF");
    String birthYear = request.getParameter("user_year");
    String birthMonth = request.getParameter("user_month");
    String birthDay = request.getParameter("user_day");
    String phoneNumberPrefix = request.getParameter("user_phone");
    String phoneNumberSuffix = request.getParameter("phone_last");
    String verificationCode = request.getParameter("verification_code");
    String emailId = request.getParameter("email");
    String emailDomain = request.getParameter("email_select");
    String residenceValue = request.getParameter("user_country");
    String educationValue = request.getParameter("user_education");

    // 실제 거주지와 학력 값으로 변환
    String residence = "";
    String education = "";

    // 값에 따라 실제 문자열 반환
    switch (residenceValue) {
        case "01": residence = "서울"; break;
        case "15": residence = "수원/화성"; break;
        case "02": residence = "인천"; break;
        case "16": residence = "천안/당진"; break;
        case "35": residence = "청주"; break;
        case "08": residence = "대전"; break;
        case "12": residence = "전주"; break;
        case "09": residence = "광주"; break;
        case "07": residence = "대구"; break;
        case "04": residence = "부산"; break;
        case "05": residence = "울산"; break;
        case "06": residence = "창원/마산"; break;
        case "22": residence = "경기"; break;
        case "31": residence = "평택/오산"; break;
        case "25": residence = "세종"; break;
        case "30": residence = "충북"; break;
        case "29": residence = "충남"; break;
        case "34": residence = "아산"; break;
        case "27": residence = "전북"; break;
        case "26": residence = "전남"; break;
        case "24": residence = "경북"; break;
        case "21": residence = "강원"; break;
        case "23": residence = "경남"; break;
        case "28": residence = "제주"; break;
        default: residence = ""; break;
    }

    switch (educationValue) {
        case "09": education = "대학교졸업"; break;
        case "10": education = "대학교중퇴"; break;
        case "07": education = "대학교재학"; break;
        case "13": education = "대학원졸업"; break;
        case "05": education = "대학(2,3년제)졸업"; break;
        case "06": education = "대학(2,3년제)중퇴"; break;
        case "02": education = "고등학교 졸업"; break;
        case "15": education = "기타"; break;
        default: education = ""; break;
    }
%>

<h2>가입 결과:</h2>
<p>사용자 아이디: <%= userId %></p>
<p>사용자 이름: <%= userName %></p>
<p>성별: <%= gender.equals("male") ? "남자" : "여자" %></p>
<p>생년월일: <%= birthYear + "-" + birthMonth + "-" + birthDay %></p>
<p>전화번호: <%= phoneNumberPrefix + phoneNumberSuffix %></p>
<p>인증 코드: <%= verificationCode %></p>
<p>이메일: <%= emailId + "@" + emailDomain %></p>
<p>거주지: <%= residence %></p>
<p>학력: <%= education %></p>

</body>
</html>
