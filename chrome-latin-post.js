var context_id = -1;
var inputSeq = "";
var convertedSeq = "";
var isFixed = true;

var conversion_FIGS = {
  "!/" : "¡",
    "!//" : "!/",
//  "//" : "°",
//    "///" : "//",
  "<<" : "«",
    "<<<" : "<<",
  ">>" : "»",
    ">>>" : ">>",
  "?/" : "¿",
    "?//" : "?/",
  "$/" : "£",
    "$//" : "¤",
    "$///" : "$/",
  
  "A'" : "Á",	 "a'" : "á",
    "A''" : "A'",	 "a''" : "a'",
//    "A," : "Ą",	 "a," : "ą",
//    "A,," : "A,",	 "a,," : "a,",
//    "A-" : "Ā",	 "a-" : "ā",
//    "A--" : "A-",	 "a--" : "a-",
//    "A/" : "Å",	 "a/" : "å",
//    "A//" : "A/",	 "a//" : "a/",
    "A\"" : "Ä",	 "a\"" : "ä",
    "A\"\"" : "A\"",	 "a\"\"" : "a\"",
    "A^" : "Â",	 "a^" : "â",
    "A^^" : "A^",	 "a^^" : "a^",
    "A`" : "À",	 "a`" : "à",
    "A``" : "A`",	 "a``" : "a`",
//    "A~" : "Ã",	 "a~" : "ã",
//    "A~~" : "Ă",	 "a~~" : "ă",
//    "A~~~" : "A~",	 "a~~~" : "a~",
//    "AE" : "AE", "ae" : "ae",           // idehara
//    "AE/" : "Æ",	 "ae/" : "æ",
//    "AE//" : "Æ/",	 "ae//" : "æ/",
//    "AE///" : "AE/",	 "ae///" : "ae/",
//    "a_" : "ª",
//    "a__" : "a_",
//  "C'" : "Ć",	 "c'" : "ć",
//    "C''" : "C'",	 "c''" : "c'",
    "C," : "Ç",	 "c," : "ç",
    "C,," : "C,",	 "c,," : "c,",
//    "C." : "Ċ",	 "c." : "ċ",
//    "C.." : "C.",	 "c.." : "c.",
//    "C^" : "Ĉ",	 "c^" : "ĉ",
//    "C^^" : "C^",	 "c^^" : "c^",
//    "C~" : "Č",	 "c~" : "č",
//    "C~~" : "C~",	 "c~~" : "c~",
//    "c/" : "¢",
//    "c//" : "c/",
//  "D/" : "Ð",	 "d/" : "ð",
//    "D//" : "Đ",	 "d//" : "đ",
//    "D///" : "D/",	 "d///" : "d/",
//    "D~" : "Ď",	 "d~" : "ď",
//    "D~~" : "D~",	 "d~~" : "d~",
  "E'" : "É",	 "e'" : "é",
    "E''" : "E'",	 "e''" : "e'",
//    "E," : "Ę",	 "e," : "ę",
//    "E,," : "E,",	 "e,," : "e,",
//    "E-" : "Ē",	 "e-" : "ē",
//    "E--" : "E-",	 "e--" : "e-",
//    "E." : "Ė",	 "e." : "ė",
//    "E.." : "E.",	 "e.." : "e.",
    "E\"" : "Ë",	 "e\"" : "ë",
    "E\"\"" : "E\"",	 "e\"\"" : "e\"",
    "E^" : "Ê",	 "e^" : "ê",
    "E^^" : "E^",	 "e^^" : "e^",
    "E`" : "È",	 "e`" : "è",
    "E``" : "E`",	 "e``" : "e`",
//    "E~" : "Ě",	 "e~" : "ě",
//    "E~~" : "Ĕ",	 "e~~" : "ĕ",
//    "E~~~" : "E~",	 "e~~~" : "e~",
    "e=" : "€",
    "e==" : "e=",
//  "G," : "Ģ",	 "g," : "ģ",
//    "G,," : "G,",	 "g,," : "g,",
//    "G." : "Ġ",	 "g." : "ġ",
//    "G.." : "G.",	 "g.." : "g.",
//    "G^" : "Ĝ",	 "g^" : "ĝ",
//    "G^^" : "G^",	 "g^^" : "g^",
//    "G~" : "Ğ",	 "g~" : "ğ",
//    "G~~" : "G~",	 "g~~" : "g~",
//  "H/" : "Ħ",	 "h/" : "ħ",
//    "H//" : "H/",	 "h//" : "h/",
//    "H^" : "Ĥ",	 "h^" : "ĥ",
//    "H^^" : "H^",	 "h^^" : "h^",
//  "I'" : "Í",	 "i'" : "í",
//    "I''" : "I'",	 "i''" : "i'",
//    "I," : "Į",	 "i," : "į",
//    "I,," : "I,",	 "i,," : "i,",
//    "I-" : "Ī",	 "i-" : "ī",
//    "I--" : "I-",	 "i--" : "i-",
//    "I." : "İ",	 "i." : "ı",
//    "I.." : "I.",	 "i.." : "i.",
    "I\"" : "Ï",	 "i\"" : "ï",
    "I\"\"" : "I\"",	 "i\"\"" : "i\"",
    "I^" : "Î",	 "i^" : "î",
    "I^^" : "I^",	 "i^^" : "i^",
//    "I`" : "Ì",	 "i`" : "ì",
//    "I``" : "I`",	 "i``" : "i`",
//    "I~" : "Ĩ",	 "i~" : "ĩ",
//    "I~~" : "Ĭ",	 "i~~" : "ĭ",
//    "I~~~" : "I~",	 "i~~~" : "i~",
//    "IJ":"IJ", "ij":"ij",               // idehara
//    "IJ/" : "Ĳ",	 "ij/" : "ĳ",
//    "IJ//" : "Ĳ/",	 "ij//" : "ĳ/",
//    "IJ///" : "IJ/",	 "ij///" : "ij/",
//  "J^" : "Ĵ",	 "j^" : "ĵ",
//    "J^^" : "J^",	 "j^^" : "j^",
//  "K," : "Ķ",	 "k," : "ķ",
//    "K,," : "K,",	 "k,," : "k,",
//    "k/" : "ĸ",
//    "k//" : "k/",
//  "L'" : "Ĺ",	 "l'" : "ĺ",
//    "L''" : "L'",	 "l''" : "l'",
//    "L," : "Ļ",	 "l," : "ļ",
//    "L,," : "L,",	 "l,," : "l,",
//    "L." : "Ŀ",	 "l." : "ŀ",
//    "L.." : "L.",	 "l.." : "l.",
//    "L/" : "Ł",	 "l/" : "ł",
//    "L//" : "L/",	 "l//" : "l/",
//    "L~" : "Ľ",	 "l~" : "ľ",
//    "L~~" : "L~",	 "l~~" : "l~",
//  "N'" : "Ń",	 "n'" : "ń",
//    "N''" : "N'",	 "n''" : "n'",
//    "N," : "Ņ",	 "n," : "ņ",
//    "N,," : "N,",	 "n,," : "n,",
//    "N/" : "Ŋ",	 "n/" : "ŋ",
//    "N//" : "N/",	 "n//" : "n/",
    "N~" : "Ñ",	 "n~" : "ñ",
//    "N~~" : "Ň",	 "n~~" : "ň",
    "N~~" : "N~",	 "n~~" : "n~",
//  "O'" : "Ó",	 "o'" : "ó",
//    "O''" : "O'",	 "o''" : "o'",
//    "O-" : "Ō",	 "o-" : "ō",
//    "O--" : "O-",	 "o--" : "o-",
//    "O/" : "Ø",	 "o/" : "ø",
//    "O//" : "O/",	 "o//" : "o/",
//    "O:" : "Ő",	 "o:" : "ő",
//    "O::" : "O:",	 "o::" : "o:",
    "O\"" : "Ö",	 "o\"" : "ö",
    "O\"\"" : "O\"",	 "o\"\"" : "o\"",
    "O^" : "Ô",	 "o^" : "ô",
    "O^^" : "O^",	 "o^^" : "o^",
//    "O`" : "Ò",	 "o`" : "ò",
//    "O``" : "O`",	 "o``" : "o`",
//    "O~" : "Õ",	 "o~" : "õ",
//    "O~~" : "Ŏ",	 "o~~" : "ŏ",
//    "O~~~" : "O~",	 "o~~~" : "o~",
//    "OE/" : "Œ",	 "oe/" : "œ",
//    "OE//" : "Œ/",	 "oe//" : "œ/",
//    "OE///" : "OE/",	 "oe///" : "oe/",
//    "o_" : "º",
//    "o__" : "o_",
//  "R'" : "Ŕ",	 "r'" : "ŕ",
//    "R''" : "R'",	 "r''" : "r'",
//    "R," : "Ŗ",	 "r," : "ŗ",
//    "R,," : "R,",	 "r,," : "r,",
//    "R~" : "Ř",	 "r~" : "ř",
//    "R~~" : "R~",	 "r~~" : "r~",
//  "S'" : "Ś",	 "s'" : "ś",
//    "S''" : "S'",	 "s''" : "s'",
//    "S," : "Ş",	 "s," : "ş",
//    "S,," : "S,",	 "s,," : "s,",
//    "S^" : "Ŝ",	 "s^" : "ŝ",
//    "S^^" : "S^",	 "s^^" : "s^",
//    "S~" : "Š",	 "s~" : "š",
//    "S~~" : "S~",	 "s~~" : "s~",
    "s/" : "ß",
    "s//" : "s/",
//  "T," : "Ţ",	 "t," : "ţ",
//    "T,," : "T,",	 "t,," : "t,",
//    "T/" : "Þ",	 "t/" : "þ",
//    "T//" : "Ŧ",	 "t//" : "ŧ",
//    "T///" : "T/",	 "t///" : "t/",
//    "T~" : "Ť",	 "t~" : "ť",
//    "T~~" : "T~",	 "t~~" : "t~",
//  "U'" : "Ú",	 "u'" : "ú",
//    "U''" : "U'",	 "u''" : "u'",
//    "U," : "Ų",	 "u," : "ų",
//    "U,," : "U,",	 "u,," : "u,",
//    "U-" : "Ū",	 "u-" : "ū",
//    "U--" : "U-",	 "u--" : "u-",
//    "U/" : "Ů",	 "u/" : "ů",
//    "U//" : "U/",	 "u//" : "u/",
//    "U:" : "Ű",	 "u:" : "ű",
//    "U::" : "U:",	 "u::" : "u:",
    "U\"" : "Ü",	 "u\"" : "ü",
    "U\"\"" : "U\"",	 "u\"\"" : "u\"",
//    "U^" : "Û",	 "u^" : "û",
//    "U^^" : "U^",	 "u^^" : "u^",
//    "U`" : "Ù",	 "u`" : "ù",
//    "U``" : "U`",	 "u``" : "u`",
//    "U~" : "Ũ",	 "u~" : "ũ",
//    "U~~" : "Ŭ",	 "u~~" : "ŭ",
//    "U~~~" : "U~",	 "u~~~" : "u~",
//  "W^" : "Ŵ",	 "w^" : "ŵ",
//    "W^^" : "W^",	 "w^^" : "w^",
//  "Y'" : "Ý",	 "y'" : "ý",
//    "Y''" : "Y'",	 "y''" : "y'",
//    "Y^" : "Ŷ",	 "y^" : "ŷ",
//    "Y^^" : "Y^",	 "y^^" : "y^",
//    "Y\"" : "Ÿ",	 "y\"" : "ÿ",
//    "Y\"\"" : "Y\"",	 "y\"\"" : "y\"",
    "Y=" : "¥",
    "Y==" : "Y=",
//  "Z'" : "Ź",	 "z'" : "ź",
//    "Z''" : "Z'",	 "z''" : "z'",
//    "Z." : "Ż",	 "z." : "ż",
//    "Z.." : "Z.",	 "z.." : "z.",
//    "Z~" : "Ž",	 "z~" : "ž",
//    "Z~~" : "Z~",	 "z~~" : "z~",

//  "R-" : "Ṛ",	 "r-" : "ṛ",
//  "H./" : "Ḥ",	 "h./" : "ḥ",
//  "M./" : "Ṃ", "m./" : "ṃ",
//  "N./" : "Ṇ", "n./" : "ṇ",
//  "D./" : "Ḍ",	 "d./" : "ḍ",
//  "R./" : "Ṛ",	 "r./" : "ṛ",
//  "L./" : "Ḷ",	 "l./" : "ḷ",
};

