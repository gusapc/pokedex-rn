const colors = {
	gray: '#E0E0E0',
	white: '#FFFFFF',
	whiteAlpha: (alpha = 1) => `rgba(255, 255, 255, ${alpha})`,
	blue: '#5FB8E2',
	lightBlue: '#DFF1F9',
	orange: '#FF5000',
	gold: '#DAAA46',
	transparent: 'rgba(0,0,0,0)',
	green: '#6FCF97',
	red: '#EB5757',
	blueAlpha: (alpha) => `rgba(52,165,218, ${alpha})`,
	lightBlueAlpha: (alpha) => `rgba(223,241,249, ${alpha})`,
	orangeAlpha: (alpha) => `rgba(255,80,0, ${alpha})`,
	goldAlpha: (alpha) => `rgba(218,170,70, ${alpha})`,
	greenAlpha: (alpha) => `rgba(111,207,151, ${alpha})`,
	redAlpha: (alpha) => `rgba(235,87,87, ${alpha})`,
};

export default colors
