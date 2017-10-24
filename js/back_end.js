$(document).ready(function () {
	//页面滚动，导航自动变换
	$(window).scroll(function(){
		var wst = $(window).scrollTop();
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
	});
	//tab选项卡
	$('.graduate_work li:not(:first)').hide();
	$('.graduate_year li').click(function(){
		var num = $(this).index();
		 $(this).addClass('clicked')
			   .siblings()
			   .removeClass('clicked');

		 $('.graduate_work li').eq(num)
		 					  .show()
		 					  .siblings()
		 					  .hide();
	});
	$('.page a').click(function(){
		$(this).addClass('mouseup')
               .siblings()
               .removeClass('mouseup');
	});
//上传照片预览

	$('.scroll_photo li').click(function(){
		$(this).find('input').change(function(){
			var objURL = getObjectURL(this.files[0]);
			if(objURL){
				$(this).parent('form').siblings('.photo').attr('src',objURL);
			}
		})
	});

	$('.member li,.work_wrapper li').click(function(){
		$(this).find('input').change(function(){
			var objURL = getObjectURL(this.files[0]);
			if(objURL){
				$(this).parent('form').siblings('img').attr('src',objURL);
			}
		})
	});

//建立一个可以获取file的URL的函数
	function getObjectURL(file){
 	 var url = null;
 	 if(window.createObjectURL !=undefined) {
 	 	url = window.createObjectURL(file);
 	 }else if(window.URL!=undefined) {
 	 		url = window.URL.createObjectURL(file);
 	 	}else if(window.webkitURL!=undefined){
 	 		url = window.wekitURL.createObjectURL(file);
 	 	}
 	 	return url;
 	}

//更改文字
   $('.introduce .editor').click(function(){
   		
   		$(this).siblings('.introduce_word')
   			   .css('display','none');
   		$(this).siblings('textarea')
   			   .css('display','block');

   })
   $('.introduce .save').click(function(){
   		var text = $(this).siblings('textarea')
   						  .val();
   		$(this).siblings('textarea')
   			   .css('display','none');
   		$(this).siblings('.introduce_word')
   			   .css('display','block');
   		$(this).siblings('.introduce_word')
   			   .html(text);
   });

//毕业去向文字编辑
    $('.graduate_year li').click(function(){
        var num2 = $(this).index();
        $('.operation .editor').click(function(){
        	$('.graduate_work').css('display','none');
        	$('.graduate_word li').eq(num2)
        						  .css('display','block');

        });
        $('.operation .save').click(function(){
    		var text=$('.graduate_word li').eq(num2)
    			      .children('textarea')
    			      .val();
    	    $('.graduate_word li').eq(num2)
        						  .css('display','none');
    		$('.graduate_work li').eq(num2)
    							  .html(text);
    		$('.graduate_work').eq(num2)
    						   .css('display','block');
    	});
    })

//轮播删除
	$('.scroll_photo li').hover(function(){
		// var num3 = $(this).index();
		// alert(num3);
		
		$(this).children('.close')
			   .css('display','block');
		$(this).siblings().children('.close')
			   .css('display','none');
	});
 //轮播添加
 	$('.addinphoto').change(function(){
 		var addinphoto = $('.scroll_photo li:last-child').clone();	
 		var objURL = getObjectURL(this.files[0]);
		if(objURL){
			$(addinphoto).children('img').attr('src',objURL);
		}
		$('.scroll_photo').append(addinphoto);		
 	});

//ajax 
//轮播交互
	$('.scroll_photo li').children('.save').click(function(){
		var num = $(this).parent('li').index()+1;
		var scroll = $(this).siblings('#scroll_form')[0];
		// console.log($(this).siblings('#scroll_form')[0]);
		var scroll_form = new FormData(scroll);
		alert(scroll_form);
		$.ajax({
			type:'POST',
			url:'http://rapapi.org/mockjsdata/25235/CarouselServlet',
			data:{no:num,photo:scroll_form},
			processData:false,
			processData:false,
			// contentType:false,
			success: function(data){
				console.log(1);
			}
		})
	});

//成员展示图片交互
	$('.member li').children('.save').click(function(){
		var num = $(this).parent('li').index()+1;
		var member_form = $(this).siblings('form')[0];
		// console.log($(this).siblings('form')[0]);
		var member_from = new FormData(member_form);
		alert(member_from);
		$.ajax({
			type:'POST',
			url:'MemberServlet',
			data:{memberNo:num,memberPhoto:member_from},
			processData:false,
			processData:false,
			success: function(data){
				console.log(1);
			}
		})
	});

//成员展示文字交互
 	$('.introduce li').children('.save').click(function(){
 		var num = $(this).parent('li').index()+1;
 		var introduce_note = $(this).siblings('textarea').val();
 		alert(introduce_note);
 		$.ajax({
 			type:"POST",
 			url:'MemberTextServlet',
 			data:{memberno:num,memberText:introduce_note},
 			processData:false,
			processData:false,
			success:function(){
				console.log(1);
			}
 		})
 	});

 //成果展示交互
 	$('.work_wrapper li').children('.save').click(function(){
 		var num = $(this).parent('li').index()+1;
 		var work_form = $(this).siblings('form')[0];
 		var work_photo = new FormData(work_form);
 		alert(work_photo);
 		$.ajax({
 			type:"POST",
 			url:"Achievement",
 			data:{achNo:num,achPhoto:work_photo},
 			processData:false,
			processData:false,
			success:function(){
				console.log(1);
			}
 		})
  	});

//轮播删除数据
	$('.close').click(function(){
		var confirm_ = confirm("确定删除么？")
		$(this).parent('.scroll_photo li')
			   .css('display','none');
		if(confirm_){
			$.ajax({
				type:'POST',
				url:"http://rapapi.org/mockjsdata/25235/CarouselServlet",
				success:function(){
					console.log(1);
					var num = $(this)
				}
			})

		}
	})
	
})
