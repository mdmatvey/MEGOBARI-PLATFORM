import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useRef, useState } from "react";
import ScrollContainer from 'react-indiana-drag-scroll'
import { Context } from "../..";
import './styles.css'

const SquareMap = observer(() => {
  const { mapStore } = useContext(Context)
  
  const side = 20
  const margin = 2

  const [segment, setSegment] = useState([])

  useEffect( () => {
    async function getSegment() {
      const segmentID = Number(window.location.href[window.location.href.length - 1])
      const { segment } = await require(`../../shared/consts/segments/segment${segmentID}/segmentsParams.jsx`)
      setSegment(segment)
    }

    getSegment()
  }, [])

  const elementRef = useRef()

  useEffect(() => {
    const map = elementRef.current;
    map.style.transform = `scale(${mapStore.scale / 100})`
  }, [mapStore.scale]);

  const eventElement = document.querySelector(".map") ? document.querySelector(".map") : undefined;
  const ZOOM_SPEED = 1;

  eventElement && eventElement.addEventListener("wheel", (e) => { 
    e.preventDefault()
    
    if (e.deltaY > 0 && mapStore.scale - ZOOM_SPEED >= 100) {    
      mapStore.setScale(mapStore.scale - ZOOM_SPEED)
    } else if (mapStore.scale + ZOOM_SPEED <= 300) {    
      mapStore.setScale(mapStore.scale + ZOOM_SPEED)
    }
  });

  const drawLine = (offset, length, rowID) => {
    const rowArr = []

    rowArr.push(<br/>)

    for (let i = 0; i < offset + length; i++) {
      if (i < offset) {
        rowArr.push(<div style={{ display: 'inline-block', width: side, height: side, margin: margin, background: 'none'}} />)
      } else {
        rowArr.push(
          <svg
            className={`svg-wrapper ${arr[0] && arr[rowID][i - offset] === 0 && 'occupied' }`}
            data-picked={false}
            data-rowID={rowID}
            data-occupied={arr[0] ? arr[rowID][i - offset] === 0 ? true : false : null}
            data-inRowID={i - offset}
            onClick={(e) => click(e.currentTarget)}
            width={side}
            height={side}
            viewBox="0 0 10 10" 
            fill="rgba(88, 132, 92, 0.5)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect 
              width="10" 
              height="10"
              rx="2"
            />
          </svg>
        )
      }
    }  
    
    return rowArr
  }

  const click = (element) => {
    if (element.dataset.picked === 'true' && element.dataset.occupied !== 'true') {
      mapStore.setPickedRects(mapStore.pickedRects.filter(el => (el.rowID !== element.dataset.rowID || el.inRowID !== element.dataset.inRowID)))
      element.setAttribute('data-picked', false)
      element.style.transform = 'scale(1)'
      element.style.fill = 'rgba(88, 132, 92, 0.5)'
    } else if (element.dataset.picked === 'false' && element.dataset.occupied !== 'true') {
      mapStore.setPickedRects([...mapStore.pickedRects, {rowID: element.dataset.rowID, inRowID: element.dataset.inRowID}])
      element.setAttribute('data-picked', true)
      element.style.transform = 'scale(1.1)'
      element.style.fill = '#f7d8ad'
    }

    console.log(mapStore.pickedRects.map(element => ({rowID: element.rowID, inRowID: element.inRowID})))
  }

  /* TEMPORARY CODE */
  const [arr, setArr] = useState([])
  useEffect(() => {
    const newArr = []
    for (let j = 0; j < segment.length; j++){
      const subArr = []
      newArr.push(subArr)
      for (let i = 0; i < segment[j].rowLength; i++) {
        subArr.push(Math.floor(Math.random() * 4))
      }
    }
    setArr(newArr)
  }, [segment])

  // console.log('Total rects: ' + arr.map(arr => arr.length).reduce((a, b) => a + b))
  /* TEMPORARY CODE */

  return (
    <div 
      className='map' 
      style={{ width: 800, height: 520, borderRadius: 10 }}
    >
      <div className="shadow">
        <ScrollContainer 
          activationDistance={1}
          style={{ width: '100%', height: '100%', borderRadius: 10, padding: 10 }}
        >
          <div 
            ref={elementRef}
            className='zoom' 
            style={{ scale: '0.5', whiteSpace: 'nowrap', width: '50%', height: '1%' }}
          >
            {
              Array(segment.length).fill(0).map((item, index) => drawLine(segment[index].rowOffset, segment[index].rowLength, index))
            }
          </div>
        </ScrollContainer>
      </div>
    </div>
  );
})

export default SquareMap;
