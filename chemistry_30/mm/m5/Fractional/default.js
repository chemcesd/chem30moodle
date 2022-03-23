function embedFlashObject(asset, color) 
{		
		document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" ');
		document.write('height="470px"');
		document.write('width="750px">');
		document.write('<param name="src" value="' + asset + '">');
		document.write('<param name="allowScriptAccess" value="sameDomain" />');
		document.write('<param name="align" value="middle">');
		document.write('<param name="quality" value="high">');
		document.write('<param name="bgcolor" value="' + color + '">');
		document.write( '<embed ' );
		document.write( '  src="' + asset + '" ' );
		document.write( '  name="' + asset + '"' );
		document.write( '  width="750px" ' );
		document.write( '  height="470px" ' );
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