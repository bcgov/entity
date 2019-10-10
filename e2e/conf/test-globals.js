module.exports = {

	waitForConditionTimeout : 30000,
	retryAssertionTimeout: 30000,	
	throwOnMultipleElementsReturned : false,

	launch_url: "https://coops-test.pathfinder.gov.bc.ca",

	CP0000977: {
		identifier: "CP0000977",
		passcode: "448226753",
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
		
	},

	CP0001024: {
		identifier: "CP0001024",
		passcode: "115692683",
		director_count: 9,
		legal_name: "MISSION COOPERATIVE HOUSING ASSOCIATION",
		mailing: {
			line1: "25 - 7365 CEDAR ST.",
			line2: "MISSION BC V2V 5S7",
			line3: "CA"
		},
		delivery: {
			line1: "25 - 7365 CEDAR ST.",
			line2: "MISSION BC V2V 5S7",
			line3: "CA"
		}
		
	}
};