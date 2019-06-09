export default function normalizeByKey(all=[], key) {
	let byKey = {}

	all.forEach(item => {
		if(!byKey[item[key]])
			byKey[item[key]] = new Array;
		byKey[item[key]].push(item.id);
	});
	
	return byKey;
}

