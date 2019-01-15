<%@ page language="java" pageEncoding="UTF-8" %>
<%
    String orderNo = request.getParameter("orderNo");
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>加盟商预付款支付</title>
    <meta name="description" content="加盟商预付款支付请求，跳转到支付宝支付页面"/>
    <script src="../js/jquery-2.1.4.min.js"></script>
</head>
<body class="alipay-body">

</body>

<script>

    $.ajax({
        url: '/wego/alipay/web/pay',
        async: false,
        data: {
            orderNo: '<%=orderNo%>'
        },
        success: function (response) {
            var b = $('.alipay-body')[0];
            b.innerHTML = response;

            document.forms[0].submit();

        }//success

    });//ajax

</script>

</html>