// convert dashes to CamelCase

   function pre(str) {
         return str.replace(/\W+(.)/g, function (x, chr) {
                          return chr.toUpperCase();
         })
   }