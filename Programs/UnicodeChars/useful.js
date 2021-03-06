function GenerateTableOfUsefulChars(){
  var t0 = performance.now();
  
  //A selection of unicode blocks containing characters that may be useful
  var blocks = [
    [0,127], //Basic Latin
    [128,255], //Latin-1 Suppliment
    [256,383], //Latin Extended-A
    [384,591], //Latin Extended-B
    [592,687], //IPA Extensions
    [688,767], //Spacing Modifier Letters
    [768,879], //Combining Diacritical Marks
    [880,1023], //Greek and Coptic
    //[1024,1279], //Cyrillic
    //[1280,1327], //Cyrillic Supplement
    //[1328,1423], //Armenian
    // ...
    [7424,7551], //Phonetic Extensions
    [7552,7615], //Phonetic Extensions Supplement
    [7616,7679], //Combining Diacritical Marks Supplement
    [7680,7935], //Latin Extended Additional
    [7936,8191], //Greek Extended
    [8192,8303], //General Punctuation
    [8304,8351], //Superscripts and Subscripts
    [8352,8399], //Currency Symbols
    [8400,8447], //Combining Diacritical Marks for Symbols
    [8448,8527], //Letterlike Symbols
    [8528,8591], //Number Forms
    [8592,8703], //Arrows
    [8704,8959], //Mathematical Operators
    [8960,9215], //Miscellaneous Technical
    [9216,9279], //Control Pictures
    [9280,9311], //Optical Character Recognition
    [9312,9471], //Enclosed Alphanumerics
    [9472,9599], //Box Drawing
    [9600,9631], //Block Elements
    [9632,9727], //Geometric Shapes
    [9728,9983], //Miscellaneous Symbols
    [9984,10175], //Dingbats
    [10176,10223], //Miscellaneous Mathematical Symbols-A
    [10224,10239], //Supplemental Arrows-A
    [10240,10495], //Braille Patterns
    [10496,10623], //Supplemental Arrows-B
    [10624,10751], //Miscellaneous Mathematical Symbols-B
    [10752,11007], //Supplemental Mathematical Operators
    [11008,11263], //Miscellaneous Symbols and Arrows
    // ...
    [11776,11903], //Supplemental Punctuation
    // ...
    [65024,65039], //Variation Selectors
    [65040,65055], //Vertical Forms
    [65056,65071], //Combining Half Marks
    [65072,65103], //CJK Compatibility Forms
    [65104,65135], //Small Form Variants
    // ...
    [65280,65519], //Halfwidth and Fullwidth Forms
    [65520,65535] //Specials
    
    //[119040,119295], //Musical Symbols
    //[119808,120831], //Mathematical Alphanumeric Symbols
    //[127024,127135], //Domino Tiles
    //[127135,127231], //Playing Cards
    //[127232,127487], //Enclosed Alphanumeric Supplement
    //[127744,128511], //Miscellaneous Symbols and Pictographs
    //[128512,128591] //Emoticons
  ];
  
  var blockTitles = [
    "Basic Latin",
    "Latin-1 Suppliment",
    "Latin Extended-A",
    "Latin Extended-B",
    "IPA Extensions",
    "Spacing Modifier Letters",
    "Combining Diacritical Marks",
    "Greek and Coptic",
    //"Cyrillic",
    //"Cyrillic Supplement",
    //"Armenian",
    // ...
    "Phonetic Extensions",
    "Phonetic Extensions Supplement",
    "Combining Diacritical Marks Supplement",
    "Latin Extended Additional",
    "Greek Extended",
    "General Punctuation",
    "Superscripts and Subscripts",
    "Currency Symbols",
    "Combining Diacritical Marks for Symbols",
    "Letterlike Symbols",
    "Number Forms",
    "Arrows",
    "Mathematical Operators",
    "Miscellaneous Technical",
    "Control Pictures",
    "Optical Character Recognition",
    "Enclosed Alphanumerics",
    "Box Drawing",
    "Block Elements",
    "Geometric Shapes",
    "Miscellaneous Symbols",
    "Dingbats",
    "Miscellaneous Mathematical Symbols-A",
    "Supplemental Arrows-A",
    "Braille Patterns",
    "Supplemental Arrows-B",
    "Miscellaneous Mathematical Symbols-B",
    "Supplemental Mathematical Operators",
    "Miscellaneous Symbols and Arrows",
    // ...
    "Supplemental Punctuation",
    // ...
    "Variation Selectors",
    "Vertical Forms",
    "Combining Half Marks",
    "CJK Compatibility Forms",
    "Small Form Variants",
    // ...
    "Halfwidth and Fullwidth Forms",
    "Specials"
  ];
  
  for(var block = 0;block < blocks.length;block ++){
    var CharacterTable = document.createElement("table");
    for(var a = blocks[block][0];a < blocks[block][1];a += 16){
      var newRow = document.createElement("tr");
      for(var b = 0;b < 16;b ++){
        newRow.innerHTML += "<td>"+String.fromCharCode(a+b)+"</td>";
        
        //newRow.innerHTML += "<td>"+String.fromCodePoint(a+b)+"</td>";
        
        //var newBox = document.createElement("td");
        //newBox.innerHTML = String.fromCharCode(a+b)+"<br><span class=\"smaller\">u+"+("0000"+(a+b).toString(16)).substr(-4)+"</span>";
        //newRow.appendChild(newBox);
      }
      CharacterTable.appendChild(newRow);
    }
    
    var title = document.createElement("p");
    title.innerHTML = blockTitles[block]+" (0x"+("0000"+blocks[block][0].toString(16)).substr(-4)+" - 0x"+("0000"+blocks[block][1].toString(16)).substr(-4)+")";
    ContainerDiv.appendChild(document.createElement("br"));
    ContainerDiv.appendChild(title);
    ContainerDiv.appendChild(CharacterTable);
  }
  
  console.log(performance.now() - t0,"ms");
}
