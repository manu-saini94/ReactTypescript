type GreetProps = {
    name:string
    messageCount?:number
    isLoggedIn:boolean
}
export const Greet = (props:GreetProps) => {
  const {messageCount = 0} = props
  return (
    <div>
        {props.isLoggedIn ?    <h2>Welcome  {props.name} : You have {messageCount} messages</h2> : <h2>Welcome Guest </h2>}
    </div>
  ) 
}


