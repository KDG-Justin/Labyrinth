import Image from "next/image"

export default function DoNotClickScreen(){
    return (
        <div className="container-fluid" style={{background: 'black', color: 'white', minHeight: '100vh', padding: 0, overflow: 'hidden'}}>
            <Image
            src="/assets/flight.gif"
            alt="flight"
            layout="responsive"
            width={500}
            height={200}/>
        </div>
    )
}