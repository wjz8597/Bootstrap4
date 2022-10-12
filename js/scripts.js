$("#mycarousel").carousel({interval:2000});
        $("#carouselButton").click(function(){
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');                    
                }
            });
        $("#loginModalLink").click(function() {
            $("#loginModal").modal("show");
        });

        $("#reserveModalButton").click(function() {
            $("#reserveModal").modal("show");
        });
        $("#loginModalCross").click(function() {
            $("#loginModal").modal("hide");
        });

        $("#reserveModalCross").click(function() {
            $("#reserveModal").modal("hide");
        });
        $("#loginModalCancel").click(function() {
            $("#loginModal").modal("hide");
        });

        $("#reserveModalCancel").click(function() {
            $("#reserveModal").modal("hide");
        });