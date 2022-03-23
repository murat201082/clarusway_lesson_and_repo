
const Clock = () => {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    return(
        
    `${hours} ${minutes} ${seconds} `
    
       

        
    )
};

export default Clock;