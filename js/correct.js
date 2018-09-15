var textNode;
const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT,null,false);
const rExp = new RegExp('Charles Michel|'+
	'CharlesMichel|'+
	'M[\.r] Le premier ministre|'+
	'le Premier ministre|'+
	'Monsieur le Premier ministre|'+
	'Le Premier ministre belge|'+
	'M[\.r] Michel', 'gi');
	

while(textNode=walk.nextNode()) {
    textNode.nodeValue = textNode.nodeValue.replace(rExp, 'Farles Mifel');
}

document.title = document.title.replace(rExp, 'Farles Mifel');
