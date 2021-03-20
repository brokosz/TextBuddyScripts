// make an array of strings

function pre(str) {
	str=str.replace(/^(.*)$/gm, '  \'$1\'');
    str=str.replace(/\n/g, ',\n');
    return "[\n" + str + "\n]";
    }