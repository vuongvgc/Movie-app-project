import React, { useState } from 'react'
import { MdEventSeat } from 'react-icons/md'
import '../../styles/Seat.css'

export default function Seat(props) {
    const [select, setSelect] = useState(false)

    const seat = props.item;

    const handleListSeat = (seat) => {
        setSelect(!select);
        props.onListSeat([seat.tenGhe, seat.giaVe, seat.maGhe]);

    }
    return (
        <>
            <button
                className={seat?.daDat ? 'seat-false' : "seat-true"}
                disabled={seat?.daDat ? true : false}
                onClick={() => handleListSeat(seat)}
            >
                {seat?.daDat ?
                    <MdEventSeat className='seat-unSelect' />
                    :
                    <MdEventSeat className={(select) ? `seat-select` : 'seat-unSelect'} />
                }

            </button>
        </>
    )
}
