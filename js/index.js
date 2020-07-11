$(document).ready(function(){
    
    var count=0;

    developer_animation();
    

    function developer_animation() {
    
        setTimeout(function(){
        count++;
        if(count==1){
            title="D";
        }else if(count==2){
            title="De";
        }else if(count==3){
            title="Dev";
        }else if(count==4){
            title="Deve";
        }else if(count==5){
            title="Devel";
        }else if(count==6){
            title="Develo";
        }else if(count==7){
            title="Develop";
        }else if(count==8){
            title="Develope";
        }else if(count==9){
            title="Developer";
        }
        if(count !=10){
            $('.title').text(`I'm a ${title}`);
            developer_animation();
        }else if(count==10){
            count=0;
            setTimeout(function(){
                designer_animation();
            },1000);
        }

    },100);
}

        function designer_animation(){
            
            setTimeout(function(){
                count++;
                if(count==1){
                    title="D";
                }else if(count==2){
                    title="De";
                }else if(count==3){
                    title="Des";
                }else if(count==4){
                    title="Desi";
                }else if(count==5){
                    title="Desig";
                }else if(count==6){
                    title="Design";
                }else if(count==7){
                    title="Designe";
                }else if(count==8){
                    title="Designer";
                }

                if(count!=9){
                    $('.title').text(`I'm a ${title}`);
                    designer_animation();
                }else if(count==9){
                    count=0;
                    setTimeout(function(){
                        developer_animation();
                    },1000);
                }

            },100);
        }

    
    $('.see_resume').mouseenter(function(){
        $(this).css('background-color',' rgb(9, 112, 102)');
    })

    $('.see_resume').mouseleave(function(){
        $(this).css('background-color','rgb(60, 194, 180)');
    })

    animate_title();
  function animate_title() { 


    setTimeout(function(){

        $(".advjava_title").animate({ fontSize: "+=30px" }, 500);
        $(".advjava_title").animate({ letterSpacing: "+=10px" }, 1000);

        $('.python_title').animate({fontSize:'+=30px'}, 500);
        $('.python_title').animate({letterSpacing:'+=8px'}, 1000);

        $('.java_title').animate({fontSize:'+=30px'}, 500);
        $('.java_title').animate({letterSpacing:'+=15px'}, 1000);
        
        loop();
        },2000)
    
    }

    function loop(){

        setTimeout(function(){

        $(".advjava_title").animate({ fontSize: "-=30px" }, 500);
        $(".advjava_title").animate({ letterSpacing: "-=10px" }, 1000);

        $('.python_title').animate({fontSize:'-=30px'}, 500);
        $('.python_title').animate({letterSpacing:'-=8px'}, 1000);

        $('.java_title').animate({fontSize:'-=30px'}, 500);
        $('.java_title').animate({letterSpacing:'-=15px'}, 1000);
        
        animate_title();
        },3000)
    }
    $('.project_name').text('python');
    $('.project_content').text('Python Project Idea – Build an application that can be used to block certain websites from opening. This is a very helpful program for students who want to focus on studies and don’t want any other distractions like social media.');

    var project_count= 1;
    $('.next').click(function(){
        if(project_count==3){
        project_count=0;
        }
        project_count++;
        $('.actual').attr('src','/image/project'+ project_count +'.gif')
        
        if(project_count==1){
            $('.project_name').text("python");
            $('.project_content').text('Python Project Idea – Build an application that can be used to block certain websites from opening. This is a very helpful program for students who want to focus on studies and don’t want any other distractions like social media.')
        } else if(project_count==2){
            $('.project_name').text("web development");
            $('.project_content').text('A web developer is a programmer who specializes in the development of World Wide Web applications using a client-server model. They are also responsible for designing, coding and modifying websites, from layout to function and according to a client’s specifications.')
        } else if(project_count==3){
            $('.project_name').text("Advance Java");
            $('.project_content').text('This particular project is designed to provide a user interface that asks multiple-choice questions and takes inputs from users as the answers and then, finally evaluates all the questions and gives back the output as the individuals result. ')
        }
        

    })
    $('.prev').click(function(){
        if(project_count==1){
        project_count=4;
        }
        project_count--;
        $('.actual').attr('src','/image/project'+ project_count +'.gif')
        
        if(project_count==1){
            $('.project_name').text("python");
            $('.project_content').text('Python Project Idea – Build an application that can be used to block certain websites from opening. This is a very helpful program for students who want to focus on studies and don’t want any other distractions like social media.')
        } else if(project_count==2){
            $('.project_name').text("web development");
            $('.project_content').text('A web developer is a programmer who specializes in the development of World Wide Web applications using a client-server model. They are also responsible for designing, coding and modifying websites, from layout to function and according to a client’s specifications.')
        } else if(project_count==3){
            $('.project_name').text("Advance Java");
            $('.project_content').text('This particular project is designed to provide a user interface that asks multiple-choice questions and takes inputs from users as the answers and then, finally evaluates all the questions and gives back the output as the individuals result.')
        }
    })




})


