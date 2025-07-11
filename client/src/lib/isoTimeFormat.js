const isoTimeFormat = (dateTime)=>{
    const date=new Date(dateTime);
    const LocalTime = date.toLocaleString('en-US',{
        hour:'2-digit',
        minute:'2-digit',
        hour12:true,
    });
    return LocalTime;
}

export default isoTimeFormat;