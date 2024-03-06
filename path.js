const path=require("path");
let paths="D:\College\programming\BackEnd college\path.js";
console.log("Directory name of the path: "+path.dirname("D:\College\programming\BackEnd college\path.js"));
console.log("Extension name of the path: "+path.extname('D:\College\programming\BackEnd college\path.js'));
console.log("Base name of the path: "+path.basename('D:\College\programming\BackEnd college\path.js')+" ");
console.log("object structure of path: ",path.parse("c:\folder1\folder2\file1.js"));
console.log("c:\folder1\folder2\file1.js".length);
console.log("c:\folder1\folder2\file1.js".charAt(0));
console.log(path.delimiter);

const pjoin=path.join('D','College','programming','Backend college','path.js');
console.log(pjoin);