import {useCounterStore} from '../components/store/counterStore'

export let values = ''
export let names = ''

export default function Coin({image, text, name}) {

  const value = useCounterStore(state => state.value)
  const change = useCounterStore(state => state.change)
  
  return (
    <>
        <div onClick={() => {
         let valueText = text
          values = valueText
          let valueName = name
          names = valueName
          change()
        }} className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          <img width={50} src={image}></img>
        </div>
     
      </div>
    </div>
    </>
  )
}
