### RUN BACKEND
cd ./backend
npm run dev

### RUN SERVER
cd ./server
npm run start:dev

The website is an educational financial portfolio simulator for stocks, ETFs, and bitcoin for the average novice investor that will later be turned into a marketplace for financial advisors (like match.com for clients & financial advisors).

Right now, the site informs users about annuities, life insurance basics, and simulates a user's stock, bitcoin, and ETF portfolio according to a user's defined risk tolerance.
The risk tolerance for a user is calculated by
1) An initial 3 questions on Page 1 of the site which includes
    a) the initial amount of their investment
    b) how long they wish to invest for
    c) their investment purpose.
2) A 7-question Risk Tolerance survey
3) User choice of stocks, bitcoin, and ETFs

After the user answers the initial 3 questions on the site, they will answer any questions related to debt (student loans, credit cards, margin loans, or auto loan debt). Based on their answer, the algorithm either subtracts this amount from their initial investment or the user can choose to see a Monte Carlo simulation of their chosen portfolio as if they had no debt.

We incorporate a suggest_portfolio function that assigns a portfolio allocation to the stocks, ETFs, and bitcoin currency based on the user's risk tolerance calculated in the survey (aggressive, moderate, or conservative). 

If the user's risk tolerance (determined by the 7-question survery) does not match the way they have defined themselves based on the 3 initial quesetions on the first page of the site, we inform them and show them a Monte Carlo portfolio simulation for each Risk Tolerance strategy. The user is then able to choose which outcome is most attractive for their end goal. 

The Monte Carlo simulation consists of 10000 simulations and is produced based on all of the following factors:
1) average expected return of the investment asset, 
2) covariance matrix that represents how the returns of the different assets move together, 
3) INITIAL WEIGHTS which are the proportions of the total portfolio value allocated to each asset at the beginning of the simulation, 
4) the time horizon of the investment, 
5) the starting value of the investment portfolio, 
6) an optional monthly investment by the user,
7) randomness simulated to represent variations in the returns of assets and modeling of the unpredictable nature of the market 