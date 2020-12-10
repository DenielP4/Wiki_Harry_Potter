$(function () {
	let elWrap = $('.slider_wrap'),
		el =  elWrap.find('img'),
	   	indexMax = el.length,
	    indexImg = el.length,
		phase = 3000,
	    timer;
    function change(v) {  
	    el.stop(true,true);
        let next = el.eq(indexImg-1);
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
   autoCange()
});