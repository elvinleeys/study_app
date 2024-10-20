import React, { useState } from 'react';
import { Container } from './HomeStyle.styles';
import Followers from '../../components/Followers/Followers';
import Following from '../../components/Following/Following';
import Posts from '../../components/Posts/Posts';
import { tabDataProps } from '../../types/tab';

const Home = () => {
    const tabData: tabDataProps[] = [
        {id: 1, name: 'Followers', content: <Followers/>},
        {id: 2, name: 'Following', content: <Following/>},
        {id: 3, name: 'Posts', content: <Posts/>}
    ];

    const [activeTab, setActiveTab] = useState<number>(tabData[2].id);

    const tabClickHandler = (tabId: number): void => {
        setActiveTab(tabId);
        // console.log(`${tabId}번 탭이 클릭됨`);
    };

    return (
        <Container>
            <div className="post_wrapper">
                <div className='menuWrapper'>
                    <ul className='tabWrapper'>
                        {tabData.map((tab) => {
                            return (
                                <li
                                    key={tab.id}
                                    className={ tab.id === activeTab ? "activeTab" : "tab"}
                                    onClick={() => {
                                        tabClickHandler(tab.id);
                                    }}
                                >
                                    {tab.name}
                                </li>
                            );
                        })}
                    </ul>
                    <button>+ Post</button>
                </div>
                <div className="content_list">
                    {tabData[activeTab - 1].content}
                </div>
            </div>
            <div className="userFriendOnlineWrapper"></div>
        </Container>
    );
};

export default Home;