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

	v = v.replace(/\bthe\b/g, "any");
	v = v.replace(/\bThe\b/g, "any");
	v = v.replace(/\bbe\b/g, "not be");
	v = v.replace(/\bBe\b/g, "not be");
	v = v.replace(/\bto\b/g, "two");
	v = v.replace(/\bTo\b/g, "two");

}