var conversion = {
  "!/" : "¡",
    "!//" : "!/",
  "//" : "°",
    "///" : "//",
  "<<" : "«",
    "<<<" : "<<",
  ">>" : "»",
    ">>>" : ">>",
  "?/" : "¿",
    "?//" : "?/",
  "$/" : "£",
    "$//" : "¤",
    "$///" : "$/",
  
  "A'" : "Á",	 "a'" : "á",
    "A''" : "A'",	 "a''" : "a'",
    "A," : "Ą",	 "a," : "ą",
    "A,," : "A,",	 "a,," : "a,",
    "A-" : "Ā",	 "a-" : "ā",
    "A--" : "A-",	 "a--" : "a-",
    "A/" : "Å",	 "a/" : "å",
    "A//" : "A/",	 "a//" : "a/",
    "A\"" : "Ä",	 "a\"" : "ä",
    "A\"\"" : "A\"",	 "a\"\"" : "a\"",
    "A^" : "Â",	 "a^" : "â",
    "A^^" : "A^",	 "a^^" : "a^",
    "A`" : "À",	 "a`" : "à",
    "A``" : "A`",	 "a``" : "a`",
    "A~" : "Ã",	 "a~" : "ã",
    "A~~" : "Ă",	 "a~~" : "ă",
    "A~~~" : "A~",	 "a~~~" : "a~",
//    "AE" : "AE", "ae" : "ae",           // idehara
//    "AE/" : "Æ",	 "ae/" : "æ",
//    "AE//" : "Æ/",	 "ae//" : "æ/",
//    "AE///" : "AE/",	 "ae///" : "ae/",
    "a_" : "ª",
    "a__" : "a_",
  "C'" : "Ć",	 "c'" : "ć",
    "C''" : "C'",	 "c''" : "c'",
    "C," : "Ç",	 "c," : "ç",
    "C,," : "C,",	 "c,," : "c,",
    "C." : "Ċ",	 "c." : "ċ",
    "C.." : "C.",	 "c.." : "c.",
    "C^" : "Ĉ",	 "c^" : "ĉ",
    "C^^" : "C^",	 "c^^" : "c^",
    "C~" : "Č",	 "c~" : "č",
    "C~~" : "C~",	 "c~~" : "c~",
    "c/" : "¢",
    "c//" : "c/",
  "D/" : "Ð",	 "d/" : "ð",
    "D//" : "Đ",	 "d//" : "đ",
    "D///" : "D/",	 "d///" : "d/",
    "D~" : "Ď",	 "d~" : "ď",
    "D~~" : "D~",	 "d~~" : "d~",
  "E'" : "É",	 "e'" : "é",
    "E''" : "E'",	 "e''" : "e'",
    "E," : "Ę",	 "e," : "ę",
    "E,," : "E,",	 "e,," : "e,",
    "E-" : "Ē",	 "e-" : "ē",
    "E--" : "E-",	 "e--" : "e-",
    "E." : "Ė",	 "e." : "ė",
    "E.." : "E.",	 "e.." : "e.",
    "E\"" : "Ë",	 "e\"" : "ë",
    "E\"\"" : "E\"",	 "e\"\"" : "e\"",
    "E^" : "Ê",	 "e^" : "ê",
    "E^^" : "E^",	 "e^^" : "e^",
    "E`" : "È",	 "e`" : "è",
    "E``" : "E`",	 "e``" : "e`",
    "E~" : "Ě",	 "e~" : "ě",
    "E~~" : "Ĕ",	 "e~~" : "ĕ",
    "E~~~" : "E~",	 "e~~~" : "e~",
    "e=" : "€",
    "e==" : "e=",
  "G," : "Ģ",	 "g," : "ģ",
    "G,," : "G,",	 "g,," : "g,",
    "G." : "Ġ",	 "g." : "ġ",
    "G.." : "G.",	 "g.." : "g.",
    "G^" : "Ĝ",	 "g^" : "ĝ",
    "G^^" : "G^",	 "g^^" : "g^",
    "G~" : "Ğ",	 "g~" : "ğ",
    "G~~" : "G~",	 "g~~" : "g~",
  "H/" : "Ħ",	 "h/" : "ħ",
    "H//" : "H/",	 "h//" : "h/",
    "H^" : "Ĥ",	 "h^" : "ĥ",
    "H^^" : "H^",	 "h^^" : "h^",
  "I'" : "Í",	 "i'" : "í",
    "I''" : "I'",	 "i''" : "i'",
    "I," : "Į",	 "i," : "į",
    "I,," : "I,",	 "i,," : "i,",
    "I-" : "Ī",	 "i-" : "ī",
    "I--" : "I-",	 "i--" : "i-",
    "I." : "İ",	 "i." : "ı",
    "I.." : "I.",	 "i.." : "i.",
    "I\"" : "Ï",	 "i\"" : "ï",
    "I\"\"" : "I\"",	 "i\"\"" : "i\"",
    "I^" : "Î",	 "i^" : "î",
    "I^^" : "I^",	 "i^^" : "i^",
    "I`" : "Ì",	 "i`" : "ì",
    "I``" : "I`",	 "i``" : "i`",
    "I~" : "Ĩ",	 "i~" : "ĩ",
    "I~~" : "Ĭ",	 "i~~" : "ĭ",
    "I~~~" : "I~",	 "i~~~" : "i~",
//    "IJ":"IJ", "ij":"ij",               // idehara
//    "IJ/" : "Ĳ",	 "ij/" : "ĳ",
//    "IJ//" : "Ĳ/",	 "ij//" : "ĳ/",
//    "IJ///" : "IJ/",	 "ij///" : "ij/",
  "J^" : "Ĵ",	 "j^" : "ĵ",
    "J^^" : "J^",	 "j^^" : "j^",
  "K," : "Ķ",	 "k," : "ķ",
    "K,," : "K,",	 "k,," : "k,",
    "k/" : "ĸ",
    "k//" : "k/",
  "L'" : "Ĺ",	 "l'" : "ĺ",
    "L''" : "L'",	 "l''" : "l'",
    "L," : "Ļ",	 "l," : "ļ",
    "L,," : "L,",	 "l,," : "l,",
    "L." : "Ŀ",	 "l." : "ŀ",
    "L.." : "L.",	 "l.." : "l.",
    "L/" : "Ł",	 "l/" : "ł",
    "L//" : "L/",	 "l//" : "l/",
    "L~" : "Ľ",	 "l~" : "ľ",
    "L~~" : "L~",	 "l~~" : "l~",
  "N'" : "Ń",	 "n'" : "ń",
    "N''" : "N'",	 "n''" : "n'",
    "N," : "Ņ",	 "n," : "ņ",
    "N,," : "N,",	 "n,," : "n,",
    "N/" : "Ŋ",	 "n/" : "ŋ",
    "N//" : "N/",	 "n//" : "n/",
    "N~" : "Ñ",	 "n~" : "ñ",
    "N~~" : "Ň",	 "n~~" : "ň",
    "N~~~" : "N~",	 "n~~~" : "n~",
  "O'" : "Ó",	 "o'" : "ó",
    "O''" : "O'",	 "o''" : "o'",
    "O-" : "Ō",	 "o-" : "ō",
    "O--" : "O-",	 "o--" : "o-",
    "O/" : "Ø",	 "o/" : "ø",
    "O//" : "O/",	 "o//" : "o/",
    "O:" : "Ő",	 "o:" : "ő",
    "O::" : "O:",	 "o::" : "o:",
    "O\"" : "Ö",	 "o\"" : "ö",
    "O\"\"" : "O\"",	 "o\"\"" : "o\"",
    "O^" : "Ô",	 "o^" : "ô",
    "O^^" : "O^",	 "o^^" : "o^",
    "O`" : "Ò",	 "o`" : "ò",
    "O``" : "O`",	 "o``" : "o`",
    "O~" : "Õ",	 "o~" : "õ",
    "O~~" : "Ŏ",	 "o~~" : "ŏ",
    "O~~~" : "O~",	 "o~~~" : "o~",
    "OE/" : "Œ",	 "oe/" : "œ",
    "OE//" : "Œ/",	 "oe//" : "œ/",
    "OE///" : "OE/",	 "oe///" : "oe/",
    "o_" : "º",
    "o__" : "o_",
  "R'" : "Ŕ",	 "r'" : "ŕ",
    "R''" : "R'",	 "r''" : "r'",
    "R," : "Ŗ",	 "r," : "ŗ",
    "R,," : "R,",	 "r,," : "r,",
    "R~" : "Ř",	 "r~" : "ř",
    "R~~" : "R~",	 "r~~" : "r~",
  "S'" : "Ś",	 "s'" : "ś",
    "S''" : "S'",	 "s''" : "s'",
    "S," : "Ş",	 "s," : "ş",
    "S,," : "S,",	 "s,," : "s,",
    "S^" : "Ŝ",	 "s^" : "ŝ",
    "S^^" : "S^",	 "s^^" : "s^",
    "S~" : "Š",	 "s~" : "š",
    "S~~" : "S~",	 "s~~" : "s~",
    "s/" : "ß",
    "s//" : "s/",
  "T," : "Ţ",	 "t," : "ţ",
    "T,," : "T,",	 "t,," : "t,",
    "T/" : "Þ",	 "t/" : "þ",
    "T//" : "Ŧ",	 "t//" : "ŧ",
    "T///" : "T/",	 "t///" : "t/",
    "T~" : "Ť",	 "t~" : "ť",
    "T~~" : "T~",	 "t~~" : "t~",
  "U'" : "Ú",	 "u'" : "ú",
    "U''" : "U'",	 "u''" : "u'",
    "U," : "Ų",	 "u," : "ų",
    "U,," : "U,",	 "u,," : "u,",
    "U-" : "Ū",	 "u-" : "ū",
    "U--" : "U-",	 "u--" : "u-",
    "U/" : "Ů",	 "u/" : "ů",
    "U//" : "U/",	 "u//" : "u/",
    "U:" : "Ű",	 "u:" : "ű",
    "U::" : "U:",	 "u::" : "u:",
    "U\"" : "Ü",	 "u\"" : "ü",
    "U\"\"" : "U\"",	 "u\"\"" : "u\"",
    "U^" : "Û",	 "u^" : "û",
    "U^^" : "U^",	 "u^^" : "u^",
    "U`" : "Ù",	 "u`" : "ù",
    "U``" : "U`",	 "u``" : "u`",
    "U~" : "Ũ",	 "u~" : "ũ",
    "U~~" : "Ŭ",	 "u~~" : "ŭ",
    "U~~~" : "U~",	 "u~~~" : "u~",
  "W^" : "Ŵ",	 "w^" : "ŵ",
    "W^^" : "W^",	 "w^^" : "w^",
  "Y'" : "Ý",	 "y'" : "ý",
    "Y''" : "Y'",	 "y''" : "y'",
    "Y^" : "Ŷ",	 "y^" : "ŷ",
    "Y^^" : "Y^",	 "y^^" : "y^",
    "Y\"" : "Ÿ",	 "y\"" : "ÿ",
    "Y\"\"" : "Y\"",	 "y\"\"" : "y\"",
    "Y=" : "¥",
    "Y==" : "Y=",
  "Z'" : "Ź",	 "z'" : "ź",
    "Z''" : "Z'",	 "z''" : "z'",
    "Z." : "Ż",	 "z." : "ż",
    "Z.." : "Z.",	 "z.." : "z.",
    "Z~" : "Ž",	 "z~" : "ž",
    "Z~~" : "Z~",	 "z~~" : "z~",

  "R-" : "Ṛ",	 "r-" : "ṛ",
  "H./" : "Ḥ",	 "h./" : "ḥ",
  "M./" : "Ṃ", "m./" : "ṃ",
  "N./" : "Ṇ", "n./" : "ṇ",
  "D./" : "Ḍ",	 "d./" : "ḍ",
  "R./" : "Ṛ",	 "r./" : "ṛ",
  "L./" : "Ḷ",	 "l./" : "ḷ",
};

