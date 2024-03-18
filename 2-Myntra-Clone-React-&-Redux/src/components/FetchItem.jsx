import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { itemAction } from '../store/itemSlice';
import { fetchingStatusAction } from '../store/fetchStatusSlice';

const Fetchitem = () => {
        const fetchStatus = useSelector((store) => store.fetchStatus);
        const dispatch = useDispatch()
        useEffect(() => {
            if(fetchStatus.fetchDone) return;

            // dispatch(fetchingStatusAction.markFetchFetchingStarted())
                fetch('http://localhost:8080/items')
                    .then(res => res.json())
                    .then(({items}) =>{
                        dispatch(fetchingStatusAction.markFetchDone())
                        // dispatch(fetchingStatusAction.markFetchFetchingEnded())
                        dispatch(itemAction.addinitialItem(items))
                    })

                    return () => {  
                    }
            },[fetchStatus])


        return (
        <>
            <div>
            </div>
        </>
        )
}

export default Fetchitem