function embedQuicktimeObject(movie, width, height, id) 
{
	document.write("<object classid='clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B' width='"+width+"' height='"+height+"' codebase='http://www.apple.com/qtactivex/qtplugin.cab' id='"+id+"'>");		
		document.write("<param name='src' value='" + movie + "' />");
		document.write("<param name='controller' value='true' />");
		document.write("<param name='autoplay' value='false' />");
		document.write("<param name='enablejavascript' value='true' />");
		document.write("<param name='scale' value='aspect' />");
		document.write("<param name='kioskmode' value='true' />");
		document.write("<param name='bgcolor' value='#FFFFFF' />");
			
		document.write("<embed ");
			document.write("src='" + movie + "'");
			document.write("width='"+width+"'");
			document.write("name='"+id+"'");
			document.write("height='"+height+"'");
			document.write("autoplay='false'");
			document.write("scale='aspect'");
			document.write("kioskmode='true'");
			document.write("bgcolor='#FFFFFF'");
			document.write("type='video/quicktime'");
			document.write("pluginspage='http://www.apple.com/quicktime/download/'");
			document.write("enablejavascript='true'");
			document.write("controller='true'");
		document.write("></embed>");
			
	document.write("</object>");
}


function centerWindow(mypage, myname, w, h) {
var winl = (screen.width - w) / 2;
var wint = ((screen.height - h) / 2);
winprops = 'height='+ h +',width='+w+',top='+wint+',left='+winl+',scrollbars='+1+',resizable';
win = window.open(mypage, myname, winprops)
}