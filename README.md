### RUN BACKEND
cd ./backend
npm run dev

### RUN SERVER
cd ./server
npm run start:dev


The website is an educational financial portfolio simulator for stocks, ETFs, and bitcoin for the average novice investor. It will later be turned into a marketplace for financial advisors (match.com for clients & financial advisors).

At this moment, the site informs users about annuities, life insurance basics, and simulates a user's stock, bitcoin, and ETF portfolio according to a user's defined risk tolerance. A user's Risk Tolerance is defined via 3 initial questions on my site and a 7-question survey developed by my business partner, a former Senior Financial Advisor for Merrill Lynch. 
Risk Tolerance is determined additionall by the initial amount of money a user would like to invest, their choice of stocks, and how long they wish to invest for + their investment purpose.

After these initial questions a user will also inform us about any debt they may have (student loans, credit cards, margin loans, or auto loan debt). Based on what they say, the algorithm either subtracts this amount from their initial investment or the user can choose to see the Monte Carlo simulation as if they had no outstanding debt.

We incorporate a suggest_portfolio function that assigns a portfolio allocation to the stocks, ETFs, and bitcoin currency based on the user's previously determined Risk Tolerance (aggressive, moderate, or conservative). 

If the user's risk tolerance as they have defined it on the first page of our site (with their initial investment, investment purpose, and investment amount) does not match up with the risk tolerance as defined by the 7 question "questionnaire," we inform them and show them a Monte Carlo portfolio simulation for each (according to the period of time they have specified they wish to invest and for what purpose). After being presented with these options, a user then is able to choose which outcome is most attractive for their end investment goal. 

The Monte Carlo simulation is produced based on all of these factors:
1) average expected return of the investment asset
2) covariance matrix that represents how the returns of the different assets move together 
3) INITIAL WEIGHTS which are the proportions of the total portfolio value allocated to each asset at the beginning of the simulation 
4) time horizon of the investment 
5) the starting value of the investment portfolio, 
6) an optional monthly investment by the user 
7) randomness - simulated to represent variations in the returns of assets and modeling of the unpredictable nature of the market.
