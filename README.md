In order to run the npm run dev command you need to create a /config/keys.js containing 

  mongoURI,
  google: {
     clientID,
     clientSecret
  },
  session: {
     cookieKey
  }

FUTURE UPDATES:

  -- Once UserID is placed in the store, query the DB for data with that ID
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