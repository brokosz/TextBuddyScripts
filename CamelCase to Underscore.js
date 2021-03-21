// convert camelcase to underscore
   	function pre(str) {
      str=str.replace(/\W+/g, '_')
      str=str.replace(/([a-z\d])([A-Z]+)/g, '$1_$2');
      return str.toLowerCase();
   }
