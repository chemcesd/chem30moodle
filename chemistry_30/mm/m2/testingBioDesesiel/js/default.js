function embedFlashObject(asset, color) 
{		
		document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" ');
		document.write('height="100%"');
		document.write('width="100%">');
		document.write('<param name="src" value="' + asset + '">');
		document.write('<param name="allowScriptAccess" value="sameDomain" />');
		document.write('<param name="align" value="middle">');
		document.write('<param name="quality" value="high">');
		document.write('<param name="bgcolor" value="' + color + '">');
		document.write( '<embed ' );
		document.write( '  src="' + asset + '" ' );
		document.write( '  name="' + asset + '"' );
		document.write( '  width="100%" ' );
		document.write( '  height="100%" ' );
		document.write( '  align="middle" ' );
		document.write( '  quality="high" ' );
		document.write( '  allowScriptAccess="sameDomain" ' );
		document.write( '  scale="aspect" ' );
		document.write( '  pluginspage="http://www.macromedia.com/go/getflashplayer" ' );
		document.write( '  bgcolor="' + color + '" ' );
		document.write( '  type="application/x-shockwave-flash">' );
		document.write( '</embed>' );
		document.write('</object>');
}

function embedQuicktimeObject(movie, width, height, id) 
{
	document.write("<object classid='clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B' width='"+width+"' height='"+height+"' codebase='http://www.apple.com/qtactivex/qtplugin.cab' id='"+id+"'>");		
		document.write("<param name='src' value='" + movie + "' />");
		document.write("<param name='controller' value='false' />");
		document.write("<param name='autoplay' value='true' />");
		document.write("<param name='enablejavascript' value='true' />");
		document.write("<param name='scale' value='aspect' />");
		document.write("<param name='kioskmode' value='true' />");
		document.write("<param name='bgcolor' value='#000000' />");
			
		document.write("<embed ");
			document.write("src='" + movie + "'");
			document.write("width='"+width+"'");
			document.write("name='"+id+"'");
			document.write("height='"+height+"'");
			document.write("autoplay='true'");
			document.write("scale='aspect'");
			document.write("kioskmode='true'");
			document.write("bgcolor='#000000'");
			document.write("type='video/quicktime'");
			document.write("pluginspage='http://www.apple.com/quicktime/download/'");
			document.write("enablejavascript='true'");
			document.write("controller='false'");
		document.write("></embed>");
			
	document.write("</object>");
}

function embedMovie() {
	var asset = parent.window.location.search.substring(7, parent.window.location.search.indexOf("lang") - parent.window.location.search.indexOf("asset"));
							
	asset = asset.replace("SMIL/","MOVIES/").replace(".smil",".mov");
							
	document.write("<object classid='clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B' width='100%' height='95%' codebase='http://www.apple.com/qtactivex/qtplugin.cab'>");
		document.write("<param name='src' value='html/automotives/archive/js/" + asset +"' />");
		document.write("<param name='controller' value='true' />");
		document.write("<param name='autoplay' value='true' />");
		document.write("<param name='enablejavascript' value='true' />");
		document.write("<param name='scale' value='aspect' />");
		document.write("<param name='kioskmode' value='true' />");
		document.write("<param name='bgcolor' value='#000000' />");
			
		document.write("<embed ");
			document.write("src='" + asset + "'");
			document.write("width='100%'");
			document.write("height='95%'");
			document.write("autoplay='true'");
			document.write("scale='aspect'");
			document.write("kioskmode='true'");
			document.write("bgcolor='#000000'");
			document.write("type='video/quicktime'");
			document.write("pluginspage='http://www.apple.com/quicktime/download/'");
			document.write("enablejavascript='true'");
			document.write("controller='true'");
		document.write("></embed>");
	document.write("</object>");
}

function nospam(vname,vdomain){
	
	location.href= "mailto:" + vname + "@" + vdomain;
	
}

function newWindow(url, height, width) {
var nameW='feature'
window.open(url, nameW, 'height='+height+',width='+width+',scrollbars=1,resizable=1,menubar=0,toolbar=0,status=0,location=0,directories=0,left=900,top=600');
 }

function centerWindow(mypage, myname, w, h) {
var winl = (screen.width - w) / 2;
var wint = ((screen.height - h) / 2);
winprops = 'height='+ h +',width='+w+',top='+wint+',left='+winl+',scrollbars='+1+',resizable';
win = window.open(mypage, myname, winprops)
}