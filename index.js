const getc=()=>{
    const randn=Math.floor(Math.random()*16777215)  ;
    const randc='#'+randn.toString(16);
    document.body.style.backgroundColor=randc;
    document.getElementById("heading").innerText=randc;
    navigator.clipboard.writeText(randc)
};
getc();
document.getElementById("btn").addEventListener("click",getc);
