import NavBar from "./NavBar";




const arr = [
    {
        "title": "OOP",
        "description": "Object-Oriented Programming (OOP) is a programming paradigm that uses 'objects'—data structures consisting of fields and methods. It promotes modularity and code reuse, making it easier to develop complex applications."
    },
    {
        "title": "Data Structures",
        "description": "Data structures are ways of organizing and storing data to enable efficient access and modification. Common structures include arrays, stacks, queues, and trees, each suited for specific types of operations."
    },
    {
        "title": "Machine Learning",
        "description": "Machine Learning is a branch of artificial intelligence where algorithms learn from data to make predictions or decisions. It's widely used in fields like finance, healthcare, and self-driving cars."
    },
    {
        "title": "Cybersecurity",
        "description": "Cybersecurity involves protecting computer systems and networks from malicious attacks. It includes practices such as encryption, firewalls, and secure coding to protect data and maintain privacy."
    },
    {
        "title": "Cloud Computing",
        "description": "Cloud Computing allows businesses to access computing resources like storage and processing power over the internet. It offers scalability and flexibility, reducing the need for on-premises infrastructure."
    },
    {
        "title": "Blockchain",
        "description": "Blockchain is a distributed ledger technology that records transactions across multiple computers. Known for its use in cryptocurrencies, it's also applied in supply chain and digital identity management."
    },
    {
        "title": "DevOps",
        "description": "DevOps is a set of practices that combines software development and IT operations to shorten the development lifecycle. It emphasizes collaboration, automation, and continuous integration and delivery."
    },
    {
        "title": "Database Management",
        "description": "Database Management involves organizing and managing data to ensure efficient storage, retrieval, and updating. Popular database systems include SQL, NoSQL, and in-memory databases."
    },
    {
        "title": "Network Security",
        "description": "Network Security focuses on protecting data as it travels across or between networks. It includes methods like firewalls, intrusion detection, and encryption to safeguard information."
    },
    {
        "title": "Artificial Intelligence",
        "description": "Artificial Intelligence (AI) is the simulation of human intelligence in machines. AI enables computers to perform tasks like speech recognition, visual perception, and decision-making."
    }
]


const Card = ({title, description}) => {


	return (

	<div className="w-[70%] h-20  mt-4 flex items-center  bg-teal-50  rounded-lg  justify-around ">
			<div className="bg-black w-10 h-10 rounded-full "> 
			</div>
			<div className="pl-5 w-[70%] flex justify-around items-center ">
				<span className="flex font-bold text-sm  ml-3 w-[70%] "> title:  {title}</span>
				<button className=" h-10 w-10  text-xs  font-bold rounded-full bg-white " > See </button>
			</div>
	</div>
	)
}



const MyOwnCards = () =>{

    return (
    <>

    	<NavBar/>
    	<div className="w-full  flex h-[100vh]  flex-col mt-10 font-mono items-center " >

			<div className="w-[50%] flex flex-col  items-center"> 

			<span className="font-semibold text-xl  w-full " > My own Cards  </span>	
			
				{arr.map( (ele) => <Card title={ele.title} description={ele.description} />    )}

			</div> 


		</div>
    </>
	

	)

}



export default MyOwnCards;
