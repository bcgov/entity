module.exports = {

	waitForConditionTimeout : 30000,
	retryAssertionTimeout: 30000,	
	throwOnMultipleElementsReturned : false,
	launch_url: "https://test.bcregistry.ca/cooperatives/",
    idtest_url: "https://idtest.gov.bc.ca/login",

	CP0000019: {
		identifier: "CP0000019",
		passcode:  "111111111",
		director_count: 6,
		legal_name: "THE SOINTULA CO-OPERATIVE STORE ASSOCIATION",
		mailing: {
			line1: "BOX 108",
			line2: "SOINTULA BC V0N 3E0",
			line3: "Canada"
		},
		delivery: {
			line1: "175 1ST STREET",
			line2: "SOINTULA BC V0N 3E0",
			line3: "Canada"
		},
		director7:{
			firstname:"test",
			lastname:"test2",
			street: "123 test st",
			optionalfield: "I am an optional field",
			city:"victoria",
			province:"BC",
			postalcode: "V1V1V1",
			country: "CA"
		},
		
	},

	
};