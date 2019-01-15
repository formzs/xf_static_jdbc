<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8"%>
<%@ page import="java.util.*"%>
<%@ page import="java.util.Map"%>
<%@ page import="com.alipay.api.*"%>
<%@ page import="com.alipay.api.internal.util.*"%>
<%@ page import="com.tsminfo.wego.common.AliPayConstant" %>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>加盟商预付款支付</title>
    <meta name="description" content="加盟商预付款支付，结果同步返回页面"/>
    <script src="../js/jquery-2.1.4.min.js"></script>
</head>
<body class="alipay-body">

<div>

    <%
        //获取支付宝POST过来反馈信息
        Map<String,String> params = new HashMap<String,String>();
        Map<String,String[]> requestParams = request.getParameterMap();
        for (Iterator<String> iter = requestParams.keySet().iterator(); iter.hasNext();) {
            String name = (String) iter.next();
            String[] values = (String[]) requestParams.get(name);
            String valueStr = "";
            for (int i = 0; i < values.length; i++) {
                valueStr = (i == values.length - 1) ? valueStr + values[i]
                        : valueStr + values[i] + ",";
            }
            //乱码解决，这段代码在出现乱码时使用
            valueStr = new String(valueStr.getBytes("ISO-8859-1"), "utf-8");
            params.put(name, valueStr);
        }

        try{
            boolean signVerified = AlipaySignature.rsaCheckV1(params, AliPayConstant.ALIPAY_PUBLIC_KEY, AlipayConstants.CHARSET_UTF8, AlipayConstants.SIGN_TYPE_RSA2);//调用SDK验证签名

            if(signVerified) {//验证成功
                //商户订单号
                String out_trade_no = new String(request.getParameter("out_trade_no").getBytes("ISO-8859-1"),"UTF-8");

                //支付宝交易号
                String trade_no = new String(request.getParameter("trade_no").getBytes("ISO-8859-1"),"UTF-8");

                //交易状态
                String trade_status = new String(request.getParameter("trade_status").getBytes("ISO-8859-1"),"UTF-8");

                if(trade_status.equals("TRADE_FINISHED")){

                }else if (trade_status.equals("TRADE_SUCCESS")){

                }

                out.println("恭喜您, 支付成功, 请返回付款界面刷新");

            }else {//验证失败
                out.println("支付失败, 请返回付款界面重试");

                //调试用，写文本函数记录程序运行情况是否正常
                //String sWord = AlipaySignature.getSignCheckContentV1(params);
                //AlipayConfig.logResult(sWord);
            }
        }
        catch (AlipayApiException e) {
            e.printStackTrace();
        }

    %>

</div>


</body>

</html>


