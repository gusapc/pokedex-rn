export default function normalizeByKey(all=[], attribute='id') {
	let allIds = [];
	let byId = {}
	
	all.forEach(item => {
		allIds.push(item[attribute]);
		byId[item[attribute]] = item
	});
	
	return { allIds, byId };
}
