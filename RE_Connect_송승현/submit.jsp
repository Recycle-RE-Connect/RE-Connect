<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%> <% String id = request.getParameter("id"); String pwd =
request.getParameter("pwd"); String hobby[] =
request.getParameterValues("hobby"); String age = request.getParameter("age");
String massage = request.getParameter("massage"); out.println("id : "+ id +"<br />");
out.println("pwd : "+ pwd +"<br />"); if(hobby != null && hobby.length > 0){
for(int i = 0; i < hobby.length; i++){ out.println("hobby : "+ hobby[i] +"<br />");
} } out.println("age : "+ age +"<br />"); out.println("massage : "+ massage
+"<br />"); %>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Insert title here</title>
  </head>
  <body></body>
</html>
