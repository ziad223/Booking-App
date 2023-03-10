import './list.css';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';

const List = () => {

  let location = useLocation();
  console.log(location)
  const [destination , setDestianation] = useState(location.state.destination);
  const [date , setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
  const [options , setOptions] = useState(location.state.options);

  console.log(location);
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Description</label>
              <span>{destination}</span>
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
              {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}
                </span>
               {openDate && (
                 <DateRange
                 onChange={(item) =>setDate([item.selection])}
                 minDate={new Date()}
                 ranges = {date}
                  />
                  )}
            </div>

            <div className="lsItem ">
              <label>Options</label>
              <div className="lsOptions">
              <div className="lsOptionItem">
                <p className="lsOptionText">Min Price <small>Per Night</small></p>
                <input type="number" className='lsOptionInput' />
              </div>
              <div className="lsOptionItem">
                <p className="lsOptionText">Max Price <small> Per Night</small></p>
                <input type="number" className='lsOptionInput' />
              </div>
              <div className="lsOptionItem">
                <p className="lsOptionText">Adult</p>
                <input type="number" min={1} className='lsOptionInput' placeholder={options.adult} />
              </div>
              <div className="lsOptionItem">
                <p className="lsOptionText">Childreen</p>
                <input type="number" min={0} className='lsOptionInput' placeholder={options.childreen} />
              </div>
              <div className="lsOptionItem">
                <p className="lsOptionText">Room</p>
                <input type="number" min={1} className='lsOptionInput' placeholder={options.room} />
              </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List