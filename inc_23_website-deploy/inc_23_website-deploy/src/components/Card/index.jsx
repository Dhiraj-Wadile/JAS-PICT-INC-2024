function Card(props){
    // console.log(props.logo);
    return (
        <div className="card   ">       
            {/* my card*/}
                <div className="my-10">
                    <div className="  rounded overflow-hidden shadow-lg max-w-sm bg-cyan-800 hover:scale-105 hover:shadow-xl hover:shadow-light_blue cursor-pointer">
                        <img src ={props.logo} 
                        alt="" 
                        className="w-full"/>
                        <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-white">{props.name}</div>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magni dolorem libero pariatur nisi fugit voluptate perferendis, harum sapiente sit eius excepturi, similique repellendus explicabo dicta a ipsa iure temporibus dolorum, accusantium consequatur sequi possimus! Quas non veniam aliquid et?</p>
                        <br />
                        {/* <button className="bg-transparent text-white hover:text-blue-300 font-semibold hover:text-green-300 px-2">View More</button> */}
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default Card;