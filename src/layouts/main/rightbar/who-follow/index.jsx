import SidebarSection from "~/components/sidebar-section/index.jsx";
import {useAccount} from "~/store/auth/hooks.js";

export default function WhoFollow() {
   
   const account = useAccount()
   
   return (
	   <SidebarSection
		   title='Kimi takip etmeli'
		   more={`/connect_people?user_id=${account.id}`}
	   >
		  
	   </SidebarSection>
   )
}