/*
// https://gist.github.com/iori-yja/11142395

;; latn-post.mim -- Latin input method with postfix modifiers
;; Copyright (C) 2003, 2004, 2005
;;   National Institute of Advanced Industrial Science and Technology (AIST)
;;   Registration Number H15PRO112
 
;; This file is part of the m17n database, a sub-part of the m17n library.
 
;; The m17n library is free software; you can redistribute it and/or
;; modify it under the terms of the GNU General Public License as
;; published by the Free Software Foundation; either version 2, or (at
;; your option) any later version.
 
;; The m17n library is distributed in the hope that it will be useful,
;; but WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;; GNU General Public License for more details.
 
;; You should have received a copy of the GNU General Public License
;; along with the m17n library; see the file COPYING.  If not, write to
;; the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
;; Boston, MA 02110-1301, USA.
 
;;; Input method for Latin script with postfix modifiers.
;;; @image html latn-post.png
;;; @image latex latn-post.eps "Examples" width=\narrowwidth
 
;; | mark       | postfix | examples
;; |------------+---------+----------
;; | acute      |    '    | a' -> á
;; | grave      |    `    | a` -> à
;; | circumflex |    ^    | a^ -> â
;; | diaeresis  |    "    | a" -> ä
;; | tilde      |    ~    | a~ -> ã
;; | cedilla    |    ,    | c, -> ç
;; | ogonek     |    ,    | a, -> ą
;; | breve      |    ~    | g~ -> ğ
;; | caron      |    ~    | c~ -> č
;; | dbl. acute |    :    | o: -> ő
;; | ring       |    .    | u. -> ů
;; | dot        |    .    | z. -> ż
;; | stroke     |    /    | l/ -> ł
;; | others     | /, etc. | d/ -> ð   t/ -> þ   a/ -> å   o/ -> ø
;; |            |         | ae/ -> æ  ij -> ĳ   oe/ -> œ  s/ -> ß
;; |            |         | ?/ -> ¿   !/ -> ¡   // -> °
;; |            |         | << -> «   >> -> »   o_ -> º   a_ -> ª
;;
;; Repeating the postfix changes ambiguous combining marks:
;;  Ex: A~ -> Ã, A~~ -> Ă, A~~~ -> A~
 
(input-method t latn-post)
 
(description
 "Latin script input method using postfix modifiers.
   | mark       | postfix | examples
   |------------+---------+----------
   | acute      |    '    | a' -> á
   | grave      |    `    | a` -> à
   | circumflex |    ^    | a^ -> â
   | diaeresis  |    \"    | a\" -> ä
   | tilde      |    ~    | a~ -> ã
   | cedilla    |    ,    | c, -> ç
   | ogonek     |    ,    | a, -> ą
   | breve      |    ~    | g~ -> ğ
   | caron      |    ~    | c~ -> č
   | dbl. acute |    :    | o: -> ő
   | ring       |    .    | u. -> ů
   | dot        |    .    | z. -> ż
   | stroke     |    /    | l/ -> ł
   | others     | /, etc. | d/ -> ð   t/ -> þ   a/ -> å   o/ -> ø
   |            |         | ae/ -> æ  ij -> ĳ   oe/ -> œ  s/ -> ß
   |            |         | ?/ -> ¿   !/ -> ¡   // -> °
   |            |         | << -> «   >> -> »   o_ -> º   a_ -> ª
 
Repeating the postfix changes ambiguous combining marks:
  Ex: A~ -> Ã, A~~ -> Ă, A~~~ -> A~
")

*/

