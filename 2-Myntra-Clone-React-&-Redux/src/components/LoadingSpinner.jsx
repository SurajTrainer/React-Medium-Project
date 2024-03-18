
const LoadingSpinner = () => {
    return (
        <>
            <div className="spinner-border text-info" role="status" style={{width:'40px', height:'40px'}}>
                <span className="visually-hidden">Loading...</span>

            </div>
           
        </>
    )
}

export default LoadingSpinner