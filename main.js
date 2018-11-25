$(document).ready(function(){
    $(".test1").click(function(){
        $(this).hide();
    });
    $("#test1").click(function(){
        $(this).hide();
    });
    $("#test2").click(function(){
        alert("You clicked!");
    });
    $("#test3").dblclick(function(){
        alert("You double clicked!");
    });
    $("#test4").mouseenter(function(){
        alert("You entered!");
    });
    $("#test5").mouseleave(function(){
        alert("You left!");
    });
});

$(document).ready(function(){
    $("#hide").click(function(){
        $("#hs").hide();
    });
    $("#show").click(function(){
        $("#hs").show();
    });
});

$(document).ready(function(){
    $("#fade").click(function(){
        $("#div1").fadeIn(3000);
        $("#div1").fadeOut(3000);
    });
});

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideDown("slow");
    });
    $("#fup").click(function(){
        $("#panel").slideUp("slow");
    });
});

$(document).ready(function(){
    $("#animate").click(function(){
        let div = $("#anime");
        // div.animate({height: '300px', opacity: '0.4'}, "slow");
        // div.animate({width: '300px', opacity: '0.8'}, "slow");
        // div.animate({height: '100px', opacity: '0.4'}, "slow");
        // div.animate({width: '100px', opacity: '0.8'}, "slow");
        div.animate({height: '300px', opacity: '0.4'}, 1000);
        div.animate({width: '300px', opacity: '0.8'}, 600);
        div.animate({height: '100px', opacity: '0.4'}, 300);
        div.animate({width: '100px', opacity: '0.8'}, 300);
    });
});

$(document).ready(function(){
    $("#cb").click(function(){
        $("#cb-text").fadeOut("slow", function(){
            alert("The paragraph is now hidden");
        });
    });
});

$(document).ready(function(){
    $("#ch").click(function(){
        $("#ch").css("color", "red")
            .slideUp(1000)
            .slideDown(1000);
    });
});

$(document).ready(function(){
    $("#get-content").click(function(){
        let name = $("#content").val();
        if(name === ""){
            alert("Field is empty");
        }else{
            $("#namelist").append("<li>"+name+"</li>");
            // $("#content").val("");
            $("#content").val("");
        }
    });
});

$(document).ready(function(){
    $("#txt-load").click(function(){
        $("#div2").load("demo_test.txt", function(responseTxt, statusTxt, xhr){
            if(statusTxt === "success")
                alert("External content loaded successfully!");
            if(statusTxt === "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
    });
});

$(document).ready(function(){
    $("#get").click(function(){
        console.log("Hello");
        $.get("demo_test.asp", function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
});

$(document).ready(function(){
    $("#post").click(function(){
        $.post("demo_test_post.asp",
            {
                name: "Donald Duck",
                city: "Duckburg"
            },
            function(data,status){
                alert("Data: " + data + "\nStatus: " + status);
            });
    });
});