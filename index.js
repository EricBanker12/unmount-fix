module.exports = function mountFix(dispatch) {
	// variables
	let mountTime = 0
	
	dispatch.hook('S_MOUNT_VEHICLE', 'raw', code => {
		mountTime = Date.now()
	})
	
	dispatch.hook('C_UNMOUNT_VEHICLE', 'raw', code => {
		if ((Date.now() - mountTime) < 300) {
			return false
		}
	})

	dispatch.hook('C_START_SKILL', 'raw', code => {
		if ((Date.now() - mountTime) < 300) {
			return false
		}
	})
}