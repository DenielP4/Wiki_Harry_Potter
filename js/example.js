$(function () {
	var elWrap = $('#slider'),
		el =  elWrap.find('img'),
	   	indexMax = el.length,
        indexImg = el.length,
		phase = 2000,
        timer;
       function change(v) {  
        el.stop(true,true);
        var next = el.eq(indexImg-1);
        next.appendTo(elWrap).css({left: v ? 620 : -620}).animate({"left": 20}, 800)
	}


	function autoCange () {
		indexImg++;
		if(indexImg > indexMax) {
			indexImg = 1;
		}
      change(true);
	  timer = window.setTimeout(autoCange, phase);
	}


	elWrap.append('<span class="next"></span><span class="prev"></span>');
	var	btnNext = $('span.next'),
		btnPrev = $('span.prev');

	btnNext.click(function() {
        window.clearTimeout(timer)
		indexImg++;
		if(indexImg > indexMax) {

			indexImg = 1;
		}
		change (true);
	});
	btnPrev.click(function() {
        window.clearTimeout(timer)
		indexImg --;
		if(indexImg < 1) {
			indexImg = indexMax;
		}

		change();
	});
   autoCange()
	});