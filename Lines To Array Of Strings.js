// make an array of strings

function pre(str) {
	one=str.replace(/^(.*)$/gm, '  \'$1\'');
    two=one.replace(/\n/g, ',\n');
    return "[\n" + two + "\n]";
    }