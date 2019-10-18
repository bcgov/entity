module.exports = {

	waitForConditionTimeout : 30000,
	retryAssertionTimeout: 30000,	
	throwOnMultipleElementsReturned : false,

	launch_url: "https://coops-test.pathfinder.gov.bc.ca",
	launch_idirurl: "https://coops-test.pathfinder.gov.bc.ca/auth/signin/idir",

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
		director_count: 5,
		new_director_count: 6,
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
		director6:{
			firatname:"test",
			lastname:"test2",
			street: "123 test st",
			optionalfield: "I am an optional field",
			city:"victoria",
			province:"BC",
			postalcode: "V1V1V1",
			country: "CA"
		},
		director5:{
			firstName: "NICKY",
			lastName: "CAIRNCROSS",
			street: "4 - 12 WEST 10TH AVENUE",
			city: "VANCOUVER",
			province: "BC",
			postalCode: "V5Y1R6",
			appointedDate: "2018-11-08",
			country: "CA"
		}	

	},

    CP0001468:{
		identifier: "CP0001468",
		director_count: 5,
		legal_name: "MANANA PARK WATER CO-OPERATIVE",
		mailing:{
			line1: "4750 BRENTON PAGE ROAD",
			line2: "LADYSMITH BC V9G 1L7",
			line3: "CA"
		},
		delivery:{
			line1: "4750 BRENTON PAGE ROAD",
			line2: "LADYSMITH BC V9G 1L7",
			line3: "CA"
		}
	},

	CP0001496:{
		identifier: "CP0001496",
		director_count: 4,
		legal_name: "SITKA HOUSING CO-OPERATIVE (1985)",
		mailing:{
			line1: "1550 WOODLAND DRIVE",
			line2: "VANCOUVER BC V5L 5A5",
			line3: "CA"
		},
		delivery:{
			line1: "1550 WOODLAND DRIVE",
			line2: "VANCOUVER BC V5L 5A5",
			line3: "CA"
		}
	},

	CP0001505:{
		identifier: "CP0001505",
		director_count: 6,
		legal_name: "CENTENNIAL PARK HOUSING CO-OPERATIVE",
		mailing:{
			line1:"4160 BOND STREET",
			line2: "BURNABY BC V5H 1G2",
			line3:"CA"
		},
		delivery:{
			line1: "4160 BOND STREET",
			line2: "BURNABY BC V5H 1G2",
			line3: "CA"
		}
	}
};