function closewindow()
{
    var $modal = $('div.modalc').omniWindow();
	//e.preventDefault();
	$modal.trigger('hide');
}
function sentinterest(id)
{
    if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			var $modal = $('div.modalc').omniWindow();
		    $modal.trigger('hide');
			alertify.alert(xmlhttp.responseText);
			var btnid = "interest"+id;
			document.getElementById(btnid).style.display="none";
			//location.reload();
		}
	}
	xmlhttp.open("GET","sendinterest.php?search="+id,true);
	xmlhttp.send();
	//var $modal = $('div.modal').omniWindow();
	//$modal.trigger('hide');
	//location.reload();
}
function getprofile()
{
    window.open("profile.php");
}
function modal(id)
{
	//alert(id);
	$.ajax({
		type: "POST",
		url: "ajxinterest.php",
		data:{
      		 pid:id
   		},
		cache: false,
		success: function(html)
		{
			$("#interestdiv").html(html).show();
		}
	});
	var $modal = $('div.modalc').omniWindow();
    $modal.trigger('show');
}
$(function(){
	$('#close-button').click(function(e){
		var $modal = $('div.modalc').omniWindow();
		e.preventDefault();
		$modal.trigger('hide');
	});
	$('#m-close').click(function(e){
		var $modal = $('div.modalc').omniWindow();
		e.preventDefault();
		$modal.trigger('hide');
	});
});
function transition(s1,s2,b,c)
{
	$(s2).slideToggle("slow");
	$(s1).slideToggle("slow");
	$(b).toggle();
	$(c).toggle();
}