import connectMongoDB from '../../libs/mongodb';
import User from '../../models/user';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const { firstName, interests, location } = await request.json();
    await connectMongoDB();
    await User.create({ firstName, interests, location });
    return NextResponse.json({ 
        message: `User ${firstName} created`
    }, { status: 201 });
}