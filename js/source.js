(function () {
    $(function () {
        var $accordion, $wideScreen;
        $accordion = $('#accordion').children('li');
        $wideScreen = $(window).width() > 767;
        if ($wideScreen) {
            $accordion.on('click', function (e) {
                var $this;
                e.stopPropagation();
                $this = $(this);
                if ($this.hasClass('out')) {
                    $this.addClass('out');
                } else {
                    $this.addClass('out');
                    $this.siblings().removeClass('out');
                }
            });
        } else {
            $accordion.on('touchstart touchend', function (e) {
                var $this;
                e.stopPropagation();
                $this = $(this);
                if ($this.hasClass('out')) {
                    $this.addClass('out');
                } else {
                    $this.addClass('out');
                    $this.siblings().removeClass('out');
                }
            });
        }
    });

    $(function () {
        var $box;
        $box = $('.sm-box');
        $box.on('click', function (e) {
					e.preventDefault();
            var $this;
            $this = $(this);
            if ($this.hasClass('active')) {
                $this.removeClass('active');
            } else {
                $this.addClass('active');
            }
        });
    });
}.call(this));


// set vars
const slider = document.getElementById("slider");
const image = document.getElementsByClassName("image")[1];
const buttonRange = document.getElementsByClassName("buttonRange")[0];

// move slider at change of value
slider.addEventListener("input", (e) => {
	const sliderPos = e.target.value;

	image.style = "width:" + sliderPos + "%";
});

// move slider at change of value
slider.addEventListener("input", (e) => {
	const sliderPos = e.target.value;

	buttonRange.style = "left:" + sliderPos + "%";
});


