

Ext.define('TSMINFO.view.NorthPanel', {
	extend : 'Ext.Panel',

	border : false,

	alias : 'widget.northPanel',

	height : 50,

	cls : 'main-north',

	html : '<div class="header"><div class="header-title">' + operatorName + '</div><div class="logininfo">欢迎您：<span>'
			 +  userName
			+ ' | </span><a href="javascript:void(0)" onclick="TsmFunc.updPassword();">修改密码</a> | <a href="/api/system/logout">退出</a></div></div>'
});
