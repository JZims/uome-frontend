import react from "react"
import {Header} from 'semantic-ui-react'
import "../index.css"
function HeaderOfPage(){
return (
    <Header className="head" textAlign='center' as='h2'>
        UOweMe
        <Header.Subheader textAlign='center' as='h6'>
           A Place To Document How Much Others Owe You
        </Header.Subheader>
        </Header>

)

}

export default HeaderOfPage