
async function TakeTime(){
    await new Promise((resolve)=>{
        setTimeout(resolve,3000);
    })
}

async function page() {
    await TakeTime()
    // throw new Error('this is a manual error')
  return (
    <div>This is a Admin page</div>
  )
}

export default page