(()=>{var r=(n,o)=>()=>(o||n((o={exports:{}}).exports,o),o.exports);var a=r(()=>{(()=>{let n=async t=>{let e=fetch(`http://localhost:5080/projects/${t}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw new Error("Failed to load config");return await e.json()},c=document.currentScript?.dataset.projectId||"unknown";n(c).then(t=>{t&&console.log(`Loaded memoir and found a valid connection
Welcome to ${t.apiUrl}`)})})()});a();})();
//# sourceMappingURL=widget.js.map
