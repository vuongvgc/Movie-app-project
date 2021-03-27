import React,{useState} from 'react'
import { MdEventSeat } from 'react-icons/md'
import '../../styles/Seat.css'

export default function Seat(props) {
    const [select, setSelect] = useState(false)
    
    const seat = props.item;
   
    const handleListSeat = (seat)=>{
        setSelect(!select)
        
        props.onListSeat([seat.tenGhe,seat.giaVe])
       
    }
    return (
        <button  className={seat?.taiKhoanNguoiDat ?'seat-false':"seat-true"} 
        
       
    
            disabled={ seat?.taiKhoanNguoiDat ?'disabled':"" }
            onClick={()=>handleListSeat(seat)}
        >
        
            <MdEventSeat className={select?`seat-select`:'seat-unSelect'}    />
        </button>
    )
}
