import SidebarSection from "~/components/sidebar-section/index.jsx";
import {useAccount} from "~/store/auth/hooks.js";
import {whoFollowUsers} from "~/mock/index.js";
import Button from "~/components/button/index.jsx";

export default function WhoFollow() {
   
   const account = useAccount()
   
   return (
	   <SidebarSection
		   title='Kimi takip etmeli'
		   more={`/connect_people?user_id=${account.id}`}
	   >
		  {whoFollowUsers.map((user, index) =>
			 <button className='py-3 px-4 flex gap-3 transition-colors hover:bg-white/[0.03]'>
				<img src={user.avatar} alt='' className='w-10 h-10 rounded-full object-cover' />
				<div className='flex-1 flex flex-col text-left'>
				   <div className='text-[15px] text-[#e7e9ea] leading-5 font-bold'>{user.fullName}</div>
				   <div className='text-[15px] text-[#71767b]'>@{user.username}</div>
				</div>
				<div>
				   <Button variant='white' size='small'>
					  Takip et
				   </Button>
				</div>
			 </button>
		  )}
	   </SidebarSection>
   )
}
