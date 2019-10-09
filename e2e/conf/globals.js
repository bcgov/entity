module.exports = {
	waitForConditionTimeout : 30000,
	retryAssertionTimeout: 30000,		
	throwOnMultipleElementsReturned : true,

	launch_url: "https://coops-e2e.pathfinder.gov.bc.ca",

	CP0000977: {
		identifier: "CP0000977",
		passcode: "525222923",
		director_count: 8,
		legal_name: "WASHINGTON CO-OPERATIVE HOUSING ASSOCIATION",
		mailing: {
			line1: "502 - 373 BURNSIDE RD. E.",
			line2: "VICTORIA BC V9A 1A7",
			line3: "CA"
		},
		delivery: {
			line1: "502 - 373 BURNSIDE RD. E.",
			line2: "VICTORIA BC V9A 1A7",
			line3: "CA"
		}
		
	}
};