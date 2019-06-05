In order to run the npm run dev command you need to create a .env containing:
MONGOURI='yourmongourl'

Additionally, as I had to split the app in two for Heroku, there's some configuration that will need to be done in order to get it running locally vs. on Heroku

-- In the root package.json the start script needs to be changed to just run the server/client scripts respectively.
-- In the client package.json, in order for it to function locally there needs to be a proxy for localhost:5000
  -- This needs to be removed in Heroku
-- In the client directory, the constants contains an apiRoute which is empty when local (as it uses the localhost proxy) and needs to be replaced with the Heroku API url for the Heroku app.

FUTURE UPDATES:

  -- Determine how much data we are currently entering into the DetailsModal before creating the DB model
  -- Update charts upon saving
  -- Percentage algorithm for W/L for Bar graph
  -- Upon clicking a map on the Bar graph, expand that associated accordion and scroll to it

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