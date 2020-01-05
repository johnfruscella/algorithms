// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
//& = &amp;, < = &lt;, > = &gt;, " = &quot;, ' = &apos;


function convertHTML(str) {
    for (let i =0; i< str.length; i++) {
        switch (str[i]) {
            case '&': str = str.replace('&','&amp;');
            break;
            case '<': str = str.replace('<','&lt;');
            break;
            case '>': str = str.replace('>','&gt;');
            break;
            case `"`:  str = str.replace('"','&quot;');
            break;
            case `'`: str = str.replace("'",'&apos;')
            break; 
            
        }
        
        }
    console.log(str);
    return str;
  }
  
  convertHTML("Dolce & Gabbana"); //should return Dolce &amp; Gabbana
  convertHTML("Hamburgers < Pizza < Tacos") //should return Hamburgers &lt; Pizza &lt; Tacos
  convertHTML("abc") //should return abc