import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import viajesActions from '../redux/actions/viajesActions'
import CardViajes from '../Components/CardViajes/CardViajes'
const Viajes =()=> {

  const dispatch = useDispatch()
  const user = useSelector(store=> store.usersReducer.user)
  const [viajes,setViajes] = useState([])
  useEffect(()=>{
    dispatch(viajesActions.obtenerViajes())
      .then( res=> setViajes(res))
      .catch( err=> console.log(err))
  },[user])

  return (
    <div className="container_viajes">
        <div className="container__viajes">
          <h1>Viajes realizados</h1>
          <div className="container__viajes__cards">

            {viajes?.map(viaje => {
              return <CardViajes data={viaje} key={viaje._id} />
            })}
          </div>
        </div>
    </div>
  )
}

export default Viajes