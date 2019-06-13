In order to run the npm run dev command you need to create a .env containing:
MONGOURI='yourmongourl'

Additionally, as I had to split the app in two for Heroku, there's some configuration that will need to be done in order to get it running locally vs. on Heroku

-- In the root package.json the start script needs to be changed to just run the server/client scripts respectively.
-- In the client package.json, in order for it to function locally there needs to be a proxy for localhost:5000
  -- This needs to be removed in Heroku
-- In the client directory, the constants contains an apiRoute which is empty when local (as it uses the localhost proxy) and needs to be replaced with the Heroku API url for the Heroku app.

FUTURE UPDATES:

  -- Reorganize the Teams landing page. Work on some UX designs to streamline how the previous matches/charts appear.
    -- Look to Discord/Facebook and display the match history in a left column, with the users in a right column or at the bottom of the left.
    -- Make this mobile friendly and flex the box into the current centered box layout.
  -- Create a Match page which will be dynamically rendered for each of the matches in the MatchHistory
  -- Add a Date field for the MatchDetails modal and utilize this for the Match.date instead of Date.now
  -- Create a TeamMembers component which will display somewhere on the Team page so you can see how many members there are / who has joined

APP FUNCTIONALITY:

  Dashboard
  -- Map Win/Loss Percentage 
      Bar graph
  -- Accordion selections for individual maps
    + Each accordion will have the following:
    + Team Composition statistics against Enemy Composition statistics (Win/Loss with these match ups)
      Side-by-side listing rather than charts
      Ex. Rein/Zarya/DVA/Lucio/Brig/Moira 55% loss rate against Rein/Zarya/Hanzo/Zen/Ana/Junkrat
    + List "most wins with" and "most losses against" individual heroes 
      Pie Charts?
    + Line graph with win/loss dates, tracking trends over time

  Data Sheet
  -- Enter game statistics
      + Maps played W/L
      + Team composition for each map
      + Enemy composition for each map
      (Eventually want individual statistics)