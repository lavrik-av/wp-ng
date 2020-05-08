export const environment = {
  production: true,
  wp : {
    "serverApiUrl"     : "https://angularxo-wp.mysite4u.net/wp-json/wc/v3/",
    "productsEndPoint" : "products",
    "consumer_key"     : "ck_4be33523cb7786a5440888747fea2519f03b211c",
    "consumer_secret"  : "cs_768a7eb3c80f0039c52efd5f0bcadedf35f175f9"
  },
  endpoints: {
    "products"  : "https://angularxo-wp.mysite4u.net/wp-json/wc/v3/products?consumer_key=ck_4be33523cb7786a5440888747fea2519f03b211c&consumer_secret=cs_768a7eb3c80f0039c52efd5f0bcadedf35f175f9",
    "posts"     : "https://angularxo-wp.mysite4u.net/wp-json/wp/v2/posts",
    "users"     : "https://angularxo-wp.mysite4u.net/wp-json/wp/v2/users"
  }
};
