import React, { Fragment, useState,useEffect } from 'react';



const Home=()=>{
    let count=0;
    const [arr,set_arr]=useState([]);
    const [timetaken,set_timetaken]=useState(0);
   
    let initial=[
        [-1,2,-1,-1,-1,4,3,-1,-1],
        [9,-1,-1,-1,2,-1,-1,-1,8],
        [-1,-1,-1,6,-1,9,-1,5,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,1],
        [-1,7,2,5,-1,3,6,8,-1],
        [6,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,8,-1,2,-1,5,-1,-1,-1],
        [1,-1,-1,-1,9,-1,-1,-1,3],
        [-1,-1,9,8,-1,-1,-1,6,-1]
    ]
    let editable=[
        [-1,2,-1,-1,-1,4,3,-1,-1],
        [9,-1,-1,-1,2,-1,-1,-1,8],
        [-1,-1,-1,6,-1,9,-1,5,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,1],
        [-1,7,2,5,-1,3,6,8,-1],
        [6,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,8,-1,2,-1,5,-1,-1,-1],
        [1,-1,-1,-1,9,-1,-1,-1,3],
        [-1,-1,9,8,-1,-1,-1,6,-1]
    ]
    let colors=[
        ['#66ccff','#66ccff','#66ccff','#99ff99','#99ff99','#99ff99','#66ccff','#66ccff','#66ccff'],
        ['#66ccff','#66ccff','#66ccff','#99ff99','#99ff99','#99ff99','#66ccff','#66ccff','#66ccff'],
        ['#66ccff','#66ccff','#66ccff','#99ff99','#99ff99','#99ff99','#66ccff','#66ccff','#66ccff'],
        ['#ffff66','#ffff66','#ffff66','#ffcc99','#ffcc99','#ffcc99','#ffff66','#ffff66','#ffff66'],
        ['#ffff66','#ffff66','#ffff66','#ffcc99','#ffcc99','#ffcc99','#ffff66','#ffff66','#ffff66'],
        ['#ffff66','#ffff66','#ffff66','#ffcc99','#ffcc99','#ffcc99','#ffff66','#ffff66','#ffff66'],
        ['#ff6666','#ff6666','#ff6666','#99ff99','#99ff99','#99ff99','#ff6666','#ff6666','#ff6666'],
        ['#ff6666','#ff6666','#ff6666','#99ff99','#99ff99','#99ff99','#ff6666','#ff6666','#ff6666'],
        ['#ff6666','#ff6666','#ff6666','#99ff99','#99ff99','#99ff99','#ff6666','#ff6666','#ff6666']

    ];
    
    useEffect(()=>{
    let temp=[];
        for(let i=1;i<10;i++){
            let temp2=[];
            for(let j=1;j<10;j++){
                if(initial[i-1][j-1]!=-1)
                temp2.push({"a":initial[i-1][j-1]});
                else{
                    
                    temp2.push({"a":""});
                }
                
            }
            temp.push(temp2);
        }
        set_arr([...temp]);

    },[])

    useEffect(() => {
        

        const intervalId = setInterval(() => {
          let temp=Number(timetaken)+1;
          set_timetaken(temp);
        }, 1000);


        return () => clearInterval(intervalId);

      }, [timetaken]);

    const handlechange=(e)=>{

       
        let i=Number( e.target.id[0]);
        let j=Number( e.target.id[1]);
        
        let temp=[]
        temp=[...arr];
        if(/[1-9]/.test(e.target.value) || e.target.value==""){
            if(e.target.value=="")
                temp[i-1][j-1]["a"]=e.target.value;
            else{
                let row=1;
                let column=1;
                let box=1;

                for(let r=0;r<9;r++){
                    if(r!=i-1){
                        if(temp[r][j-1]["a"]==Number(e.target.value)){
                            row=0;
                        }
                    }

                }
                for(let c=0;c<9;c++){
                    if(c!=j-1){
                        if(temp[i-1][c]["a"]==Number(e.target.value)){
                            column=0;
                        }
                    }

                }
                let t1=parseInt((i-1)/3);
                let t2=parseInt((j-1)/3);
                t1=3*t1;
                t2=3*t2;
                console.log("t1 is ",t1," t2 is ",t2);
                for(let a=t1;a<t1+3;a++){
                    for(let b=t2;b<t2+3;b++){
                       if((i-1)!=a && j-1!=b){
                           if(temp[a][b]["a"]==e.target.value){
                               box=0;
                               console.log("box became zero")
                           }
                       }
                    }
                }


                if(row!=0 && column!=0 && box!=0){
                    let exitvalue=1

                    temp[i-1][j-1]["a"]=Number(e.target.value);
                    for(let m=0;m<9;m++){
                        for(let n=0;n<9;n++){
                            if(temp[m][n]["a"]==""){
                                exitvalue=0;
                            }
                        }
                    }
                    if(exitvalue){
                        alert("Hurray!! God or wot. Completed in ",timetaken,"sec");
                    }
                }
            }
        }
            
        set_arr([...temp])

    }

    
    
    return (
        <div style={{marginTop:100,display:'flex',justifyContent:'center'}}>
           
        <div >
        <p>Time: {timetaken} sec</p>
            {
                arr!=[]?
                arr.map(e=>{
                    count+=1;
                    let count2=0;
                    return(
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',width:'270px',height:'30px'}}>
                        
                        {
                        e.map(g=>{
                            count2+=1;
                            return(
                                <div style={{flex:1,paddingRight:'5px'}}>

                                    <input  autoComplete="off" maxLength={1} id={count.toString()+count2.toString()} onChange={e=>handlechange(e)} disabled={editable[count-1][count2-1]==-1?false:true} style={{width:'20px',height:'20px',textAlign:'center',backgroundColor:colors[count-1][count2-1],borderWidth:2,fontWeight:'bold'}} type="text" inputmode="numeric"  value={g.a}></input>
                                    
                                </div>
                            )
                            
                        })
                        }
                        
                       
                        </div>
                        
                        
                    
                    )
                    
                }
                    ):null
            }
        </div>
        </div>
    )
}

export default Home;
