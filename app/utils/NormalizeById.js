export default function normalizeById(all=[]) {
	let allIds = [];
	let byId = {}

	all.forEach(item => {
		allIds.push(item['id']);
		byId[item['id']] = item
	});
	
	return { allIds, byId, all};
}
