import React from 'react';
import {ReactComponent as VoteFrame} from "../assets/svgs/vote-frate.svg";


export default function Vote(props) {
    return (
        <div className='vote' id='vote'>
            <h1 className='vote-title'>LUNATIC VOTE</h1>
            <div className='vote-frame'>
                <VoteFrame className='vote-frate'/>
                <p className='vote-text'>We introduced the Lunatic vote to allow Lunatics to choose for their favorite
                    NFT community to compete in Season 1 of the Lunatic Clubhouse.


                    The major players for the challenges the Clubhouse devised for season 1 will be the first seven
                    communities that result from the Lunatic Vote.

                    The first seven communities will compete in a tournament in which the Leaderboard will be visible at
                    all times. The Championship Trophy will be awarded to the community that earns the most points in
                    the Clubhouse.

                    The primary goal for the Lunatics is to accumulate as many points as possible in order to climb the
                    leaderboard. The further up the scoreboard your community is, the better. Certain milestones in the
                    Leaderboard will be awarded with airdrops, prizes, and giveaways.

                    The communities competing in Season 1 will be modified. Every month, the last two communities on the
                    Leaderboard will compete with the first two communities who still participate in the Lunatic Vote,
                    in order to maintain their position.</p>
            </div>
        </div>
    );
}
