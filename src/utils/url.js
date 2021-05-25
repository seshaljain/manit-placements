 const makeUrl = ({ companyName, position }) => {
   return `/${[companyName, position]
     .map(uri =>
       uri
         .toString()
         .replace(/(\s+|#)/g, "-")
         .toLowerCase()
     )
     .join("/")}`
 }

 export default makeUrl
