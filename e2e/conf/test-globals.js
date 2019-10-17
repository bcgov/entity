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
		
	},

	CP0001252:{
		identifier: "CP0001252",
		passcode: "157320888",
		director_count: 6,
		legal_name: "VIEW COURT HOUSING CO-OPERATIVE",
		mailing:{ 
			line1:"220 - 1651 COMMERCIAL DR",
			line2: "VANCOUVER BC V5L 3Y3",
			line3: "CA"
		},
		delivery:{
			line1: "220 - 1651 COMMERCIAL DR",
			line2: "VANCOUVER BC V5L 3Y3",
			line3: "CA"
		},
		director7:{
			FIRSTNAME: "test",
			LASTNAME: "test3",
			street: "123 test st",
			city: "victoria",
			postalCode: "V1V1V1"
		}	

	},
};