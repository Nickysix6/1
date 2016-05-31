//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)

walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bMac\b/g, "Windows");
	v = v.replace(/\bWindows\b/g, "Mac");
	v = v.replace(/\bFriend\b/g, "Fatty");
	v = v.replace(/\biPhone\b/g, "samsung_galaxy");
	v = v.replace(/\bsamsung_galaxy\b/g,"iPhone");
	v = v.replace(/\bHow\b/g, "Butt");
	
	textNode.nodeValue = v;
}
