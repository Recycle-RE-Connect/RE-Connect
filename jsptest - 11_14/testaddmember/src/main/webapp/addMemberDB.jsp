<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*"%>
<%@ page import="java.io.PrintWriter"%>
<%@ page import="java.sql.Connection"%>
<%@ page import="java.sql.DriverManager"%>

<%
    // 폼 데이터 가져오기
    String userId = request.getParameter("user_id");
    String userPw = request.getParameter("user_pw");
    String userName = request.getParameter("user_name");
    String userGender = request.getParameter("MF");
    String userBirthYear = request.getParameter("user_year");
    String userBirthMonth = request.getParameter("user_month");
    String userBirthDay = request.getParameter("user_day");
    String userPhonePrefix = request.getParameter("user_phone") + "-";
    String userPhoneSuffix = request.getParameter("phone_last");
    String userEmail = request.getParameter("email") + "@" + request.getParameter("email_select");
    String userCountry = request.getParameter("user_country");
    String userEducation = request.getParameter("user_education");

    // 생년월일 문자열을 Date 객체로 변환
    String userBirthString = userBirthYear + "-" + userBirthMonth + "-" + userBirthDay;
    Date userBirthDate = Date.valueOf(userBirthString);

    // JDBC 연결 정보
    String jdbcUrl = "jdbc:mysql://localhost:3306/jsptest";
    String dbUser = "root";
    String dbPassword = "znfntbt0!";

    Connection connection = null;
    PreparedStatement preparedStatement = null;

    try {
        // JDBC 드라이버 로드
        Class.forName("com.mysql.cj.jdbc.Driver");

        // 데이터베이스 연결
        connection = DriverManager.getConnection(jdbcUrl, dbUser, dbPassword);

        // SQL 쿼리 작성
        String sql = "INSERT INTO addmember (user_id, user_pw, user_name, user_gender, user_birth, user_phone, user_email, user_country, user_education, reg_date) " +
                     "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())";

        // PreparedStatement 객체 생성
        preparedStatement = connection.prepareStatement(sql);

        // 파라미터 설정
        preparedStatement.setString(1, userId);
        preparedStatement.setString(2, userPw);
        preparedStatement.setString(3, userName);
        preparedStatement.setString(4, userGender);
        preparedStatement.setDate(5, userBirthDate);
        preparedStatement.setString(6, userPhonePrefix + userPhoneSuffix);
        preparedStatement.setString(7, userEmail);
        preparedStatement.setString(8, userCountry);
        preparedStatement.setString(9, userEducation);

        // 쿼리 실행
        int rowsAffected = preparedStatement.executeUpdate();

        // 쿼리 실행 결과에 따라 메시지 출력
        if (rowsAffected > 0) {
            out.println("<h2>회원 가입이 완료되었습니다.</h2>");
        } else {
            out.println("<h2>회원 가입 중 오류가 발생했습니다.</h2>");
        }
    } catch (ClassNotFoundException | SQLException e) {
        e.printStackTrace();
    } finally {
        // 연결 해제
        try {
            if (preparedStatement != null) {
                preparedStatement.close();
            }
            if (connection != null) {
                connection.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
%>
