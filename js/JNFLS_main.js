/*
* @Author: zenda
* @Email: 1606726646@qq.com
* @Description: Ψ(^._.^)Ψ  have a nice day~~~
* @Date:               2016-10-01 09:41:48
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-06 16:33:28
*/
$(function(){
			// 全屏滚动
			$("#fullPage").fullpage({
				sectionsColor:["#FCDD89","#fff"],
				fixedElements:"#fullpage-nav",
				paddingTop:"80px",
				navigation: true,
				slidesNavigation:"true",
				css3:true,
				anchors: ["page1", "page2"],
				navigationPosition: "right",
				loopBottom:"true",
				loopTop:"true",
				loopHorizontal:"true",
			});
			
		});