   //convert CamelCase to spaces
   	function pre(str) {
      str=str.replace(/\W+/g, ' ')
      str=str.replace(/([a-z\d])([A-Z]+)/g, '$1 $2');
      return str.toLowerCase();
   }
