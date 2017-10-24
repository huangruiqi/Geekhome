$(document).ready(function(){
//首页轮播交互
	$.ajax({
        type:"POST",
        url:"getPhotoServlet",
        dataType:"json",
        success:function(content){
            var num1 = content.photo.length;
            for(var n=0;n<num1;n++){
                var str_scroll = '';
                str_scroll = '<img src="'+content.photo[n]+'">'; //拼接字符串部分。
                $('.slider_photo li').eq(n).html(str_scroll);
                // alert(str_scroll);
            }
        },
        error:function(){
            alert('请求失败');
        }
    });

//成员展示图片交互
	$.ajax({
		type:"POST",
		url:"getMemberPhotos",
		dataType:"json",
		success:function(content){
			var num2 = content.getMemberPhotos.length;
			for(var m=0;m<num2;m++){
				var str_member = '';
				str_member = '<img src="'+content.getMemberPhotos[m]+'">';
				$('.member_photo li').eq(m)
									 .children('a')
									 .html(str_member);
			}		
		},
		error:function(){
			alert('请求失败');
		}
	});

//成员展示文字交互
	$.ajax({
		type:"POST",
		url:"getMemberTexts",
		dataType:"json",
		success:function(content){
			var num3 = content.getMemberTexts.length;
			for(var k=0;k<num3;k++){
				$('.introduce').eq(k)	
							   .children('.name')
							   .html(content.getMemberTexts[k]);
			}
		},
		error:function(){
			alert('请求失败');
		}
	})


//成果展示交互 
	$.ajax({
		type:"POST",
		url:"getAchievement",
		dataType:"json",
		success:function(content){
			var num4 = content.achPhotos.length;
			for(var n=0;n<num4-4;n++){
			    var str_work1='<img src="'+content.achPhotos[n]+'">';
				$('.cover').append(str_work1);
				$('.row1 li').eq(n)
							 .children('a')
							 .html(str_work1);
			}
			for(var m=0;m+3<num4;m++){
				var str_work2='<img src="'+content.achPhotos[m+3]+'">';
				$('.cover').append(str_work2);
			    $('.row2 li').eq(m)
			    			 .children('a')
			    			 .html(str_work2);
			}
		},
		error:function(){
			alert('请求失败');
		}
	});

//毕业去向
    var timer;
    $('.num').on('mouseover',function(){
        var str = '';
        $.ajax({
            url:'getGraduate?graduteYear='+$(this).text(),
            data:{
            },
            dataType:'JSON',
            success :function(data){
                    for(var i=0;i<data.gradutes.length;i++){
                        str+='<img src="'+data.gradutes[i]+'" >';
                    }
                    //str+='<img src="images/work_photo1.jpg" >';
                    $('.third_tab').css('display','none');
                    $('.ten_one').html(str);
                    q=0;
                    Show();
                    showTimeOne();
                    var q;
                    function Show(){
                        $('.ten img').eq(q).fadeIn(500);    
                    }
                    function rightOne(){
                        $('.ten img').eq(q).fadeOut(0); 
                        if(q == data.graduates.length){
                            q = -1;
                        }
                        q++;
                        Show();
                    }
                    function showTimeOne(){
                        timer = setInterval(function(){
                        rightOne();
                        },2000);
                    }
            }
        });
        return false;
    });
    $('.num').on('mouseout',function(){
        clearInterval(timer);
        $('.ten img').hide();
        $('.third_tab').css('display','block');
    });
});