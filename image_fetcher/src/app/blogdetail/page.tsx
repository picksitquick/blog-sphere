/* eslint-disable react/no-unescaped-entities */
"use client"
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
// import styles from '../public/box.module.css';

const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    const progress = (scrollY / (scrollHeight - windowHeight)) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Head>
         <title>My Blog</title>
       </Head>
       <AppBar position="sticky" color='primary'>
         <Toolbar>
         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BlogSphere
          </Typography>
           <div>
             <InputBase
              className='bg-white p-2 rounded-full'
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchValue}
              onChange={handleSearchChange}
            />
            <SearchIcon />
          </div>
          {/* Add other links here */}
        </Toolbar>
      </AppBar>
      
      <div className='bg-cyan-600 rounded-full border-t-2 fixed top-18 left-0 w-full h-2' style={{width:`${scrollProgress}%`}}></div>
      <div className='flex flex-col'>
        {/* Add your blog content here */}
        <h1 className='text-gray-200 p-2 m-4 mx-auto bg-blue-700 rounded-full inline-block hover:bg-blue-500 animate-bounce'>Blog Post Title</h1>
        {/* <span className="bg-green-200 p-2 rounded-full">
          <Image src="/vercel.svg" alt="Random1" width={100} height ={100}/>
        </span> */}
        <p className="border-purple-800 border-opacity-20 border-l-2 border-r-2 p-8 mt-4 mb-6 ml-40 mr-40 text-gray-400">
          <b>Title : The Power of Teamwork: Achieving Success Together :</b> 
          <br/>
            Introduction

            Teamwork is a fundamental aspect of human interaction, transcending boundaries, cultures, 
            and professions. It embodies the idea that collective efforts lead to greater accomplishments 
            than individual endeavors. In both professional and personal settings, teamwork plays a pivotal 
            role in fostering innovation, problem-solving, and harmonious relationships. This essay delves 
            into the significance of teamwork, exploring its benefits, challenges, and the strategies to 
            enhance collaboration within teams.

            1. The Foundation of Success

            At the heart of successful teamwork lies effective communication, trust, and shared goals. 
            A team composed of individuals with diverse skills and perspectives can harness their collective 
            strengths to accomplish tasks more efficiently and creatively. Whether in sports, business, or 
            creative pursuits, teamwork cultivates a positive environment, where individuals can leverage 
            their expertise to complement each other.

            <br/>

            2. Benefits of Teamwork

            a) Increased Productivity: In a well-coordinated team, tasks are distributed according to each 
            member's strengths, optimizing productivity and efficiency. Shared responsibilities foster 
            accountability and reduce the burden on individuals.

            b) Enhanced Creativity: Team members bring unique ideas and insights to the table, resulting 
            in a synergy that sparks creativity and innovation. Brainstorming sessions encourage out-of-the-box 
            thinking and lead to groundbreaking solutions.

            c) Improved Decision-Making: Teams can analyze situations from multiple angles, leading to 
            more informed and well-rounded decisions. Diversity within the team ensures comprehensive 
            evaluations of potential risks and benefits.

            d) Motivation and Support: Working together toward common goals fosters a sense of belonging and 
            motivation. Team members provide encouragement and support during challenging times, boosting 
            morale and resilience.

            <br/>

            3. Overcoming Challenges in Teamwork

            a) Communication Breakdown: Miscommunication or lack of effective communication can hinder 
            progress and lead to misunderstandings. Teams must foster an open and transparent communication 
            culture to overcome this challenge.

            b) Conflict Resolution: Differing opinions and perspectives can lead to conflicts within a team. 
            Addressing conflicts promptly and constructively can turn them into opportunities for growth 
            and understanding.

            c) Groupthink: Team dynamics sometimes create an environment where dissenting voices are 
            suppressed, leading to groupthink. Encouraging diverse viewpoints and constructive criticism is 
            essential to avoid this pitfall.

            d) Role Clarity: Unclear roles and responsibilities may result in overlapping or neglected tasks. 
            Clearly defining individual roles and expectations ensures smooth workflow and accountability.

            <br/>
            
            4. Strategies for Effective Teamwork

            a) Building Trust: Trust is the foundation of effective teamwork. Team members must be transparent, 
            reliable, and supportive of each other to foster trust within the group.

            b) Encouraging Diversity: Embracing diversity in backgrounds, experiences, and perspectives 
            enriches team discussions and enhances problem-solving capabilities.

            c) Clear Communication: Regular meetings, status updates, and feedback sessions ensure that 
            all team members are well-informed and aligned with the project's progress.

            d) Collaboration Tools: Utilizing collaboration tools and technology can streamline communication 
            and document sharing, improving overall team efficiency.

            e) Celebrating Achievements: Recognizing and celebrating team accomplishments bolsters team 
            morale and reinforces the value of collective efforts.

            <br/>

            Conclusion

            Teamwork is an indispensable force that propels individuals and organizations towards success. 
            By embracing collaboration, we tap into a reservoir of creativity, problem-solving skills, and 
            support that leads to remarkable achievements. However, effective teamwork requires effort, 
            communication, and trust-building. By navigating through challenges and capitalizing on 
            diverse talents, teams can rise above the ordinary and accomplish the extraordinary. 
            As the saying goes, "Alone we can do so little; together, we can do so much."

            <br/>

            Title: The Power of Teamwork: Achieving Success Together

            Introduction

            Teamwork is a fundamental aspect of human interaction, transcending boundaries, cultures, 
            and professions. It embodies the idea that collective efforts lead to greater accomplishments 
            than individual endeavors. In both professional and personal settings, teamwork plays a pivotal 
            role in fostering innovation, problem-solving, and harmonious relationships. This essay delves 
            into the significance of teamwork, exploring its benefits, challenges, and the strategies to 
            enhance collaboration within teams.

            <br/>

            1. The Foundation of Success

            At the heart of successful teamwork lies effective communication, trust, and shared goals. 
            A team composed of individuals with diverse skills and perspectives can harness their collective 
            strengths to accomplish tasks more efficiently and creatively. Whether in sports, business, or 
            creative pursuits, teamwork cultivates a positive environment, where individuals can leverage 
            their expertise to complement each other.

            <br/>

            2. Benefits of Teamwork

            a) Increased Productivity: In a well-coordinated team, tasks are distributed according to each 
            member's strengths, optimizing productivity and efficiency. Shared responsibilities foster 
            accountability and reduce the burden on individuals.

            b) Enhanced Creativity: Team members bring unique ideas and insights to the table, resulting 
            in a synergy that sparks creativity and innovation. Brainstorming sessions encourage out-of-the-box 
            thinking and lead to groundbreaking solutions.

            c) Improved Decision-Making: Teams can analyze situations from multiple angles, leading to 
            more informed and well-rounded decisions. Diversity within the team ensures comprehensive 
            evaluations of potential risks and benefits.

            d) Motivation and Support: Working together toward common goals fosters a sense of belonging and 
            motivation. Team members provide encouragement and support during challenging times, boosting 
            morale and resilience.

            <br/>

            3. Overcoming Challenges in Teamwork

            a) Communication Breakdown: Miscommunication or lack of effective communication can hinder 
            progress and lead to misunderstandings. Teams must foster an open and transparent communication 
            culture to overcome this challenge.

            b) Conflict Resolution: Differing opinions and perspectives can lead to conflicts within a team. 
            Addressing conflicts promptly and constructively can turn them into opportunities for growth 
            and understanding.

            c) Groupthink: Team dynamics sometimes create an environment where dissenting voices are 
            suppressed, leading to groupthink. Encouraging diverse viewpoints and constructive criticism is 
            essential to avoid this pitfall.

            d) Role Clarity: Unclear roles and responsibilities may result in overlapping or neglected tasks. 
            Clearly defining individual roles and expectations ensures smooth workflow and accountability.

            <br/>
            
            4. Strategies for Effective Teamwork

            a) Building Trust: Trust is the foundation of effective teamwork. Team members must be transparent, 
            reliable, and supportive of each other to foster trust within the group.

            b) Encouraging Diversity: Embracing diversity in backgrounds, experiences, and perspectives 
            enriches team discussions and enhances problem-solving capabilities.

            c) Clear Communication: Regular meetings, status updates, and feedback sessions ensure that 
            all team members are well-informed and aligned with the project's progress.

            d) Collaboration Tools: Utilizing collaboration tools and technology can streamline communication 
            and document sharing, improving overall team efficiency.

            e) Celebrating Achievements: Recognizing and celebrating team accomplishments bolsters team 
            morale and reinforces the value of collective efforts.

            <br/>

            Conclusion

            Teamwork is an indispensable force that propels individuals and organizations towards success. 
            By embracing collaboration, we tap into a reservoir of creativity, problem-solving skills, and 
            support that leads to remarkable achievements. However, effective teamwork requires effort, 
            communication, and trust-building. By navigating through challenges and capitalizing on 
            diverse talents, teams can rise above the ordinary and accomplish the extraordinary. 
            As the saying goes, "Alone we can do so little; together, we can do so much."
        </p>
      </div>
      <footer className='bg-gray-300 p-10 text-center text-gray-700 font-sans'>
        Footer Content
      </footer>
    </div>
  );
};

export default Home;