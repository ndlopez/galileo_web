var acc=document.getElementsByClassName("accordion");
var moji=acc.length;
for(var i=0;i<moji;i++){
	acc[i].addEventListener("click",function(){
	this.classList.toggle("active");
	var panel=this.nextElementSibling;
	if(panel.style.display==="block"){
		panel.style.display="none";
	}
	else{
		panel.style.display="block";
	}
	});
}
/*Close button at the end of the schedule
Should return to the class="panel"*/
/*function cerrar(){
	document.getElementById("sched").style.display="none";
}*/