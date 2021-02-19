# Rust Genetics Calculator

I was not happy with how the other genetic calculators worked, so I made my own that has all the features I want. 

# [TRY IT NOW](https://jaretburkett.github.io/rust-genetics-calculator) 

![Rust Genetics Calculator Preview](https://github.com/jaretburkett/rust-genetics-calculator/blob/main/github/preview.png?raw=true)

## Normal Mode
In normal mode, you can enter the genetics of all the clones you have and select which ones to breed together. Once you
add 3 or more genetics to the Breeding Genetics table, the app with calculate all the possible results of the crossbreeding.

# Smart mode. 
Smart mode makes everything simple. All you have to do it add all the clones you have, enter your desired target gene makeup, and it will
run through every possible combination to figure out what genetics you can cross breed to get you the desired result, or as close to it as possible. The algorithm for this
gives penalties for red genes in the output and penalties for the number of possible results. If there is a combination that will guarantee a single output of your target, smart mode will find it. For target, it ignores placement of genes. So `YYYGGG` is the same as `YGYGYG`.

## Future Updates
This tool is really only handy if you know how crossbreeding works, and I intend to change that. In the future I will have it show each step and where to place each plant at different stages to get the desired outcome. But for now, if you have a basic understanding of how crossbreeding works, it should hopefully be beneficial to you. 