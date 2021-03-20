   //function CamelCase to dash
   	function pre(str) {
      return str.replace(/\W+/g, ' ')
                .replace(/([a-z\d])([A-Z]+)/g, '$1 $2');
   }
