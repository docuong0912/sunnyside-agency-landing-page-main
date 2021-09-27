import {useState,useEffect,useRef} from 'react';
export default function Content({id,title,content}){
    const [active,setActive] = useState();
    const elRef = useRef();
    const action = ()=>{
        console.log(elRef.current.getBoundingClientRect().top);
        if(elRef.current.getBoundingClientRect().top<550)
        setActive(true);
        else setActive(false);
    }
    useEffect(()=>{
        window.addEventListener("scroll",action);
        return ()=> window.removeEventListener("scroll",action);
    },[]);
    return(
        <section ref={elRef} className={`${active?id%2==0?"active-section-even":"active-section-odd":""} section-${id}`} >
            <h2>{title}</h2>
            <p>{content}</p>
            {
                id==2 || id ==4?<b>Learn more</b>:""
            }
        </section>
    );
}