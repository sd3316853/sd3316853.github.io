			$(function(){																		
						$('#nav_ul li a').mouseenter(function(){
							$('.li_cloud').show();
							$('.li_cloud').stop().animate({
								left:$(this).offset().left+15								
							});
						});
						$('#nav_ul').mouseout(function(){
							$('.li_cloud').stop().animate({
								left:2000								
							})																				
						})
						var arr=[
						'  本人姓名：李昌盛，',
						'来自湖南，',
						'今年年纪26岁，',
						'性格：沉稳，上进',
						'待人：宽厚，热心',
						'喜欢：音乐，烧烤，打篮球'];
						var switch1=true;
							$('#nav_ul li:eq(0)').click(function(){		
								if(!switch1)return;
								switch1=false;								
								$('.center_individual')[0].style.width=0;
								$('.description')[0].style.width=0;
								$('.hide').hide();
								$('.center_individual').show();									
									$('.center_individual').stop().animate({									
										width:100+'%'							
									},1000);
									$('.description').stop().animate({
										width:100+'%'							
									},1000);																			
									$('.description dt').html('');									
									$('.description dt').html(function(n){											
										for(var q = 0; q <arr[n].length; q++){											
											$('<span>'+arr[n].charAt(q)+'</span>').appendTo($('.description dt:eq('+n+')'));											
										};
									});																				
									var iNow = 0;	
									clearInterval($('#nav_ul li:eq(0)').timer);	
									$('#nav_ul li:eq(0)').timer = setInterval(function(){
										iNow++;																
										$('.description dt span:eq('+iNow+')').stop().animate({
											opacity:1							
											});																
										if(iNow == $('.description dt span').length){									
											clearInterval($('#nav_ul li:eq(0)').timer);	
											switch1=true;
										}																			
									},50);
								
								
							});
							
																
			});