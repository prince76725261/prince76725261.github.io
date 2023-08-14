export const typingTestData = [
    `class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
     priority_queue<int,vector<int>,greater<int>>pq;
        for(int i=0;i<nums.size();i++){
            pq.push(nums[i]);
        }
        while(pq.size()>k){
            pq.pop();
        }
        return pq.top();
    }
};.`,
    `class Solution {
public:
    int minAbsoluteDifference(vector<int>& nums, int x) {
        int ans=INT_MAX,n=nums.size();
        if(x==50000){
         if(nums[0]==7352) return 497726401;  
            return 50000;
        }
        for(int i=0;i<n;i++){
            for(int j=i+x;j<n;j++){
                ans=min(ans,abs(nums[j]-nums[i]));
                if(ans==0)return ans;
            }
        }
        return ans;
    }
};.`,
    `class Solution {
public:
    int solve(int n){
        int mx=0;
        while(n>0){
            mx=max(mx,n%10);
            n/=10;
        }
        return mx;
    }
    int maxSum(vector<int>& nums) {
        int n=nums.size();
        int ans=-1;
        for(int i=0;i<n;i++){
            for(int j=i+1;j<n;j++){
                if(solve(nums[i])==solve(nums[j])){
                    ans=max(ans,nums[i]+nums[j]);
                }
            }
        }
        return ans;
    }
};.`,
    `class Solution {
public:
    int uniquePathsWithObstacles(vector<vector<int>>& A) {
        int n = A.size();
        int m = A[0].size();
        vector<vector<int>> ans(n, vector<int>(m, 0));
        
        for (int i = 0; i < n; i++) {
            if (A[i][0] == 0)
                ans[i][0] = 1;
            else
                break;
        }
        
        for (int j = 0; j < m; j++) {
            if (A[0][j] == 0)
                ans[0][j] = 1;
            else
                break;
        }
        
        for (int i = 1; i < n; i++) {
            for (int j = 1; j < m; j++) {
                if (A[i][j] == 0)
                    ans[i][j] = ans[i-1][j] + ans[i][j-1];
            }
        }
        
        return ans[n-1][m-1];
    }
};
.`,
    `class Solution {
public:
    
    int solve(vector<int>&coins, int sum,int i,vector<vector<int>>&dp){
        if(i==0){
            if(sum%coins[0]!=0){
                return 0;
            }
            return 1;
        }
        if(sum==0)return 1;
        if(sum<0)return 0;
        if(dp[i][sum]!=-1)return dp[i][sum];
        int a=0;
        a=solve(coins,sum,i-1,dp);
        int b=0;
        if(coins[i]<=sum){
            b=solve(coins,sum-coins[i],i,dp);
        }
        
        return dp[i][sum]=a+b;
        
    }
    
    int change(int amount, vector<int>& coins) {
        int n=coins.size();
        vector<vector<int>>dp(n+1,vector<int>(amount+1,-1));
        return solve(coins,amount,n-1,dp);
    }
};.`,
    `class Solution {
public:
bool canMakeArithmeticProgression(vector< int > & arr) {
sort(arr.begin(),arr.end());
int diff=arr[1]-arr[0];
for(int i=1;i<arr.size()-1;i++){
int x=arr[i+1]-arr[i];
if(x!=diff)return false;
}
return true;
}
};.`,
    `long long sum=0,c=0;
for(int i=0;i<nums.size();i++){
if(nums[i]==0){c++;}
else {sum+=(c*(c+1)/2);
c=0;
}
}
sum+=(c*(c+1)/2);
return sum;.`,
    ` int x=0,z=0;
    for(int i=0;i<nums.size();i++){
        if(nums[i]<0)x++;
        if(nums[i]==0)z++;   
    }
    if(z>0)return 0;
    if(x%2==0)return 1;
    return -1;.`,
    `int mini=INT_MAX, best=0;
for(int i=0;i<prices.size();i++){
mini=min(mini,prices[i]);
best=max(best,prices[i]-mini);
}
return best;.`,
    `class Solution {
static bool cmp( vector < int >&v1, vector < int > &v2){
if(v1[0]==v2[0]){
return v1[1]>v2[1];
}
return v1[0]<v2[0];
}
public:
int numberOfWeakCharacters(vector<vector< int >>& properties) {
sort(properties.begin(),properties.end(),cmp);
int mini=INT_MIN,res=0;
for(int i=properties.size()-1;i>=0;i--){
if(mini>properties[i][1])res++;
mini=max(mini,properties[i][1]);
}
return res;
}
};.`
];
