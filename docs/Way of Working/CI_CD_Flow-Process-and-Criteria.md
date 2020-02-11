Goal:		We need items faster into TEST

ENVIRONEMNTS: 	Tools – DEV – TEST – PROD 
PROD		
Staging		    not existing
TEST		      move button to push to PROD, we have feature flags
DEV		        Unit Testing with GitHub actions, move to TEST when … ???

----

**CI CD Flow Process and Criteria**
Developer is responsible to bring a story to Done
Role/ Skill 	Env/tool		Action item
Dev		GitHub			GH Actions passed
Dev		DEV			Build verified by DEV (whole app) (smoke test)
Dev		TEST			Push to TEST coordinated w. QA (cross-team) (i.e. post on RocketChat channel that you are going to move it into TEST in 0.5 hrs: https://chat.pathfinder.gov.bc.ca/channel/registries 
 “Our intention is to move xxxx (add Ticket No., GH version number and the service name (e.g. auth, pay, etc.) to TEST”
QA		TEST			1st Auto regression run
QA		TEST			1st Manual exploratory testing – by QA – 2-3 hrs
------- ticket closed ----
QA		TEST			Automated regression suite enhancement/ refactoring 
QA					Create bugs as needed – using the Bug Template 
QA					Release to PROD

**Actions**
1.	Patrick & W – Rel in RocketChat & daily, follow-up in Retro
2.	Shahriar John, Thor – Entity 
3.	Roland – Assets 
4.	Pick 2-3 items that are applicable to that process
