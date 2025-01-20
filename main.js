vw=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0);
vh=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0);

function adjust(el,pN) {
	pP=el;
	for(i=0;i<pN;i++) {
		pP=pP.parentElement;
	}
	pP=pP.getBoundingClientRect();
	elW=pP["width"]-vw/50;
	elH=pP["width"]-vw/50;
	el.width=elW;
	el.height=elH;
	el.style.visibility="visible";
}

function adjustSVG(el,pN) {
	pP=el;
	for(i=0;i<pN;i++) {
		pP=pP.parentElement;
	}
	pP=pP.getBoundingClientRect();
	elW=pP["width"]-vw/50;
	elH=pP["width"]-vw/50;
	el.width.baseVal.value=elW;
	el.height.baseVal.value=elH;
	el.style.visibility="visible";
}
