module.exports = {

	waitForConditionTimeout : 30000,
	retryAssertionTimeout: 30000,	
	throwOnMultipleElementsReturned : false,

	launch_url: "https://test.bcregistry.ca/cooperatives/",

	idtest_url: "https://idtest.gov.bc.ca/login",
	launch_idirurl:"https://test.bcregistry.ca/cooperatives/auth/signin/idir",
	launch_url1: "https://test.bcregistry.ca/cooperatives/auth/",

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

	CP0002148:{
		identifier:"CP0002148",
		legal_name: "ARC COMMUNITY COOPERATIVE ASSOCIATION",
		delivery: {
			line1: "#5 BARTEN RD",
			line2: "LILLOOET BC V0K 1V0",
			line3: "Canada"
		},
		mailing:{
			line1: "PO BOX 1599",
			line2: "LILLOOET BC V0K 1V0",
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
		dynamicFirstName:"ALPHRED",
		dynamicLastName:"LGAEDE",
		dynamicStreet:"3 BARTON RD",
		dynamicCity:"LILLOOET",
		dynamicProvince:"BC",
		dynamicPostalCode:"VV0K1V0",
		dynamicCountry:"Canada",
		dynamicAppointedDate:"2017-11-24",
	},

}

}