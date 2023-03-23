class Solution {
public:
    bool isValid(string s) {
          stack<char>stack;
//    (', ')', '{', '}', '[' and ']'
    for (int i = 0; i < s.length() ; ++i) {

        if (s[i]=='(' || s[i] == '{' || s[i] == '['){
            stack.push(s[i]);
        }
        else if ( (s[i] == ')' || s[i] == '}'|| s[i] == ']') && stack.empty()){
            return false;
        }
        else if (s[i] == ')' && stack.top() == '(' && !stack.empty())
                    stack.pop();
        else if (s[i] == '}' && stack.top() == '{' && !stack.empty())
                    stack.pop();
        else if (s[i] == ']' && stack.top() == '[' && !stack.empty())
                    stack.pop();
        else
            return false;

        }
    if (stack.empty())
        return true;
    else
        return false;

        
        
    }
};