/*
* @Author: zenda
* @Email: 1606726646@qq.com
* @Description: Ψ(^._.^)Ψ  have a nice day~~~
* @Date:               2016-10-06 15:01:47
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-06 16:49:08
*/
$(function(){
			$(".nav_more").hover(function(){
				$(this).find(".item2").stop(true,true).fadeIn();
			},function(){
				$(this).find(".item2").stop(true,true).fadeOut();
			});
		});