# nft-generator
# Running
Best way, just run:  
`npm run start-demon`  
  
This will monitor changes in index.mjs file as you code, and trace extra info if errors happen.

node still doesn't support in an easy fashion ES modules natively (we would need to use `require` keyword instead of `import from`). That is why I am using experimental mode and running files as `mjs`. To run just fire `npm start`.