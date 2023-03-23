class Solution {
public:
    bool isPalindrome(int x) {
        
  stack<int> stackOfPalindrom;
    if(x<0){
       return false;
   }
    int y=x;
    while (x){
        stackOfPalindrom.push(x%10);
        x/=10;
    }
    while(y){

        if (stackOfPalindrom.top() != y%10){
            return false;
        }
        stackOfPalindrom.pop();
        y/=10;

    }
    return true;

        
    }
};