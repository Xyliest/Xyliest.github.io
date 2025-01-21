vw=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0);
vh=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0);

window.onload=function(){
	disable();
}

function get_error(div){
	div.className+=" disabled";
	div.addEventListener("click",function(event){event.preventDefault()},false);
}
	
function exist(div,url) {
    url+="?"+new Date().getTime()+Math.floor(Math.random()*1000000);
    var el=document.createElement('script');
    el.id="123";
    el.onerror=function(){if(el.onerror)get_error(div)}
    el.src=url;
    document.body.appendChild(el);
}

function disable() {
	divs=document.querySelectorAll("div.categoriesCS");
	divs.forEach(function(x){exist(x,x.parentElement.href)}); 
}

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
