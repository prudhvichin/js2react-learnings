let name="amulya";
console.log(name.toUpperCase());
let clg="KITS";
console.log(clg.toLowerCase());

let username="  amulya  ";
console.log(username.trim());
console.log(username.trimStart());
console.log(username.trimEnd());
console.log(username.length);


let email="amulya@example.com";
console.log(email.includes("@"));
console.log(email.startsWith("a"));
console.log(email.endsWith(".com"));
console.log(email.replace("amulya","amul"));
console.log(email.split("@"));
console.log(email.charAt(0));
console.log(email.charCodeAt(0));
console.log(email.indexOf("a"));
console.log(email.lastIndexOf("a"));
console.log(email.slice(0,5));
console.log(email.substring(0,5));
console.log(email.concat(" is my email"));
console.log(email.repeat(3));
console.log(email.padStart(5,"*"));
console.log(email.padEnd(5,"*"));
console.log(email.match(/a/g));
console.log(email.search(/a/));




console.log(email.slice(0,5)); // Note: splice is for arrays, not strings


