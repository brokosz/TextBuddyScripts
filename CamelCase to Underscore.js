// convert camelcase to underscore
   	function pre(str) {
      return str.replace(/\W+/g, '_')
                .replace(/([a-z\d])([A-Z]+)/g, '$1_$2');
   }
