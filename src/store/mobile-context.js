import React,{useState,useEffect} from "react";

const MobileContext = React.createContext({
    isMobile: true
});

function getWindowWidth() {
    const { innerWidth: width} = window;
    return width;
}
export const MobileContextProvider = (props) => {
    
    const [isMobile,setIsMobile] = useState(getWindowWidth() < 767);
    const [windowWidth, setWindowWidth] = useState(getWindowWidth());
    
    useEffect(() => {
        function handleResize() {
          setWindowWidth(getWindowWidth());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(()=>{
        if(windowWidth < 767){
            setIsMobile(true);
        } else{
            setIsMobile(false)
        }

    },[windowWidth])
    return (
        <MobileContext.Provider value = {{isMobile: isMobile}}>
            {props.children}
        </MobileContext.Provider>
    )
}

export default MobileContext