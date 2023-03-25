/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
        
    if(needle.length === 0) return 0;
    
    let index = haystack.indexOf(needle);
    
    if(index === -1) return -1;
    
    return index;


    
    
};