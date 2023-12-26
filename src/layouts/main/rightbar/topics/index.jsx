import Topic from "~/components/topics/topic/index.jsx";
import {topics} from "~/utils/consts.jsx";

export default function Topics() {
   return (
	   <section className='bg-[#16181c] mb-4 rounded-2xl border border-[#16181c]'>
		  <h5 className='py-3 px-3 text-xl font-extrabold leading-6 flex items-center text-[#e7e9ea]'>İlgini çekebilecek gündemler</h5>
		  <div className='grid'>
			 {topics.map((topic, index) => <Topic item={topic} key={index} />)}
		  </div>
	   </section>
   )
}
