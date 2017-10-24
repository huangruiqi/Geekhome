$(document).ready(function(){
//导航特效,导航高光根据页面的滚动来实现
	$(window).scroll(function(){
		var wst = $(window).scrollTop() //滚动条距离顶端值
		var nav_num = Math.floor(wst/600);
			$('.nav li').eq(nav_num)
		 				.addClass('nav1')
		 				.siblings()
		 				.removeClass('nav1');
});		

//导航点击特效
	$('.nav li').click(function(){
		$(this).addClass('nav1')
			   .siblings()
			   .removeClass('nav1');
		var index = $(this).index();
		var num = index*650;
		if(index == 4){
			$('html,body').animate({scrollTop:2700},1000);
		}else{
		$('html,body').animate({scrollTop:num},1000);
	}
	})


//3d轮播
	var json = [
		{//图1
			top:"240px",
			left:"120px",
			width:"500px",
			height:"350px",
			zIndex:5,
			opacity:0.5
		},
		{//图2
			top:"210px",
			left:"150px",
			width:"700px",
			height:"350px",
			zIndex:8,
			opacity:0.7
		},
		{//图3
			top:"200px",
			left:"200px",
			width:"820px",
			height:"350px",
			zIndex:10,
			opacity:1
		},
		{//图4
			top:"210px",
			left:"370px",
			width:"700px",
			height:"350px",
			zIndex:8,
			opacity:0.7
		},
		{//图5
			top:"240px",
			left:"600px",
			width:"500px",
			height:"350px",
			zIndex:5,
			opacity:0.5
		}

	];
	var scroll = true;
//封装一个函数，将json每个数据通过遍历加在每个'li'容器上
   function show(){
   	for(var i in json){
   		$('.scroll ul li').eq(i).css({
   			zIndex:json[i].zIndex
   		});
   		$('.scroll ul li').eq(i).animate({
   			top:json[i].top,
   			left:json[i].left,
   			width:json[i].width,
   			opacity:json[i].opacity
   		},function(){
   			scroll = true;
   		});
   }
}
show();
	$('.lefta').click(function(){
		if(scroll==true){
			scroll=false;
//shift()方法删除数组的第一个值，并返回第一个值
//push()方法接收任意数量的参数，并把它逐个添加到数组末尾，返回修改后数组的长度
//json.push(json.shift())将返回的第一个值追加到数组末尾(图片1变为图片5.数组向前推)
			json.push(json.shift());
			show();

		}
	});
	$('.righta').click(function(){
		if(scroll==true){
			scroll=false;
//pop()删除数组的最后个值，并返回最后一个值
//unshift()方法数组前添加任意项，并返回数组的长度。
//json.unshift(json.pop())将返回的最后一个值添加到数组最前面（图片5变为图片1，数组向后推）
			json.unshift(json.pop());
			show();
		}
	});

	var auto = setInterval(function(){
		$('.righta').click();
	},5000);


//成员介绍
	//$('.name').hide();
	var index1;
	$('.member_photo li').hover(function(){
		var index1 = $(this).index();
		$('.introduce').eq(index1).css('opacity','1');
		$('.mask').eq(index1)
		 		   .stop()
		 		   .animate({marginTop:'0px'},1000)

		$('.name').eq(index1)	
		 		   .show(); 		   
	},function(){
		$('.introduce').css('opacity','0.4');
		$('.mask').stop()
				  .animate({marginTop:'200px'},2000);
	});


//成果展示
	$('.cover').hide();
	$('.close').hide();
	$('.cover img').hide();
	$('.row1 li').click(function(){
		var index2=$(this).index();
		$('.cover').show();
		$('.close').show();
		$('.cover img').eq(index2).fadeIn(2000)
					   .siblings().hide();
					   
		
	}
 	);
	$('.row2 li').click(function(){
		var index3 = $(this).index();
		$('.cover').show();
		$('.close').show();
		$('.cover img').eq(index3+3).fadeIn(2000)
					   .siblings().hide();
					   
		
	})
	$('.cover img').click(function(e){
		var index = $(this).index();
		var x = e.clientX;
		var y = e.clientY;
		if(x>250&&x<625){
			if(y>125&&y<550){
				$('.cover img').eq(index-1).fadeIn(1000)
							   .siblings().hide();
			}
		}else{
			if(index+1==7){
				index = 0;
			}
			$('.cover img').eq(index+1).fadeIn(1000)
						   .siblings().hide();
	}
	})
	$('.cover').click(function(e){
		var x = e.clientX;
		var y = e.clientY;
		if(x>250&&x<1050&&y>124&&y<550){
		}else{
			$('.cover').fadeOut(1000);
		}
	})

//毕业去向
	$('.high_one').hover(function(){
		$('.high_one').css('background-color','white');
		$('.triangle_test').css('border-top-color','white');
		$('.triangle_test').css('border-left-color','white');
		$('.num').css('color','black');
	},function(){
		$('.high_one').css('background-color','#7C7D7F');
		$('.triangle_test').css('border-top-color','#7C7D7F');
		$('.triangle_test').css('border-left-color','#7C7D7F');
		$('.num').css('color','white');
	});
	$('.high_two').hover(function(){
		$('.high_two').css('background-color','white');
		$('.triangle_testTwo').css('border-top-color','white');
		$('.triangle_testTwo').css('border-left-color','white');
		$('.num').css('color','black');
	},function(){
		$('.high_two').css('background-color','#7C7D7F');
		$('.triangle_testTwo').css('border-top-color','#7C7D7F');
		$('.triangle_testTwo').css('border-left-color','#7C7D7F');
		$('.num').css('color','white');
	});
	$('.low_one').hover(function(){
		$('.low_one').css('background-color','white');
		$('.triangle_testThree').css('border-bottom-color','white');
		$('.triangle_testThree').css('border-left-color','white');
		$('.num').css('color','black');
	},function(){
		$('.low_one').css('background-color','#7C7D7F');
		$('.triangle_testThree').css('border-bottom-color','#7C7D7F');
		$('.triangle_testThree').css('border-left-color','#7C7D7F');
		$('.num').css('color','white');
	});
	$('.low_two').hover(function(){
		$('.low_two').css('background-color','white');
		$('.triangle_testFour').css('border-bottom-color','white');
		$('.triangle_testFour').css('border-left-color','white');
		$('.num').css('color','black');
	},function(){
		$('.low_two').css('background-color','#7C7D7F');
		$('.triangle_testFour').css('border-bottom-color','#7C7D7F');
		$('.triangle_testFour').css('border-left-color','#7C7D7F');
		$('.num').css('color','white');
	});

//加入我们
	$('#nam').blur(function(){
		if($('#nam').val() == ""){
			$('.nam').html("用户名不能为空！");
			$('#nam').focus();
			return false;
		}else{
			$('.nam').html("");
		}
	});
	$('#phone').blur(function(){
		if($('#phone').val() == ""){
			$('.phone').html("联系方式不能为空！");
			$('#phone').focus();
			return false;
		}else{
			$('.phone').html("");
		}
	});
	$('#col').blur(function(){
		if($('#col').val() == ""){
			$('.col').html("学院名不能为空！");
			$('#col').focus();
			return false;
		}else{
			$('.col').html("");
		}
	});
	$('#grade').blur(function(){
		if($('#grade').val() == ""){
			$('.grade').html("年级名不能为空！");
			$('#grade').focus();
			return false;
		}else{
			$('.grade').html("");
		}
	});
	$('#maj').blur(function(){
		if($('#maj').val() == ""){
			$('.maj').html("专业户名不能为空！");
			$('#maj').focus();
			return false;
		}else{
			$('.maj').html("");
		}
	$('.formItemBtn').click(function(){
		for(var i=0;i<5;i++){
			if($('.loginForm span').eq(i).html() != ''){
				alert('注册失败！');
				return;
			}			
		}
		alert('注册成功！');
	})
	});
});