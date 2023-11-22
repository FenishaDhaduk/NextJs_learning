import { NextResponse } from "next/server"

export function GET(){
    const users = [
        {
            name:"FenishaDhaduk",
            phonno:123456789,
            language:"NextJs"
        },
        {
            name:"JohnDoe",
            phonno:123456789,
            language:"JAVA"
        },
        {
            name:"TomJerry",
            phonno:123456789,
            language:"NODEJS"
        }
    ]
    // nextResponce responce send karva mate
    return NextResponse.json(users)

}

export async function POST(request){
    // const jsondata = await request.json()

    // pass a data into text than postman write data in body as a text 
    const textdata = await request.text()
    console.log(textdata)

    return NextResponse.json({
        message:'posting user data'
    })
}   

export function DELETE(){
    console.log("Delete api called")
return NextResponse.json({
    message:'Deleted !!',
    status:true
},{status:201,statusText:'status Text'})    
}

export function PUT(){
    
}