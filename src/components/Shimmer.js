export const Shimmer = ()=>{
    return(
        <div className="flex flex-wrap">
           {Array(10).fill("").map((e,index)=>(<div className="w-10 h-13 m-3 bg-gray-600" key={index}></div>))} 
        </div>
        
    )
}