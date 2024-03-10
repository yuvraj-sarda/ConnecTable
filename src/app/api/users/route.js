import connectMongoDB from '../../libs/mongodb';
import User from '../../models/user';
import { NextResponse } from 'next/server';

// Create a new user
export async function POST(request) {
    const receivedData = await request.json();
    await connectMongoDB();
    await User.create(receivedData);
    console.log(`User was created via POST request.`);
    return NextResponse.json({ 
        message: `User created`
    }, { status: 201 });
}

// Get all users
export async function GET() {
    await connectMongoDB();
    const users = await User.find();
    console.log('All users were fetched via GET request.');
    return NextResponse.json({ users });
}

// Delete a user
export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await User.findByIdAndDelete(id);
    console.log(`User ${id} was deleted via DELETE request.`);
    return NextResponse.json({ message: `User ${id} deleted` }, {status: 200});
}