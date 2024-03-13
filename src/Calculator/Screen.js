
import '../CSS/Screen.css'

const Screen = ({ value }) => {
  return (
    <input type = 'text' className="Screen" mode="single" max={60} value={value}/>
      
    
  );
};

export default Screen;