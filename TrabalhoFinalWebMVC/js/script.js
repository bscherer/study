function ajaxRequest() {
	var activexmodes = [ "Msxml2.XMLHTTP", "Microsoft.XMLHTTP" ]
	if (window.ActiveXObject) {
		for (var i = 0; i < activexmodes.length; i++) {
			try {
				return new ActiveXObject(activexmodes[i])
			} catch (e) {
				console.log(e.getMessage());
			}
		}
	} else if (window.XMLHttpRequest)
		return new XMLHttpRequest()
	else
		return false
}

var request = new ajaxRequest();

request.onreadystatechange = function() {
	if (request.readyState == 4) {
		if (request.status == 200 || window.location.href.indexOf("http") == -1) {
			alert(response.getAllResponseReaders().Text);
			alert('teste');
			return request.responseText;
		} else {
			alert("Ocorreu um erro ao invocar URL.");
		}
	}
}

main = (function() {
	var linkHome = document.getElementById('home');
	var linkProdutos = document.getElementById('home');
	var linkCadastro = document.getElementById('home');
	var linkContato = document.getElementById('home');
	
	if(linkHome !== null){
		linkHome.addEventListener("click", function() {
			request.open("POST", "index.php", false);
			request.setRequestHeader("Content-type",
					"application/x-www-form-urlencoded");
			request.send("url=home");
		});
	}
})();

carousel = (function() {
	var itens = 2;
	
	var box = document.querySelector('#carousel');
	if(!box) return;
	
	var ChkItem = 0;

	setInterval(function(){ trocaItem(); }, 3000);

	function trocaItem() {
		if (ChkItem >= itens) {
			ChkItem = 1;
		} else {
			ChkItem++;
		}
		formataItem(ChkItem);
	}

	function formataItem(n) {
		box.style.backgroundImage = "url('../../img/promo" + n + ".jpg')";
		for (var i = 0; i < itens; i++) {
			if (box.children[i].tagName == "div")
				box.children[i].style.backgroundColor = "#3A4A95";
		}
		box.querySelector('#tag' + n).style.backgroundColor = "#CCC";
	}
})();