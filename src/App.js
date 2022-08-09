import React, {useState} from 'react'
import ReactDOM from 'react-dom'
const App=()=>{
let curdate= new Date();
let date =curdate.getDate() +' / '+(curdate.getMonth()+1)+' / '+curdate.getFullYear();
let time=curdate.getHours()+":"+curdate.getMinutes()+":"+curdate.getSeconds();
curdate=curdate.getHours();
let greeting=''
let extra=''
let css={  }
let css2={ }
let tim=new Date().toLocaleTimeString();
const [ctime, setCtime] = useState(tim);


if( curdate>=1 && curdate<12){
greeting="Good Morning!"
css.color="green"
extra="Hope you have a bright day!!☀"
css2.color="dark pink"
}
else if(curdate>= 12 && curdate<17){
    greeting="Good Afternoon!"
    css.color="Orange"
    extra="Have a nice day ahead!!☺"
    css2.color="red"
}
else if (curdate>=17 && curdate<20)
{
    greeting="Good Evening!"
    css.color="Blue"
    extra="Hope this evening bring joy to you with a cup of coffee!!☕"
    css2.color="violet"
}
else{
    greeting="Good Night!"
    css.color="Black"
    extra="Hope you had a great day and the next be greater!!✨"
    css2.color="grey"
}
const Updatetime=()=>{
    tim=new Date().toLocaleTimeString();
    setCtime(tim);
};
setInterval(Updatetime,1000);
return(
    <>
        <div className='main'>
   <h1 className='date'>{date}</h1>
   
   <h1 className='time' style={css}>{ctime}</h1>
   
    <h1 className='ok'>Hello! sir/madam, <span style={css}>{greeting}</span>
    <br/>
   <span style={css2}>{extra}</span> 
    </h1>
    <br/>
    <br/>
    <h2>
    <div className='footer'>
        Made with ❤ by Akriti Verma
    </div>
    </h2>
    
</div>
    </>
)
}
export default App;