function fixUnfixed()
{
  if(isFixed)
    return;

  chrome.input.ime.clearComposition({"contextID": context_id});
  chrome.input.ime.commitText({"contextID": context_id, "text": convertedSeq});
  isFixed = true;
  inputSeq = "";
  convertedSeq = "";
}

chrome.input.ime.onFocus.addListener(function(context) {
  context_id = context.contextID;
});

chrome.input.ime.onKeyEvent.addListener(
  function(engineID, keyData) {
    if (keyData.type != "keydown")
      return false;

    if (keyData.key == "Enter")
    {
      // normal "Enter"
      if(isFixed === true)
      {
        return false;
      }
      // fix the pending text
      else
      {
        fixUnfixed();
        return true;
      }
    }

    if (keyData.ctrlKey || keyData.altKey)
    {
      // fix the pending text
      if(isFixed !== true)
      {
        fixUnfixed();
      }
      // ... and pass to handle the key
      return false;
    }
    
    if (keyData.key == "Shift")
      return false;

    if (keyData.key.length != 1 || keyData.key == " ")
    {
      fixUnfixed();
      return false;
    }
    
    if (keyData.key.match(/^[A-Za-z'\`\^"\~\-,:\.\/<>_?!]$/))
    {
      if(isFixed)
      {
        inputSeq = keyData.key;
        convertedSeq = inputSeq;
        isFixed = false;
        chrome.input.ime.setComposition({
          "contextID": context_id,
          "text": inputSeq,
          "selectionStart": 0,
          "selectionEnd": inputSeq.length,
          "cursor": inputSeq.length
        });
        return true;
      }
      
      inputSeq += keyData.key;
      if( conversion_FIGS[inputSeq] === undefined )
      {
        chrome.input.ime.clearComposition({"contextID": context_id});
        chrome.input.ime.commitText({"contextID": context_id, "text": convertedSeq});
        inputSeq = keyData.key;
        convertedSeq = keyData.key;
        isFixed = false;
        chrome.input.ime.setComposition({
          "contextID": context_id,
          "text": inputSeq,
          "selectionStart": 0,
          "selectionEnd": inputSeq.length,
          "cursor": inputSeq.length
        });
        return true;
      }
      else
      {
        isFixed = false;
        convertedSeq = conversion_FIGS[inputSeq];
        chrome.input.ime.setComposition({
          "contextID": context_id,
          "text": convertedSeq,
          "selectionStart": 0,
          "selectionEnd": convertedSeq.length,
          "cursor": convertedSeq.length
        });
        return true;
      }
      return false;
    }
    else
    {
      inputSeq = "";
      convertedSeq = "";
      isFixed = true;
      return false;
    }
  }
);
