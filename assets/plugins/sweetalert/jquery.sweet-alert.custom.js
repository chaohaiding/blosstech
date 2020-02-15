
!function($) {
    "use strict";

    var SweetAlert = function() {};

    //examples 
    SweetAlert.prototype.init = function() {
        
    //Basic
    $('#sa-basic').click(function(){
        swal("Here's a message!");
    });

    //A title with a text under
    $('#sa-title').click(function(){
        swal("Here's a message!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat eleifend ex semper, lobortis purus sed.")
    });

    //Success Message
    $('#sa-success').click(function(){
        swal("Good job!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat eleifend ex semper, lobortis purus sed.", "success")
    });

    //Warning Message
    $('#sa-warning').click(function(){
        swal({   
            title: "Are you sure?",   
            text: "You will not be able to recover this imaginary file!",   
            type: "warning",   
            showCancelButton: true,   
            confirmButtonColor: "#DD6B55",   
            confirmButtonText: "Yes, delete it!",   
            closeOnConfirm: false 
        }, function(){   
            swal("Deleted!", "Your imaginary file has been deleted.", "success"); 
        });
    });

    //Parameter
    $('#sa-params').click(function(){
        swal({   
            title: "办理出院<br>请确认并勾选以下事项：",   
            html:
                '<h5>姓名：王小明 &nbsp;&nbsp; 身份证号：110123196612222379</h5><br>  <input type="checkbox" class="check" id="minimal-checkbox-2" required> 信息核对确认无误 &nbsp;&nbsp;   <input type="checkbox" class="check" id="minimal-checkbox-2"> 费用已全部缴纳 ' +
                '<br>' +
                '<hr><h5>需退还的设备</h5><br>   <input type="checkbox" class="check" id="minimal-checkbox-2" required> 血压监测终端 &nbsp;&nbsp;   <input type="checkbox" class="check" id="minimal-checkbox-2"> 血氧检测仪 &nbsp;&nbsp;   <input type="checkbox" class="check" id="minimal-checkbox-2" required> 心率监护仪<br> ',
                
            type: "warning",   
            showCancelButton: true,   
            confirmButtonColor: "#20A29b",   
            confirmButtonText: "确认",   
            cancelButtonText: "取消",   
            closeOnConfirm: false,   
            closeOnCancel: false 
        }, function(isConfirm){   
            if (isConfirm) {     
                swal("Deleted!", "Your imaginary file has been deleted.", "success");   
            } else {     
                swal("Cancelled", "Your imaginary file is safe :)", "error");   
            } 
        });
    });

    //Custom Image
    $('#sa-image').click(function(){
        swal({   
            title: "Govinda!",   
            text: "Recently joined twitter",   
            imageUrl: "../assets/images/users/profile.png" 
        });
    });

    //Auto Close Timer
    $('#sa-close').click(function(){
         swal({   
            title: "Auto close alert!",   
            text: "I will close in 2 seconds.",   
            timer: 2000,   
            showConfirmButton: false 
        });
    });


    },
    //init
    $.SweetAlert = new SweetAlert, $.SweetAlert.Constructor = SweetAlert
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.SweetAlert.init()
}(window.jQuery);