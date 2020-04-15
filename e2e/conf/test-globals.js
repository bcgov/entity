module.exports = {

	waitForConditionTimeout : 30000,
	retryAssertionTimeout: 30000,	
	throwOnMultipleElementsReturned : false,
	launch_url: "https://test.bcregistry.ca/cooperatives/",
	idtest_url: "https://idtest.gov.bc.ca/login",
	launch_idirurl:"https://test.bcregistry.ca/cooperatives/auth/signin/idir",
	CP1002111: {
		identifier: "CP1002111",
		passcode:"111111111",
		dierctor_count: 8,
		legal_name: "NEW SERVICES CO-OPERATIVE",
		mailing: {
			line1: "123 MAIN ST",
			line2: "AGASSIZ BC V0M 1A0",
			line3: "Canada"
		},
		delivery: {
			line1: "321 MAIN ST",
			line2: "AGASSIZ BC V0M 1A0",
			line3: "Canada"
		},
	},

	CP1000019: {
		identifier: "CP1000019",
		passcode:  "111111111",
		director_count: 6,
		legal_name: "THE STORE CO-OPERATIVE ASSOCIATION",
		mailing: {
			line1: "BOX 999",
			line2: "SOINTULA BC V0N 3E0",
			line3: "Canada"
		},
		delivery: {
			line1: "999 10TH STREET",
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

		director4:{
			dynamicFirstName:"DIRECTOR4",
			dynamicLastName:"LAST4",
			dynamicStreet:"126 MAIN ST",
			dynamicCity:"SOINTULA",
			dynamicProvince:"BC",
			dynamicPostalCode:"V0N3E0",
			dynamicCountry:"Canada",
			dynamicAppointedDate:"2018-12-21",
		},
	},

	CP1001171: {
		identifier: "CP1001171",
		passcode: "111111111",
		dierctor_count: 6,
		new_director_count:7,
		legal_name: "NICE CO-OPERATIVE HOUSING ASSOCIATION",
		mailing : {
			line1: "123 MAIN ST",
			line2: "VICTORIA BC V9A 7B2",
			line3: "Canada"
		},
		delivery: {
			line1: "321 MAIN ST",
			line2: "VICTORIA BC V8Z 6H4",
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
	
	CP1000992:{
		identifier:"CP1000992",
		legal_name: "K CO-OPERATIVE HOUSING ASSOCIATION",
		delivery: {
			line1: "123 MAIN ST",
			line2: "RICHMOND BC V8Z 7H4",
			line3: "Canada"
		},
		mailing:{
			line1: "123 MAIN ST",
			line2: "RICHMOND BC V7E 4M5",
			line3: "Canada"
		},

	director4:{
		firstname:"test",
		lastname:"test2",
		street: "123 test st",
		optionalfield: "I am an optional field",
		city:"victoria",
		province:"BC",
		postalcode: "V1V1V1",
		country: "CA"
	},

	director2:{
		dynamicFirstName:"DIRECTOR2",
		dynamicLastName:"LAST2",
		dynamicStreet:"124 STEVESTON HIGHWAY",
		dynamicCity:"RICHMOND",
		dynamicProvince:"BC",
		dynamicPostalCode:"VV7E4M5",
		dynamicCountry:"Canada",
		dynamicAppointedDate:"2017-01-06",
	},
	},

	CP1001188: {
		identifier:"CP1001188",
		legal_name: "SOUTH COMMUNITY CO-OPERATIVE",
		delivery: {
			line1:"321 MAIN ST",
			line2: "Victoria BC V8Z 5H4",
			line3: "Canada",
		},
		mailing: {
			line1 :"123 MAIN ST",
			line2 :"HONBY ISLAND BC V0R 1Z0",
			line3: "Canada",
		},
	},

	CP1001403:{
		identifier:"CP1001403",
		legal_name: "WINDY CO-OPERATIVE ASSOCIATION",
		delivery: {
			line1:"321 MAIN ST",
			line2: "VICTORIA BC V8G 5H6",
			line3: "Canada",
		},
		mailing: {
			line1 :"123 MAIN ST",
			line2 :"KELOWNA BC V1Y 4C4",
			line3: "Canada",
		},
		director4:{
			firstname:"test",
			lastname:"test2",
			street: "123 test st",
			optionalfield: "I am an optional field",
			city:"victoria",
			province:"BC",
			postalcode: "V1V1V1",
			country: "CA"
		},

		director2:{
			firstname: "DIRECTOR2",
			lastname: "LAST2",
			street: "124 MAIN ST",
			city: "KELOWNA",
			provience:"BC",
			postalcode: "V1Y4C4",
			country: "CA",
			appointedDate: "2018-12-20"
		}


	},

	CP1001560:{
		identifier:"CP1001560",
		legal_name:"SAFE PLACE HOUSING CO-OPERATIVE",
		delivery: {
			line1: "700 ALMONDS STREET",
			line2: "BURNABY BC V9V 9A9",
			line3: "Canada"
		},
		mailing:{
			line1: "700 ALMONDS STREET",
			line2: "BURNABY BC V9V 9A9",
			line3: "Canada"
		}

	},

}