module.exports = {
	waitForConditionTimeout : 30000,
	retryAssertionTimeout: 30000,		
	throwOnMultipleElementsReturned : true,
	launch_url: "https://test.bcregistry.ca/cooperatives/",
	idtest_url: "https://idtest.gov.bc.ca/login",
	launch_idirurl:"https://test.bcregistry.ca/cooperatives/auth/signin/idir",
	launch_url1: "https://test.bcregistry.ca/cooperatives/auth/", 

	CP0002111: {
		identifier: "CP0002111",
		passcode:"111111111",
		dierctor_count: 8,
		legal_name: "FRASER VALLEY EMPLOYMENT AND SUPPORT SERVICES CO-OPERATIVE",
		mailing: {
			line1: "PO BOX 518",
			line2: "AGASSIZ BC V0M 1A0",
			line3: "Canada"
		},
		delivery: {
			line1: "7086 PIONEER AVENUE",
			line2: "AGASSIZ BC V0M 1A0",
			line3: "Canada"
		},
	},

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

		director4:{
			dynamicFirstName:"JENNIFER",
			dynamicLastName:"LASH",
			dynamicStreet:"265-2ND STREET",
			dynamicCity:"SOINTULA",
			dynamicProvince:"BC",
			dynamicPostalCode:"V0N3E0",
			dynamicCountry:"Canada",
			dynamicAppointedDate:"2018-12-21",
		},
	},

	CP0001171: {
		identifier: "CP0001171",
		passcode: "111111111",
		dierctor_count: 6,
		legal_name: "CAMEO CO-OPERATIVE HOUSING ASSOCIATION",
		mailing : {
			line1: "1501 GLENTANA ROAD",
			line2: "VICTORIA BC V9A 7B2",
			line3: "Canada"
		},
		delivery: {
			line1: "786 Broughton street",
			line2: "VICTORIA BC V8Z 6H4",
			line3: "Canada"
		}
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
	
	CP0000992:{
		identifier:"CP0000992",
		legal_name: "KLAHANIE CO-OPERATIVE HOUSING ASSOCIATION",
		delivery: {
			line1: "18 Richmond St",
			line2: "RICHMOND BC V8Z 7H4",
			line3: "Canada"
		},
		mailing:{
			line1: "71 - 4340 STEVESTON",
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
		dynamicFirstName:"JOHN",
		dynamicLastName:"CROCKER",
		dynamicStreet:"70 - 4340 STEVESTON HWY",
		dynamicCity:"RICHMOND",
		dynamicProvince:"BC",
		dynamicPostalCode:"VV7E4M5",
		dynamicCountry:"Canada",
		dynamicAppointedDate:"2017-01-06",
	},
	},

	CP0001188: {
		identifier:"CP0001188",
		legal_name: "SHIRE COMMUNITY CO-OPERATIVE",
		delivery: {
			line1:"90 Douglas Rd",
			line2: "Victoria BC V8Z 5H4",
			line3: "Canada",
		},
		mailing: {
			line1 :"SHINGLE SPIT ROAD",
			line2 :"HONBY ISLAND BC V0R 1Z0",
			line3: "Canada",
		},
	},

	CP0001403:{
		identifier:"CP0001403",
		legal_name: "SOUTHGATE MANOR CO-OPERATIVE ASSOCIATION",
		delivery: {
			line1:"15 INTERURBAN RD",
			line2: "VICTORIA BC V8G 5H6",
			line3: "Canada",
		},
		mailing: {
			line1 :"300 - 1961 DUNN STREET",
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
			firstname: "NORMAN",
			lastname: "KIRBY",
			street: "202-1961 DUNN ST",
			city: "KELOWNA",
			provience:"BC",
			postalcode: "V1Y4C4",
			country: "CA",
			appointedDate: "2018-12-20"
		}


	},
		
};