function coinChange(coins, amount) {
   
    let dp = new Array(amount + 1).fill(amount + 1);
    
    
    dp[0] = 0;

    
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
               
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    
    return dp[amount] > amount ? -1 : dp[amount];
}


console.log("Test Case 1 (coins [1, 2, 5], amount 11):", coinChange([1, 2, 5], 11)); 

console.log("Test Case 2 (coins [1, 6, 10], amount 12):", coinChange([1, 6, 10], 12)); 
