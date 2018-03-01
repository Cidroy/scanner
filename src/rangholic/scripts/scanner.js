const scanner = async (options: Object = {}): Promise<any> => new Promise((resolve,reject) => {
	try {
			if (cordova !== undefined && typeof cordova === "object" && cordova.hasOwnProperty("plugins") && cordova.plugins.hasOwnProperty("barcodeScanner")) 
				cordova.plugins.barcodeScanner.scan(
					result => resolve(result),
					error => reject(error),
					{
						preferFrontCamera: false, // iOS and Android
						showFlipCameraButton: true, // iOS and Android
						showTorchButton: true, // iOS and Android
						torchOn: false, // Android, launch with the torch switched on (if available)
						saveHistory: true, // Android, save scan history (default false)
						prompt:
							"Place the barcode inside the scan area", // Android
						resultDisplayDuration: 0, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
						formats: "CODE_128", // default: all but PDF_417 and RSS_EXPANDED
						orientation: "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
						disableAnimations: true, // iOS
						disableSuccessBeep: false, // iOS and Android
						...options
					}
				);
			else reject("Scanner failed to start");
	} catch (error) {
		reject(error)
	}
})

export default {
	name: "barcodeScanner",
	module: scanner
}