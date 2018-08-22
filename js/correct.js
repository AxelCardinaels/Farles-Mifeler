var textNode;
const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT,null,false);
const rExp = new RegExp('Charles Michel|'+
	'CharlesMichel|'+
	'M[\.r] le premier Ministre|'+
	'le premier Ministre|'+
	'Monsieur le premier Ministre|'+
	'M[\.r] Michel', 'gi');

while(textNode=walk.nextNode()) {
    textNode.nodeValue = textNode.nodeValue.replace(rExp, 'Farles Mifel');
}

document.title = document.title.replace(rExp, 'Farles Mifel');
