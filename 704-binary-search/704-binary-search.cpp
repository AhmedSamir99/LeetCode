class Solution {
public:
    int search(vector<int>& nums, int target) {
        
         int index;
        if(binary_search(nums.begin(),nums.end(),target)){

        auto it = find(nums.begin(), nums.end(), target);
    
        if (it != nums.end()){    
        
        index = it - nums.begin();
        
        }
        return index;
        }
           else 
                return -1;
    }
          
};