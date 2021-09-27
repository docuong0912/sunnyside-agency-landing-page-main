import client from '../data/client';
import emily from '../images/image-emily.jpg';
import thomas from "../images/image-thomas.jpg";
import jennie from "../images/image-jennie.jpg";
export default function Client() {
    return (
        client.map(client=>{
            return(
                <div key={client.id} className="client-info">
                    <img src={client.id==1?emily:client.id==2?thomas:jennie} alt="client avatar"/>
                    <p>{client.des}</p>
                    <div>
                        <b>{client.name}</b>
                        <p>{client.job}</p>
                    </div>
                    
                </div>
            );

        })
            
    );
}