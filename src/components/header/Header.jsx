import './header.css';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';   
import format from 'date-fns/format';
import {useNavigate} from 'react-router-dom';

const Header = ({type}) => {


    const [openDate , setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date("5/3/2025"),
          key: 'selection'
        }
      ]);
      

    const [openOptions , setOpenOptions] = useState(false);
    const [options , setOptions] = useState({
        adult : 1,
        childreen : 0,
        room : 1,

    })

 

    const handleOption = (name , operation) =>{
    setOptions(prev => {
      return{
        ...prev ,
         [name] : operation === "i" ? options[name] +1 : options[name]-1
    }})
    }

    const navigate = useNavigate();
    const [destination , setDestianation] = useState("");


    const handleSearch = () =>{
      navigate("/hotels", { state: { destination, date, options } });
    }

  return (
<div className="header">
<div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
<div className='headerList'>
     <div className="headerListItem active">
     <i className="fa-solid fa-bed"></i> 
     <span>Stays</span>
     </div>
     <div className="headerListItem">
     <i className="fa-solid fa-plane"></i> 
     <span>Flights</span>
     </div>
     <div className="headerListItem">
     <i className="fa-solid fa-car"></i> 
     <span>Car Rntals</span>
     </div>
     <div className="headerListItem">
     <i className="fa-solid fa-bed"></i> 
     <span>Attractions</span>
     </div>
     <div className="headerListItem">
     <i className="fa-solid fa-taxi"></i> 
     <span>Airport Taxis</span>
     </div>
    </div>

    { type !== "list" &&
    <>
    <h1 className="headerTitle">A lifetime of discounts? Its Genius.</h1>
    <p className="headerDesc">
        Get rewarded for you travels - unlock instant savings of 10% or more with a free Ziad Booking account
    </p>
    <button className="headerBtn">Sign in / Register</button>

    
    <div className="headerSearch">
        <div className="headerSearchItem">
     <i class="fa-solid fa-bed" id='headerIcon'></i> 
    <input type="text" placeholder='Where are you going?'
     className='headerSearchInput'
     onChange={ (e)=> setDestianation(e.target.value) }
      />
        </div>

         <div className="headerSearchItem">
     <i className="fa-regular fa-calendar-days" id='headerIcon'></i>
       <span className='headerSearchText' onClick={() =>setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
         
  {openDate &&   <DateRange
    editableDateInputs={true}
    onChange={item => setDate([item.selection])}
    moveRangeOnFirstSelection={false}
    ranges={date}
    className = "date"
    minDate={new Date()}
    />}
        </div>

        <div className="headerSearchItem">
        <i className="fa-solid fa-person" id='headerIcon'></i>
       <span className='headerSearchText' onClick={()=>setOpenOptions(!openOptions)}>{`${options.adult } adults ${options.childreen} childreen ${options.room} room`}</span>
       {openOptions && <div className="options">
        <div className="optionItem">
            <span className="optionText">Adult</span>
            <div className="optionCounter">
            <button
             className="optionCounterButton"
              onClick={() =>handleOption("adult","d")}
              disabled={options.adult <= 1}>-</button>
            <span className="optionCounterNumber">{options.adult}</span>
            <button className="optionCounterButton" onClick={() =>handleOption("adult","i")}>+</button>
            </div>
        </div>
        <div className="optionItem">
            <span className="optionText">Childreen</span>
            <div className="optionCounter">
            <button
             className="optionCounterButton"
              onClick={() =>handleOption("childreen","d")}
              disabled={options.adult <= 1}>-</button>
            <span className="optionCounterNumber">{options.childreen}</span>
            <button className="optionCounterButton" onClick={() =>handleOption("childreen","i")}>+</button>
            </div>
        </div>
        <div className="optionItem">
            <span className="optionText">Room</span>
            <div className="optionCounter">
            <button
             className="optionCounterButton"
              onClick={() =>handleOption("room","d")}
              disabled={options.room <= 1} >-</button>
            <span className="optionCounterNumber">{options.room}</span>
            <button className="optionCounterButton" onClick={() =>handleOption("room","i")}>+</button>
            </div>
        </div>
       </div>}
        </div>


        <div className="headerSearchItem">
     <button className='headerBtn' onClick={handleSearch}>Serarch</button>
        </div>
    </div>
    </>}
</div>
</div>
  )
}

export default Header;