
// Import axios for making HTTP requests
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextApiRequest, res: NextApiResponse) {

     // NextRequest.s('Access-Control-Allow-Origin', '*');

        // Make a request to the LeetCode API
        const response = await axios.get(`https://leetcode.com/graphql?query=query
            {     
                userContestRanking(username:  "ReddyPranai") 
                {
                    attendedContestsCount
                    rating
                    globalRanking
                    totalParticipants
                    topPercentage    
                }
                matchedUser(username: "ReddyPranai") {
                    username
                    submitStats: submitStatsGlobal {
                    acSubmissionNum(tags: ["array", "binary-search"]) {
                    difficulty
                    count
                    submissions
                    }
                    }
                    }
            }`);
let obj={
    submitStats:response.data.data.matchedUser.submitStats,
    contestStats:response.data.data.userContestRanking
}
        // Send a response
        return NextResponse.json({ message: "success",obj });
    
        
    
}
