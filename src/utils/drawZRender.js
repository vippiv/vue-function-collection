import zrender from 'zrender'

export const DrawUtil = {
	drawHorizontalText (zr, str, x, y, style) {
		var text = new zrender.Text({
			style: {
				text: str,
				fontSize: 14,
				textFill: '#FF4949',
				textBackgroundColor: '#FFF',
				...style
			}
		})
		text.attr('position', [x, y])
		zr.add(text)
	},
	calcMiniDistance (index) {
		switch (index) {
			case 0:
				return 10
			case 1:
				return 10
			case 2:
				return 5
			case 3:
				return 5
			case 4:
				return 5
			case 5:
				return 5
			default:
				return 5
		}
	}
}
