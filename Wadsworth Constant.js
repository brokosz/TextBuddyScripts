// Skip the first 30% of text

function pre(str) {
	var all = str.split(" "); 
	all.splice(0, Math.ceil(all.length * 0.3));
	return "\t…" + all.join(" ");
	}