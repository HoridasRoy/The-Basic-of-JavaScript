
function handleClick (event) {
	// body... 

	event.stopPropagation();

	var node = event.target;
	var thispath = node.nodeName;

	while (node.parentNode) {
		// statement
		node = node.parentNode;
		thispath = node.nodeName + ">" + thispath;
	}

	alert(thispath);
}

function attachHandler(node) {
	// body...

	if(node == null){
		return;
	}

	node.onclick = handleClick;

	for(var i = 0; i < node.childNodes.length; i++)
	{
		attachHandler(childNodes[i]);
	}
}